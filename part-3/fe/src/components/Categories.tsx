import { useState } from "react";
import { ModalDialog } from "./ModalDialog";
import {
  useGetCategoriesQuery,
  CategoryPatch,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  GetCategoriesDocument
} from "../generated/graphql";
import { NotFoundError } from "../NotFoundError";

const entityName = "Category";

interface Entity extends CategoryPatch {
  nodeId?: string;
}

export const Categories = (props: {}) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [entity, setEntity] = useState<Entity | undefined>(undefined);

  const { loading, error, data } = useGetCategoriesQuery();

  const [addEntity, { error: errorAdding }] = useAddCategoryMutation({
    refetchQueries: [{ query: GetCategoriesDocument }]
  });
  const [deleteEntity, { error: errorDeleting }] = useDeleteCategoryMutation({
    refetchQueries: [{ query: GetCategoriesDocument }]
  });
  const [updateEntity, { error: errorUpdating }] = useUpdateCategoryMutation({
    refetchQueries: [{ query: GetCategoriesDocument }]
  });

  // Boilerplate code for handling loading & error states
  if (loading) return <span>Loading...</span>;
  if (error || errorAdding || errorDeleting || errorUpdating) {
    throw new NotFoundError();
  }

  if (!data?.allCategories) return <span>No records found.</span>;

  const handleSave = () => {
    setDisplayModal(false);
    // Verifies if it's an update operation or ir it should create a new entity
    // based on having an existing nodeId
    if (entity?.nodeId) {
      updateEntity({
        variables: {
          nodeId: entity.nodeId,
          description: entity.description!
        }
      });
    } else {
      addEntity({ variables: { description: entity?.description! } });
    }
  };

  // Renders the existing entity data into a simple table
  const renderData = () => {
    return data.allCategories!.nodes.map((entity) => {
      if (!entity) return null;
      const { nodeId, id, description } = entity;
      return (
        <tr key={id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{id}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              className="text-indigo-600 hover:text-indigo-900 pr-2"
              onClick={() => {
                setEntity(entity!);
                setDisplayModal(true);
              }}>
              Edit
            </button>
            <button
              className="text-indigo-600 hover:text-indigo-900"
              onClick={() => deleteEntity({ variables: { nodeId } })}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      {displayModal && (
        <ModalDialog
          title={`New ${entityName}`}
          onClose={() => setDisplayModal(false)}
          onSave={handleSave}
          enableSave={!!entity?.description}
          content={<EntityDetails entity={entity} setEntity={setEntity} />}
        />
      )}
      <div className="flex flex-col">
        <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setEntity(undefined);
              setDisplayModal(true);
            }}>
            New
          </button>
        </div>
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {renderData()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

// Component that implements a visual representation of the entity details,
// to be utilized inside of the ModalDialog instance.
const EntityDetails = (props: {
  entity: Entity | undefined;
  setEntity: React.Dispatch<React.SetStateAction<Entity | undefined>>;
}) => {
  const { entity, setEntity } = props;
  return (
    <>
      <div className="grid col-span-1 m-2 ">
        <label
          htmlFor="description"
          className="form-label inline-block mb-2 ml-1">
          Description
        </label>
        <input
          type="text"
          onChange={(e) =>
            setEntity({ ...entity, description: e.target.value })
          }
          value={entity?.description || ""}
          className="form-control block w-full rounded-lg mb-5"
          id="description"
        />
      </div>
    </>
  );
};

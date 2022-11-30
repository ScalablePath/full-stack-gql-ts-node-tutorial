import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { ModalDialog } from "./ModalDialog";

const GET_ALL = gql`
  query GetSubcategories {
    allSubcategories {
      nodes {
        nodeId
        id
        description
        categoryId
        categoryByCategoryId {
          description
        }
      }
    }
  }
`;

const ADD_ENTITY = gql`
  mutation AddSubcategory($description: String!, $categoryId: Int!) {
    createSubcategory(
      input: {
        subcategory: { description: $description, categoryId: $categoryId }
      }
    ) {
      subcategory {
        nodeId
      }
    }
  }
`;

const DELETE_ENTITY = gql`
  mutation DeleteSubcategory($nodeId: ID!) {
    deleteSubcategory(input: { nodeId: $nodeId }) {
      deletedSubcategoryId
    }
  }
`;

const UPDATE_ENTITY = gql`
  mutation UpdateSubcategory(
    $nodeId: ID!
    $description: String!
    $categoryId: Int!
  ) {
    updateSubcategory(
      input: {
        nodeId: $nodeId
        subcategoryPatch: { description: $description, categoryId: $categoryId }
      }
    ) {
      subcategory {
        nodeId
      }
    }
  }
`;

const GET_CATEGORIES = gql`
  query GetCategories {
    allCategories {
      nodes {
        nodeId
        id
        description
      }
    }
  }
`;

interface AllEntity {
  allSubcategories: { nodes: Entity[] };
}

interface Entity {
  nodeId?: string;
  id?: number;
  description?: string;
  categoryId?: number;
  categoryByCategoryId?: { description?: string };
}

const entityName = "Subcategory";

export const Subcategories = (props: {}) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [entity, setEntity] = useState<Entity | undefined>(undefined);
  const { loading, error, data } = useQuery<AllEntity>(GET_ALL);

  const [addEntity, { error: errorAdding }] = useMutation(ADD_ENTITY, {
    refetchQueries: [{ query: GET_ALL }]
  });
  const [deleteEntity, { error: errorDeleting }] = useMutation(DELETE_ENTITY, {
    refetchQueries: [{ query: GET_ALL }]
  });
  const [updateEntity, { error: errorUpdating }] = useMutation(UPDATE_ENTITY, {
    refetchQueries: [{ query: GET_ALL }]
  });

  if (loading) return <span>Loading...</span>;
  if (error || errorAdding || errorDeleting || errorUpdating) {
    const message =
      error?.message ||
      errorAdding?.message ||
      errorDeleting?.message ||
      errorUpdating?.message;
    return <span>{`Error: ${message}`}</span>;
  }
  if (!data) return <span>No records found.</span>;

  const handleSave = () => {
    setDisplayModal(false);
    if (entity?.nodeId) {
      updateEntity({
        variables: {
          nodeId: entity.nodeId,
          description: entity.description,
          categoryId: entity.categoryId
        }
      });
    } else {
      addEntity({
        variables: {
          description: entity?.description,
          categoryId: entity?.categoryId
        }
      });
    }
  };

  const renderData = () => {
    return data.allSubcategories.nodes.map((entity: Entity) => {
      const { nodeId, id, description, categoryByCategoryId } = entity;
      return (
        <tr key={id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{id}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {categoryByCategoryId?.description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              className="text-indigo-600 hover:text-indigo-900 pr-2"
              onClick={() => {
                setEntity(entity);
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
          enableSave={
            !!entity?.description &&
            !!entity?.categoryId &&
            entity.categoryId > 0
          }
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
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
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

const EntityDetails = (props: {
  entity: Entity | undefined;
  setEntity: React.Dispatch<React.SetStateAction<Entity | undefined>>;
}) => {
  const { entity, setEntity } = props;
  const {
    loading: loadingCategories,
    error: errorCategories,
    data: categories
  } = useQuery<{
    allCategories: { nodes: { id: number; description: string }[] };
  }>(GET_CATEGORIES);

  if (loadingCategories) return <span>Loading...</span>;
  if (errorCategories) {
    const message = errorCategories?.message;
    return <span>{`Error: ${message}`}</span>;
  }
  if (!categories || !categories?.allCategories?.nodes?.length)
    return <p>No category options to be selected yet.</p>;

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
        <label
          htmlFor="categories"
          className="form-label inline-block mb-2 ml-1">
          Category
        </label>
        <select
          id="categories"
          className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          onChange={(e) =>
            setEntity({ ...entity, categoryId: parseInt(e.target.value, 10) })
          }
          value={entity?.categoryId}>
          {[
            <option key={-1} value={undefined}>
              Select an option
            </option>
          ].concat(
            categories.allCategories.nodes.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.description}
                </option>
              );
            })
          )}
        </select>
      </div>
    </>
  );
};

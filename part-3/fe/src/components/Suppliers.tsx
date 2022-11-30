import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { ModalDialog } from "./ModalDialog";

const GET_ALL = gql`
  query GetSuppliers {
    allSuppliers {
      nodes {
        nodeId
        id
        name
        address
      }
    }
  }
`;

const ADD_ENTITY = gql`
  mutation AddSupplier($name: String!, $address: String!) {
    createSupplier(input: { supplier: { name: $name, address: $address } }) {
      supplier {
        nodeId
      }
    }
  }
`;

const DELETE_ENTITY = gql`
  mutation DeleteSupplier($nodeId: ID!) {
    deleteSupplier(input: { nodeId: $nodeId }) {
      deletedSupplierId
    }
  }
`;

const UPDATE_ENTITY = gql`
  mutation UpdateSupplier($nodeId: ID!, $name: String!, $address: String!) {
    updateSupplier(
      input: {
        nodeId: $nodeId
        supplierPatch: { name: $name, address: $address }
      }
    ) {
      supplier {
        nodeId
      }
    }
  }
`;

interface AllEntity {
  allSuppliers: { nodes: Entity[] };
}

interface Entity {
  nodeId?: string;
  id?: number;
  name?: string;
  address?: string;
}

const entityName = "Supplier";

export const Suppliers = (props: {}) => {
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
          name: entity.name,
          address: entity.address
        }
      });
    } else {
      addEntity({
        variables: { name: entity?.name, address: entity?.address }
      });
    }
  };

  const renderData = () => {
    return data.allSuppliers.nodes.map((entity: Entity) => {
      const { nodeId, id, name, address } = entity;
      return (
        <tr key={id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{id}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {address}
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
          enableSave={!!entity?.name && !!entity?.address}
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
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
  return (
    <>
      <div className="grid col-span-1 m-2 ">
        <label htmlFor="name" className="form-label inline-block mb-2 ml-1">
          Name
        </label>
        <input
          type="text"
          onChange={(e) => setEntity({ ...entity, name: e.target.value })}
          value={entity?.name || ""}
          className="form-control block w-full rounded-lg mb-5"
          id="name"
        />
      </div>
      <div className="grid col-span-1 m-2 ">
        <label htmlFor="address" className="form-label inline-block mb-2 ml-1">
          Address
        </label>
        <input
          type="text"
          onChange={(e) => setEntity({ ...entity, address: e.target.value })}
          value={entity?.address || ""}
          className="form-control block w-full rounded-lg mb-5"
          id="address"
        />
      </div>
    </>
  );
};

import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { ModalDialog } from "./ModalDialog";

const GET_ALL = gql`
  query GetSupplierProducts {
    allSupplierProducts {
      nodes {
        nodeId
        supplierSku
        productId
        supplierId
        productByProductId {
          description
        }
        supplierBySupplierId {
          name
        }
      }
    }
  }
`;

const ADD_ENTITY = gql`
  mutation AddSupplierProduct(
    $supplierSku: String!
    $productId: Int!
    $supplierId: Int!
  ) {
    createSupplierProduct(
      input: {
        supplierProduct: {
          supplierSku: $supplierSku
          productId: $productId
          supplierId: $supplierId
        }
      }
    ) {
      supplierProduct {
        nodeId
      }
    }
  }
`;

const DELETE_ENTITY = gql`
  mutation DeleteSupplierProduct($nodeId: ID!) {
    deleteSupplierProduct(input: { nodeId: $nodeId }) {
      deletedSupplierProductId
    }
  }
`;

const UPDATE_ENTITY = gql`
  mutation UpdateSupplierProduct(
    $nodeId: ID!
    $supplierSku: String!
    $productId: Int!
    $supplierId: Int!
  ) {
    updateSupplierProduct(
      input: {
        nodeId: $nodeId
        supplierProductPatch: {
          supplierSku: $supplierSku
          productId: $productId
          supplierId: $supplierId
        }
      }
    ) {
      supplierProduct {
        nodeId
      }
    }
  }
`;

const GET_SUPPLIERS = gql`
  query GetSuppliers {
    allSuppliers {
      nodes {
        nodeId
        id
        name
      }
    }
  }
`;

const GET_PRODUCTS = gql`
  query GetProducts {
    allProducts {
      nodes {
        nodeId
        id
        description
      }
    }
  }
`;

interface AllEntity {
  allSupplierProducts: { nodes: Entity[] };
}

interface Entity {
  nodeId?: string;
  supplierSku?: string;
  productId?: number;
  supplierId?: number;
  productByProductId?: { description?: string };
  supplierBySupplierId?: { name?: string };
}

const entityName = "Supplier Products";

export const SupplierProducts = (props: {}) => {
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
          supplierSku: entity.supplierSku,
          productId: entity.productId,
          supplierId: entity.supplierId
        }
      });
    } else {
      addEntity({
        variables: {
          supplierSku: entity?.supplierSku,
          productId: entity?.productId,
          supplierId: entity?.supplierId
        }
      });
    }
  };

  const renderData = () => {
    return data.allSupplierProducts.nodes.map((entity: Entity) => {
      const { nodeId, supplierSku, supplierBySupplierId, productByProductId } =
        entity;
      return (
        <tr key={nodeId}>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {supplierSku}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {supplierBySupplierId?.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {productByProductId?.description}
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
            !!entity?.supplierSku &&
            !!entity?.supplierId &&
            entity.supplierId > 0 &&
            !!entity?.productId &&
            entity.productId > 0
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
                    Supplier SKU
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Supplier
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
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
    loading: loadingSuppliers,
    error: errorSuppliers,
    data: suppliers
  } = useQuery<{
    allSuppliers: { nodes: { id: number; name: string }[] };
  }>(GET_SUPPLIERS);
  const {
    loading: loadingProducts,
    error: errorProducts,
    data: products
  } = useQuery<{
    allProducts: { nodes: { id: number; description: string }[] };
  }>(GET_PRODUCTS);

  if (loadingSuppliers || loadingProducts) return <span>Loading...</span>;
  if (errorSuppliers || errorProducts) {
    const message = errorSuppliers?.message || errorProducts?.message;
    return <span>{`Error: ${message}`}</span>;
  }
  if (!suppliers || !suppliers?.allSuppliers?.nodes?.length)
    return <p>No supplier options to be selected yet.</p>;
  if (!products || !products?.allProducts?.nodes?.length)
    return <p>No product options to be selected yet.</p>;

  return (
    <>
      <div className="grid col-span-1 m-2 ">
        <label
          htmlFor="supplierSku"
          className="form-label inline-block mb-2 ml-1">
          Supplier SKU
        </label>
        <input
          type="text"
          onChange={(e) =>
            setEntity({ ...entity, supplierSku: e.target.value })
          }
          value={entity?.supplierSku || ""}
          className="form-control block w-full rounded-lg mb-5"
          id="supplierSku"
        />
        <label
          htmlFor="suppliers"
          className="form-label inline-block mb-2 ml-1">
          Supplier
        </label>
        <select
          id="suppliers"
          className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          onChange={(e) =>
            setEntity({ ...entity, supplierId: parseInt(e.target.value, 10) })
          }
          value={entity?.supplierId}>
          {[
            <option key={-1} value={undefined}>
              Select an option
            </option>
          ].concat(
            suppliers.allSuppliers.nodes.map((supplier) => {
              return (
                <option key={supplier.id} value={supplier.id}>
                  {supplier.name}
                </option>
              );
            })
          )}
        </select>
        <label htmlFor="products" className="form-label inline-block mb-2 ml-1">
          Product
        </label>
        <select
          id="products"
          className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          onChange={(e) =>
            setEntity({ ...entity, productId: parseInt(e.target.value, 10) })
          }
          value={entity?.productId}>
          {[
            <option key={-1} value={undefined}>
              Select an option
            </option>
          ].concat(
            products.allProducts.nodes.map((product) => {
              return (
                <option key={product.id} value={product.id}>
                  {product.description}
                </option>
              );
            })
          )}
        </select>
      </div>
    </>
  );
};

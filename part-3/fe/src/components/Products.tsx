import { useEffect, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { ModalDialog } from "./ModalDialog";

const GET_ALL = gql`
  query GetProducts {
    allProducts {
      nodes {
        nodeId
        id
        sku
        description
        categoryId
        subcategoryId
        uomId
        categoryByCategoryId {
          description
        }
        subcategoryBySubcategoryId {
          description
        }
        uomByUomId {
          abbrev
        }
      }
    }
  }
`;

const ADD_ENTITY = gql`
  mutation AddProduct(
    $sku: String!
    $description: String!
    $categoryId: Int!
    $subcategoryId: Int
    $uomId: Int!
  ) {
    createProduct(
      input: {
        product: {
          sku: $sku
          description: $description
          categoryId: $categoryId
          subcategoryId: $subcategoryId
          uomId: $uomId
        }
      }
    ) {
      product {
        nodeId
      }
    }
  }
`;

const DELETE_ENTITY = gql`
  mutation DeleteProduct($nodeId: ID!) {
    deleteProduct(input: { nodeId: $nodeId }) {
      deletedProductId
    }
  }
`;

const UPDATE_ENTITY = gql`
  mutation UpdateProduct(
    $nodeId: ID!
    $sku: String!
    $description: String!
    $categoryId: Int!
    $subcategoryId: Int
    $uomId: Int!
  ) {
    updateProduct(
      input: {
        nodeId: $nodeId
        productPatch: {
          sku: $sku
          description: $description
          categoryId: $categoryId
          subcategoryId: $subcategoryId
          uomId: $uomId
        }
      }
    ) {
      product {
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

const GET_SUBCATEGORIES = gql`
  query GetSubcategories {
    allSubcategories {
      nodes {
        nodeId
        id
        description
        categoryId
      }
    }
  }
`;

const GET_UOMS = gql`
  query GetUoms {
    allUoms {
      nodes {
        nodeId
        id
        abbrev
      }
    }
  }
`;

interface AllEntity {
  allProducts: { nodes: Entity[] };
}

interface Entity {
  nodeId?: string;
  id?: number;
  sku?: string;
  description?: string;
  categoryId?: number;
  subcategoryId?: number;
  uomId?: number;
  categoryByCategoryId?: { description?: string };
  subcategoryBySubcategoryId?: { description?: string };
  uomByUomId?: { abbrev?: string };
}

const entityName = "Products";

export const Products = (props: {}) => {
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
          sku: entity.sku,
          description: entity.description,
          categoryId: entity.categoryId,
          subcategoryId: entity.subcategoryId,
          uomId: entity.uomId
        }
      });
    } else {
      addEntity({
        variables: {
          sku: entity?.sku,
          description: entity?.description,
          categoryId: entity?.categoryId,
          subcategoryId: entity?.subcategoryId,
          uomId: entity?.uomId
        }
      });
    }
  };

  const renderData = () => {
    return data.allProducts.nodes.map((entity: Entity) => {
      const {
        nodeId,
        id,
        sku,
        description,
        categoryByCategoryId,
        subcategoryBySubcategoryId,
        uomByUomId
      } = entity;
      return (
        <tr key={id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{id}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {sku}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {categoryByCategoryId?.description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {subcategoryBySubcategoryId?.description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {uomByUomId?.abbrev}
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
            !!entity?.sku &&
            !!entity?.description &&
            !!entity?.categoryId &&
            entity.categoryId > 0 &&
            !!entity?.uomId &&
            entity.uomId > 0
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
                    SKU
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
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subcategory
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    UOM
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

interface Subcategory {
  id: number;
  description: string;
  categoryId: number;
}

const EntityDetails = (props: {
  entity: Entity | undefined;
  setEntity: React.Dispatch<React.SetStateAction<Entity | undefined>>;
}) => {
  const { entity, setEntity } = props;
  const [filteredSubcategories, setFilteredSubcategories] = useState<{
    nodes: Subcategory[];
  }>({ nodes: [] });
  const {
    loading: loadingCategories,
    error: errorCategories,
    data: categories
  } = useQuery<{
    allCategories: { nodes: { id: number; description: string }[] };
  }>(GET_CATEGORIES);
  const {
    loading: loadingSubcategories,
    error: errorSubcategories,
    data: subcategories
  } = useQuery<{
    allSubcategories: { nodes: Subcategory[] };
  }>(GET_SUBCATEGORIES);
  const {
    loading: loadingUoms,
    error: errorUoms,
    data: uoms
  } = useQuery<{
    allUoms: { nodes: { id: number; abbrev: string }[] };
  }>(GET_UOMS);

  useEffect(() => {
    // Filters subcategories associated to the selected categoryId
    const nodes = subcategories?.allSubcategories?.nodes ?? [];
    setFilteredSubcategories({
      nodes: nodes.filter((node) => node.categoryId === entity?.categoryId)
    });
  }, [subcategories, entity?.categoryId]);

  if (loadingCategories || loadingSubcategories || loadingUoms)
    return <span>Loading...</span>;
  if (errorCategories || errorSubcategories || errorUoms) {
    const message =
      errorCategories?.message ||
      errorSubcategories?.message ||
      errorUoms?.message;
    return <span>{`Error: ${message}`}</span>;
  }
  if (!categories || !categories?.allCategories?.nodes?.length)
    return <p>No category options to be selected yet.</p>;
  if (!uoms || !uoms?.allUoms?.nodes?.length)
    return <p>No UOM options to be selected yet.</p>;

  return (
    <>
      <div className="grid col-span-1 m-2 ">
        <label htmlFor="sku" className="form-label inline-block mb-2 ml-1">
          SKU
        </label>
        <input
          type="text"
          onChange={(e) => setEntity({ ...entity, sku: e.target.value })}
          value={entity?.sku || ""}
          className="form-control block w-full rounded-lg mb-5"
          id="sku"
        />
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
            setEntity({
              ...entity,
              categoryId: parseInt(e.target.value, 10),
              subcategoryId: undefined
            })
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
        <label
          htmlFor="subcategories"
          className="form-label inline-block mb-2 ml-1">
          Subcategory
        </label>
        <select
          id="subcategories"
          className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          onChange={(e) =>
            setEntity({
              ...entity,
              subcategoryId: parseInt(e.target.value, 10)
            })
          }
          value={entity?.subcategoryId}>
          {[
            <option key={-1} value={undefined}>
              Select an option
            </option>
          ].concat(
            filteredSubcategories.nodes.map((subcategory) => {
              return (
                <option key={subcategory.id} value={subcategory.id}>
                  {subcategory.description}
                </option>
              );
            }) || []
          )}
        </select>
        <label htmlFor="uoms" className="form-label inline-block mb-2 ml-1">
          UOM
        </label>
        <select
          id="uoms"
          className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
          onChange={(e) =>
            setEntity({ ...entity, uomId: parseInt(e.target.value, 10) })
          }
          value={entity?.uomId}>
          {[
            <option key={-1} value={undefined}>
              Select an option
            </option>
          ].concat(
            uoms.allUoms.nodes.map((uom) => {
              return (
                <option key={uom.id} value={uom.id}>
                  {uom.abbrev}
                </option>
              );
            })
          )}
        </select>
      </div>
    </>
  );
};

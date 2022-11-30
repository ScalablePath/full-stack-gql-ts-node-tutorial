import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
  Datetime: any;
};

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** A list of `Category` objects. */
  nodes: Array<Maybe<Category>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Category` at the end of the edge. */
  node?: Maybe<Category>;
};

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Category = Node & {
  description: Scalars['String'];
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Product`. */
  productsByCategoryId: ProductsConnection;
  /** Reads and enables pagination through a set of `Subcategory`. */
  subcategoriesByCategoryId: SubcategoriesConnection;
};


export type CategoryProductsByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ProductCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


export type CategorySubcategoriesByCategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SubcategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the create `InventoryTransaction` mutation. */
export type CreateInventoryTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `InventoryTransaction` to be created by this mutation. */
  inventoryTransaction: InventoryTransactionInput;
};

/** The output of our create `InventoryTransaction` mutation. */
export type CreateInventoryTransactionPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `InventoryTransaction` that was created by this mutation. */
  inventoryTransaction?: Maybe<InventoryTransaction>;
  /** An edge for our `InventoryTransaction`. May be used by Relay 1. */
  inventoryTransactionEdge?: Maybe<InventoryTransactionsEdge>;
  /** Reads a single `Product` that is related to this `InventoryTransaction`. */
  productByProductId?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Warehouse` that is related to this `InventoryTransaction`. */
  warehouseByWarehouseId?: Maybe<Warehouse>;
};


/** The output of our create `InventoryTransaction` mutation. */
export type CreateInventoryTransactionPayloadInventoryTransactionEdgeArgs = {
  orderBy?: InputMaybe<Array<InventoryTransactionsOrderBy>>;
};

/** All input for the create `Product` mutation. */
export type CreateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Product` to be created by this mutation. */
  product: ProductInput;
};

/** The output of our create `Product` mutation. */
export type CreateProductPayload = {
  /** Reads a single `Category` that is related to this `Product`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was created by this mutation. */
  product?: Maybe<Product>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Subcategory` that is related to this `Product`. */
  subcategoryBySubcategoryId?: Maybe<Subcategory>;
  /** Reads a single `Uom` that is related to this `Product`. */
  uomByUomId?: Maybe<Uom>;
};


/** The output of our create `Product` mutation. */
export type CreateProductPayloadProductEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** All input for the create `Subcategory` mutation. */
export type CreateSubcategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Subcategory` to be created by this mutation. */
  subcategory: SubcategoryInput;
};

/** The output of our create `Subcategory` mutation. */
export type CreateSubcategoryPayload = {
  /** Reads a single `Category` that is related to this `Subcategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Subcategory` that was created by this mutation. */
  subcategory?: Maybe<Subcategory>;
  /** An edge for our `Subcategory`. May be used by Relay 1. */
  subcategoryEdge?: Maybe<SubcategoriesEdge>;
};


/** The output of our create `Subcategory` mutation. */
export type CreateSubcategoryPayloadSubcategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
};

/** All input for the create `Supplier` mutation. */
export type CreateSupplierInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Supplier` to be created by this mutation. */
  supplier: SupplierInput;
};

/** The output of our create `Supplier` mutation. */
export type CreateSupplierPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Supplier` that was created by this mutation. */
  supplier?: Maybe<Supplier>;
  /** An edge for our `Supplier`. May be used by Relay 1. */
  supplierEdge?: Maybe<SuppliersEdge>;
};


/** The output of our create `Supplier` mutation. */
export type CreateSupplierPayloadSupplierEdgeArgs = {
  orderBy?: InputMaybe<Array<SuppliersOrderBy>>;
};

/** All input for the create `SupplierProduct` mutation. */
export type CreateSupplierProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `SupplierProduct` to be created by this mutation. */
  supplierProduct: SupplierProductInput;
};

/** The output of our create `SupplierProduct` mutation. */
export type CreateSupplierProductPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Product` that is related to this `SupplierProduct`. */
  productByProductId?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Supplier` that is related to this `SupplierProduct`. */
  supplierBySupplierId?: Maybe<Supplier>;
  /** The `SupplierProduct` that was created by this mutation. */
  supplierProduct?: Maybe<SupplierProduct>;
  /** An edge for our `SupplierProduct`. May be used by Relay 1. */
  supplierProductEdge?: Maybe<SupplierProductsEdge>;
};


/** The output of our create `SupplierProduct` mutation. */
export type CreateSupplierProductPayloadSupplierProductEdgeArgs = {
  orderBy?: InputMaybe<Array<SupplierProductsOrderBy>>;
};

/** All input for the create `TypeormMetadatum` mutation. */
export type CreateTypeormMetadatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `TypeormMetadatum` to be created by this mutation. */
  typeormMetadatum: TypeormMetadatumInput;
};

/** The output of our create `TypeormMetadatum` mutation. */
export type CreateTypeormMetadatumPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TypeormMetadatum` that was created by this mutation. */
  typeormMetadatum?: Maybe<TypeormMetadatum>;
  /** An edge for our `TypeormMetadatum`. May be used by Relay 1. */
  typeormMetadatumEdge?: Maybe<TypeormMetadataEdge>;
};


/** The output of our create `TypeormMetadatum` mutation. */
export type CreateTypeormMetadatumPayloadTypeormMetadatumEdgeArgs = {
  orderBy?: InputMaybe<Array<TypeormMetadataOrderBy>>;
};

/** All input for the create `Uom` mutation. */
export type CreateUomInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Uom` to be created by this mutation. */
  uom: UomInput;
};

/** The output of our create `Uom` mutation. */
export type CreateUomPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Uom` that was created by this mutation. */
  uom?: Maybe<Uom>;
  /** An edge for our `Uom`. May be used by Relay 1. */
  uomEdge?: Maybe<UomsEdge>;
};


/** The output of our create `Uom` mutation. */
export type CreateUomPayloadUomEdgeArgs = {
  orderBy?: InputMaybe<Array<UomsOrderBy>>;
};

/** All input for the create `Warehouse` mutation. */
export type CreateWarehouseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Warehouse` to be created by this mutation. */
  warehouse: WarehouseInput;
};

/** The output of our create `Warehouse` mutation. */
export type CreateWarehousePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Warehouse` that was created by this mutation. */
  warehouse?: Maybe<Warehouse>;
  /** An edge for our `Warehouse`. May be used by Relay 1. */
  warehouseEdge?: Maybe<WarehousesEdge>;
};


/** The output of our create `Warehouse` mutation. */
export type CreateWarehousePayloadWarehouseEdgeArgs = {
  orderBy?: InputMaybe<Array<WarehousesOrderBy>>;
};

/** All input for the create `WarehouseStock` mutation. */
export type CreateWarehouseStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `WarehouseStock` to be created by this mutation. */
  warehouseStock: WarehouseStockInput;
};

/** The output of our create `WarehouseStock` mutation. */
export type CreateWarehouseStockPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Product` that is related to this `WarehouseStock`. */
  productByProductId?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Warehouse` that is related to this `WarehouseStock`. */
  warehouseByWarehouseId?: Maybe<Warehouse>;
  /** The `WarehouseStock` that was created by this mutation. */
  warehouseStock?: Maybe<WarehouseStock>;
  /** An edge for our `WarehouseStock`. May be used by Relay 1. */
  warehouseStockEdge?: Maybe<WarehouseStocksEdge>;
};


/** The output of our create `WarehouseStock` mutation. */
export type CreateWarehouseStockPayloadWarehouseStockEdgeArgs = {
  orderBy?: InputMaybe<Array<WarehouseStocksOrderBy>>;
};

/** All input for the `deleteCategoryById` mutation. */
export type DeleteCategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedCategoryId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `deleteInventoryTransactionById` mutation. */
export type DeleteInventoryTransactionByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteInventoryTransaction` mutation. */
export type DeleteInventoryTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `InventoryTransaction` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `InventoryTransaction` mutation. */
export type DeleteInventoryTransactionPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedInventoryTransactionId?: Maybe<Scalars['ID']>;
  /** The `InventoryTransaction` that was deleted by this mutation. */
  inventoryTransaction?: Maybe<InventoryTransaction>;
  /** An edge for our `InventoryTransaction`. May be used by Relay 1. */
  inventoryTransactionEdge?: Maybe<InventoryTransactionsEdge>;
  /** Reads a single `Product` that is related to this `InventoryTransaction`. */
  productByProductId?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Warehouse` that is related to this `InventoryTransaction`. */
  warehouseByWarehouseId?: Maybe<Warehouse>;
};


/** The output of our delete `InventoryTransaction` mutation. */
export type DeleteInventoryTransactionPayloadInventoryTransactionEdgeArgs = {
  orderBy?: InputMaybe<Array<InventoryTransactionsOrderBy>>;
};

/** All input for the `deleteProductById` mutation. */
export type DeleteProductByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteProduct` mutation. */
export type DeleteProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Product` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Product` mutation. */
export type DeleteProductPayload = {
  /** Reads a single `Category` that is related to this `Product`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedProductId?: Maybe<Scalars['ID']>;
  /** The `Product` that was deleted by this mutation. */
  product?: Maybe<Product>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Subcategory` that is related to this `Product`. */
  subcategoryBySubcategoryId?: Maybe<Subcategory>;
  /** Reads a single `Uom` that is related to this `Product`. */
  uomByUomId?: Maybe<Uom>;
};


/** The output of our delete `Product` mutation. */
export type DeleteProductPayloadProductEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** All input for the `deleteSubcategoryById` mutation. */
export type DeleteSubcategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteSubcategory` mutation. */
export type DeleteSubcategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Subcategory` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Subcategory` mutation. */
export type DeleteSubcategoryPayload = {
  /** Reads a single `Category` that is related to this `Subcategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSubcategoryId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Subcategory` that was deleted by this mutation. */
  subcategory?: Maybe<Subcategory>;
  /** An edge for our `Subcategory`. May be used by Relay 1. */
  subcategoryEdge?: Maybe<SubcategoriesEdge>;
};


/** The output of our delete `Subcategory` mutation. */
export type DeleteSubcategoryPayloadSubcategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
};

/** All input for the `deleteSupplierById` mutation. */
export type DeleteSupplierByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteSupplier` mutation. */
export type DeleteSupplierInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Supplier` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Supplier` mutation. */
export type DeleteSupplierPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSupplierId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Supplier` that was deleted by this mutation. */
  supplier?: Maybe<Supplier>;
  /** An edge for our `Supplier`. May be used by Relay 1. */
  supplierEdge?: Maybe<SuppliersEdge>;
};


/** The output of our delete `Supplier` mutation. */
export type DeleteSupplierPayloadSupplierEdgeArgs = {
  orderBy?: InputMaybe<Array<SuppliersOrderBy>>;
};

/** All input for the `deleteSupplierProductById` mutation. */
export type DeleteSupplierProductByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteSupplierProduct` mutation. */
export type DeleteSupplierProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SupplierProduct` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `SupplierProduct` mutation. */
export type DeleteSupplierProductPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedSupplierProductId?: Maybe<Scalars['ID']>;
  /** Reads a single `Product` that is related to this `SupplierProduct`. */
  productByProductId?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Supplier` that is related to this `SupplierProduct`. */
  supplierBySupplierId?: Maybe<Supplier>;
  /** The `SupplierProduct` that was deleted by this mutation. */
  supplierProduct?: Maybe<SupplierProduct>;
  /** An edge for our `SupplierProduct`. May be used by Relay 1. */
  supplierProductEdge?: Maybe<SupplierProductsEdge>;
};


/** The output of our delete `SupplierProduct` mutation. */
export type DeleteSupplierProductPayloadSupplierProductEdgeArgs = {
  orderBy?: InputMaybe<Array<SupplierProductsOrderBy>>;
};

/** All input for the `deleteUomById` mutation. */
export type DeleteUomByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteUom` mutation. */
export type DeleteUomInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Uom` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Uom` mutation. */
export type DeleteUomPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUomId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Uom` that was deleted by this mutation. */
  uom?: Maybe<Uom>;
  /** An edge for our `Uom`. May be used by Relay 1. */
  uomEdge?: Maybe<UomsEdge>;
};


/** The output of our delete `Uom` mutation. */
export type DeleteUomPayloadUomEdgeArgs = {
  orderBy?: InputMaybe<Array<UomsOrderBy>>;
};

/** All input for the `deleteWarehouseById` mutation. */
export type DeleteWarehouseByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteWarehouse` mutation. */
export type DeleteWarehouseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Warehouse` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Warehouse` mutation. */
export type DeleteWarehousePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedWarehouseId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Warehouse` that was deleted by this mutation. */
  warehouse?: Maybe<Warehouse>;
  /** An edge for our `Warehouse`. May be used by Relay 1. */
  warehouseEdge?: Maybe<WarehousesEdge>;
};


/** The output of our delete `Warehouse` mutation. */
export type DeleteWarehousePayloadWarehouseEdgeArgs = {
  orderBy?: InputMaybe<Array<WarehousesOrderBy>>;
};

/** All input for the `deleteWarehouseStockByProductIdAndWarehouseId` mutation. */
export type DeleteWarehouseStockByProductIdAndWarehouseIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  productId: Scalars['Int'];
  warehouseId: Scalars['Int'];
};

/** All input for the `deleteWarehouseStock` mutation. */
export type DeleteWarehouseStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `WarehouseStock` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `WarehouseStock` mutation. */
export type DeleteWarehouseStockPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedWarehouseStockId?: Maybe<Scalars['ID']>;
  /** Reads a single `Product` that is related to this `WarehouseStock`. */
  productByProductId?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Warehouse` that is related to this `WarehouseStock`. */
  warehouseByWarehouseId?: Maybe<Warehouse>;
  /** The `WarehouseStock` that was deleted by this mutation. */
  warehouseStock?: Maybe<WarehouseStock>;
  /** An edge for our `WarehouseStock`. May be used by Relay 1. */
  warehouseStockEdge?: Maybe<WarehouseStocksEdge>;
};


/** The output of our delete `WarehouseStock` mutation. */
export type DeleteWarehouseStockPayloadWarehouseStockEdgeArgs = {
  orderBy?: InputMaybe<Array<WarehouseStocksOrderBy>>;
};

export type InventoryTransaction = Node & {
  date: Scalars['Datetime'];
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Product` that is related to this `InventoryTransaction`. */
  productByProductId?: Maybe<Product>;
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  type: InventoryTransactionTypeEnum;
  /** Reads a single `Warehouse` that is related to this `InventoryTransaction`. */
  warehouseByWarehouseId?: Maybe<Warehouse>;
  warehouseId: Scalars['Int'];
};

/**
 * A condition to be used against `InventoryTransaction` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type InventoryTransactionCondition = {
  /** Checks for equality with the object’s `date` field. */
  date?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `productId` field. */
  productId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `quantity` field. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<InventoryTransactionTypeEnum>;
  /** Checks for equality with the object’s `warehouseId` field. */
  warehouseId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `InventoryTransaction` */
export type InventoryTransactionInput = {
  date: Scalars['Datetime'];
  id?: InputMaybe<Scalars['Int']>;
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  type: InventoryTransactionTypeEnum;
  warehouseId: Scalars['Int'];
};

/** Represents an update to a `InventoryTransaction`. Fields that are set will be updated. */
export type InventoryTransactionPatch = {
  date?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<InventoryTransactionTypeEnum>;
  warehouseId?: InputMaybe<Scalars['Int']>;
};

export enum InventoryTransactionTypeEnum {
  Receive = 'RECEIVE',
  Withdraw = 'WITHDRAW'
}

/** A connection to a list of `InventoryTransaction` values. */
export type InventoryTransactionsConnection = {
  /** A list of edges which contains the `InventoryTransaction` and cursor to aid in pagination. */
  edges: Array<InventoryTransactionsEdge>;
  /** A list of `InventoryTransaction` objects. */
  nodes: Array<Maybe<InventoryTransaction>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `InventoryTransaction` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `InventoryTransaction` edge in the connection. */
export type InventoryTransactionsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `InventoryTransaction` at the end of the edge. */
  node?: Maybe<InventoryTransaction>;
};

/** Methods to use when ordering `InventoryTransaction`. */
export enum InventoryTransactionsOrderBy {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProductIdAsc = 'PRODUCT_ID_ASC',
  ProductIdDesc = 'PRODUCT_ID_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  WarehouseIdAsc = 'WAREHOUSE_ID_ASC',
  WarehouseIdDesc = 'WAREHOUSE_ID_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `InventoryTransaction`. */
  createInventoryTransaction?: Maybe<CreateInventoryTransactionPayload>;
  /** Creates a single `Product`. */
  createProduct?: Maybe<CreateProductPayload>;
  /** Creates a single `Subcategory`. */
  createSubcategory?: Maybe<CreateSubcategoryPayload>;
  /** Creates a single `Supplier`. */
  createSupplier?: Maybe<CreateSupplierPayload>;
  /** Creates a single `SupplierProduct`. */
  createSupplierProduct?: Maybe<CreateSupplierProductPayload>;
  /** Creates a single `TypeormMetadatum`. */
  createTypeormMetadatum?: Maybe<CreateTypeormMetadatumPayload>;
  /** Creates a single `Uom`. */
  createUom?: Maybe<CreateUomPayload>;
  /** Creates a single `Warehouse`. */
  createWarehouse?: Maybe<CreateWarehousePayload>;
  /** Creates a single `WarehouseStock`. */
  createWarehouseStock?: Maybe<CreateWarehouseStockPayload>;
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryById?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `InventoryTransaction` using its globally unique id. */
  deleteInventoryTransaction?: Maybe<DeleteInventoryTransactionPayload>;
  /** Deletes a single `InventoryTransaction` using a unique key. */
  deleteInventoryTransactionById?: Maybe<DeleteInventoryTransactionPayload>;
  /** Deletes a single `Product` using its globally unique id. */
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Deletes a single `Product` using a unique key. */
  deleteProductById?: Maybe<DeleteProductPayload>;
  /** Deletes a single `Subcategory` using its globally unique id. */
  deleteSubcategory?: Maybe<DeleteSubcategoryPayload>;
  /** Deletes a single `Subcategory` using a unique key. */
  deleteSubcategoryById?: Maybe<DeleteSubcategoryPayload>;
  /** Deletes a single `Supplier` using its globally unique id. */
  deleteSupplier?: Maybe<DeleteSupplierPayload>;
  /** Deletes a single `Supplier` using a unique key. */
  deleteSupplierById?: Maybe<DeleteSupplierPayload>;
  /** Deletes a single `SupplierProduct` using its globally unique id. */
  deleteSupplierProduct?: Maybe<DeleteSupplierProductPayload>;
  /** Deletes a single `SupplierProduct` using a unique key. */
  deleteSupplierProductById?: Maybe<DeleteSupplierProductPayload>;
  /** Deletes a single `Uom` using its globally unique id. */
  deleteUom?: Maybe<DeleteUomPayload>;
  /** Deletes a single `Uom` using a unique key. */
  deleteUomById?: Maybe<DeleteUomPayload>;
  /** Deletes a single `Warehouse` using its globally unique id. */
  deleteWarehouse?: Maybe<DeleteWarehousePayload>;
  /** Deletes a single `Warehouse` using a unique key. */
  deleteWarehouseById?: Maybe<DeleteWarehousePayload>;
  /** Deletes a single `WarehouseStock` using its globally unique id. */
  deleteWarehouseStock?: Maybe<DeleteWarehouseStockPayload>;
  /** Deletes a single `WarehouseStock` using a unique key. */
  deleteWarehouseStockByProductIdAndWarehouseId?: Maybe<DeleteWarehouseStockPayload>;
  registerTransaction?: Maybe<RegisterTransactionPayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryById?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `InventoryTransaction` using its globally unique id and a patch. */
  updateInventoryTransaction?: Maybe<UpdateInventoryTransactionPayload>;
  /** Updates a single `InventoryTransaction` using a unique key and a patch. */
  updateInventoryTransactionById?: Maybe<UpdateInventoryTransactionPayload>;
  /** Updates a single `Product` using its globally unique id and a patch. */
  updateProduct?: Maybe<UpdateProductPayload>;
  /** Updates a single `Product` using a unique key and a patch. */
  updateProductById?: Maybe<UpdateProductPayload>;
  /** Updates a single `Subcategory` using its globally unique id and a patch. */
  updateSubcategory?: Maybe<UpdateSubcategoryPayload>;
  /** Updates a single `Subcategory` using a unique key and a patch. */
  updateSubcategoryById?: Maybe<UpdateSubcategoryPayload>;
  /** Updates a single `Supplier` using its globally unique id and a patch. */
  updateSupplier?: Maybe<UpdateSupplierPayload>;
  /** Updates a single `Supplier` using a unique key and a patch. */
  updateSupplierById?: Maybe<UpdateSupplierPayload>;
  /** Updates a single `SupplierProduct` using its globally unique id and a patch. */
  updateSupplierProduct?: Maybe<UpdateSupplierProductPayload>;
  /** Updates a single `SupplierProduct` using a unique key and a patch. */
  updateSupplierProductById?: Maybe<UpdateSupplierProductPayload>;
  /** Updates a single `Uom` using its globally unique id and a patch. */
  updateUom?: Maybe<UpdateUomPayload>;
  /** Updates a single `Uom` using a unique key and a patch. */
  updateUomById?: Maybe<UpdateUomPayload>;
  /** Updates a single `Warehouse` using its globally unique id and a patch. */
  updateWarehouse?: Maybe<UpdateWarehousePayload>;
  /** Updates a single `Warehouse` using a unique key and a patch. */
  updateWarehouseById?: Maybe<UpdateWarehousePayload>;
  /** Updates a single `WarehouseStock` using its globally unique id and a patch. */
  updateWarehouseStock?: Maybe<UpdateWarehouseStockPayload>;
  /** Updates a single `WarehouseStock` using a unique key and a patch. */
  updateWarehouseStockByProductIdAndWarehouseId?: Maybe<UpdateWarehouseStockPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInventoryTransactionArgs = {
  input: CreateInventoryTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSubcategoryArgs = {
  input: CreateSubcategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSupplierArgs = {
  input: CreateSupplierInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateSupplierProductArgs = {
  input: CreateSupplierProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTypeormMetadatumArgs = {
  input: CreateTypeormMetadatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUomArgs = {
  input: CreateUomInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateWarehouseArgs = {
  input: CreateWarehouseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateWarehouseStockArgs = {
  input: CreateWarehouseStockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByIdArgs = {
  input: DeleteCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInventoryTransactionArgs = {
  input: DeleteInventoryTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInventoryTransactionByIdArgs = {
  input: DeleteInventoryTransactionByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProductByIdArgs = {
  input: DeleteProductByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubcategoryArgs = {
  input: DeleteSubcategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSubcategoryByIdArgs = {
  input: DeleteSubcategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSupplierArgs = {
  input: DeleteSupplierInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSupplierByIdArgs = {
  input: DeleteSupplierByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSupplierProductArgs = {
  input: DeleteSupplierProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteSupplierProductByIdArgs = {
  input: DeleteSupplierProductByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUomArgs = {
  input: DeleteUomInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUomByIdArgs = {
  input: DeleteUomByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWarehouseArgs = {
  input: DeleteWarehouseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWarehouseByIdArgs = {
  input: DeleteWarehouseByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWarehouseStockArgs = {
  input: DeleteWarehouseStockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWarehouseStockByProductIdAndWarehouseIdArgs = {
  input: DeleteWarehouseStockByProductIdAndWarehouseIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterTransactionArgs = {
  input: RegisterTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByIdArgs = {
  input: UpdateCategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInventoryTransactionArgs = {
  input: UpdateInventoryTransactionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInventoryTransactionByIdArgs = {
  input: UpdateInventoryTransactionByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProductByIdArgs = {
  input: UpdateProductByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubcategoryArgs = {
  input: UpdateSubcategoryInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSubcategoryByIdArgs = {
  input: UpdateSubcategoryByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSupplierArgs = {
  input: UpdateSupplierInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSupplierByIdArgs = {
  input: UpdateSupplierByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSupplierProductArgs = {
  input: UpdateSupplierProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateSupplierProductByIdArgs = {
  input: UpdateSupplierProductByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUomArgs = {
  input: UpdateUomInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUomByIdArgs = {
  input: UpdateUomByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWarehouseArgs = {
  input: UpdateWarehouseInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWarehouseByIdArgs = {
  input: UpdateWarehouseByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWarehouseStockArgs = {
  input: UpdateWarehouseStockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWarehouseStockByProductIdAndWarehouseIdArgs = {
  input: UpdateWarehouseStockByProductIdAndWarehouseIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Product = Node & {
  /** Reads a single `Category` that is related to this `Product`. */
  categoryByCategoryId?: Maybe<Category>;
  categoryId: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  /** Reads and enables pagination through a set of `InventoryTransaction`. */
  inventoryTransactionsByProductId: InventoryTransactionsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  sku: Scalars['String'];
  /** Reads a single `Subcategory` that is related to this `Product`. */
  subcategoryBySubcategoryId?: Maybe<Subcategory>;
  subcategoryId?: Maybe<Scalars['Int']>;
  /** Reads and enables pagination through a set of `SupplierProduct`. */
  supplierProductsByProductId: SupplierProductsConnection;
  /** Reads a single `Uom` that is related to this `Product`. */
  uomByUomId?: Maybe<Uom>;
  uomId: Scalars['Int'];
  /** Reads and enables pagination through a set of `WarehouseStock`. */
  warehouseStocksByProductId: WarehouseStocksConnection;
};


export type ProductInventoryTransactionsByProductIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InventoryTransactionCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InventoryTransactionsOrderBy>>;
};


export type ProductSupplierProductsByProductIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SupplierProductCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SupplierProductsOrderBy>>;
};


export type ProductWarehouseStocksByProductIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<WarehouseStockCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WarehouseStocksOrderBy>>;
};

/** A condition to be used against `Product` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProductCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `sku` field. */
  sku?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `subcategoryId` field. */
  subcategoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `uomId` field. */
  uomId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `Product` */
export type ProductInput = {
  categoryId: Scalars['Int'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  subcategoryId?: InputMaybe<Scalars['Int']>;
  uomId: Scalars['Int'];
};

/** Represents an update to a `Product`. Fields that are set will be updated. */
export type ProductPatch = {
  categoryId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  subcategoryId?: InputMaybe<Scalars['Int']>;
  uomId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Product` values. */
export type ProductsConnection = {
  /** A list of edges which contains the `Product` and cursor to aid in pagination. */
  edges: Array<ProductsEdge>;
  /** A list of `Product` objects. */
  nodes: Array<Maybe<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Product` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Product` edge in the connection. */
export type ProductsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Product` at the end of the edge. */
  node?: Maybe<Product>;
};

/** Methods to use when ordering `Product`. */
export enum ProductsOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SkuAsc = 'SKU_ASC',
  SkuDesc = 'SKU_DESC',
  SubcategoryIdAsc = 'SUBCATEGORY_ID_ASC',
  SubcategoryIdDesc = 'SUBCATEGORY_ID_DESC',
  UomIdAsc = 'UOM_ID_ASC',
  UomIdDesc = 'UOM_ID_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  /** Reads and enables pagination through a set of `Category`. */
  allCategories?: Maybe<CategoriesConnection>;
  /** Reads and enables pagination through a set of `InventoryTransaction`. */
  allInventoryTransactions?: Maybe<InventoryTransactionsConnection>;
  /** Reads and enables pagination through a set of `Product`. */
  allProducts?: Maybe<ProductsConnection>;
  /** Reads and enables pagination through a set of `Subcategory`. */
  allSubcategories?: Maybe<SubcategoriesConnection>;
  /** Reads and enables pagination through a set of `SupplierProduct`. */
  allSupplierProducts?: Maybe<SupplierProductsConnection>;
  /** Reads and enables pagination through a set of `Supplier`. */
  allSuppliers?: Maybe<SuppliersConnection>;
  /** Reads and enables pagination through a set of `TypeormMetadatum`. */
  allTypeormMetadata?: Maybe<TypeormMetadataConnection>;
  /** Reads and enables pagination through a set of `Uom`. */
  allUoms?: Maybe<UomsConnection>;
  /** Reads and enables pagination through a set of `WarehouseStock`. */
  allWarehouseStocks?: Maybe<WarehouseStocksConnection>;
  /** Reads and enables pagination through a set of `Warehouse`. */
  allWarehouses?: Maybe<WarehousesConnection>;
  /** Reads a single `Category` using its globally unique `ID`. */
  category?: Maybe<Category>;
  categoryById?: Maybe<Category>;
  /** Reads a single `InventoryTransaction` using its globally unique `ID`. */
  inventoryTransaction?: Maybe<InventoryTransaction>;
  inventoryTransactionById?: Maybe<InventoryTransaction>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Reads a single `Product` using its globally unique `ID`. */
  product?: Maybe<Product>;
  productById?: Maybe<Product>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Subcategory` using its globally unique `ID`. */
  subcategory?: Maybe<Subcategory>;
  subcategoryById?: Maybe<Subcategory>;
  /** Reads a single `Supplier` using its globally unique `ID`. */
  supplier?: Maybe<Supplier>;
  supplierById?: Maybe<Supplier>;
  /** Reads a single `SupplierProduct` using its globally unique `ID`. */
  supplierProduct?: Maybe<SupplierProduct>;
  supplierProductById?: Maybe<SupplierProduct>;
  /** Reads a single `Uom` using its globally unique `ID`. */
  uom?: Maybe<Uom>;
  uomById?: Maybe<Uom>;
  /** Reads a single `Warehouse` using its globally unique `ID`. */
  warehouse?: Maybe<Warehouse>;
  warehouseById?: Maybe<Warehouse>;
  /** Reads a single `WarehouseStock` using its globally unique `ID`. */
  warehouseStock?: Maybe<WarehouseStock>;
  warehouseStockByProductIdAndWarehouseId?: Maybe<WarehouseStock>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllInventoryTransactionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InventoryTransactionCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InventoryTransactionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ProductCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSubcategoriesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SubcategoryCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSupplierProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SupplierProductCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SupplierProductsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllSuppliersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SupplierCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SuppliersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTypeormMetadataArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<TypeormMetadatumCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TypeormMetadataOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUomsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UomCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UomsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllWarehouseStocksArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<WarehouseStockCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WarehouseStocksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllWarehousesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<WarehouseCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WarehousesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCategoryByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInventoryTransactionArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInventoryTransactionByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProductArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProductByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubcategoryArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubcategoryByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySupplierArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySupplierByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySupplierProductArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySupplierProductByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUomArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUomByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWarehouseArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWarehouseByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWarehouseStockArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWarehouseStockByProductIdAndWarehouseIdArgs = {
  productId: Scalars['Int'];
  warehouseId: Scalars['Int'];
};

export type RegisterTransactionInput = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  type: InventoryTransactionTypeEnum;
  warehouseId: Scalars['Int'];
};

export type RegisterTransactionPayload = {
  productId?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  updatedQuantity?: Maybe<Scalars['Int']>;
  warehouseId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Subcategory` values. */
export type SubcategoriesConnection = {
  /** A list of edges which contains the `Subcategory` and cursor to aid in pagination. */
  edges: Array<SubcategoriesEdge>;
  /** A list of `Subcategory` objects. */
  nodes: Array<Maybe<Subcategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Subcategory` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Subcategory` edge in the connection. */
export type SubcategoriesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Subcategory` at the end of the edge. */
  node?: Maybe<Subcategory>;
};

/** Methods to use when ordering `Subcategory`. */
export enum SubcategoriesOrderBy {
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Subcategory = Node & {
  /** Reads a single `Category` that is related to this `Subcategory`. */
  categoryByCategoryId?: Maybe<Category>;
  categoryId: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Product`. */
  productsBySubcategoryId: ProductsConnection;
};


export type SubcategoryProductsBySubcategoryIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ProductCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/**
 * A condition to be used against `Subcategory` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type SubcategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `Subcategory` */
export type SubcategoryInput = {
  categoryId: Scalars['Int'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `Subcategory`. Fields that are set will be updated. */
export type SubcategoryPatch = {
  categoryId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Supplier = Node & {
  address: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `SupplierProduct`. */
  supplierProductsBySupplierId: SupplierProductsConnection;
};


export type SupplierSupplierProductsBySupplierIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<SupplierProductCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SupplierProductsOrderBy>>;
};

/**
 * A condition to be used against `Supplier` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type SupplierCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Supplier` */
export type SupplierInput = {
  address: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

/** Represents an update to a `Supplier`. Fields that are set will be updated. */
export type SupplierPatch = {
  address?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SupplierProduct = Node & {
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Product` that is related to this `SupplierProduct`. */
  productByProductId?: Maybe<Product>;
  productId: Scalars['Int'];
  /** Reads a single `Supplier` that is related to this `SupplierProduct`. */
  supplierBySupplierId?: Maybe<Supplier>;
  supplierId: Scalars['Int'];
  supplierSku: Scalars['String'];
};

/**
 * A condition to be used against `SupplierProduct` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SupplierProductCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `productId` field. */
  productId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `supplierId` field. */
  supplierId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `supplierSku` field. */
  supplierSku?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `SupplierProduct` */
export type SupplierProductInput = {
  id?: InputMaybe<Scalars['Int']>;
  productId: Scalars['Int'];
  supplierId: Scalars['Int'];
  supplierSku: Scalars['String'];
};

/** Represents an update to a `SupplierProduct`. Fields that are set will be updated. */
export type SupplierProductPatch = {
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  supplierId?: InputMaybe<Scalars['Int']>;
  supplierSku?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `SupplierProduct` values. */
export type SupplierProductsConnection = {
  /** A list of edges which contains the `SupplierProduct` and cursor to aid in pagination. */
  edges: Array<SupplierProductsEdge>;
  /** A list of `SupplierProduct` objects. */
  nodes: Array<Maybe<SupplierProduct>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `SupplierProduct` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `SupplierProduct` edge in the connection. */
export type SupplierProductsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `SupplierProduct` at the end of the edge. */
  node?: Maybe<SupplierProduct>;
};

/** Methods to use when ordering `SupplierProduct`. */
export enum SupplierProductsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProductIdAsc = 'PRODUCT_ID_ASC',
  ProductIdDesc = 'PRODUCT_ID_DESC',
  SupplierIdAsc = 'SUPPLIER_ID_ASC',
  SupplierIdDesc = 'SUPPLIER_ID_DESC',
  SupplierSkuAsc = 'SUPPLIER_SKU_ASC',
  SupplierSkuDesc = 'SUPPLIER_SKU_DESC'
}

/** A connection to a list of `Supplier` values. */
export type SuppliersConnection = {
  /** A list of edges which contains the `Supplier` and cursor to aid in pagination. */
  edges: Array<SuppliersEdge>;
  /** A list of `Supplier` objects. */
  nodes: Array<Maybe<Supplier>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Supplier` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Supplier` edge in the connection. */
export type SuppliersEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Supplier` at the end of the edge. */
  node?: Maybe<Supplier>;
};

/** Methods to use when ordering `Supplier`. */
export enum SuppliersOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `TypeormMetadatum` values. */
export type TypeormMetadataConnection = {
  /** A list of edges which contains the `TypeormMetadatum` and cursor to aid in pagination. */
  edges: Array<TypeormMetadataEdge>;
  /** A list of `TypeormMetadatum` objects. */
  nodes: Array<Maybe<TypeormMetadatum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TypeormMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `TypeormMetadatum` edge in the connection. */
export type TypeormMetadataEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `TypeormMetadatum` at the end of the edge. */
  node?: Maybe<TypeormMetadatum>;
};

/** Methods to use when ordering `TypeormMetadatum`. */
export enum TypeormMetadataOrderBy {
  DatabaseAsc = 'DATABASE_ASC',
  DatabaseDesc = 'DATABASE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  SchemaAsc = 'SCHEMA_ASC',
  SchemaDesc = 'SCHEMA_DESC',
  TableAsc = 'TABLE_ASC',
  TableDesc = 'TABLE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC'
}

export type TypeormMetadatum = {
  database?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

/**
 * A condition to be used against `TypeormMetadatum` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type TypeormMetadatumCondition = {
  /** Checks for equality with the object’s `database` field. */
  database?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `schema` field. */
  schema?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `table` field. */
  table?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  type?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `TypeormMetadatum` */
export type TypeormMetadatumInput = {
  database?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type Uom = Node & {
  abbrev: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Product`. */
  productsByUomId: ProductsConnection;
};


export type UomProductsByUomIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<ProductCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** A condition to be used against `Uom` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UomCondition = {
  /** Checks for equality with the object’s `abbrev` field. */
  abbrev?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Uom` */
export type UomInput = {
  abbrev: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

/** Represents an update to a `Uom`. Fields that are set will be updated. */
export type UomPatch = {
  abbrev?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Uom` values. */
export type UomsConnection = {
  /** A list of edges which contains the `Uom` and cursor to aid in pagination. */
  edges: Array<UomsEdge>;
  /** A list of `Uom` objects. */
  nodes: Array<Maybe<Uom>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Uom` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Uom` edge in the connection. */
export type UomsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Uom` at the end of the edge. */
  node?: Maybe<Uom>;
};

/** Methods to use when ordering `Uom`. */
export enum UomsOrderBy {
  AbbrevAsc = 'ABBREV_ASC',
  AbbrevDesc = 'ABBREV_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateCategoryById` mutation. */
export type UpdateCategoryByIdInput = {
  /** An object where the defined keys will be set on the `Category` being updated. */
  categoryPatch: CategoryPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /** An object where the defined keys will be set on the `Category` being updated. */
  categoryPatch: CategoryPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `updateInventoryTransactionById` mutation. */
export type UpdateInventoryTransactionByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `InventoryTransaction` being updated. */
  inventoryTransactionPatch: InventoryTransactionPatch;
};

/** All input for the `updateInventoryTransaction` mutation. */
export type UpdateInventoryTransactionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `InventoryTransaction` being updated. */
  inventoryTransactionPatch: InventoryTransactionPatch;
  /** The globally unique `ID` which will identify a single `InventoryTransaction` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `InventoryTransaction` mutation. */
export type UpdateInventoryTransactionPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `InventoryTransaction` that was updated by this mutation. */
  inventoryTransaction?: Maybe<InventoryTransaction>;
  /** An edge for our `InventoryTransaction`. May be used by Relay 1. */
  inventoryTransactionEdge?: Maybe<InventoryTransactionsEdge>;
  /** Reads a single `Product` that is related to this `InventoryTransaction`. */
  productByProductId?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Warehouse` that is related to this `InventoryTransaction`. */
  warehouseByWarehouseId?: Maybe<Warehouse>;
};


/** The output of our update `InventoryTransaction` mutation. */
export type UpdateInventoryTransactionPayloadInventoryTransactionEdgeArgs = {
  orderBy?: InputMaybe<Array<InventoryTransactionsOrderBy>>;
};

/** All input for the `updateProductById` mutation. */
export type UpdateProductByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Product` being updated. */
  productPatch: ProductPatch;
};

/** All input for the `updateProduct` mutation. */
export type UpdateProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Product` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Product` being updated. */
  productPatch: ProductPatch;
};

/** The output of our update `Product` mutation. */
export type UpdateProductPayload = {
  /** Reads a single `Category` that is related to this `Product`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Product` that was updated by this mutation. */
  product?: Maybe<Product>;
  /** An edge for our `Product`. May be used by Relay 1. */
  productEdge?: Maybe<ProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Subcategory` that is related to this `Product`. */
  subcategoryBySubcategoryId?: Maybe<Subcategory>;
  /** Reads a single `Uom` that is related to this `Product`. */
  uomByUomId?: Maybe<Uom>;
};


/** The output of our update `Product` mutation. */
export type UpdateProductPayloadProductEdgeArgs = {
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** All input for the `updateSubcategoryById` mutation. */
export type UpdateSubcategoryByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Subcategory` being updated. */
  subcategoryPatch: SubcategoryPatch;
};

/** All input for the `updateSubcategory` mutation. */
export type UpdateSubcategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Subcategory` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Subcategory` being updated. */
  subcategoryPatch: SubcategoryPatch;
};

/** The output of our update `Subcategory` mutation. */
export type UpdateSubcategoryPayload = {
  /** Reads a single `Category` that is related to this `Subcategory`. */
  categoryByCategoryId?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Subcategory` that was updated by this mutation. */
  subcategory?: Maybe<Subcategory>;
  /** An edge for our `Subcategory`. May be used by Relay 1. */
  subcategoryEdge?: Maybe<SubcategoriesEdge>;
};


/** The output of our update `Subcategory` mutation. */
export type UpdateSubcategoryPayloadSubcategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<SubcategoriesOrderBy>>;
};

/** All input for the `updateSupplierById` mutation. */
export type UpdateSupplierByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Supplier` being updated. */
  supplierPatch: SupplierPatch;
};

/** All input for the `updateSupplier` mutation. */
export type UpdateSupplierInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Supplier` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Supplier` being updated. */
  supplierPatch: SupplierPatch;
};

/** The output of our update `Supplier` mutation. */
export type UpdateSupplierPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Supplier` that was updated by this mutation. */
  supplier?: Maybe<Supplier>;
  /** An edge for our `Supplier`. May be used by Relay 1. */
  supplierEdge?: Maybe<SuppliersEdge>;
};


/** The output of our update `Supplier` mutation. */
export type UpdateSupplierPayloadSupplierEdgeArgs = {
  orderBy?: InputMaybe<Array<SuppliersOrderBy>>;
};

/** All input for the `updateSupplierProductById` mutation. */
export type UpdateSupplierProductByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `SupplierProduct` being updated. */
  supplierProductPatch: SupplierProductPatch;
};

/** All input for the `updateSupplierProduct` mutation. */
export type UpdateSupplierProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SupplierProduct` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SupplierProduct` being updated. */
  supplierProductPatch: SupplierProductPatch;
};

/** The output of our update `SupplierProduct` mutation. */
export type UpdateSupplierProductPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Product` that is related to this `SupplierProduct`. */
  productByProductId?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Supplier` that is related to this `SupplierProduct`. */
  supplierBySupplierId?: Maybe<Supplier>;
  /** The `SupplierProduct` that was updated by this mutation. */
  supplierProduct?: Maybe<SupplierProduct>;
  /** An edge for our `SupplierProduct`. May be used by Relay 1. */
  supplierProductEdge?: Maybe<SupplierProductsEdge>;
};


/** The output of our update `SupplierProduct` mutation. */
export type UpdateSupplierProductPayloadSupplierProductEdgeArgs = {
  orderBy?: InputMaybe<Array<SupplierProductsOrderBy>>;
};

/** All input for the `updateUomById` mutation. */
export type UpdateUomByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Uom` being updated. */
  uomPatch: UomPatch;
};

/** All input for the `updateUom` mutation. */
export type UpdateUomInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Uom` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Uom` being updated. */
  uomPatch: UomPatch;
};

/** The output of our update `Uom` mutation. */
export type UpdateUomPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Uom` that was updated by this mutation. */
  uom?: Maybe<Uom>;
  /** An edge for our `Uom`. May be used by Relay 1. */
  uomEdge?: Maybe<UomsEdge>;
};


/** The output of our update `Uom` mutation. */
export type UpdateUomPayloadUomEdgeArgs = {
  orderBy?: InputMaybe<Array<UomsOrderBy>>;
};

/** All input for the `updateWarehouseById` mutation. */
export type UpdateWarehouseByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Warehouse` being updated. */
  warehousePatch: WarehousePatch;
};

/** All input for the `updateWarehouse` mutation. */
export type UpdateWarehouseInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Warehouse` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Warehouse` being updated. */
  warehousePatch: WarehousePatch;
};

/** The output of our update `Warehouse` mutation. */
export type UpdateWarehousePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Warehouse` that was updated by this mutation. */
  warehouse?: Maybe<Warehouse>;
  /** An edge for our `Warehouse`. May be used by Relay 1. */
  warehouseEdge?: Maybe<WarehousesEdge>;
};


/** The output of our update `Warehouse` mutation. */
export type UpdateWarehousePayloadWarehouseEdgeArgs = {
  orderBy?: InputMaybe<Array<WarehousesOrderBy>>;
};

/** All input for the `updateWarehouseStockByProductIdAndWarehouseId` mutation. */
export type UpdateWarehouseStockByProductIdAndWarehouseIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  productId: Scalars['Int'];
  warehouseId: Scalars['Int'];
  /** An object where the defined keys will be set on the `WarehouseStock` being updated. */
  warehouseStockPatch: WarehouseStockPatch;
};

/** All input for the `updateWarehouseStock` mutation. */
export type UpdateWarehouseStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `WarehouseStock` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `WarehouseStock` being updated. */
  warehouseStockPatch: WarehouseStockPatch;
};

/** The output of our update `WarehouseStock` mutation. */
export type UpdateWarehouseStockPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Product` that is related to this `WarehouseStock`. */
  productByProductId?: Maybe<Product>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Warehouse` that is related to this `WarehouseStock`. */
  warehouseByWarehouseId?: Maybe<Warehouse>;
  /** The `WarehouseStock` that was updated by this mutation. */
  warehouseStock?: Maybe<WarehouseStock>;
  /** An edge for our `WarehouseStock`. May be used by Relay 1. */
  warehouseStockEdge?: Maybe<WarehouseStocksEdge>;
};


/** The output of our update `WarehouseStock` mutation. */
export type UpdateWarehouseStockPayloadWarehouseStockEdgeArgs = {
  orderBy?: InputMaybe<Array<WarehouseStocksOrderBy>>;
};

export type Warehouse = Node & {
  id: Scalars['Int'];
  /** Reads and enables pagination through a set of `InventoryTransaction`. */
  inventoryTransactionsByWarehouseId: InventoryTransactionsConnection;
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `WarehouseStock`. */
  warehouseStocksByWarehouseId: WarehouseStocksConnection;
};


export type WarehouseInventoryTransactionsByWarehouseIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InventoryTransactionCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InventoryTransactionsOrderBy>>;
};


export type WarehouseWarehouseStocksByWarehouseIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<WarehouseStockCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WarehouseStocksOrderBy>>;
};

/**
 * A condition to be used against `Warehouse` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type WarehouseCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Warehouse` */
export type WarehouseInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

/** Represents an update to a `Warehouse`. Fields that are set will be updated. */
export type WarehousePatch = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type WarehouseStock = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Product` that is related to this `WarehouseStock`. */
  productByProductId?: Maybe<Product>;
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  /** Reads a single `Warehouse` that is related to this `WarehouseStock`. */
  warehouseByWarehouseId?: Maybe<Warehouse>;
  warehouseId: Scalars['Int'];
};

/**
 * A condition to be used against `WarehouseStock` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type WarehouseStockCondition = {
  /** Checks for equality with the object’s `productId` field. */
  productId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `quantity` field. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `warehouseId` field. */
  warehouseId?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `WarehouseStock` */
export type WarehouseStockInput = {
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  warehouseId: Scalars['Int'];
};

/** Represents an update to a `WarehouseStock`. Fields that are set will be updated. */
export type WarehouseStockPatch = {
  productId?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  warehouseId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `WarehouseStock` values. */
export type WarehouseStocksConnection = {
  /** A list of edges which contains the `WarehouseStock` and cursor to aid in pagination. */
  edges: Array<WarehouseStocksEdge>;
  /** A list of `WarehouseStock` objects. */
  nodes: Array<Maybe<WarehouseStock>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `WarehouseStock` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `WarehouseStock` edge in the connection. */
export type WarehouseStocksEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `WarehouseStock` at the end of the edge. */
  node?: Maybe<WarehouseStock>;
};

/** Methods to use when ordering `WarehouseStock`. */
export enum WarehouseStocksOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProductIdAsc = 'PRODUCT_ID_ASC',
  ProductIdDesc = 'PRODUCT_ID_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  WarehouseIdAsc = 'WAREHOUSE_ID_ASC',
  WarehouseIdDesc = 'WAREHOUSE_ID_DESC'
}

/** A connection to a list of `Warehouse` values. */
export type WarehousesConnection = {
  /** A list of edges which contains the `Warehouse` and cursor to aid in pagination. */
  edges: Array<WarehousesEdge>;
  /** A list of `Warehouse` objects. */
  nodes: Array<Maybe<Warehouse>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Warehouse` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Warehouse` edge in the connection. */
export type WarehousesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Warehouse` at the end of the edge. */
  node?: Maybe<Warehouse>;
};

/** Methods to use when ordering `Warehouse`. */
export enum WarehousesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export const StockDataFragmentDoc = gql`
    fragment StockData on WarehouseStock {
  quantity
  warehouseByWarehouseId {
    name
  }
  productByProductId {
    description
  }
}
    `;
export const TransactionDataFragmentDoc = gql`
    fragment TransactionData on InventoryTransaction {
  id
  quantity
  date
  type
  productByProductId {
    description
  }
  warehouseByWarehouseId {
    name
  }
}
    `;
export const GetCategoriesDocument = gql`
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

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const AddCategoryDocument = gql`
    mutation AddCategory($description: String!) {
  createCategory(input: {category: {description: $description}}) {
    category {
      nodeId
    }
  }
}
    `;
export type AddCategoryMutationFn = Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      description: // value for 'description'
 *   },
 * });
 */
export function useAddCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddCategoryMutation, AddCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, options);
      }
export type AddCategoryMutationHookResult = ReturnType<typeof useAddCategoryMutation>;
export type AddCategoryMutationResult = Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<AddCategoryMutation, AddCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($nodeId: ID!) {
  deleteCategory(input: {nodeId: $nodeId}) {
    deletedCategoryId
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($nodeId: ID!, $description: String!) {
  updateCategory(
    input: {nodeId: $nodeId, categoryPatch: {description: $description}}
  ) {
    category {
      nodeId
    }
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  allProducts {
    nodes {
      nodeId
      id
      description
      uomByUomId {
        abbrev
      }
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetWarehousesStocksDocument = gql`
    query GetWarehousesStocks {
  allWarehouseStocks {
    nodes {
      nodeId
      ...StockData
    }
  }
}
    ${StockDataFragmentDoc}`;

/**
 * __useGetWarehousesStocksQuery__
 *
 * To run a query within a React component, call `useGetWarehousesStocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWarehousesStocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWarehousesStocksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWarehousesStocksQuery(baseOptions?: Apollo.QueryHookOptions<GetWarehousesStocksQuery, GetWarehousesStocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWarehousesStocksQuery, GetWarehousesStocksQueryVariables>(GetWarehousesStocksDocument, options);
      }
export function useGetWarehousesStocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWarehousesStocksQuery, GetWarehousesStocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWarehousesStocksQuery, GetWarehousesStocksQueryVariables>(GetWarehousesStocksDocument, options);
        }
export type GetWarehousesStocksQueryHookResult = ReturnType<typeof useGetWarehousesStocksQuery>;
export type GetWarehousesStocksLazyQueryHookResult = ReturnType<typeof useGetWarehousesStocksLazyQuery>;
export type GetWarehousesStocksQueryResult = Apollo.QueryResult<GetWarehousesStocksQuery, GetWarehousesStocksQueryVariables>;
export const GetInventoryTransactionsDocument = gql`
    query GetInventoryTransactions {
  allInventoryTransactions(orderBy: DATE_ASC) {
    nodes {
      nodeId
      ...TransactionData
    }
  }
}
    ${TransactionDataFragmentDoc}`;

/**
 * __useGetInventoryTransactionsQuery__
 *
 * To run a query within a React component, call `useGetInventoryTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInventoryTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInventoryTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInventoryTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<GetInventoryTransactionsQuery, GetInventoryTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInventoryTransactionsQuery, GetInventoryTransactionsQueryVariables>(GetInventoryTransactionsDocument, options);
      }
export function useGetInventoryTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInventoryTransactionsQuery, GetInventoryTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInventoryTransactionsQuery, GetInventoryTransactionsQueryVariables>(GetInventoryTransactionsDocument, options);
        }
export type GetInventoryTransactionsQueryHookResult = ReturnType<typeof useGetInventoryTransactionsQuery>;
export type GetInventoryTransactionsLazyQueryHookResult = ReturnType<typeof useGetInventoryTransactionsLazyQuery>;
export type GetInventoryTransactionsQueryResult = Apollo.QueryResult<GetInventoryTransactionsQuery, GetInventoryTransactionsQueryVariables>;
export const RegisterTransactionDocument = gql`
    mutation RegisterTransaction($input: RegisterTransactionInput!) {
  registerTransaction(input: $input) {
    transactionId
  }
}
    `;
export type RegisterTransactionMutationFn = Apollo.MutationFunction<RegisterTransactionMutation, RegisterTransactionMutationVariables>;

/**
 * __useRegisterTransactionMutation__
 *
 * To run a mutation, you first call `useRegisterTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerTransactionMutation, { data, loading, error }] = useRegisterTransactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterTransactionMutation(baseOptions?: Apollo.MutationHookOptions<RegisterTransactionMutation, RegisterTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterTransactionMutation, RegisterTransactionMutationVariables>(RegisterTransactionDocument, options);
      }
export type RegisterTransactionMutationHookResult = ReturnType<typeof useRegisterTransactionMutation>;
export type RegisterTransactionMutationResult = Apollo.MutationResult<RegisterTransactionMutation>;
export type RegisterTransactionMutationOptions = Apollo.BaseMutationOptions<RegisterTransactionMutation, RegisterTransactionMutationVariables>;
export const GetWarehousesDocument = gql`
    query GetWarehouses {
  allWarehouses {
    nodes {
      nodeId
      id
      name
    }
  }
}
    `;

/**
 * __useGetWarehousesQuery__
 *
 * To run a query within a React component, call `useGetWarehousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWarehousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWarehousesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWarehousesQuery(baseOptions?: Apollo.QueryHookOptions<GetWarehousesQuery, GetWarehousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWarehousesQuery, GetWarehousesQueryVariables>(GetWarehousesDocument, options);
      }
export function useGetWarehousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWarehousesQuery, GetWarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWarehousesQuery, GetWarehousesQueryVariables>(GetWarehousesDocument, options);
        }
export type GetWarehousesQueryHookResult = ReturnType<typeof useGetWarehousesQuery>;
export type GetWarehousesLazyQueryHookResult = ReturnType<typeof useGetWarehousesLazyQuery>;
export type GetWarehousesQueryResult = Apollo.QueryResult<GetWarehousesQuery, GetWarehousesQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Node": [
      "Category",
      "InventoryTransaction",
      "Product",
      "Query",
      "Subcategory",
      "Supplier",
      "SupplierProduct",
      "Uom",
      "Warehouse",
      "WarehouseStock"
    ]
  }
};
      export default result;
    
export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { allCategories?: { nodes: Array<{ nodeId: string, id: number, description: string } | null> } | null };

export type AddCategoryMutationVariables = Exact<{
  description: Scalars['String'];
}>;


export type AddCategoryMutation = { createCategory?: { category?: { nodeId: string } | null } | null };

export type DeleteCategoryMutationVariables = Exact<{
  nodeId: Scalars['ID'];
}>;


export type DeleteCategoryMutation = { deleteCategory?: { deletedCategoryId?: string | null } | null };

export type UpdateCategoryMutationVariables = Exact<{
  nodeId: Scalars['ID'];
  description: Scalars['String'];
}>;


export type UpdateCategoryMutation = { updateCategory?: { category?: { nodeId: string } | null } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { allProducts?: { nodes: Array<{ nodeId: string, id: number, description: string, uomByUomId?: { abbrev: string } | null } | null> } | null };

export type GetWarehousesStocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWarehousesStocksQuery = { allWarehouseStocks?: { nodes: Array<{ nodeId: string, quantity: number, warehouseByWarehouseId?: { name: string } | null, productByProductId?: { description: string } | null } | null> } | null };

export type GetInventoryTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInventoryTransactionsQuery = { allInventoryTransactions?: { nodes: Array<{ nodeId: string, id: number, quantity: number, date: any, type: InventoryTransactionTypeEnum, productByProductId?: { description: string } | null, warehouseByWarehouseId?: { name: string } | null } | null> } | null };

export type RegisterTransactionMutationVariables = Exact<{
  input: RegisterTransactionInput;
}>;


export type RegisterTransactionMutation = { registerTransaction?: { transactionId?: number | null } | null };

export type GetWarehousesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWarehousesQuery = { allWarehouses?: { nodes: Array<{ nodeId: string, id: number, name: string } | null> } | null };

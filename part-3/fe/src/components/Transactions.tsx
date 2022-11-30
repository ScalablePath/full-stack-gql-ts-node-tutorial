import { useState } from "react";
import {
  useGetWarehousesStocksQuery,
  useGetInventoryTransactionsQuery,
  useGetProductsQuery,
  useGetWarehousesQuery,
  useRegisterTransactionMutation,
  GetWarehousesStocksDocument,
  GetInventoryTransactionsDocument,
  InventoryTransactionTypeEnum
} from "../generated/graphql";
import { NotFoundError } from "../NotFoundError";

export const Transactions = (props: {}) => {
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [type, setType] = useState<InventoryTransactionTypeEnum>(
    InventoryTransactionTypeEnum.Receive
  );

  const {
    loading: loadingStocks,
    error: errorStocks,
    data: stocks
  } = useGetWarehousesStocksQuery();
  const {
    loading: loadingTransactions,
    error: errorTransactions,
    data: transactions
  } = useGetInventoryTransactionsQuery();
  const {
    loading: loadingProducts,
    error: errorProducts,
    data: products
  } = useGetProductsQuery();
  const {
    loading: loadingWarehouses,
    error: errorWarehouses,
    data: warehouses
  } = useGetWarehousesQuery();

  const [registerTransaction, { error: errorRegisteringTransaction }] =
    useRegisterTransactionMutation({
      refetchQueries: [
        { query: GetWarehousesStocksDocument },
        { query: GetInventoryTransactionsDocument }
      ]
    });

  if (
    loadingStocks ||
    loadingTransactions ||
    loadingProducts ||
    loadingWarehouses
  )
    return <span>Loading...</span>;

  if (
    errorStocks ||
    errorTransactions ||
    errorRegisteringTransaction ||
    errorProducts ||
    errorWarehouses
  ) {
    throw new NotFoundError();
  }

  if (
    !stocks?.allWarehouseStocks ||
    !transactions?.allInventoryTransactions ||
    !products?.allProducts ||
    !warehouses?.allWarehouses
  )
    return <span>No records found.</span>;

  const isValid = selectedProductId && selectedWarehouseId && quantity;

  const handleRegisterTransaction = async () => {
    if (isValid) {
      await registerTransaction({
        variables: {
          input: {
            productId: selectedProductId,
            warehouseId: selectedWarehouseId,
            quantity,
            type
          }
        }
      });
      setSelectedProductId(0);
      setSelectedWarehouseId(0);
      setQuantity(0);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h2 className="p-5">Register new transaction</h2>
        <div className="grid grid-cols-2 gap-4 p-5 ">
          <label
            htmlFor="products"
            className="form-label inline-block mb-2 ml-1">
            Product
          </label>
          <select
            id="products"
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
            onChange={(e) => setSelectedProductId(parseInt(e.target.value, 10))}
            value={selectedProductId}>
            {[
              <option key={-1} value={0}>
                Select an option
              </option>
            ].concat(
              products.allProducts?.nodes.map((product) => {
                return (
                  <option key={product?.id} value={product?.id}>
                    {product?.description}
                  </option>
                );
              })
            )}
          </select>
          <label
            htmlFor="warehouses"
            className="form-label inline-block mb-2 ml-1">
            Warehouse
          </label>
          <select
            id="warehouses"
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
            onChange={(e) =>
              setSelectedWarehouseId(parseInt(e.target.value, 10))
            }
            value={selectedWarehouseId}>
            {[
              <option key={-1} value={0}>
                Select an option
              </option>
            ].concat(
              warehouses.allWarehouses?.nodes.map((warehouse) => {
                return (
                  <option key={warehouse?.id} value={warehouse?.id}>
                    {warehouse?.name}
                  </option>
                );
              })
            )}
          </select>
          <label htmlFor="type" className="form-label inline-block mb-2 ml-1">
            Type
          </label>
          <select
            id="type"
            className="rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
            onChange={(e) =>
              setType(e.target.value as InventoryTransactionTypeEnum)
            }
            value={type}>
            <option
              key={InventoryTransactionTypeEnum.Receive}
              value={InventoryTransactionTypeEnum.Receive}>
              {InventoryTransactionTypeEnum.Receive}
            </option>
            <option
              key={InventoryTransactionTypeEnum.Withdraw}
              value={InventoryTransactionTypeEnum.Withdraw}>
              {InventoryTransactionTypeEnum.Withdraw}
            </option>
          </select>
          <label
            htmlFor="quantity"
            className="form-label inline-block mb-2 ml-1">
            Quantity
          </label>
          <input
            id="quantity"
            type={"number"}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            value={quantity || 0}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2"
            disabled={!isValid}
            onClick={handleRegisterTransaction}>
            Register
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <h2 className="p-5">Warehouse Stocks</h2>
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Warehouse
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qty.
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stocks.allWarehouseStocks.nodes.map((stock) => {
                  if (!stock) return null;
                  const {
                    nodeId,
                    quantity,
                    productByProductId,
                    warehouseByWarehouseId
                  } = stock;
                  return (
                    <tr key={nodeId}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {productByProductId?.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {warehouseByWarehouseId?.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <h2 className="p-5">Inventory Transactions</h2>
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Warehouse
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qty.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.allInventoryTransactions.nodes.map(
                  (transaction) => {
                    if (!transaction) return null;
                    const {
                      id,
                      quantity,
                      date,
                      type,
                      productByProductId,
                      warehouseByWarehouseId
                    } = transaction;
                    return (
                      <tr key={id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {productByProductId?.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {warehouseByWarehouseId?.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {type}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

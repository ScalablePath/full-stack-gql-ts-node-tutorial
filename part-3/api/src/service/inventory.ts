import { TransactionType, InventoryTransaction } from '../entity/InventoryTransaction'
import { Warehouse } from '../entity/Warehouse'
import { AppDataSource } from '../data-source'
import { Product } from '../entity/Product'
import { WarehouseStock } from '../entity/WarehouseStock'

// Instantiate the repositories
const productRepository = AppDataSource.getRepository(Product)
const warehouseRepository = AppDataSource.getRepository(Warehouse)
const warehouseStockRepository = AppDataSource.getRepository(WarehouseStock)

export type TransactionDetails = {
  transactionId: number,
  productId: number,
  warehouseId: number,
  updatedQuantity: number,
}

/**
 * Register a inventory transactions and updates the warehouse stocks.
 * @param type type of transaction.
 * @param productId product that are going to be transacted .
 * @param warehouseId target warehouse that the quantity is going to be updated.
 * @param quantity quantity for this transaction.
 * @returns a object containing relevant information about the transaction details.
 */
export const registerTransaction = async (type: TransactionType, productId: number, warehouseId: number, quantity: number): Promise<TransactionDetails> => {
  // Verify and retrieve the information about the Product and Warehouse
  const product = await productRepository.findOneByOrFail({ id: productId })
  const warehouse = await warehouseRepository.findOneByOrFail({ id: warehouseId })

  // Creates a InventoryTransaction
  const transaction = new InventoryTransaction()
  transaction.date = new Date()
  transaction.quantity = quantity
  transaction.type = type
  transaction.product = product
  transaction.warehouse = warehouse

  // Updates the warehouse stock based on the transaction
  const warehouseStock = await warehouseStockRepository.findOneBy({ productId: product.id, warehouseId: warehouse.id }) || new WarehouseStock()
  if (!warehouseStock.productId || !warehouseStock.warehouseId) {
    // There is no stock records for the given product and warehouse yet. Will create one.
    warehouseStock.productId = product.id
    warehouseStock.warehouseId = warehouse.id
    warehouseStock.quantity = 0
  }
  // Update the stock quantity
  warehouseStock.quantity = warehouseStock.quantity + (type === TransactionType.RECEIVE ? quantity : -quantity)

  // Save the information within a transaction
  await AppDataSource.transaction(async (transactionalEntityManager) => {
    await transactionalEntityManager.save(transaction)
    await transactionalEntityManager.save(warehouseStock)
  })

  return {
    transactionId: transaction.id,
    updatedQuantity: warehouseStock.quantity,
    warehouseId: warehouse.id,
    productId: product.id,
  }
}
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { WarehouseStock } from './WarehouseStock'
import { InventoryTransaction } from './InventoryTransaction'

@Entity()
export class Warehouse {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  // Warehouse can be associated with many WarehouseStocks
  @OneToMany(() => WarehouseStock, warehouseStock => warehouseStock.product)
  warehouseStocks: WarehouseStock[];

  // Warehouse can be associated with many InventoryTransactions
  @OneToMany(() => InventoryTransaction, inventoryTransactions => inventoryTransactions.warehouse)
  inventoryTransactions: InventoryTransaction[];

}
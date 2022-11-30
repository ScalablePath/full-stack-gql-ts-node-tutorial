
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { Category } from './Category'
import { Subcategory } from './Subcategory'
import { Uom } from './Uom'
import { SupplierProduct } from './SupplierProduct'
import { WarehouseStock } from './WarehouseStock'
import { InventoryTransaction } from './InventoryTransaction'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  sku: string

  @Column()
  description: string

  // Product has one Category
  @ManyToOne(() => Category, category => category.products, { nullable: false })
  category: Category

  // Product can have one Subcategory
  @ManyToOne(() => Subcategory, subcategory => subcategory.products, { nullable: true })
  subcategory: Subcategory

  // Product has one UOM
  @ManyToOne(() => Uom, uom => uom.products, { nullable: false })
  uom: Uom

  // Product can be associated with many Suppliers
  @OneToMany(() => SupplierProduct, supplierProduct => supplierProduct.product)
  supplierProducts: SupplierProduct[]

  // Product can be associated with many WarehouseStocks
  @OneToMany(() => WarehouseStock, warehouseStock => warehouseStock.product)
  warehouseStocks: WarehouseStock[]

  // Product can be associated with many InventoryTransactions
  @OneToMany(() => InventoryTransaction, inventoryTransactions => inventoryTransactions.product)
  inventoryTransactions: InventoryTransaction[]

}
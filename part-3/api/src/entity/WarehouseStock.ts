import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm'
import { Product } from './Product'
import { Warehouse } from './Warehouse'

/**
 * This entity represents the current stock quantity of a given Product in a Warehouse.
 * Note: since we already have the ManyToOne relationship between warehouse & product, by defining
 * the productId & warehouseId (same name as the one created in the relationship) as PKs, we are basically
 * creating a Constraint with those properties - meaning that we can't have WarehouseStock records without both.
 */
@Entity()
export class WarehouseStock {

  @PrimaryColumn()
  productId: number

  @PrimaryColumn()
  warehouseId: number

  @ManyToOne(() => Product, product => product.warehouseStocks, { nullable: false })
  product: Product

  @ManyToOne(() => Warehouse, warehouse => warehouse.warehouseStocks, { nullable: false })
  warehouse: Warehouse

  @Column()
  quantity: number

}

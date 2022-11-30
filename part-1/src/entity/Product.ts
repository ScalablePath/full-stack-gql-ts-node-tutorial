import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Category } from './Category'
import { Subcategory } from './Subcategory'
import { Uom } from './Uom'

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
}
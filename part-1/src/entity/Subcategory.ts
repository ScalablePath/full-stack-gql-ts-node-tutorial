import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { Product } from './Product'
import { Category } from './Category'

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string

  // Subcategory has many products
  @OneToMany(() => Product, product => product.subcategory)
  products: Product[];

  // Subcategory has one Category
  @ManyToOne(() => Category, category => category.products, { nullable: false })
  category: Category

}
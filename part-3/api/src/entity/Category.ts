import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Product } from './Product'
import { Subcategory } from './Subcategory'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string

  // Category has many products
  @OneToMany(() => Product, product => product.category)
  products: Product[];

  // Category has many subcategories
  @OneToMany(() => Subcategory, subcategory => subcategory.category)
  subcategories: Subcategory[];
  

}
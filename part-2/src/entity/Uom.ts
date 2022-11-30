import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Product } from './Product'

@Entity()
export class Uom {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  abbrev: string

  // Uom has many products
  @OneToMany(() => Product, product => product.uom)
  products: Product[];

}
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { SupplierProduct } from './SupplierProduct'

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  address: string

  // Supplier can be associated with many Products
  @OneToMany(() => SupplierProduct, supplierProduct => supplierProduct.supplier, { nullable: true })
  supplierProducts: SupplierProduct[];

}

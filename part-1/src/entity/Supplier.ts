import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  address: string

}
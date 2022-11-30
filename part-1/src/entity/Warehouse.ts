import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Warehouse {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string 

}
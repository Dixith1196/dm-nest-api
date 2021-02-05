import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class locations {
  @PrimaryGeneratedColumn('uuid') id: string
  @Column() latitude: string
  @Column() longitude: number
}
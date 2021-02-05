import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class users {
  @PrimaryGeneratedColumn('uuid') id: string
  @Column({ nullable: true }) email: string
//   @Column({ type: 'varchar', length: 100, nullable: false }) password: string
//   @OneToMany((type) => Pet, (pet) => pet.user) pets: Pet[]

}
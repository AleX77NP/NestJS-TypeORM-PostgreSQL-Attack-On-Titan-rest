import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class Titan {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    height: number

    @Column()
    currentUser: string
}
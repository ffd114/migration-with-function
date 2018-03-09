import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 255 })
    email: string;

    @Column('timestamp with time zone', { default: () => 'NOW()' })
    createdAt: Date;
}
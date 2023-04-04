import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()

export class TaskEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: Boolean;
}
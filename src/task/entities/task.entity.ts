import { UserEntity } from "src/user/entities/user.entity";
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";

@Entity()

export class TaskEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    creationDate: string; 

    @Column()
    status: Boolean;

    @ManyToOne(()=> UserEntity, (user) => user.tasks)
    user: UserEntity; 
}
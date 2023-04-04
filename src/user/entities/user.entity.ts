import { TaskEntity } from "src/task/entities/task.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";

@Entity()
export class UserEntity{
    
    @PrimaryGeneratedColumn()    
    id:number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column({nullable: true})
    birthday: number;

    @Column()
    profilePictureUrl: string;

    @OneToMany(() => TaskEntity, (task) => task.user)
    tasks: TaskEntity[];
}

import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
    @Entity()

export class UserEntity{@PrimaryGeneratedColumn()
    
    id:number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column()
    birthday: number;
    @Column()
    profilePictureUrl: string;
}

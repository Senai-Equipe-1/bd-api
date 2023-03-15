import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
    @Entity()

export class User {@PrimaryGeneratedColumn()
    
    id:number;
    @Column()
    firsName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column()
    birthday: number;
    @Column()
    profilePictureUrl: string;
}

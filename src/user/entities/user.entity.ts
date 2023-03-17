import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Task } from "src/task/entities/task.entity";

@Entity()
export class User {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fisrtName:string;

    @Column()
    lastName:string;

    @Column()
    birthday:number;

    @Column()
    email:string;

    @Column()
    profilePictureURL:string;

    @OneToMany(() => Task ,(Task) => Task.user)
    task : Task[];
}

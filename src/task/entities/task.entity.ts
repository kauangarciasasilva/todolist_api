import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Task {
    [x: string]: any;

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    taskDescription:string;

    @Column()
    createDate:number;

    @Column()
    status:boolean;

    @ManyToOne(() => User ,(user) => user.Tasks)
    tasks : Task[];
}

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    author: string;

    @CreateDateColumn()
    createdDate: Date;

    @Column("text")
    message: string;

}

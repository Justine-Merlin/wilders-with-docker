import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Language } from "./language.entity";
import { Score } from "./score.entity";

@Entity('wilders')
export class Wilder {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdDate?: Date
    
    @Column("text")
    first_name: string

    @Column("text")
    last_name: string

    @Column("int", {nullable: true})
    age?: number

    @ManyToMany(() => Language,  {eager: true})
    @JoinTable()
    languages?: Language[]

    @OneToMany(() => Score, (score) => score.wilder)
    scores?: Score[]
}
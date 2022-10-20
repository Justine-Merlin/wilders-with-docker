import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Language } from "./language.entity";
import { Wilder } from "./wilder.entity";

@Entity('scores')
export class Score {
    @PrimaryGeneratedColumn()
    id: number

    @Column("int",{nullable: false})
    value: number

    @CreateDateColumn()
    createdDate: Date

    @ManyToOne(() => Wilder, (wilder) => wilder.scores, {onDelete: "CASCADE", eager: true})
    wilder: Wilder

    @ManyToOne(() => Language, (language) => language.scores, {eager: true})
    language: Language
}

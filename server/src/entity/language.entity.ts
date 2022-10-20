import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Score } from "./score.entity";
// import { Wilder } from "./wilder.entity";


@Entity('languages')
export class Language {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text", {nullable: false, unique: true})
    label: string

    @OneToMany(() => Score, (score) => score.language, {onDelete: "CASCADE"})
    scores: Score

    // @ManyToMany(() => Wilder)
    // wilders: Wilder[]
}

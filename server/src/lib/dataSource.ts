import {DataSource} from 'typeorm';
import { Language } from '../entity/language.entity';
import { Score } from '../entity/score.entity';
import { Wilder } from '../entity/wilder.entity';

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "db",
  username: "root",
  password: "root",
  database: "wilders",
  synchronize: true,
  entities: [
    Wilder,
    Language,
    Score
  ],
  logging: ["query", "error"],
})

export default dataSource;
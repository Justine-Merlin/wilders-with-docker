import { Repository } from "typeorm";
import { Language } from "../entity/language.entity";
import dataSource from "../lib/dataSource";

const db: Repository<Language> = dataSource.getRepository('Language');

export const getLanguages = async () => {
  return await db.find({
    relations: {
      scores: true
    }
  });
}

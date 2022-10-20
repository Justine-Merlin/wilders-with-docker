import { DeepPartial, Repository } from "typeorm";
import * as wilderController from '../controllers/wilder.controller';

import { Score } from "../entity/score.entity";
import { INewScore } from "../interfaces";
import dataSource from "../lib/dataSource";

const db: Repository<Score> = dataSource.getRepository('Score');

export const getAllScores = async (): Promise<Score[]> => {
  return await db.find();
};

export const registerNewScore = async (newScore: INewScore): Promise<INewScore & Score> => {
  return await db.save(newScore)
};

import { DeleteResult, FindOperator, ObjectLiteral, UpdateResult } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Language } from "./entity/Language.entity";
import { Score } from "./entity/Score.entity";
import { Wilder } from "./entity/Wilder.entity";
 
  export interface IWilderInfos extends Wilder {
    id?: number;
  }
  export interface IWilderUpdateInfos extends Wilder {
    id: string;
  }
  export interface INewScore extends Score {
    id?: number;
    createdDate?: Date
  }

  export interface IScoreController extends IController {
    getAllScores: () => Promise<Score[]>;
    getScoresByNameOrder: (direction: FindOptionsOrderValue | undefined) => Promise<Score[]>;
    getScoresByScoresOrder: (direction: FindOptionsOrderValue | undefined) => Promise<Score[]>;
    getScoresByLanguagesOrder: (direction: FindOptionsOrderValue | undefined) => Promise<Score[]>;
    
  }
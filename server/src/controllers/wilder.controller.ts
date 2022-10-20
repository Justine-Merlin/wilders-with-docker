import { DeleteResult, ObjectLiteral, Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Wilder } from "../entity/wilder.entity";
import { IWilderInfos } from "../interfaces";
import dataSource from "../lib/dataSource";

const db: Repository<Wilder> = dataSource.getRepository('Wilder');

export const getWilders = async (): Promise<Wilder[]> => {
  return await db.find();
};

export const getWilderById = async (id: number): Promise<Wilder | null> => {
  return await db.findOne({
    relations: {
      scores: true
    },
    where: {
      id: id
    }
  });
};

export const createNewWilder = async (wilder: IWilderInfos): Promise<Wilder> => {
  return await db.save(wilder);
};

export const deleteWilder = async (id: number): Promise<DeleteResult> => {
  return await db.delete(id);
};

export const updateWilder = async (id: number, data: QueryDeepPartialEntity<ObjectLiteral>) => {
  return await db.update(id, data);
};
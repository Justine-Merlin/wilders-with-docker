import { ObjectLiteral } from 'typeorm';
import * as wilderController from '../controllers/wilder.controller';

export default {
  Query: {
    getWilders: async (_: undefined, {}, context: undefined, infos: any) => {
      const wilders = await wilderController.getWilders();
      return {wilders, success: true};
    },
    getWilderById: async (_: undefined, args: ObjectLiteral) => {
      const id = args.id;      
      const wilder = await wilderController.getWilderById(id);
      return wilder;
    }
  },
  Mutation: {
    createNewWilder: async (_: undefined, args: ObjectLiteral) => {
      console.log(args.newWilder);
      
      const newWilder = await wilderController.createNewWilder(args.newWilder);
      return newWilder;
    },
    updateWilder: async (_: undefined, args: ObjectLiteral) => {
      const {id, dataUpdated} = args;      
      const updatedResult = await wilderController.updateWilder(id, dataUpdated);
      return updatedResult.affected;
    },
    deleteWilder: async (_: undefined, args: ObjectLiteral) => {
      const deleteWilder = await wilderController.deleteWilder(args.id);
      return deleteWilder.affected;
    },
  }
}
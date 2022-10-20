import { ObjectLiteral } from 'typeorm';
import * as scoreController from '../controllers/score.controller';

export default {
  Query: {
    getAllScores: async () => {
      const scores = await scoreController.getAllScores();
      return scores;
    },
  },
  Mutation: {
    registerNewScore: async (_: undefined, args: ObjectLiteral) => {
      const newScore = await scoreController.registerNewScore(args.newScore);
      return newScore;
    },
  }
}
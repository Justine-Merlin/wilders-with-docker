import * as languageController from '../controllers/language.controller';


export default {
  Query: {
    getAllLanguages: async () => {
      const languages = await languageController.getLanguages();
      console.log(languages);
      
      return languages;
    }
  }
}
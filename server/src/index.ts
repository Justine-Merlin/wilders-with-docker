import "reflect-metadata";
import { ApolloServer} from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './schemas';
import dataSource from './lib/dataSource';


const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(async ({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  await dataSource.initialize();
})
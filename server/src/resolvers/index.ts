import { mergeResolvers } from "@graphql-tools/merge";
import wilderResolver from "./wilder.resolver";
import scoreResolver from "./score.resolver";
import languageResolver from "./language.resolver";

import { resolvers as scalarResolvers } from "graphql-scalars";

const resolvers = [wilderResolver, scoreResolver, languageResolver, scalarResolvers];

export default mergeResolvers(resolvers);
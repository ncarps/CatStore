import { mergeResolvers } from "merge-graphql-schemas";

import Cat from "./Cat";
import CatStore from "./Catstore";
import Student from "./Student";

const resolver = [Cat, CatStore, Student];

export default mergeResolvers(resolver);

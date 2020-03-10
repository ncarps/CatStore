import { mergeTypes } from "merge-graphql-schemas";

import Cat from "./Cat";
import CatStore from "./CatStore";
import Student from "./Student";

const typeDefs = [Cat, CatStore, Student];

export default mergeTypes(typeDefs, { all: true });

import mongoose from "mongoose";
import { ObjectID } from "mongodb";
import Cat from "./Cat";
import CatStore from "./CatStore";
const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const CatStoreSchema = new Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  year: {
    type: String
  },
  section: {
    type: String
  },
  address: {
    type: String
  },
  year: {
    type: String
  },
  cats: [Cat.schema],
  catstore: [CatStore.schema]
});

export default mongoose.model("Student", CatStoreSchema);

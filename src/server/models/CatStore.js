import mongoose from "mongoose";
import { ObjectID } from "mongodb";
import Cat from "./Cat";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const CatStoreSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  cats: [Cat.schema]
});

export default mongoose.model("CatStore", CatStoreSchema);

import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const CatSchema = new Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  breed: {
    type: String,
    enum: ["PUSAKAL", "PERSIAN"]
  }
});

export default mongoose.model("Cat", CatSchema);

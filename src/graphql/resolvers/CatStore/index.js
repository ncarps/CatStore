import CatStore from "../../../server/models/CatStore";
import Cat from "../../../server/models/Cat";

export default {
  Query: {
    catStore: () => CatStore.find(),
    getCatStore: (_, { _id }) => CatStore.findById({ _id }),

    testSelectAllCatStoreBreed: async (_, { catStore, breed }) => {
      const storecats = await CatStore.findById({ _id: catStore }).exec();
      const catss = cat => {
        return cat.breed == breed;
      };

      return {
        id: storecats._id,
        name: storecats.name,
        address: storecats.address,
        cats: storecats.cats.filter(catss)
      };
    }
  },
  Mutation: {
    createCatStore: async (_, { input }) => {
      const kitty = new CatStore(input);
      await kitty.save();
      return kitty;
    },
    deleteCatStore: async (_, { id }) => {
      return await CatStore.findByIdAndRemove(id);
    },
    updateCatStore: async (_, { input }) => {
      return await CatStore.findOneAndUpdate(
        { _id: input.id },
        { ...input },
        { new: true }
      );
    },

    testCatStore: async (_, { cat, catStore }) => {
      const catss = await Cat.findById({ _id: cat }).exec();
      const storecats = await CatStore.findByIdAndUpdate(
        { _id: catStore },
        {
          $push: { cats: catss }
        },
        { new: true }
      );
      return storecats;
    },
    testDeleteCatStore: async (_, { cat, catStore }) => {
      const catss = await Cat.findById({ _id: cat }).exec();
      const storecats = await CatStore.findByIdAndUpdate(
        { _id: catStore },
        {
          $unset: { cats: catss }
        },

        { new: true }
      );
      return storecats;
    }
  }
};

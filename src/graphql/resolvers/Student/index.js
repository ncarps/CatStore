import Student from "../../../server/models/Student";
export default {
  Query: {
    student: () => Student.find(),
    async getStudent(_, { id }) {
      return await Student.findById(id);
    },
    getStudentEnum: async (_, { section }) => {
      const students = await Student.find({ section: section }).exec();
      console.log(section);
      const sections = sec => {
        return sec.section == section;
      };
      return {
        id: students._id,
        name: students.name,
        lastname: students.lastname,
        year: students.year,
        section: students.section,
        address: students.address,
        Student: students.filter(sections)
      };
    }
  },
  Mutation: {
    createStudent: async (_, { input }) => {
      const kitty = new Student(input);
      await kitty.save();
      return kitty;
    },
    deleteStudent: async (_, { id }) => {
      return await Student.findByIdAndRemove(id);
    },
    updateStudent: async (_, { input }) => {
      return await Student.findOneAndUpdate(
        { _id: input.id },
        { ...input },
        { new: true }
      );
    }
  }
};

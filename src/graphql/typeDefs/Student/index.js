export default `
type Query {
    student: [Student!]!
    getStudent(id:ID!): Student!
    getStudentEnum(section: Section!): Student!
    }
    enum Year{
        FIRST_YEAR
        SECOND_YEAR
        THIRD_YEAR
        FOURTH_YEAR
    }
    enum Section{
        EINSTEIN
        NEWTON
        ROUSSEAU
        KUYA_KIM
    }
    input CreateStudentInput{  
        name: String!
        lastname: String!
        year: Year!
        section: Section!
        address: String!
    }
    input UpdatestudentInput{
        id:ID!
        name: String!
        lastname: String!
        year: Year!
        section: Section!
        address: String!
    }
type Student{
    id: ID!
    name: String!
    lastname: String!
    year: String!
    section: String!
    address: String!
}
type Mutation{
    createStudent(input:CreateStudentInput!): Student!   
    updateStudent(input: UpdatestudentInput!):Student!
    deleteStudent(id:ID!):Student!
}
`;

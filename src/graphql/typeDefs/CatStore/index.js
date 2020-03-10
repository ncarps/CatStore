export default `

type Query {
        
        getCatStore(id:ID!): CatStore!
        catStore: [CatStore!]!
        testSelectAllCatStoreBreed(catStore:ID!,breed:Breed!):CatStore!
        
    }
    
type CatStore{
    id: ID!
    name: String!
    address: String
    cats: [Cat]
    
}
input CreateCatStoreInput{
    name: String!
    address: String!
}
input UpdateCatStoreInput{
    id:ID!
    name: String!
    address: String!
}
type Mutation{
    createCatStore(input: CreateCatStoreInput!):CatStore!   
    deleteCatStore(id:ID!):CatStore!
    updateCatStore(input: UpdateCatStoreInput!):CatStore!
    testCatStore(catStore:ID!,cat:ID!):CatStore!
    testDeleteCatStore(catStore:ID!,cat:ID!):CatStore!
}
`;

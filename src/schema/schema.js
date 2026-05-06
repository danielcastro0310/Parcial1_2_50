export const typeDefs = `#graphql
  type Department {
    id: ID!
    name: String!
    description: String!
    cityCapitalId: Int
    municipalities: Int
    surface: Int
    population: Int
    phonePrefix: String
    countryId: Int
    regionId: Int
    region: Region
  }

  type Region {
    id: ID!
    name: String!
    description: String!
    departments: [Department!]!
  }

  type Query {
    departmentById(id: ID!): Department
    departmentByName(name: String!): Department
    allDepartments: [Department!]!
    departmentsByRegionId(regionId: ID!): [Department!]!
    departmentsByMinPopulation(minPopulation: Int!): [Department!]!
    regionById(id: ID!): Region
    regionByName(name: String!): Region
    allRegions: [Region!]!
  }
`;
const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

  # banco de questões.
  type bank {
    pergunta: String
    alternativas: [String]
    alternativa_correta: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    banks: [bank]
  }
`;

const banks = [
  {
    pergunta: 'quantos lados tem um quadrado?',
    alternativas: ['1', '6', '23', '3', '4'],
    alternativa_correta: 5
  },
  {
    pergunta: 'quantos lados tem um triangulo?',
    alternativas: ['5', '3', '32', '1', '4'],
    alternativa_correta: 2
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves bank from the "bank" array above.
const resolvers = {
  Query: {
    banks: () => banks,
  },
};


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

















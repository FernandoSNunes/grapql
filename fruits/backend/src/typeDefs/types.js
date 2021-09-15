const { gql } = require("apollo-server");
const types = gql`
type Question {
  id: ID!
  pergunta: String
  alternativas: [String]
  alternativa_correta: Int
}

`;
module.exports = types;
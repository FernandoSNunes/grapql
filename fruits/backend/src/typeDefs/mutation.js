const { gql } = require("apollo-server");
const mutation = gql`
   type Mutation {
      createQuestion(question: QuestionInput): Question
      updateQuestion(id: String, question: QuestionInput): Question
      deleteQuestion(id: String): Question
   }
   input QuestionInput {
    pergunta: String
    alternativas: [String]
    alternativa_correta: Int
   }
   
`;
module.exports = mutation;
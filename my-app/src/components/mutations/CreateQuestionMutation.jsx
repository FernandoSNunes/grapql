// 1
import {
  commitMutation,
} from 'react-relay'
import ModernEnvironment from '../../ModernEnvironment'
import graphql from 'babel-plugin-relay/macro';

// 2
const mutation = graphql`
mutation CreateQuestionMutation($input: QuestionInput!) {
    createQuestion(question: $input) {
      pergunta
      alternativas
      alternativa_correta
    }
  }
`

// 3
export default (pergunta, alternativas, alternativa_correta, callback) => {
  // 4
  const variables = {
    input: {
      pergunta,
      alternativas,
      alternativa_correta
    },
  }

  // 5
  commitMutation(
    ModernEnvironment,
    {
      mutation,
      variables,
      // 6
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
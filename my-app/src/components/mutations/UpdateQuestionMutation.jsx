// 1
import {
  commitMutation,
} from 'react-relay'
import ModernEnvironment from '../../ModernEnvironment'
import graphql from 'babel-plugin-relay/macro';

// 2
const mutation = graphql`
mutation UpdateQuestionMutation($id : String, $input: QuestionInput!) {
  updateQuestion(id: $id, question: $input) {
      pergunta
      alternativas
      alternativa_correta
    }
  }
`

// 3
export default (id, pergunta, alternativas, alternativa_correta, callback) => {
  // 4
  const variables = {
    id: id,
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
        window.location.reload()
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
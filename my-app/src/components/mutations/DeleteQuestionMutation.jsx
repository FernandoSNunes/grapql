// 1
import {
  commitMutation,
} from 'react-relay'
import ModernEnvironment from '../../ModernEnvironment'
import graphql from 'babel-plugin-relay/macro';

// 2
const mutation = graphql`
mutation DeleteQuestionMutation($id : String) {
  deleteQuestion(id: $id) {
    id
    }
  }
`

// 3
export default (id) => {
  // 4
  const variables = {
    id: id,
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
      },
      //estou fazendo uma implementacao simples entao nao fiz o updater, mas entendi a ideia
      //interressante ter o optmisticUpdater para usar enquanto nao se sabe se a mutation funcionou 
      onError: err => console.error(err),
    },
  )
}
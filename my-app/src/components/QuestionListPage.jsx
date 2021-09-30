import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import Question from './Question'

const QuestionListPageQuery = graphql`
  query QuestionListPageQuery{
    questions{

      ...Question_question
    }
  }
`

class QuestionListPage extends Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={QuestionListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <Question />
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default QuestionListPage
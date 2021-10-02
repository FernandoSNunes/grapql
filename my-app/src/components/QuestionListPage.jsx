import React, { Component } from 'react'
import {
  QueryRenderer
} from 'react-relay'

import graphql from 'babel-plugin-relay/macro';
import environment from '../Environment'
import Question from './Question'

const QuestionListPageQuery = graphql`
  query QuestionListPageQuery{
    questions{
      id
      pergunta

      ...Question_question
    }
  }
`

class QuestionListPage extends Component {

  render() {
    console.log("questionPage")
    console.log(this.props)
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={QuestionListPageQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return (

                <Question questions={this.props.questions} />
              )
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }

}

export default QuestionListPage
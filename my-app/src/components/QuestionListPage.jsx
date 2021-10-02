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

      ...Question_question
    }
  }
`

class QuestionListPage extends Component {

  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          query={QuestionListPageQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <Question question={this.props.question} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }

}

export default QuestionListPage
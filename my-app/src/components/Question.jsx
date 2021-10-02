import React, { Component } from 'react'
import {
  createFragmentContainer
} from 'react-relay'

import graphql from 'babel-plugin-relay/macro';

class Question extends Component {

  render() {
    return (
      <div>
        <div>{this.props.question} (aaaa) </div>
      </div>
    )
  }


}

export default createFragmentContainer(Question, {
  question: graphql`

  fragment Question_question on Question{
    id
    pergunta
    alternativa_correta
  }

`
}
)
import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class Question extends Component {

  render() {
    return (
      <div>
        <div>{this.props.questions.pergunta} ({this.props.questions.alternativa_correta})</div>
      </div>
    )
  }

  _voteForQuestion = async () => {
    // ... you'll implement this in chapter 6  
  }

}

export default createFragmentContainer(Question, graphql`

  fragment Question_question on Question{
    id
    pergunta
    alternativa_correta
  }

`)
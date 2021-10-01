// import React, { Component } from 'react'
// import Question from './Question'
// import {
//   createFragmentContainer,
//   graphql
// } from 'react-relay'

// class QuestionList extends Component {

//   render() {



//     return (
//       <div>
//         {this.props.viewer.allQuestions.edges.map(({ node }) =>
//           <link key={node.__id} link={node} />
//         )}
//       </div>
//     )
//   }

// }

// export default createFragmentContainer(QuestionList, graphql`

//   fragment QuestionList_viewer on Viewer{
//     allQuestions(last: 100) @connection(key: "QuestionList_allQuestions", filters: []) {
//       edges {
//         node {
//           ...Question_question
//         }
//       }
//     }
//   }

// `)



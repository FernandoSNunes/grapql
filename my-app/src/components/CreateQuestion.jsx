import React, { Component } from 'react'

class CreateQuestion extends Component {

  state = {
    description: '',
    url: ''
  }

  render() {
    console.log();

    return (

      <>ibwsobvcbw {this.dados} wbecuwicbiweru</>
    )

  }

  _createQuestion = () => {
    // ... you'll implement this in a bit
  }

}

export default CreateQuestion

// import React, { Component } from 'react'

// class CreateQuestion extends Component {

//   state = {
//     description: '',
//     url: ''
//   }

//   render() {

//     return (
//       <div>
//         <div className='flex flex-column mt3'>
//           <input
//             className='mb2'
//             value={this.state.description}
//             onChange={(e) => this.setState({ description: e.target.value })}
//             type='text'
//             placeholder='A description for the question'
//           />
//           <input
//             className='mb2'
//             value={this.state.url}
//             onChange={(e) => this.setState({ url: e.target.value })}
//             type='text'
//             placeholder='The URL for the question'
//           />
//         </div>
//         <div
//           className='button'
//           onClick={() => this._createQuestion()}
//         >
//           submit
//         </div>
//       </div>
//     )

//   }

//   _createQuestion = () => {
//     // ... you'll implement this in a bit
//   }

// }

// export default CreateQuestion
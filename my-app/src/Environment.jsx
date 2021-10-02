const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime')

// 2
const store = new Store(new RecordSource())

// 3
const network = Network.create((operation, variables) => {
  // 4
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
})

// 5
const environment = new Environment({
  network,
  store,
})

// 6
export default environment





// import 'todomvc-common';

// import * as React from 'react';
// import ReactDOM from 'react-dom';

// import { QueryRenderer, graphql } from 'react-relay';

// import {
//   Environment,
//   Network,
//   RecordSource,
//   Store,
//   type RequestNode,
//   type Variables,
// } from 'relay-runtime';

// // 2
// const store = new Store(new RecordSource())

// async function fetchQuery(
//   operation: RequestNode,
//   variables: Variables,
// ): Promise<{}> {
//   const response = await fetch('http://localhost:4000/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: operation.text,
//       variables,
//     }),
//   });

//   return response.json();
// }



// // 6
// export default environment
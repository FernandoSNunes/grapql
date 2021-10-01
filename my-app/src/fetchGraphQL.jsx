// async function fetchGraphQL(text, variables) {


//   // Fetch data from GitHub's GraphQL API:
//   const response = await fetch('http://localhost:4000/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: `
//       query questions {
//         questions {
//           id
//           pergunta
//           alternativas
//           alternativa_correta
//         }
//       }
//         `,
//     }),
//     // Get the response as JSON
//   });
//   return await response.json();
// }

// export default fetchGraphQL;
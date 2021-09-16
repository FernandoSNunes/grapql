import React, { useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import "./App.css"

const { Suspense } = React;

// Define a query
const RepositoryNameQuery = graphql`
  query AllQuestionsQuery {
    questions {
      id
      pergunta
      alternativas
      alternativa_correta
    }
  }
  `;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  // query variables 
}
);

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.

function Call_graphql_aux(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
  //useEffect(() => { console.log(data.questions) }, [data])

  return (
    <div >



      <div className="row ">

        {data?.questions?.map((question, index) =>
          <div className="col-sm-6">
            <div className="card Caixas shadow bg-transparent" >

              <div className="card-body " >
                <p className="App card-title" key={index}>{question.pergunta}</p>
                <div className="Question card-text">

                  <p >  {question.alternativas[0]} {1 === question.alternativa_correta ? ("<-") : ("")}</p>
                  <p >  {question.alternativas[1]} {2 === question.alternativa_correta ? ("<-") : ("")}</p>
                  <p >  {question.alternativas[2]} {3 === question.alternativa_correta ? ("<-") : ("")}</p>
                  <p >  {question.alternativas[3]} {4 === question.alternativa_correta ? ("<-") : ("")}</p>
                  <p >  {question.alternativas[4]} {5 === question.alternativa_correta ? ("<-") : ("")}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.

function AllQuestions(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <Call_graphql_aux preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}


//const =
export default AllQuestions;
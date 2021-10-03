import 'todomvc-common';

import {
  Environment,
  Network,
  RecordSource,
  Store,
  type RequestNode,
  type Variables,
} from 'relay-runtime';

// 2
const store = new Store(new RecordSource())

async function fetchQuery(
  operation: RequestNode,
  variables: Variables,
): Promise<{}> {
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
}

const ModernEnvironment: Environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

// 6
export default ModernEnvironment
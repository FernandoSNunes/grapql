/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppRepositoryNameQueryVariables = {||};
export type AppRepositoryNameQueryResponse = {|
  +banks: ?$ReadOnlyArray<?{|
    +alternativas: ?$ReadOnlyArray<?string>
  |}>
|};
export type AppRepositoryNameQuery = {|
  variables: AppRepositoryNameQueryVariables,
  response: AppRepositoryNameQueryResponse,
|};
*/


/*
query AppRepositoryNameQuery {
  banks {
    alternativas
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "bank",
    "kind": "LinkedField",
    "name": "banks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "alternativas",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ce48b36c1b4548f38e68ad70d1acfd92",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery {\n  banks {\n    alternativas\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '00b7e4458862c59b05d247eba09dd101';

module.exports = node;

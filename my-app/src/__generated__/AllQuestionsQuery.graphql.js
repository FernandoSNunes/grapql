/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AllQuestionsQueryVariables = {||};
export type AllQuestionsQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +id: string,
    +pergunta: ?string,
    +alternativas: ?$ReadOnlyArray<?string>,
    +alternativa_correta: ?number,
  |}>
|};
export type AllQuestionsQuery = {|
  variables: AllQuestionsQueryVariables,
  response: AllQuestionsQueryResponse,
|};
*/


/*
query AllQuestionsQuery {
  questions {
    id
    pergunta
    alternativas
    alternativa_correta
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "questions",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pergunta",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "alternativas",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "alternativa_correta",
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
    "name": "AllQuestionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllQuestionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ad11c03fe7479ec00bcc08773201afd4",
    "id": null,
    "metadata": {},
    "name": "AllQuestionsQuery",
    "operationKind": "query",
    "text": "query AllQuestionsQuery {\n  questions {\n    id\n    pergunta\n    alternativas\n    alternativa_correta\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9020e72e0e30fdd90e2c30477b96e36f';

module.exports = node;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Question_question$ref = any;
export type QuestionListPageQueryVariables = {||};
export type QuestionListPageQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +id: string,
    +pergunta: ?string,
    +alternativas: ?$ReadOnlyArray<?string>,
    +$fragmentRefs: Question_question$ref,
  |}>
|};
export type QuestionListPageQuery = {|
  variables: QuestionListPageQueryVariables,
  response: QuestionListPageQueryResponse,
|};
*/


/*
query QuestionListPageQuery {
  questions {
    id
    pergunta
    alternativas
    ...Question_question
  }
}

fragment Question_question on Question {
  id
  pergunta
  alternativa_correta
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pergunta",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alternativas",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "questions",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Question_question"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QuestionListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "questions",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "afdf6683036ac4851eb8e350d46e0974",
    "id": null,
    "metadata": {},
    "name": "QuestionListPageQuery",
    "operationKind": "query",
    "text": "query QuestionListPageQuery {\n  questions {\n    id\n    pergunta\n    alternativas\n    ...Question_question\n  }\n}\n\nfragment Question_question on Question {\n  id\n  pergunta\n  alternativa_correta\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd147219ce6469071fa6dfd9c2e5f377b';

module.exports = node;

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
    +$fragmentRefs: Question_question$ref
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
    ...Question_question
    id
  }
}

fragment Question_question on Question {
  id
  pergunta
  alternativa_correta
}
*/

const node/*: ConcreteRequest*/ = {
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
            "name": "alternativa_correta",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "05ef3495417f4fa03e8243de94b2fe68",
    "id": null,
    "metadata": {},
    "name": "QuestionListPageQuery",
    "operationKind": "query",
    "text": "query QuestionListPageQuery {\n  questions {\n    ...Question_question\n    id\n  }\n}\n\nfragment Question_question on Question {\n  id\n  pergunta\n  alternativa_correta\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c156f35c5eac923164430085dfbf3cf6';

module.exports = node;

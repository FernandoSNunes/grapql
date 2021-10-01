/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Question_questions$ref = any;
export type QuestionListPageQueryVariables = {||};
export type QuestionListPageQueryResponse = {|
  +questions: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Question_questions$ref
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
    ...Question_questions
    id
  }
}

fragment Question_questions on Question {
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
            "name": "Question_questions"
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
    "cacheID": "6fc680ca52afb6cb6b496036b0383ea7",
    "id": null,
    "metadata": {},
    "name": "QuestionListPageQuery",
    "operationKind": "query",
    "text": "query QuestionListPageQuery {\n  questions {\n    ...Question_questions\n    id\n  }\n}\n\nfragment Question_questions on Question {\n  id\n  pergunta\n  alternativa_correta\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '0782478d49a76c1a48ab5f63ae9c6946';

module.exports = node;

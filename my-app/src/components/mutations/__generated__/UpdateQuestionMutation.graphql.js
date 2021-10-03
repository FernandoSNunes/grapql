/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionInput = {|
  pergunta?: ?string,
  alternativas?: ?$ReadOnlyArray<?string>,
  alternativa_correta?: ?number,
|};
export type UpdateQuestionMutationVariables = {|
  id?: ?string,
  input: QuestionInput,
|};
export type UpdateQuestionMutationResponse = {|
  +updateQuestion: ?{|
    +pergunta: ?string,
    +alternativas: ?$ReadOnlyArray<?string>,
    +alternativa_correta: ?number,
  |}
|};
export type UpdateQuestionMutation = {|
  variables: UpdateQuestionMutationVariables,
  response: UpdateQuestionMutationResponse,
|};
*/


/*
mutation UpdateQuestionMutation(
  $id: String
  $input: QuestionInput!
) {
  updateQuestion(id: $id, question: $input) {
    pergunta
    alternativas
    alternativa_correta
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  },
  {
    "kind": "Variable",
    "name": "question",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "pergunta",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alternativas",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alternativa_correta",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateQuestionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "updateQuestion",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateQuestionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "updateQuestion",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "16c67c888338bb2bc750c42becc949e5",
    "id": null,
    "metadata": {},
    "name": "UpdateQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateQuestionMutation(\n  $id: String\n  $input: QuestionInput!\n) {\n  updateQuestion(id: $id, question: $input) {\n    pergunta\n    alternativas\n    alternativa_correta\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f0ec3ecfffae06bf7cbf41d6e4bab7e';

module.exports = node;

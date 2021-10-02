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
export type CreateQuestionMutationVariables = {|
  input: QuestionInput
|};
export type CreateQuestionMutationResponse = {|
  +createQuestion: ?{|
    +pergunta: ?string,
    +alternativas: ?$ReadOnlyArray<?string>,
    +alternativa_correta: ?number,
  |}
|};
export type CreateQuestionMutation = {|
  variables: CreateQuestionMutationVariables,
  response: CreateQuestionMutationResponse,
|};
*/


/*
mutation CreateQuestionMutation(
  $input: QuestionInput!
) {
  createQuestion(question: $input) {
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
    "name": "input"
  }
],
v1 = [
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
    "name": "CreateQuestionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "createQuestion",
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
    "name": "CreateQuestionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "kind": "LinkedField",
        "name": "createQuestion",
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
    "cacheID": "ea9f45dad8cc71f17693181405763c0d",
    "id": null,
    "metadata": {},
    "name": "CreateQuestionMutation",
    "operationKind": "mutation",
    "text": "mutation CreateQuestionMutation(\n  $input: QuestionInput!\n) {\n  createQuestion(question: $input) {\n    pergunta\n    alternativas\n    alternativa_correta\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ae6a5ccdff06d26bbcc7f7e06e87cb6';

module.exports = node;

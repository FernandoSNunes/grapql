/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Question_questions$ref: FragmentReference;
declare export opaque type Question_questions$fragmentType: Question_questions$ref;
export type Question_questions = {|
  +id: string,
  +pergunta: ?string,
  +alternativa_correta: ?number,
  +$refType: Question_questions$ref,
|};
export type Question_questions$data = Question_questions;
export type Question_questions$key = {
  +$data?: Question_questions$data,
  +$fragmentRefs: Question_questions$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Question_questions",
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
  "type": "Question",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd345ba933feed7434537779a691c23d5';

module.exports = node;

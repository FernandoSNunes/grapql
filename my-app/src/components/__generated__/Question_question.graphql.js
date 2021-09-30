/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Question_question$ref: FragmentReference;
declare export opaque type Question_question$fragmentType: Question_question$ref;
export type Question_question = {|
  +id: string,
  +pergunta: ?string,
  +alternativa_correta: ?number,
  +$refType: Question_question$ref,
|};
export type Question_question$data = Question_question;
export type Question_question$key = {
  +$data?: Question_question$data,
  +$fragmentRefs: Question_question$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Question_question",
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
(node/*: any*/).hash = '1cff538f435edfe70f0ea029b524bee3';

module.exports = node;

---json
{
  "title": "FLUID-6419",
  "summary": "eslint-config-fluid preventing the use of .catch() and .finally()",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Gregor Moss",
  "date": "2019-10-30T13:43:02.694-0400",
  "updated": "2024-07-25T12:28:36.813-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "fluid-eslint-config"
  ],
  "environment": "Windows 10 1903\\\nNode v10.15.3\\\neslint-config-fluid 1.1.0\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-10-31T08:07:18.076-0400",
      "body": "It appears that setting `allowKeywords` to false is to follow ECMAScript version 3 style of avoiding dot notation for reserved words. (see: <https://eslint.org/docs/rules/dot-notation#require-dot-notation-dot-notation> ) As of ECMAScript 5.1 reserved words only apply to identifiers and not identifierNames.\n\nSee: \n\n* <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords>\n* <https://www.ecma-international.org/ecma-262/5.1/#sec-7.6>\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-25T12:28:36.813-0400",
      "body": "I’m not able to reproduce this issue and I’m not noticing configuration for `dot-notation` anymore: <https://github.com/fluid-project/eslint-config-fluid/blob/51e2cb087c68f1dc43e2b23fcb308e4a68ea0644/.eslintrc-fluid.json>&#x20;\n"
    }
  ]
}
---
I attempted to use the [.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) and [.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) functions associated with the Promise object, but the linter fails with the following feedback:

`"error .catch is a syntax error dot-notation"`

 

The source of the issue to this particular setting in the eslint config file: <https://github.com/fluid-project/eslint-config-fluid/blob/041cd0f476fc02d0293914962c14912750e753f5/.eslintrc.json#L26>

The particular setting of the allowKeywords flag should be considered/reconsidered with .catch and .finally in mind.

 

The code that fails the linter looks like the following

```javascript
somePromise.catch(function () {
    // do some error handling
}).finally(function () {
    // do some final things
});
```

 

Whereas this is somewhat kludgy but passes linting

```javascript
somePromise["catch"](function () {
    // do some error handling
})["finally"](function () {
    // do some final things
});
```

 

cc Tony Atkins \[RtF] and Antranig Basman

        
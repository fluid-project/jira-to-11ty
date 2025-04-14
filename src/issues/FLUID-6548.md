---json
{
  "title": "FLUID-6548",
  "summary": "Remove valid-jsdoc rules from eslint-config-fluid",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2020-09-10T16:07:35.696-0400",
  "updated": "2024-07-22T10:35:33.455-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-09-16T09:59:52.152-0400",
      "body": "Comparison of deprecated valid-jsdoc rules compared to the eslint-plugin-config.\n\n<https://github.com/gajus/eslint-plugin-jsdoc/wiki/Comparison-with-deprecated-JSdoc-related-ESLint-rules>\n"
    }
  ]
}
---
The valid-jsdoc rules were deprecated from eslint in v5.10.0. We should remove them from the eslint-config-fluid to prevent warnings or errors from those using the community config with newer versions of eslint. 

see: <https://eslint.org/docs/rules/valid-jsdoc>

As an alternative we can recommend using [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc) and provide a default configuration file to mixin for it. 

see: <https://eslint.org/docs/developer-guide/shareable-configs>

 

        
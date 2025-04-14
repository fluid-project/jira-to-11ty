---json
{
  "title": "FLUID-6247",
  "summary": "Update fluid-eslint-config settings to enforce consistent JSDocs formatting.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-02-13T05:29:49.152-0500",
  "updated": "2024-07-22T10:35:16.292-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "fluid-eslint-config"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-02-13T05:34:22.554-0500",
      "body": "<https://github.com/fluid-project/eslint-config-fluid/pull/3>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-02-13T05:38:38.739-0500",
      "body": "To assist in reviewing, here are the docs for the option in question:\n\n<https://eslint.org/docs/rules/valid-jsdoc>\n"
    }
  ]
}
---
As discussed on recent architecture meetings, I would like to update the fluid-eslint-config package we use to store our shared ESLint settings to validate JSDocs, as follows:

1. JSDocs are not required for all functions, but where they are present, they must be valid.
2. We should consistently use "param" instead of "arg" or "argument".
3. We should consistently use "return" instead of "returns".
4. We should consistently use uppercase param types, as in "Boolean" vs. "boolean".
5. All parameters should have a description.
6. Return content should be required if the function returns, and disallowed if the function does not return anything.
7. The return should have a description.
8. The return should have a type.
9. The implicit rules should be enforced, such as requiring all parameters to be documented, and in the correct order.

As part of testing this, I would also submit a related pull against Infusion to ensure that it meets the new standards.

        
---json
{
  "title": "FLUID-5914",
  "summary": "Fix linting error in .eslintrc...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-06-07T05:48:52.627-0400",
  "updated": "2016-07-08T09:08:01.941-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-07T05:58:49.236-0400",
      "body": "As [using the ](http://eslint.org/docs/user-guide/configuring#configuration-file-formats)`.eslintrc`[ filename is deprecated](http://eslint.org/docs/user-guide/configuring#configuration-file-formats), I will simply rename the file to `.eslintrc.json`, which will implicitly add it to our JSON linting rules.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-07T06:07:58.582-0400",
      "body": "The migration from using the JSHint \"strict\" setting to using `strict: [\"error\", \"function\"]` causes problems with node code.  Even if the environment is set correctly, ESLint reports errors with node code that has global `\"use strict\"` statements.  In reading [the documentation](http://eslint.org/docs/rules/strict), it  seems like `string: [\"error\", \"safe\"]` is more appropriate, as it correctly changes the behavior depending on the environment.\n\ncc:  @@Antranig Basman @@Cindy Li\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-07T06:54:20.463-0400",
      "body": "@@Antranig Basman and @@Cindy Li, we should discuss this briefly today.  In short, the current `strict: [\"error\", \"function\"]` setting will complain unless you wrap all of your node code in a function.   I have tried the \"safe\" setting, it will work for code like that used in node-based tests, Kettle, gpii-express, but will fail for infusion itself, because the two node files here use a wrapper function.\n\nAs far as I can see, the options are:\n\n1. \"function\" - works for browser code, requires changes to existing node code\n2. \"global\" - works for node code, requires changes to existing browser code\n3. \"safe\" - Works for everything except node code that already uses a wrapper function.\n\nI would argue for setting it to \"safe\" and making the \"use strict\" statements global in the node tests and `fluid.js` (lowercase, i.e. what is \"require\"d from node).\n\nIf we need to use wrapper functions for some reason, we should discuss how to balance the default settings with things like Kettle and gpii-express, which definitely will not pass the current settings.  In that case, my proposal would be to add comments in the node tests and `fluid.js` to disable the warning.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-08T10:19:18.082-0400",
      "body": "@@Antranig Basman and I discussed the new \"safe\" setting, and I have tested this with `gpii-express`.  The only setting most people should need to adjust from the updated standard file is the \"env\" setting.\n"
    }
  ]
}
---
The new `.eslintrc` file has a linting error (trailing comma).  I will submit a quick PR to fix this, and also to add .`eslintrc` to the jsonlint checks.

        
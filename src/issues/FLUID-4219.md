---json
{
  "title": "FLUID-4219",
  "summary": "Without !importants in FSS, some parts of themes in UIO (ex. bg colour) don't apply",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "heidi valles",
  "date": "2011-05-11T11:23:51.607-0400",
  "updated": "2013-04-15T15:27:00.834-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:06:57.850-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-04T17:00:44.901-0400",
      "body": "Work is started in branch: <https://github.com/michelled/infusion/commits/FLUID-4219>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-04T17:04:20.632-0400",
      "body": "Here is the list of tasks remaining for this work:\n\n1\\. Determine the list of declarations that require important.\\\n2\\. Implement the code to read, parse, prioritize and serialize the style sheet. \\\n3\\. Parameterize read/write.\\\n4\\. Create unit tests that can be run in the browser.\\\n5\\. Figure out how to link the parser in Ant.\\\n6\\. Implement in build.js&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-07-05T13:45:03.303-0400",
      "body": "Work is continuing in my branch now: <https://github.com/colinbdclark/infusion/tree/FLUID-4219>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-07-05T13:48:13.685-0400",
      "body": "Based on conversations with Heidi (here: <http://old.nabble.com/UI-Options-and-!important-to31992616.html> and here: <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2011-07-05>), we've decided to be fairly heavy handed in adding !important to the UI Options versions of the stylesheets. This prioritySpec, used with the CSSGenerator, should do the trick:\n\ngenerator.prioritize({\\\n\"fluid-cssGenerator-allRules\": \\[\"font-size\", \"line-height\", \"font-family\", \"color\", \"background-color\", \"background-image\", \"border\", \"background\"]\\\n});\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-07-12T14:17:00.949-0400",
      "body": "Work is continuing on my branch now:  <https://github.com/mlam/infusion/tree/FLUID-4219>\n\nThe solution is almost there, however, there's a nagging bug that I have yet to figure out.   The that.stylesheet object in the CSSGenerator.js file has a value, however the that.stylesheet.cssText seems to be null.\n\nHere's what's left:\n\n1\\. Squash the bug above as described.\\\n2\\. List the stylesheets that need to be transformed in the build.properties file and load them (currently hardcoded for testing)\\\n3\\. Uncomment the code in StylesheetImportant.js to generate the transformed stylesheet and write it to a file\\\n4\\. Determine the path of where to save the transformed stylesheets (for testing, the files are currently set to overwrite itself)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-07-22T12:38:40.730-0400",
      "body": "Justin and I have refactored this work a bit and fully integrated it into our ant build system:\n\n<https://github.com/fluid-project/infusion/pull/112>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-26T18:25:14.192-0400",
      "body": "Pull request merged into project repo at 6695d855c1156f60d8bf4ae62ccf3ff26c39a295\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-27T12:49:18.290-0400",
      "body": "A couple tests need to be updated with the new theme names in UIEnhancer and UIOptions.&#x20;\n"
    }
  ]
}
---
We talked about automatically adding !importants into UIO's theme stylesheets

        
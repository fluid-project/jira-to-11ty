---json
{
  "title": "FLUID-4453",
  "summary": "Table of Contents control fails in IE6 in demo with preview",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-09-15T18:29:37.281-0400",
  "updated": "2013-04-15T15:28:09.066-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Sliding Panel",
    "UI Options"
  ],
  "environment": "IE6, WinXP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-09-15T18:29:47.260-0400",
      "body": "Bug Parade Infusion 1.4\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-09-15T19:09:52.877-0400",
      "body": "Investigation so far: The line that fails is the call to jQuery doing the DOM manipulation to insert the anchor element:\\\nanchor.insertBefore(element); \\\nTableOfContents.js line 32\\\nIt appears this is related to cross-iframe manipulation. I had hoped that it was a simple domain protection issue that would work fine when done over HTTP, but the same failure occurs in the daily build site. \\\nIt may be that we are using the \"wrong jQuery\" to perform this manipulation since the code runs fine when the iframe is not involved. Continuing to investigate\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-22T15:46:47.718-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/167> merged into project repo at d78557c041276a973ba245ff43438b866d0e0fe4\n"
    }
  ]
}
---
Checking the "table of contents" checkbox in the UIOptions demo (full preview configuration) provokes a JS error (asynchronously, as the template loads/renders) and fails to show the table of contents on IE6. The component does work correctly under IE8, and the test cases also pass under IE6. The error (in typically uselessly reported IE6 form) reads Line: 64 Char: 13 Error: "Object doesn't support this property or method", file: uiOptionsFullWithPreview.html\
I noticed this when running through the FLUID-4449 fix but the previous version in trunk failed as well.\
Almost all test cases pass in IE6 including the ToC and FullPreview ones, however the FatPanel test cases do not start in IE6.

        
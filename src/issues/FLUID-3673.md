---json
{
  "title": "FLUID-3673",
  "summary": "Relative path to inject.js in jqunit not guaranteed outside of infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-06-17T14:38:37.984-0400",
  "updated": "2014-07-30T15:29:17.131-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-06-17T14:46:54.895-0400",
      "body": "Moved the entire testswarm directory from the lib directory to the jqunit directory\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-06-21T11:28:16.555-0400",
      "body": "This actually didn't work. the path was specified relative to the js file instead of the html file it gets injected into\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-06-22T07:51:07.434-0400",
      "body": "The testswarm server also hosts a copy of the inject.js script. Now pointing at that version of the file instead of distributing one in the source code.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-06-22T14:32:43.487-0400",
      "body": "using windows.location doesn't work either as it uses the window.location from the iframe instead of from the parent page.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-14T10:28:19.183-0400",
      "body": "We no longer use testswarm and this file has been removed.\n"
    }
  ]
}
---
collectionspace has a different directory structure for their test framework than infusion uses. They are making use of infusions code, which results in the path to inject.js being incorrect in jqunit.js.

        
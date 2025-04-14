---json
{
  "title": "FLUID-2277",
  "summary": "Can't select text: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-02-20T10:06:09.000-0500",
  "updated": "2009-08-04T08:46:23.000-0400",
  "versions": [
    "0.8",
    "1.0",
    "1.1"
  ],
  "fixVersions": [
    "0.8.1",
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Inline Edit",
    "Layout Reorderer"
  ],
  "environment": "IE6, IE7, IE8 (Win XP)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3051/",
      "key": "FLUID-3051"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-07-16T16:26:40.000-0400",
      "body": "Updated. Initially the report only mentioned the lack of text selection in the Inline Edit field; however, this actually occurs for all text in the portlets.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-16T16:52:54.000-0400",
      "body": "Below is a code snippet from reorderer.js  It seems that we were intentionally preventing text selection in IE. I have removed this code and it doesn't appear that <https://fluidproject.atlassian.net/browse/FLUID-143#icft=FLUID-143> has come back. This is likely due to the rewrite of the reorderer that occurred after this bug was initially filed.\n\n// <https://fluidproject.atlassian.net/browse/FLUID-143#icft=FLUID-143>. Disable text selection for the reorderer.\\\n// ondrag() and onselectstart() are Internet Explorer specific functions.\\\n// Override them so that drag+drop actions don't also select text in IE.\\\nif ($.browser.msie) {\\\ncontainer\\[0].ondrag = function () { \\\nreturn false; \\\n}; \\\ncontainer\\[0].onselectstart = function () { \\\nreturn false; \\\n};\\\n}\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-27T17:20:00.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-28T10:35:41.000-0400",
      "body": "This has now been back ported into the 1.1.x branch\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-07-31T14:46:48.000-0400",
      "body": "I've code reviewed and tested the fix.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-04T08:46:23.000-0400",
      "body": "Closed as it has been code reviewed and tested by michelle\n"
    }
  ]
}
---
Can't select text

Steps to reproduce:

1\) Open the uPortal mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/portal/portal.html>

2\) Using the mouse, attempt to select some text from any of the portlets

Notice that you are unable to select the text.

        
---json
{
  "title": "FLUID-2326",
  "summary": "Use the accordion's options to solve display issue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-03-10T09:17:02.000-0400",
  "updated": "2011-02-22T16:27:52.388-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE, Safari\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2308/",
      "key": "FLUID-2308",
      "summary": "Accordion contents displaying under both accordion bars"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-11T12:36:50.000-0400",
      "body": "Changed to using the accordion's options to {clearStyle: true, autoHeight: false} to solve <https://fluidproject.atlassian.net/browse/FLUID-2308#icft=FLUID-2308>, now that we have updated to jQuery UI 1.7\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:52.384-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-2308#icft=FLUID-2308> describes an issue with how the accordions bar and contents are displayed after a being hidden with display: none and then shown using display: block.

The proper way to get around this issue is to set the accordion options to {clearStyle: true, autoHeight: false}. Unfortunately, at this time, an error is thrown in IE with these options.&#x20;

<http://dev.jqueryui.com/ticket/4100>

It is supposed to already be fixed in trunk, and should be available to use in jQuery UI 1.7

Changes that were maid in the temporary fix came at revision 6695

        
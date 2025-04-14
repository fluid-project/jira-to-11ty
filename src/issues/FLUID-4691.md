---json
{
  "title": "FLUID-4691",
  "summary": "Tooltips on hover hide/remove text from screen",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Nicholas Mayne",
  "date": "2012-04-04T19:09:34.931-0400",
  "updated": "2014-03-03T12:56:01.628-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-04-04T22:14:48.329-0400",
      "body": "I couldn't reproduce this issue once I upgraded to a matched set of jQuery UI and jQuery 1.7.2 - however, I did find that the rich text integration was broken completely as a result of an API change in jQuery for the $.html() function which has suffered the same kind of malign \"drift\" that affected $.val() in jQuery 1.5.1 - this now explicitly counts its arguments rather than being satisfied to see whether they have a value of \"undefined\" or not. I have pushed up a version with a fixed framework shim that seems to work for me at \\\n<https://github.com/amb26/infusion/tree/FLUID-4684>\\\nPlease test and let me know how it seems to you.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-08-26T03:38:34.251-0400",
      "body": "Resolved by commit of <https://fluidproject.atlassian.net/browse/FLUID-4684#icft=FLUID-4684> at 1f04a2\n"
    }
  ]
}
---
When using jQuery 1.7.1, if you have tooltips switched on with a RichTextEditor on the page and hover over content, that content will disappear, which means you can no longer edit it.

        
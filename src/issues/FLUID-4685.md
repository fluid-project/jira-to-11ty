---json
{
  "title": "FLUID-4685",
  "summary": "UIEnhancer always applies 1em inline styling onto <body> at initial page load",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2012-04-03T15:16:06.594-0400",
  "updated": "2013-10-04T09:21:49.105-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-04-03T16:45:55.105-0400",
      "body": "Merged into project repo at 015595483949a85d5064c66c42e6518ab695d7dc\n"
    }
  ]
}
---
UIEnhancer always applies 1em inline styling onto \<body> at initial page load regardless the original font size of the \<body> element.

        
---json
{
  "title": "FLUID-4481",
  "summary": "UIEnhancer unit test fails at identifying certain div",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2011-09-30T14:01:53.125-0400",
  "updated": "2015-06-10T10:29:47.792-0400",
  "versions": [
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": "IE6, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-06-10T10:29:38.049-0400",
      "body": "This issue is no longer valid since, 1. The example was using fss that has been removed from the infusion; 2. The environment to produce is IE 6 & 7 that infusion stops to support.\n"
    }
  ]
}
---
UIEnhancer unit test throws "invalid argument" error when a div that is detected thru container.parent() is passed into a jQuery function container.css("font-size").

\<div id="main" class="container fl-layout-linear fl-font-size-90 fl-font-sans">\
\</div>

This issue has been fixed by explicitly providing a parent div with a given "font-size" value. But this is still a potential issue.

        
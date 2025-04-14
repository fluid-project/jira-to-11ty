---json
{
  "title": "FLUID-4473",
  "summary": "Line spacing has no effect in Sakai Mock-up demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Justin Obara",
  "date": "2011-09-28T11:00:25.631-0400",
  "updated": "2013-04-15T15:27:56.668-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": "IE 9 (Win 7)\\\nSafar 5 (Mac OS 10.7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-28T11:02:16.427-0400",
      "body": "This is working fine in FF 6.\n\nAlso IE 9 works properly with the UIO Demo\\\n<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-29T15:58:58.185-0400",
      "body": "Through a conversation in the channel we've decided to go with 'normal' equating to 1.2 em. \\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2011-09-29>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-30T16:24:41.310-0400",
      "body": "Merged into project repo at ebfda190bbf4060371c6392ec8edfcb72e6036c1\n"
    }
  ]
}
---
Steps to Reproduce:

1\) Open the Sakai Mock-up demo\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Open UI Options and change the line spacing setting\
Notice that line spacing doesn't change

        
---json
{
  "title": "FLUID-4288",
  "summary": "FSS text size classes that scale down text size should not be removed when text size is set. ",
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
  "reporter": "Michelle D'Souza",
  "date": "2011-06-10T10:26:16.938-0400",
  "updated": "2011-06-13T15:11:08.276-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-10T10:26:39.462-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-10T11:01:40.817-0400",
      "body": "Pull request sent: <https://github.com/fluid-project/infusion/pull/71>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-13T15:11:08.271-0400",
      "body": "Merged into the project repo at 763c09f062a76b6240133a854e8a5b716b6b6091\n"
    }
  ]
}
---
Originally UI Options had a minimum font size control which was set in pixels. The implementation would remove all the FSS classes that scale down the font size.\
Now we have a font size control that is a multiplication factor - not a control that sets the minimum size. FSS text size classes are all based on ems and will scale text size appropriately. We should no longer remove the FSS classes when we set the font size.&#x20;

        
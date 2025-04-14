---json
{
  "title": "FLUID-3198",
  "summary": "Ensure all code that relies on mobile fss is using the most up to date class names",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-09-22T10:56:30.000-0400",
  "updated": "2009-09-30T17:22:13.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T10:56:58.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-22T10:57:43.000-0400",
      "body": "After the Lance Speelmon update, some class names needed to be refactored. Ensure the old names have been updated to the new ones (e.g. fl-list becomes fl-listmenu)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-30T09:26:41.000-0400",
      "body": "I have reviewed these commits and tested them in the iphone simulator. They seem to be working.\n\nI did notice that the tags component and the demos don't seem to use the iPhone theme. Should they? Also the tags component doesn't seem to be properly styled in the artifact page.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-30T16:13:18.000-0400",
      "body": "fl-button has been added to the tags template, but will need heavy tweaking in order to look right everywhere\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-30T17:21:21.000-0400",
      "body": "I have reviewed the commits and they seem to be  okay. There looks to be some more work needed on components such as tags but there is another jira for that ( <https://fluidproject.atlassian.net/browse/FLUID-3218#icft=FLUID-3218> ). I have also tested the affected pages in the iphone simulator and they appear to look appropriate.\n"
    }
  ]
}
---
Ensure fl-list is changed to fl-listmenu where required

        
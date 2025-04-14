---json
{
  "title": "FLUID-3785",
  "summary": "The default styling for the inlineEdit component is incorrect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-10-07T13:22:20.041-0400",
  "updated": "2010-12-01T17:00:18.042-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3785/FLUID-3785WithTests.txt",
      "filename": "FLUID-3785WithTests.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3785/inlineEditDefaultStylingFix.txt",
      "filename": "inlineEditDefaultStylingFix.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-07T13:25:03.821-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-08T11:08:20.034-0400",
      "body": "Ensure dotted underlining CSS class is added.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-08T14:59:01.722-0400",
      "body": "Committed Mike's patch ( FLUID-3785WithTests.txt ) which fixed the styling issues and added unit tests to make sure the styles were being added properly.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-01T17:00:18.037-0500",
      "body": "I code reviewed this with a whole group of Inline Edit JIRA issues for 1.3 and it is fine.&#x20;\n"
    }
  ]
}
---
The text as well as the icon should have a continuous dotted underline.

        
---json
{
  "title": "FLUID-3139",
  "summary": "postProcessor.php has hard coded directory dividers ie. '/' in the code which need to be changed.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-08-25T14:38:17.000-0400",
  "updated": "2009-12-02T13:38:05.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-08-25T15:09:09.000-0400",
      "body": "created a constant \"DIRECTORY\\_DIVIDER\" in config.php and used in postProcessor.php\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-22T16:23:27.000-0400",
      "body": "Re-opening because I did not solve this problem to my liking. \\\nShould convert directory separators to universal ones (ie. Windows and Unix can both use)\\\nShould use built in php constant DIRECTORY\\_SEPARATOR where needed\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-30T15:38:20.000-0400",
      "body": "Removed references to DIRECTORY\\_SEPARATOR and replaced with \"/\"\n"
    }
  ]
}
---
Create a constant for use as directory dividers.

        
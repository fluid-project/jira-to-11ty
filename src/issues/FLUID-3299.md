---json
{
  "title": "FLUID-3299",
  "summary": "remove DIRECTORY_DIVIDER from config.php",
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
  "date": "2009-10-15T11:49:58.000-0400",
  "updated": "2009-12-02T13:37:33.000-0500",
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
      "date": "2009-10-23T11:36:32.000-0400",
      "body": "Replaced with references to DIRECTORY\\_SEPARATOR.\n\nFurther work on a related issue will be to remove references to DIRECTORY\\_SEPARATOR altogether and use '\\\\' instead - which works for both unix and windows. One step at a time!\n"
    }
  ]
}
---
php has a predefined constant  called DIRECTORY\_SEPARATOR that can be used instead.\
<http://ca3.php.net/manual/en/dir.constants.php>

Replace this and test.

        
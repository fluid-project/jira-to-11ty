---json
{
  "title": "FLUID-95",
  "summary": "Alphabetical sort order changes to default",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2007-11-05T15:41:52.000-0500",
  "updated": "2007-11-19T13:48:19.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Firefox\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-07T12:00:51.000-0500",
      "body": "This is a bug in the image gallery and should be moved to the sakai JIRA.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2007-11-14T13:36:50.000-0500",
      "body": "This bug has been logged as GAL-62 <http://jira.sakaiproject.org/jira/browse/GAL-62>\n"
    }
  ]
}
---
If the sort order is set to "Alphabetical" and the user views an image, when "Return to thumbnail view" is selected, the order is reset to "Instructor Default" rather than remaining "Alphabetical". This occurs whenever the page is reloaded.

        
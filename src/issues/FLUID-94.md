---json
{
  "title": "FLUID-94",
  "summary": "\"Initializetimer is not defined\" error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2007-11-05T15:30:42.000-0500",
  "updated": "2007-11-19T13:48:42.000-0500",
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
      "date": "2007-11-07T12:01:09.000-0500",
      "body": "This is a bug in the image gallery and should be moved to the sakai JIRA.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2007-11-14T12:32:03.000-0500",
      "body": "Duplicate of GAL-50 in Image Gallery, assigned to Eli Cochran\\\n<http://jira.sakaiproject.org/jira/browse/GAL-50>\n"
    }
  ]
}
---
When viewing an image or selecting slide show, an "InitializeTimer is not defined" error is thrown.&#x20;

This prevents the user form viewing the images in a slide show. The user can still click through the images using the first, previous, next, and last arrows.

        
---json
{
  "title": "VULAB-189",
  "summary": "Update Login page",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-03-16T14:30:09.000-0400",
  "updated": "2014-03-03T14:43:51.316-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-189/VULAB-189.patch",
      "filename": "VULAB-189.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-03-16T15:01:36.000-0400",
      "body": "This patch modifies admin/include/lib/esphtml.forms.inc (which is where the login page generation function is located)\n\nphpESP though it would be wise to hardcode the login page into a php function and call that. I haven't separated the logic from the view with this patch but I have skinned the login page to match the overall design that JohnC created.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-03-30T12:26:47.000-0400",
      "body": "Thanks Jacob 🙂\n"
    }
  ]
}
---
The login page should have the same design as the rest of the system. JohnC's work that is currently on the rest of the site will be implemented into the login process.

        
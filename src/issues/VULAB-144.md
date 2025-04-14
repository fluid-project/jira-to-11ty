---json
{
  "title": "VULAB-144",
  "summary": "Nice Design for Login/Signup",
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
  "date": "2009-01-05T16:32:58.000-0500",
  "updated": "2009-01-29T10:52:36.000-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/VULAB-149/",
      "key": "VULAB-149",
      "summary": "Fully Straighten Out Access to VULab.yorku.ca"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-144/VULAB-144.patch",
      "filename": "VULAB-144.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-01-05T16:33:04.000-0500",
      "body": "pushed to vulab13 and made as a dependency to the server access issue.\n"
    },
    {
      "author": "Ron Owston",
      "date": "2009-01-13T12:24:42.000-0500",
      "body": "Blake, in the process please add some meta tags, etc to help a google seach turn up our login page. \\\nRon\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-15T13:41:45.000-0500",
      "body": "edits made to the esphtml.forms.inc (for login page) and the /admin/signup.php\n\nAdded descriptions some ascetic fixes and links to wiki etc.\n"
    },
    {
      "author": "Ron Owston",
      "date": "2009-01-15T18:06:04.000-0500",
      "body": "I'm not sure how to view it or are you just asking for a code review?\\\nRon\n"
    },
    {
      "author": "David Makalsky",
      "date": "2009-01-29T10:52:36.000-0500",
      "body": "patch applied\n"
    }
  ]
}
---
Redesign the login page and apply it to the user registration page as well.

        
---json
{
  "title": "ILDH-16",
  "summary": "Update dependencies for ILDH",
  "tags": "ILDH",
  "project": {
    "key": "ILDH",
    "title": "Inclusive Learning Design Handbook"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Justin Obara",
  "date": "2018-04-24T07:35:23.933-0400",
  "updated": "2020-10-28T08:44:43.996-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-04-24T07:43:03.072-0400",
      "body": "Handlebars and Uglify are coming through docpad-plugin-handlebars; which currently only supports handlebars 1.3.0. \n"
    }
  ]
}
---
GitHub is warning about vulnerabilities to uglify and handlebars, we need to updated these to uglify-js \~> 2.6.0 and handlebars \~> 4.0.0

        
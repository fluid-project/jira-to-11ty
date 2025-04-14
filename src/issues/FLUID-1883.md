---json
{
  "title": "FLUID-1883",
  "summary": "OSDPL: Put Registration and Login forms onto the same page.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-12-02T10:30:13.000-0500",
  "updated": "2014-04-02T16:35:54.383-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-02-18T12:47:20.000-0500",
      "body": "It's possible to do this by following: <http://drupal.org/node/92657>\n\nHowever, the username and password fields are too long and bleed into the other divs. Also the density of the page isn't very friendly and rather dense. We should use a modified form if this is something we'd like to pursue.\n"
    }
  ]
}
---
User testing has revealed that separate Login and Registration pages could be confusing. Both functions should be accessible from the same page to make it easier for a user to decide quickly what it is they would like to do on the site.

        
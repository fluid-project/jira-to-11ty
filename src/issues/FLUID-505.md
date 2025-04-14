---json
{
  "title": "FLUID-505",
  "summary": "Breadcrumb does not show current location.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-04-15T13:52:18.000-0400",
  "updated": "2009-02-05T10:05:46.000-0500",
  "versions": [
    "0.5beta1"
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
      "author": "Daphne Ogle",
      "date": "2008-04-29T16:51:55.000-0400",
      "body": "futuretask\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-09T19:29:38.000-0400",
      "body": "I have the code to do this on another Drupal website I created, orindahorsmen.org. If the task isn't assigned to me, ask me for the fix. 🙂\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-02-05T09:53:42.000-0500",
      "body": "Fixed. Was a problem in Views and the title variable not being set via the Arguments.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-02-05T10:05:46.000-0500",
      "body": "iteration26\n"
    }
  ]
}
---
Currently in the OSDPL on Drupal, the breadcrumb does not show your current location, just shows the trail of where you were coming from.

        
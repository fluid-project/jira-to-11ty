---json
{
  "title": "ENGAGE-494",
  "summary": "The My Collectoin \"Send\" dialog does not work inside the Screen Navigator",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2010-03-04T20:02:26.000-0500",
  "updated": "2010-03-09T14:43:49.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection",
    "Screen Navigator"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-496/",
      "key": "ENGAGE-496",
      "summary": "Dynamic loading of jquery ui scripts on Safari fails"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-04T20:02:35.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-09T14:43:49.000-0500",
      "body": "Fixed at revision 9616\n"
    }
  ]
}
---
My Collection's "Send" dialog box is showing up incorrectly when displayed with the Screen Navigator. This is related to the fact that we use the jQuery UI Dialog plugin. At root, it appears to be an timing issue with injecting elements by AJAX. More detective work is in order.

Best case scenario: we track down a timing issue and fix it. Worse case, we replace the jQuery UI Dialog with something simpler and more appropriate for use on a mobile phone.

        
---json
{
  "title": "DECA-69",
  "summary": "When confirmation message appears, scroll bars are visible",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-30T09:12:02.000-0400",
  "updated": "2010-06-16T11:13:31.992-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/DECA-74/",
      "key": "DECA-74",
      "summary": "[a11y] Remove the use of sliding status messages and modal dialog \"windows\""
    },
    {
      "type": "Supersedes",
      "url": "/browse/DECA-78/",
      "key": "DECA-78"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-06-16T11:13:31.991-0400",
      "body": "Replaced by new designs. See Deca 1.0 wireframes.\n"
    }
  ]
}
---
When either the taking picture or delete dialogues appear, the virtual browser size increases slightly in both dimensions and scrollbars appear to compensate for it.

To replicate: take a picture.

Likely cause: The container for the message is not being styled properly.

Solution: May not need to fix if doing FLUID-3553

        
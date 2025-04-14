---json
{
  "title": "FLUID-1773",
  "summary": "Change the signature of the modelChanged event",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2008-11-05T16:25:38.000-0500",
  "updated": "2009-06-03T13:45:29.000-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-06T14:18:32.000-0500",
      "body": "So far, I have adjusted modelChanged so that the signature is (newModel, oldModel, source). We need to review this, also in conjunction with <https://fluidproject.atlassian.net/browse/FLUID-1771#icft=FLUID-1771> - since the \"source\" field might be an annoyance for external users. Perhaps we could go with (newModel, oldModel, that, source)? Should we actually fix pipe-cutter events before doing this? Revision 5965\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-11-07T11:49:38.000-0500",
      "body": "My work is done here. However, Antranig has indicated that the signature may require additional tweaking.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-10T14:37:36.000-0500",
      "body": "Signature is declared agreeable\n"
    }
  ]
}
---
The Inline Edit modelChanged event signature should include 'that':\
modelChanged(newValue, that)

dev-iteration46

        
---json
{
  "title": "FLUID-1777",
  "summary": "Semantics of modelUpdated are inconsistent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-11-06T14:03:08.000-0500",
  "updated": "2011-02-22T16:27:52.203-0500",
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
      "date": "2008-11-06T14:13:20.000-0500",
      "body": "Fixed at revision 5965\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:52.202-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The firing of the "modelUpdated" event is not in one-to-one correspondance with actual changes to the model. Firstly, the event fires on startup of the component (FLUID-1772), and further, it does not fire on "endogenous events" such as those initiated by the UndoManager (undo and redo)

        
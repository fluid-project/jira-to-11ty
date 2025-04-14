---json
{
  "title": "FLUID-3483",
  "summary": "Inline Edits internal call to updateModelValue does not include the source.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2010-01-22T09:12:04.000-0500",
  "updated": "2014-06-25T16:16:10.995-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-04-02T15:22:12.293-0400",
      "body": "This wasn't really the purpose of the \"source\" field which is a remnant of the \"source tracking\" operated by the old ChangeApplier. In practice, any new code listening to model changes can easily get access to the component reference through listener boiling so this isn't a practical problem any more.\n"
    }
  ]
}
---
Inline Edits internal call to updateModelValue does not include the source

This results in the modelChanged event firing without source being undefined.&#x20;

In contrast, the undo/redo facility does provide a source with the modelChange event.

This means that an integrator may not be able to listen to a single even for a model change if they also need to know the source (for example in the case where there are multiple inline edit fields on the page).

        
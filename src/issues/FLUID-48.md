---json
{
  "title": "FLUID-48",
  "summary": "ARIA  drag and drop properties should be added programmatically using jARIA",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2007-10-05T11:38:23.000-0400",
  "updated": "2008-03-11T12:24:06.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-126/",
      "key": "FLUID-126",
      "summary": "The Reorderer adds namespaced attributes to the DOM without declaring the namespace if necessary."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2008-01-22T16:13:28.000-0500",
      "body": "Actually, the Reorderer **modifies** the drag and drop properties, so it's part way there.\n\nJonathan and I spent most of a day looking into the jAria plugin, and almost started to use jAreia to resolve this issue.  Actually, our intent was to use jAria to handle **all** of the ARIA bit s-- not just drag-and-drop, and not just modification of roles and states, but also initialization thereof.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2008-02-12T14:08:35.000-0500",
      "body": "With respect to porltets, specifically portlets that can be selected but are immoveable, the ARIA grab state is irrelevant.  The Reorderer should be modified to **not** add/remove this state from fixed portlets.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-11T12:23:54.000-0400",
      "body": "ARIA states and properties are now controlled programmatically. Templates and sample markup do not contain any ARIA markup.\n\nRegarding the comment about portlets: Only movables have their grab state set to supported.\n"
    }
  ]
}
---
Currently, the ARIA drag and drop properties ('grab' and 'dropeffect') are present in the HTML template. The Reorderer should programmatically add these properties, so that the template writer doesn't have to.

All roles should be added using jARIA, and ARIA markup should be removed from the templates.

Unit tests will be needed for this.

        
---json
{
  "title": "FLUID-70",
  "summary": "Drag and drop causes endless loop of javascript exceptions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2007-10-24T12:52:31.000-0400",
  "updated": "2007-11-05T11:15:46.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-05T11:15:46.000-0500",
      "body": "Recently a change was made from using jQuery UI's 'Sortable' to using 'Draggable and Droppable'. This may have fixed this issue as I can no longer reproduce the javascript errors.\n"
    }
  ]
}
---
Using jQuery UI's drag and drop library it is possible to get an endless loop of the following java script error.  It seems to happen more often if the page has not finished loading although I have managed to cause it in other circumstances. More investigation is required.

this.parentNode has no properties\
this.parentNode.removeChild( this );

        
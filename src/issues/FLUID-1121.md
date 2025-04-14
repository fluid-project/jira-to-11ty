---json
{
  "title": "FLUID-1121",
  "summary": "Inconsistency between appearance of drop target and potential to successfully drop",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2008-08-08T14:59:00.000-0400",
  "updated": "2008-11-13T13:40:58.000-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T15:12:27.000-0400",
      "body": "Fixed at revision 5339, use of ui.droppable.drop now completely removed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:40:58.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
In all sorts of subtle ways, there arise inconsistencies between the situations where the Reorderer will render a drop target marker, and whether releasing the mouse when this is shown will actually cause a drop to occur there. These typically occur "at the edges" of the range, hence resulting in particular subcases such as FLUID-1055 and <https://fluidproject.atlassian.net/browse/FLUID-479#icft=FLUID-479>.

        
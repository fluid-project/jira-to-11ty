---json
{
  "title": "FLUID-6745",
  "summary": "Syllabification enactor should be configurable to exclude some page content",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-07-08T12:00:47.098-0400",
  "updated": "2024-07-22T10:35:02.282-0400",
  "versions": [
    "4.2"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Syllabification Enactor",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As part of our drive to implement an iframeless UIO, the syllabification enactor needs to be improved so that it can exclude some part of the document from syllabification - so that we can, for example, exclude the prefs editor UI itself from syllabification if it is not configured to be. The most direct route for this might be to make it responsive to some CSS class name in the document.\
Improvement needs to be made in the TextNodeParser component responsible for iterating over the document.

        
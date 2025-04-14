---json
{
  "title": "FLUID-514",
  "summary": "Allow flexibility in Lightbox orderable thumb div ids.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2008-04-21T15:12:38.000-0400",
  "updated": "2011-10-14T15:08:53.449-0400",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-14T15:08:53.447-0400",
      "body": "This is no longer an issue: We now use the 'movables' selector.\n"
    }
  ]
}
---
Currently, the ImageReorderer.js file hard codes an extremely specific form for the orderable div ids. This should be changed to allow the form to be passed in.

        
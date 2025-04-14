---json
{
  "title": "FLUID-2296",
  "summary": "Progress indicator does not reposition and resize itself if the window resizes.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-02-26T14:51:42.000-0500",
  "updated": "2011-02-22T16:27:48.750-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-02-27T18:58:35.000-0500",
      "body": "Added to progress the ability to refresh the view and reposition elements in response to changes in the overall DOM\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:48.749-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Justin's wonderful new progress bars show a great bug in the Progress component that if the window resizes forcing the progress bar to resize (in the case of a bar sized relative to the viewport) or reposition (in the case of bar positioned relative to the viewport as in centered) the progress indicator does not resize or reposition.&#x20;

        
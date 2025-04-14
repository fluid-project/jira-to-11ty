---json
{
  "title": "FLUID-3558",
  "summary": "Image Reorderer throws exception with perpendicular keyboard navigation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2010-03-29T16:43:58.000-0400",
  "updated": "2010-04-07T11:18:56.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
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
      "date": "2010-03-29T16:54:03.000-0400",
      "body": "Fixed in trunk at revision 9746 - this problem was introduced with the work on <https://fluidproject.atlassian.net/browse/FLUID-2967#icft=FLUID-2967> back last August. The \"wrapped projection\" function \"wrappedProjectFrom\" does not properly guard the case where the projection disposition object is \"null\".\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-07T11:18:56.000-0400",
      "body": "I've reviewed Antranig's changes to GeometricManager.js at r9746 and they look good. +1 for inclusion in Infusion 1.2\n"
    }
  ]
}
---
In the image reorderer demo, fluid-infusion/src/webapp/demos/reorderer/imageReorderer/html/imageReorderer.html, if the browser width is arranged to show the image elements all in one horizontal line, performing keyboard navigation in the vertical direction will result in an exception.... this exception is "benign" in that there is no visible alteration to the component behaviour, but is a hazard for further development as well as untidy.

        
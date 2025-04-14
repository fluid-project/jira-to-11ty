---json
{
  "title": "FLUID-1284",
  "summary": "Lightbox API consistency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-08-21T09:34:54.000-0400",
  "updated": "2011-02-22T16:27:59.860-0500",
  "versions": [],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.855-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
fluid.lightbox is currently a namespace with creator functions. In order to be consistent with the other APIs it should be the creator itself with 2 parameters - the container and options.&#x20;

dev-iteration41

        
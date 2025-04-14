---json
{
  "title": "FLUID-4156",
  "summary": "Flash Uploader not rendering.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2011-03-22T14:32:54.741-0400",
  "updated": "2011-03-23T10:42:06.369-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-03-23T10:42:06.346-0400",
      "body": "reviewed and pushed into trunk.\n"
    }
  ]
}
---
There are mutually recursive references between swfupload engine, and local in the Flash uploader implementation.   Two things need to happen here:

1\) Framework needs to stop and inform us of the mutual recursion\
2\) Flash implementation needs to lose the reference of the local in the eventBinder to stop the mutual recursion.   Also, there are already listeners which control the state of the browse button in Uploader.js. &#x20;

        
---json
{
  "title": "FLUID-5129",
  "summary": "Remove isEmtpyObject call from model transformation framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2013-09-10T06:33:59.886-0400",
  "updated": "2014-04-02T16:10:25.109-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2014-03-26T15:53:58.206-0400",
      "body": "It looks like jQuery's isEmptyObject has been included in our jquery.standalone.js file, which we use in Node.js and other non-browser environments. Kasper Galschiot Markus can you confirm that this addresses this issue, and close it if so?\n"
    }
  ]
}
---
With the model-transformation work, a call to jquerys "isEmptyObject" sneaked in.. this should be removed and replaced by something that doesn't break systems that dont pull in all of jquery

        
---json
{
  "title": "FLUID-1828",
  "summary": "[Uploader 2] In order to define a new selector for File Queue rows, one must edit two different options.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Eli Cochran",
  "date": "2008-11-19T19:05:11.000-0500",
  "updated": "2009-05-05T11:50:32.000-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
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
      "author": "Justin Obara",
      "date": "2009-05-05T11:44:30.000-0400",
      "body": "Appears to have been fixed, possibly during our class renaming push just before 1.0\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-05T11:50:32.000-0400",
      "body": "Yep. Actually wasn't necessary in the first place because the row style was carried by the template.&#x20;\n"
    }
  ]
}
---
Currently we reference the same selector in two different options although they are used differently.&#x20;

fluid.defaults("fluid.fileQueueView", {\
selectors: {\
fileRows: ".row",  \
.\
.\
.\
},

styles: {\
row: "row", \
.\
.\
.\
},

        
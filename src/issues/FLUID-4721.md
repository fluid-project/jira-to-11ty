---json
{
  "title": "FLUID-4721",
  "summary": "Uploader hard codes the file size units",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2012-06-08T14:22:52.581-0400",
  "updated": "2014-04-02T15:58:48.650-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The units used for the file size (KB and MB) are hard coded and seem to only be replaceable by changing the functions.

Code from Infusion 1.4:\
<https://github.com/fluid-project/infusion/blob/infusion-1.4/src/webapp/components/uploader/js/Uploader.js#L637-650>

According to this stack overflow ( <http://stackoverflow.com/questions/9933088/should-units-of-measurement-be-localized> ) in some languages/cultures the symbols may be slightly different.

        
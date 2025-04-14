---json
{
  "title": "FLUID-3783",
  "summary": "When using multiple instances of infusion on a single page, can obtain duplicate guids.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-10-05T11:04:08.406-0400",
  "updated": "2014-04-02T15:35:19.963-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4350/",
      "key": "FLUID-4350",
      "summary": "ids allocated by the framework via allocateSimpleId may collide across multiple fluid instances (different versions, or copies inside iframes)"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-05T11:10:43.485-0400",
      "body": "Updated the multiple-infusions-tests example in the scratchpad to display the issue, using allocateSimpleId\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:33:40.230-0400",
      "body": "Antranig says this has been fixed for a while.\n"
    }
  ]
}
---
fluid.allocateGuid is unique within a single instance of infusion. If you have multiple instances of infusion running on the same page it is possible to get duplicate guids. For example, if you call fluid\_1\_1.allocateGuid() and fluid\_1\_2.allocateGuid(), the same guid will be returned.

        
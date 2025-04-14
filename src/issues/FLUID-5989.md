---json
{
  "title": "FLUID-5989",
  "summary": "Add webdriver tests to ensure sliding panel is open when the show button is pressed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2016-10-25T12:28:59.017-0400",
  "updated": "2016-10-25T18:07:31.277-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5990/",
      "key": "FLUID-5990"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5987/",
      "key": "FLUID-5987",
      "summary": "Sliding panel doesn't open unless \"reset\" is triggered"
    }
  ],
  "attachments": [],
  "comments": []
}
---
<https://issues.fluidproject.org/browse/FLUID-5987> fixed the infusion source code that clicking the UIO show button doesn't open the sliding panel. However, due to the fact that infusion doesn't yet have the infrastructure to support the web-driven tests, the tests to ensure the fix of this issue was not written.

The web-driven tests should be created when the infrastructure is in place.&#x20;

        
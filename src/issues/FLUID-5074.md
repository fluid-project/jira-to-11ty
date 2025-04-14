---json
{
  "title": "FLUID-5074",
  "summary": "Reseting preferences after reloading the page throws an error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2013-06-27T14:25:26.024-0400",
  "updated": "2013-10-04T10:50:32.026-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF 22\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\) Open the UIO Demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>

2\) Change some of the settings&#x20;

3\) Reload the page

4\) Click the reset button\
Notice that the "NS\_ERROR\_NOT\_AVAILABLE: Component is not available" error is thrown.\
The settings are successfully reset though.

*
  *
    * Note: this doesn't happen if you click reset without reloading the page. \*\*\*

        
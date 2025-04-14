---json
{
  "title": "FLUID-2394",
  "summary": "Minimum text size implementation not appropriate",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Anastasia Cheetham",
  "date": "2009-03-23T14:21:07.000-0400",
  "updated": "2009-05-14T09:23:38.000-0400",
  "versions": [
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2398/",
      "key": "FLUID-2398"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The implementation of the "minimum text size" is not necessarily what the user would expect.

To reproduce:

1\) Open <http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Decide that the size of most of the text looks just fine, but that the footer (the copyright, the  "Portions of the Sakai...") is a wee bit too small.

3\) Click on Edit Preferences

4\) Adjust the "Minimum Text Size" slider to 9pt, in the hopes that the footer text will get a little bit bigger

5\) Click "Save and Apply"

In addition to the footer text getting a bit larger, **all** of the text on the page gets **smaller.**  This is not what the user would likely expect or want in this scenario.

        
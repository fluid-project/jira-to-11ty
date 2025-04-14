---json
{
  "title": "FLUID-4115",
  "summary": "UIOption Demo \"Edit Appearance\" button does not work after saved.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Harris Wong",
  "date": "2011-02-24T15:42:28.605-0500",
  "updated": "2011-03-07T22:41:20.652-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "WinXP Chrome, FF, IE8\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3618/",
      "key": "FLUID-3618",
      "summary": "When updating something in UI Options and then saving the selection, next time you try opening the UI Options it takes 2 clicks or keyboard strokes to open it again."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-03-07T22:41:20.649-0500",
      "body": "This issue is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-3618#icft=FLUID-3618>. Work will be done under that ticket.\n"
    }
  ]
}
---
1\. Go to <http://build.fluidproject.org/infusion/demos/uiOptions/demo.html>, or the infusion-1.3.1-src.zip from <http://wiki.fluidproject.org/display/fluid/Release+Package+QA+Test+Plan>.\
2\. Click "Edit Appearance", change some settings\
3\. Click "Save and apply", expected to see page changed with new styles.\
4\. Click "Edit Appearance" again, nothing happens.

However, if you click "Edit Appearance" twice, the drop down will appear again.

        
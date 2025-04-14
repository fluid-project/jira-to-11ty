---json
{
  "title": "FLUID-4102",
  "summary": "SingleFileUpload - press enter on browse actually saves an empty file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "John Kremer",
  "date": "2011-02-22T11:46:15.664-0500",
  "updated": "2011-02-28T15:35:05.655-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Win 7 IE9\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1940/",
      "key": "FLUID-1940",
      "summary": "\"enter\" doesn't activate browse button but initiates save (when javascript is turned off): Using IE"
    }
  ],
  "attachments": [],
  "comments": []
}
---
If you tab to the Browse button and press enter, the uploader uploads an empty file and does not allow you to browse.

<http://build.fluidproject.org/sakai-imagegallery2-web/site/AddImage/>

        
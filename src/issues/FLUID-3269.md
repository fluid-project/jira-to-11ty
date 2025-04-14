---json
{
  "title": "FLUID-3269",
  "summary": "[Uploader] Doesn't recognize files at boundary sizes (Flash 10)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Tona Monjo",
  "date": "2009-10-09T07:33:25.000-0400",
  "updated": "2009-10-20T11:05:55.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Flash 10 - FF3 - Mac OSX 10.5\\\nFlash 10 - FF3.5 - Mac OSX 10.5\\\nFlash 10 - Safari 4 - Mac OSX 10.5\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2554/",
      "key": "FLUID-2554",
      "summary": "Adding empty/zero bytes/0kb/0b files fails in Uploader"
    }
  ],
  "attachments": [],
  "comments": []
}
---
On Demo and on Server\
Total files = 0. Doesn't recognize the file. The file doesn't appear at the list. Doesn't activate the Upload button.\
This bug appears for these tasks:&#x20;

* Test 1: Upload a File With a Small File Size
* Test 2: Upload a 20MB File
* Test 3: Upload a File Larger Than 20MB

On Server

For the 0 Kb file, I cannot select the file from the browser (it appears disabled).

        
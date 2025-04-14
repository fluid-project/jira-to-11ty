---json
{
  "title": "FLUID-1971",
  "summary": "\"Stop Uplod\" needs to be clicked twice before the uploads stop : using FF3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-12T14:27:01.000-0500",
  "updated": "2008-12-18T11:29:38.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T11:29:38.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
"Stop Uplod" needs to be clicked twice before the uploads stop : using FF3

Steps to reproduce:

1\) Open the uploader demo\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Add several files to the file queue

3\) Start the upload process

4\) Attempt to stop the upload

5\) Notice that you have to click the "stop upload" button twice before the uploads will stop

        
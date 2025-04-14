---json
{
  "title": "FLUID-4117",
  "summary": "Uploader pressing enter after uploaded re-enables upload button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Harris Wong",
  "date": "2011-02-24T16:19:43.439-0500",
  "updated": "2015-06-26T09:59:39.680-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "WinXP Chrome\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:58:52.000-0400",
      "body": "Could not reproduce with the latest version of chrome and Windows 8\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:50.213-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
1\. Use Chrome to open <http://build.fluidproject.org/infusion/demos/uploader/demo.html>, or the infusion-1.3.1-src.zip from <http://wiki.fluidproject.org/display/fluid/Release+Package+QA+Test+Plan>.\
2\. Upload 1 file, click "Upload"\
3\. Expected file uploaded, "Upload" button grey out. \
4\. Press "Enter" on keyboard, "Upload" button will light up and gain focus.\
5\. Press "Enter" on keyboard, "Stop Upload" shows up when it has nothing to upload.

4 and 5 are unexpected behaviors.

        
---json
{
  "title": "FLOE-582",
  "summary": "404 error on network request for tableOFContents-enactor.json (related to infusion)",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Sachin Chopra",
  "date": "2020-03-05T18:53:13.400-0500",
  "updated": "2020-03-10T08:41:30.294-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "FLOE Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Sachin Chopra",
      "date": "2020-03-06T23:27:35.156-0500",
      "body": "I checked for the requisite file and [it's present there](https://github.com/fluid-project/floeproject.org/blob/master/lib/infusion/src/framework/preferences/messages/tableOfContents-enactor.json), but still, it's throwing Error 404. This is because the file path supplied is wrong. The console is requesting file data from[ this link](https://floeproject.org/framework/preferences/messages/tableOfContents-enactor_en.json?_=1583553670350), but it should request the file from [this link](https://floeproject.org/lib/infusion/src/framework/preferences/messages/tableOfContents-enactor_en.json?_=1583553670350) because that's where the required file lies.\n"
    }
  ]
}
---
Console shows 404 for network calls to request data from tableOfContents-enactor.json

### To reproduce

Steps to reproduce the behavior:

1. Go to [www.floeproject.org](http://www.floeproject.org/)
2. Right Click anywhere and click on Inspect.
3. Go to Console
4. See error

### Expected behavior

The error should be removed.

## Screenshots

<!-- media: external https://user-images.githubusercontent.com/34926285/76036446-27600e00-5f6a-11ea-9daf-333e7784593d.png -->

[!https://user-images.githubusercontent.com/34926285/76036446-27600e00-5f6a-11ea-9daf-333e7784593d.png!](https://user-images.githubusercontent.com/34926285/76036446-27600e00-5f6a-11ea-9daf-333e7784593d.png)

<!-- media: external https://user-images.githubusercontent.com/34926285/76036448-2a5afe80-5f6a-11ea-95dc-b8eb091fa40b.png -->

[!https://user-images.githubusercontent.com/34926285/76036448-2a5afe80-5f6a-11ea-95dc-b8eb091fa40b.png!](https://user-images.githubusercontent.com/34926285/76036448-2a5afe80-5f6a-11ea-95dc-b8eb091fa40b.png)

## Technical details

\###Desktop\
OS: Ubuntu 18.04\
Browser : Chrome\
Version: Version 80.0.3987.122 (Official Build) (64-bit)

        
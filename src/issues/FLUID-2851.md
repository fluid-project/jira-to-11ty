---json
{
  "title": "FLUID-2851",
  "summary": "Browse files button appears to have focus, but takes an additional 'tab' before it actually does: using FF3",
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
  "date": "2009-05-29T15:30:35.000-0400",
  "updated": "2009-11-06T14:38:13.000-0500",
  "versions": [
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF3 (Win Vista, Flash 10)\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-2031/",
      "key": "FLUID-2031"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-06T14:38:13.000-0500",
      "body": "This is no longer an issue because <https://fluidproject.atlassian.net/browse/FLUID-2031#icft=FLUID-2031>, where the browse button doesn't seem to ever get focus\n"
    }
  ]
}
---
Browse files button appears to have focus, but takes an additional 'tab' before it actually does

Steps to reproduce:

1\) Open the server version of uploader\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Tap the 'tab' key until the "Browse Files" button has focus

Notice that hitting the "enter" key has not effect

3\) Tap the 'tab' key again, now hitting the 'enter' key will open the OS File Open Dialog

        
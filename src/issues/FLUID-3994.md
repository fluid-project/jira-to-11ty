---json
{
  "title": "FLUID-3994",
  "summary": "Add image information page displays wrong files after uploading some files to the image gallery uploader demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-12-21T13:21:51.502-0500",
  "updated": "2015-06-09T10:09:42.620-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF3.6/Win7\\\nFF3.6/WinXP\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3994/Capture.PNG",
      "filename": "Capture.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3994/Capture 2.PNG",
      "filename": "Capture 2.PNG"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-12-21T13:28:55.438-0500",
      "body": "Capture.PNG : files being uploaded\\\nCapture 2.PNG: add information screen, which doesn't show any of the files that were uploaded\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-06T11:03:24.576-0500",
      "body": "May be directly related to <https://fluidproject.atlassian.net/browse/FLUID-4007#icft=FLUID-4007>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:09:42.618-0400",
      "body": "This demo no longer exists\n"
    }
  ]
}
---
To reproduce:

1\. Visit <http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/> \
\[2. Upload a set of non-image files to the image gallery uploader demo?]\
3\. Upload files\
4\. Upon successful upload, the user is redirected to an "Add information to images" page, but none of the uploaded images are listed

See screenshots

        
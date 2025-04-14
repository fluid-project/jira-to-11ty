---json
{
  "title": "FLUID-4488",
  "summary": "Image Gallery ignores queue limit in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2011-09-30T16:37:11.953-0400",
  "updated": "2015-06-10T10:43:11.687-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE6, 7 & 8 in WinXP\\\nIE 8 & 9 in Win 7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4478/",
      "key": "FLUID-4478",
      "summary": "Large files not being rejected by Flash uploader in IE6 - 8"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-09-30T16:44:07.800-0400",
      "body": "This issue might be related to <https://fluidproject.atlassian.net/browse/FLUID-4478#icft=FLUID-4478>, which involves the image gallery ignoring file size limits.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:43:11.685-0400",
      "body": "The image gallery uploader demo no longer exists.\n"
    }
  ]
}
---
The Image Gallery uploader server demo ignores the "Upload queue limit"

To reproduce:\
1\) Open the demo in IE\
2\) Set the queue limit to 5\
Note that the status area does show the "5 files maximum" message\
3\) Browse files and select more than 5 images to add to the queue\
Note that all of the files are successfully added to the queue; the status area shows the full count above the "5 files max" message\
4\) Upload the files\
Note that all of the files upload.

        
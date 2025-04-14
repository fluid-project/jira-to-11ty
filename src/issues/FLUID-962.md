---json
{
  "title": "FLUID-962",
  "summary": "long file names in the upload queue, push the file size and remove button out of view",
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
  "date": "2008-07-21T17:59:30.000-0400",
  "updated": "2016-11-08T12:39:27.042-0500",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.3.1",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF 29, Chrome 35, Safari 7 (Mac OS 10.9)\\\nSafari 9 (Mac OS 10.11)\\\nSafari 10 (macOS 10.12)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE 10, IE 11 (Win 7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4075/",
      "key": "FLUID-4075"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1595/",
      "key": "FLUID-1595"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-962/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-21T18:00:41.000-0400",
      "body": "'screenshot-1' shows how a long file name pushes the files size and remove button out of view\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-08-05T20:21:57.000-0400",
      "body": "need to implement \"smart\" file name truncation\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:52:28.000-0400",
      "body": "Affects Uploader 2\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-19T15:16:14.000-0400",
      "body": "This is basically the same bug as <https://fluidproject.atlassian.net/browse/FLUID-1595#icft=FLUID-1595> it just manifests its self differently on different browsers and both of these bugs will be to come up with a way to automatically truncate the text of long files names. I thought that there was a bug written for that, but I can't find it.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-22T11:11:41.797-0500",
      "body": "This is still happening in v1.3\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T12:39:50.784-0400",
      "body": "Testing for the 1.4 release, this is still happening, though in FF on Mac, the delete buttons for short file names are NOT being pushed, only the ones for the long file names.\n"
    },
    {
      "author": "Saksham Saxena",
      "date": "2016-03-06T12:32:52.942-0500",
      "body": "Not on IE 10,11; Chrome and FF on Win 10. Unlikely that it'll be reproduced, as <https://fluidproject.atlassian.net/browse/FLUID-4075#icft=FLUID-4075> is closed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-09T09:15:59.980-0500",
      "body": "@@Saksham Saxena I just did a quick test in Safari 9 and the issue is still present there. Also <https://fluidproject.atlassian.net/browse/FLUID-4075#icft=FLUID-4075> was close because it is a duplicate of this issue.\n"
    },
    {
      "author": "Akshay Agarwal",
      "date": "2016-03-29T14:11:13.330-0400",
      "body": "Is anyone working on this issue?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-08T12:39:27.039-0500",
      "body": "Addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-6028#icft=FLUID-6028>, which causes the long file names to wrap to a new line.\n"
    }
  ]
}
---
Adding a file with a long file name to the upload queue, hides information in the upload queue. The long file name should be shortenned with (...) to show the beginning, middle, and end. Currently it stretches to the end of the upload queue and pushes the file size and remove button out of view. If there are other files in the upload queue, their size and remove button will be out of view as well.

Steps to Reproduce:

1\) Open one of the versions of Uploader from the daily build site:\
<http://build.fluidproject.org/infusion/demos/uploader/html/uploader.html>

2\) Add some files with short file names. (notice that everything displays appropriately)

3\) Add another file with a long file name. (notice how it pushed the file size and remove icon out of view)

        
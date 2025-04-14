---json
{
  "title": "FLUID-874",
  "summary": "Progress bar does not completely fill after adding more files to an uploaded queue.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-08T19:14:08.000-0400",
  "updated": "2008-08-13T15:36:51.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 (Mac OS X)\\\nFF2, FF3, IE7 (win xp)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-681/",
      "key": "FLUID-681",
      "summary": "Progress bar increasingly innacurate with subsequent uploads"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The progress bar doesn't completely fill, if you add more files after uploading.

Steps to reproduce:

1\) go to either the in-line or the pop-up uploader page, from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) click the 'add files' button

3\) select some files

4\) upload all of the files in the queue

5\) after all of the files have uploaded, click "add more"

6\) select some more files

7\) upload these new files. Notice that the total progress bar will not completely fill.&#x20;

This is most visible when uploading many files, with a similar size. (e.g. eleven 0.4KB files the first time and eleven 0.4KB files the second time)

may be similar to fluid-681

        
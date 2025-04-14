---json
{
  "title": "FLUID-1576",
  "summary": "Using the keyboard to delete all files from the file queue leaves portion of blue selection box, using Opera 9.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-09-16T15:23:39.000-0400",
  "updated": "2014-07-07T15:38:18.244-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1576/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-16T15:24:57.000-0400",
      "body": "'screenshot-1' shows the left and right borders of the blue selection box persisting after all files have been removed from the file queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T15:26:40.000-0400",
      "body": "This doesn't seem to occur if the files are removed using the mouse.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T15:38:18.237-0400",
      "body": "Opera is no longer a supported browser.\n"
    }
  ]
}
---
Using the keyboard to delete all files from the file queue leaves portion of blue selection box

Steps to reproduce:

1\) Open the uploader

2\) add some files to the file queue

3\) tab into the file queue

4\) use the "delete" key to remove all of the files from the file queue

Notice that the left and right end of the blue selection box remains after all of the files have been removed.

        
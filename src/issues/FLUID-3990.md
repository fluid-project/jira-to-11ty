---json
{
  "title": "FLUID-3990",
  "summary": "Cannot upload files larger than ~20 MB in Flash uploader and ~100 MB in HTML5 uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "James Yoon",
  "date": "2010-12-21T11:23:39.139-0500",
  "updated": "2014-05-22T14:28:03.566-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE8 - Win XP, Win 7\\\nFF3.6 - WinXP, Win 7\\\nIE6 - WinXP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-21T14:23:17.897-0500",
      "body": "A comment about this: If we're going to keep a file size limit, we should implement some form of feedback in cases where a file is rejected because of size. Currently, there's none so \\\na) if you only tried one file, nothing happens, but you don't know why\\\nb) if you selected several files and one is rejected, you might not even notice because the others show up in the queue\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-17T17:06:01.372-0500",
      "body": "There are two actual bugs here:\n\n1\\. We ship the Uploader by default with a 20 Mb file limit. Is this a good default to ship with?\\\n2\\. The HTML5 strategy for the Uploader assumes the file size limit is specified in megabytes, when it's actually kilobytes. As a result, the file size limit on modern HTML5 browsers is actually 1000x higher than the specified size.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:28:03.566-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
Using the Uploader demo (<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>) I can upload files larger than 20MB in FF 3.6, but unable to upload (i.e. can't queue) the same files in IE8.

To reproduce:

* load <http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html> in IE8 and FF3.6
* try to add a file greater than 20MB to the queue (easy way to create such a file is to create a zip file and stuff it).
* In FF3.6, the file should appear in the queue.
* In IE8, the OS browse dialog should disappear and no file appears in the queue.

        
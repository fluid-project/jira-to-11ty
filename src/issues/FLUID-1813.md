---json
{
  "title": "FLUID-1813",
  "summary": "[Uploader 2] Scroller does not scroll an item into view if item is above the View Port",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-11-17T13:23:54.000-0500",
  "updated": "2014-03-04T08:28:00.836-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-11-17T17:34:29.000-0500",
      "body": "Made the scroller much smarter. Depending on the direction that the scroller needs to scroll, by default the scroller will scroll to the item above or below the item requested in order to give better context for the item in the scroller.\n"
    }
  ]
}
---
1\. In Uploader 2, browse for files and select more than 11 or so files, and click OK\
Notice: When you add the files to the list, the list will scroll to the last file added.&#x20;

2\. Click Upload.\
Notice: the Scroll will jump to the top (good)

3\. Scroll the File Queue so that the 4 item in the queue is displayed\
Notice: that the scroll will jump when the next file starts but only jump to the file after the current uploading file so that the file row that is uploading is not displaying.  (bad)

Fix is to tweak the algorithm that scrolls the files into place to be aware of whether you're scrolling up or scrolling down. \
Fix will need to account for both files that fail because of file size and files that file because of type (there may be others, I will research)

        
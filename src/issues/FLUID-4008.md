---json
{
  "title": "FLUID-4008",
  "summary": "After going through file list with keyboard, tabbing to Add More, adding more files, focus gets put on last file selected in file list",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2010-12-22T14:12:23.537-0500",
  "updated": "2015-06-26T10:14:37.151-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Mac 10.6, FF4\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:16:51.027-0400",
      "body": "Could not reproduce with the latest version of Firefox (v38)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:27.896-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Don't think the file list should be focused after adding more files - the focus is on the Upload button (and "Add More" - see FLUID-3890).

To recreate:\
-add files, tab to the file list, and use the arrow keys to move through the list\
-tab to 'add more' button, add more files\
-the last file selected in the file list gets highlighted as if it's focused\
-upload button focused

        
---json
{
  "title": "FLUID-3971",
  "summary": "No focus indicator for Save/Cancel/Redo/Undo after tabbing to them in CKEditor 3 in Safari 5 on Mac OSX",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jess Mitchell",
  "date": "2010-12-20T15:52:30.725-0500",
  "updated": "2014-03-03T12:05:20.036-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "Safari 5.0.3 on Mac OSX 10.6.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T12:52:55.507-0400",
      "body": "I've tested this for v1.4, and there is now focus indication.\n"
    }
  ]
}
---
1\. Open Rich Text Inline Edit demo and using keyboard tab to CKEditor 3.\
2\. Choose "edit"\
3\. From edit mode press "Tab" to exit\
4\. Focus is on "Save", but there is no focus styling indicating that.

        
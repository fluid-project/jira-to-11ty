---json
{
  "title": "FLUID-4097",
  "summary": "Mouse not functional with CKEditor 3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "John Kremer",
  "date": "2011-02-22T09:55:02.561-0500",
  "updated": "2014-03-03T13:38:37.579-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win7 IE9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T12:21:59.985-0400",
      "body": "This seems to be working fine in 1.4\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>

Mouse clicks do not work for selecting any of the formatting options in the CKEditor 3.

1\. Click Edit under the CKEditor 3 area\
2\. Click in the text area and type some text\
3\. Highlight the text with the mouse\
4\. Use the mouse and click any of the options above - it will not work\
5\. You can use keyboard shortcuts to do some formatting (bold, italic, underline) on highlighted text.

        
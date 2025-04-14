---json
{
  "title": "FLUID-5391",
  "summary": "Can't paste into ck editor rich text inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2014-06-03T10:51:44.624-0400",
  "updated": "2024-07-22T15:02:56.370-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "IE 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-10T11:09:03.820-0400",
      "body": "It may have to do with CK editor trying to use a dialog for this. The dialogs don't work, likely due to the use of the CDN.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T15:02:56.370-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the rich text inline edit demo\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/>

2\) Open the ck editor (last rich text inline editor) in edit mode

3\) Attempt to paste in text\
Notice that it is ignored

        
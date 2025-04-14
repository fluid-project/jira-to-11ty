---json
{
  "title": "FLUID-3588",
  "summary": "Pasting a link into a rich editors edit field does not render it as one in FF 3.6 in WIN7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "y z",
  "date": "2010-04-01T14:28:58.000-0400",
  "updated": "2014-07-14T09:57:05.300-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Firefox 3.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-14T09:57:05.297-0400",
      "body": "This is dependent on the rich text editor, most provide a dialog for entering links.\n"
    }
  ]
}
---
If you try pasting a link into an edit field for tinyMCE, CKEditor 3.0 or FCKEditor it will be resolved as plain text and not a link in Firefox.

IE8 pastes links and saves them as such.

        
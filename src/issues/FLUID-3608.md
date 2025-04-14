---json
{
  "title": "FLUID-3608",
  "summary": "Text goes wonky when pasting in non-standard characters using rich text inline edit with CKEditor 3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2010-04-06T12:15:32.000-0400",
  "updated": "2014-03-03T13:43:36.021-0500",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 4 (OS X 10.5)\\\nFF 3.6 (XP, Win7)\\\nIE8 (XP, Win7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-10T14:27:38.746-0500",
      "body": "In FF3.6 Win7, repeatedly pasting the character in the middle of the paragraph causes the character to flash momentarily at the end of the paragraph. As characters are pastes, sometimes CRs are inserted.\\\nIn IE8 Win7, repeatedly pasting the character in the middle of the paragraph causes the character to flash momentarily at the end of the paragraph.\n\nOnly happens with CKEditor 3\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:59:06.494-0400",
      "body": "I'm unable to reproduce this as of v1.4\n"
    }
  ]
}
---
To replicate:

1\. Browse to <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>\
2\. Go into edit mode for the text under CKEditor 3\
3\. Paste in the following character repeatedly, anywhere in the editable area: ☀

(in Safari 4/OS X 10.5, it sometimes erases all the text if the user pastes repeatedly; in IE 8, FF 3.6/XP, the character sometimes appears at the end of line momentarily, but then disappears)

        
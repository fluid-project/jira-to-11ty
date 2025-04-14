---json
{
  "title": "FLUID-3624",
  "summary": "Rich Inline Edit: Pasting in two newline characters puts the text after the existing text in CKEditor 3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Michelle D'Souza",
  "date": "2010-04-12T11:10:52.000-0400",
  "updated": "2014-03-03T13:43:19.664-0500",
  "versions": [
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 7 Windows XP\\\nIE 8 Windows 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-10T16:00:12.297-0500",
      "body": "This could be related to <https://fluidproject.atlassian.net/browse/FLUID-2450#icft=FLUID-2450>.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:43:59.453-0400",
      "body": "I'm unable to reproduce this in the v1.4 code.\n"
    }
  ]
}
---
If you paste two newline characters in a row into the CKEditor, the text following the two newlines is placed after the existing text.&#x20;

To recreate this issue:

1\. in a text editor place the following: \
abc\<newline>\<newline>def\
2\. copy the text into your buffer.\
3\. open the rich text inline edit demo: <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>\
4\. activate the CKEditor\
4\. without doing anything else, paste the text from memory.

Notice that the 'abc' is before the existing text and the 'def' is after the existing text.&#x20;

This is not a problem in FF3.6 or in Tiny MCE editor.

        
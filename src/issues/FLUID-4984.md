---json
{
  "title": "FLUID-4984",
  "summary": "Changing font causes font style drop-down options to appear in all the same type face",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2013-04-22T16:29:01.042-0400",
  "updated": "2013-10-04T10:56:05.169-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Firefox\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-04-22T16:35:52.443-0400",
      "body": "This problem appears to be caused by conflicting FSS styling. For example, for the \"Arial\" option, the follow styles are applied:\n\n.fl-font-uio-comic-sans, .fl-font-uio-comic-sans \\* {\\\nfont-family: \"Comic Sans MS\",sans-serif !important;\\\n}\\\n.fl-font-uio-arial, .fl-font-uio-arial \\* {\\\nfont-family: \"Arial\" !important;\\\n}\n\nTo fix this, we would need to ensure the font style we want is invoked last. This likely means overriding some FSS styles in the UIOptions.css file.\n"
    }
  ]
}
---
In UI Options, changing the font style using the drop-down causes each option to appear in the same font.

To reproduce:\
1\. Open the UIO demo in Firefox.\
2\. Change the font style to Comic Sans or Times Roman.\
3\. Close the UIO panel.\
4\. Open UIO Panel again.\
5\. Open the font style drop-down.\
6\. Notice that all options are styled in the same type face. The correct behaviour should be each item should be styled according to their respective font.

        
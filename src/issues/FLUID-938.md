---json
{
  "title": "FLUID-938",
  "summary": "Inline Edit in IE: Padding on empty view not working.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-17T20:20:12.000-0400",
  "updated": "2009-06-03T13:43:47.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6 and IE7 on Windows\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-30T17:53:25.000-0400",
      "body": "I don't believe that there really is a simple fix for this bug. IE is giving \"special\" treatment to empty span tags. \\[I suspect that they are giving special treatment to any empty tag that requires an end tag but I haven't tested that.]\n\nThe fix that I can think of, but it isn't pretty, is to stuff a space into the empty field for IE6 and 7. Of course you'd have to parse out your empty space each time that you'd enter or exit the field, but it wouldn't be too evil.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-30T20:21:37.000-0400",
      "body": "I have found a fix that tis better than placing an extra space into the span. If the display attribute of the span is set to \"inline-block\" then the hover effect is complete. My only worry with this solution is that it assumes that the original element was an inline element to begin with. Would it be possible that the element would start out as a block element?\n\nOK, I'm going to be anal and actually check whether the element is display: inline before setting it to display: inline-block. I like this fix and I'm going to check it in. &#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-30T20:27:20.000-0400",
      "body": "By the way, here is the fix, at line 66 of inlineEdit.js\n\n// workaround for <https://fluidproject.atlassian.net/browse/FLUID-938#icft=FLUID-938>, IE can not style an empty inline element, so force element to be display: inline-block\n\nif ($.browser.msie) {\\\nif (textEl.css('display') === 'inline') {\\\ntextEl.css('display', \"inline-block\");\\\n}\\\n}\n"
    }
  ]
}
---
The padding is not properly being applied to an empty view (i.e. with no 'invitation text'). The field seems to hold a minimum width, but the yellow highlight is not visible, and the unit test ("Invitation text (none)") is failing.

        
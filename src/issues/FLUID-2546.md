---json
{
  "title": "FLUID-2546",
  "summary": "Undo icon missing in Inline edit for large text no spaces",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Laurel Williams",
  "date": "2009-04-06T15:28:49.000-0400",
  "updated": "2009-04-13T10:26:49.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win xp IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-13T10:26:49.000-0400",
      "body": "Couldn't reproduce this issue. It may have been the case where the large amount of text caused the undo button to appear offscreen. A scroll bar is inserted. If this was tested on the bSpace example, the scrollbar would have been part of the iFrame, which may have caused it to appear below the fold.\n"
    }
  ]
}
---
<http://wiki.fluidproject.org/display/fluid/Inline+Edit+QA+Test+Plan+-+Simple+Text> -&#x20;

Test 2: Many Characters (Not Separated)

* Procedure\
  &#x20;        1\. Open the browser and navigate to the specified URL\
  &#x20;        2\. Using the mouse, select click one of the inline editable texts\
  &#x20;        3\. Edit the text with a large number (e.g. 1000 characters) of characters without any gaps between\
  &#x20;        4\. Using the mouse, click on a blank spot outside of the editable text field
* &#x20;Expected Results\
  &#x20;         o The inline editable text should be changed to the new value\
  &#x20;         o An 'undo edit' link should appear next to the inline editable text
* Stop Test\
  &#x20;         o Refresh the browser to return the page to its initial state

I was unable to find the Undo edit link.

        
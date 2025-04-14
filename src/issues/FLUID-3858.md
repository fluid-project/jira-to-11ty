---json
{
  "title": "FLUID-3858",
  "summary": "Simple layout reorderer demo fails to move portlets to the correct location with keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Harris Wong",
  "date": "2010-11-19T10:35:42.641-0500",
  "updated": "2010-11-26T11:00:58.970-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF3, FF3.6, IE8, WinXP Pro 2002 SP3\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3858/FLUID-3858-patch.txt",
      "filename": "FLUID-3858-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-19T10:41:03.522-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-23T10:42:02.666-0500",
      "body": "In the demo css, .demo-LayoutReorderer-movable-dragging uses \"left: 10px\", which sets the left edge of the dragging element to the right by 10px.  This property somehow introduced the problem mentioned in this jira.  I have created a patch which uses 'margin' instead of 'left' to address this problem. &#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-26T11:00:58.968-0500",
      "body": "Worked with Harris to manually apply his patch ( FLUID-3858-patch.txt ), since the code base had changed after he created it. This  fixes the issue where you couldn't move a portlet into the right most column if it was empty. I've committed it to trunk.\n"
    }
  ]
}
---
The layout reorderer demo fails to move portlet with keyboard to the correction location.  Once the column is emptied, portlets can't be moved back into it.  Also, moving element to the left with ctrl+left skips over 1 column on the demo.

Tried this with revision 10294, to reproduced, go to infusion/src/webapp/demos/reorderer/layoutReorderer/html/layoutReorderer.html.  Using keyboard, move the last portlet of the third column (Survey Results) to the left by using Ctrl-\[left arrow].  Then, repeat the same for the "News Ticker" portlet in the third column.  You will notice this portlet skips the center column and hops onto the first column.   Now, try to move any unlocked portlets to the right most column with ctrl-right arrow, you won't be able to.

I also tried turning wrap off by changing "disableWrap: true" to "disableWrap: false".  Same results, you won't be able to move portlets to the right.  Interestingly, you will be able to move it to the left until it wraps around to the third column.

        
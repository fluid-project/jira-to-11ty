---json
{
  "title": "FLUID-1690",
  "summary": "Reorderer + Inline edit problem",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Nicolaas Matthijs",
  "date": "2008-10-20T11:03:24.000-0400",
  "updated": "2008-12-03T11:53:09.000-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Inline Edit",
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-10-20T12:20:25.000-0400",
      "body": "Investigation seems to show that this is a design error in the implementation of the JQuery ui.core function \"mouseDown\". This function operates an \"event delegation model\" for capturing events - it is used in the implementation of JQuery UI \"draggable\" - for any element which is registered as potentially draggable, the event is captured by this function, which, as well as registering some global document event handlers, unconditionally returns \"false\", thus preventing any default action of the event. \\\nUnfortunately an important default action of the event which is prevented is its natural effect on element focus and blur. Therefore any inline-edit control which is expecting to operate natural focus/blur semantics based on elements which are also draggable will fail.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-10-20T16:19:47.000-0400",
      "body": "This has been fixed at revision 5775 by issuing a dynamic patch to JQuery UI core. The base issue has been illustrated with a test case at <https://source.fluidproject.org/svn/fluid/components/trunk/src/webapp/tests/jquery-tests/manual/jQueryUI-focus-test.html> and is being taken up upstream with the JQuery UI team. Will report here on any responses or tickets raised.\n\nCurrently I have not succeeded in making an automated test case for this issue, since it seems that jQuery.simulate is not a sufficiently \"realistic\" environment to trigger the click -> focus change transition. However, I have adjusted one of the standard Reorderer samples to illustrate the behaviour, at <https://source.fluidproject.org/svn/fluid/components/trunk/src/webapp/sample-code/reorderer/portal/portal.html>. The text \"Default folder behaviour\" on the bookmarks portlet at the top right is inline-editable and clicking on \"empty space\" elsewhere within the same portlet will show up the issue.\n"
    }
  ]
}
---
In my website, I have a portal/dashboard page, which is based on the Fluid\
reorderer. This is working fine and smoothly. Although I do seem to see\
a problem now when I use the Fluid inline edit in one of my portlets. I can\
get my text I want to edit from normal/text mode into edit mode, but if I then\
click somewhere else inside my portlet or click on any other portlet, it\
doesn't switch back to normal/text mode. It only switches back to normal/text\
mode if I click outside of any of the portlets.

I have done some minor investigation, so this might be completely wrong,\
but it looks like the portlets are preventing the document.mousedown function\
from executing when you click on one. And I can only see a switch from edit\
mode to text mode when that function is being executed (so a click on the\
rest of the page).

Any idea how I can make this work ... ?

        
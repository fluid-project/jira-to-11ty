---json
{
  "title": "FLUID-1594",
  "summary": "Clicking on undo while in edit mode causes undo and redo to have the same value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-09-18T18:07:08.000-0400",
  "updated": "2008-09-24T12:21:21.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1594/FLUID-1594-patch.txt",
      "filename": "FLUID-1594-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:51:19.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-23T12:49:26.000-0400",
      "body": "Investigating the cause of this problem:\n\nThe instant that you enter edit mode, the current contents of the field are 'backed up' for use with undo. So the moment you execute step 3 in Justin's steps to reproduce, the older 'initial' value is overwritten with the latest value. When you click 'undo' in step 4, the code properly and successfully restores the backed-up text - the problem is that that backed-up text was overwritten with new backed-up text.\n\nThe way it's implemented, the undo functionality is a single-shot deal. The moment you decide to edit the text, the slate is wiped clean, and the 'current' text is what is backed up.\n\nThinking about how to address this.  It wouldn't work to copy the 'old text' into a temporary buffer, and only 'back up' the text on finish, because 'finish' does happen on step 4 above.\n\nStill thinking...\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-23T15:44:05.000-0400",
      "body": "Antranig, I've made a fix for this issue that changes the event handlers that Undo binds to the Inline Edit. Could you have a look at the patch, so confirm that I'm using the event model and the Undo models properly?\n\nMy goal is to change the updating of the 'backup copy' to happen only if the user has actually changed the text. It functions properly (i.e. the patch produces the correct user experience) but I'm not sure the code is the 'right' way to do things.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-23T17:00:35.000-0400",
      "body": "Hi Anastasia - this patch looks good and seems the best way to implement the desired functionality.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-24T12:21:21.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)&#x20;\n"
    }
  ]
}
---
Clicking on the undo link while in edit mode (with out changing the content) causes the undo and redo actions to have the same value.

Steps to reproduce:

1\) Open the bSpace example from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Edit one of the inline edit fields

3\) Re-open the inline edit field that was just editted. Without changing anything click on the undo link.

4\) Click undo

Notice that clicking undo and redo has no effect on the value of the inline edit field

        
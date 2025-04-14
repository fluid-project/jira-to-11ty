---json
{
  "title": "FLUID-857",
  "summary": "Blur on an Inline Edit while editing leaves a 'focus' style behind",
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
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-07T21:22:12.000-0400",
  "updated": "2008-12-03T11:47:58.000-0500",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Firefox (Windows and Mac)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-883/",
      "key": "FLUID-883"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-07T21:30:41.000-0400",
      "body": "There is a blur handler (assigned in bindKeyHighlight()) that should take care of this, but for some reason, when a click is the cause of a blur, the blur handler is not triggered - the DebugFocus tool does indicate the blur is happening, but the 'focusOff() handler isn't triggered.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-07-18T17:03:46.000-0400",
      "body": "The problem was due to making a call to viewEl.focus() from inside the general finish() handler. If the finish() handler were itself being invoked as a result of a focus change operation, this seemed to result in some form of race condition in the browser with generally undefined behaviour - the focus and blur handlers would be called in an essentially random order, with some handlers being aborted.\n\nFor now, a very simple solution was just to move the call from outside finish() into bindEditFinish(), to ensure that we only issued the focus change if the edit were concluding due to a keyboard activity.&#x20;\n\nAll the tests pass and the manual test also works, however this may not be the ideal global solution, since it doesn't really cover the general requirement of where to put focus - in the case, for example, the edit operation is programmatically cancelled, the focus is probably in an undefined position. We don't currently have a test case for this, but if we did I guess it would go in Block 6, \"Edit-Finish\". If we wanted to address this issue more generally, we would probably need to set up a global event interception framework (as discussed post-standup today) so that it would be always possible to tell, for example, whether an event handler of a particular kind were on the stack.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:47:58.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
In Firefox, but not in IE:

If you are in the middle of editing an Inline Edit and move focus away from it by clicking on another Inline Edit, the first component successfully leaves edit mode, but leaves the 'focus' style behind.

To reproduce:

<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>

1\) Click on any Inline Edit to enter edit mode.\
2\) Click on any other Inline Edit.\
-> The first Inline Edit will still have the focus style (grey border) where focus is clearly on the second Inline Edit.

dev-iteration39

        
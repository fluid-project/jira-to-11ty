---json
{
  "title": "FLUID-891",
  "summary": "Wrong focus styling during keyboard navigation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Daphne Ogle",
  "reporter": "Justin Obara",
  "date": "2008-07-10T20:21:35.000-0400",
  "updated": "2008-07-21T13:19:51.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3 (Mac OS X)\\\nFF2, FF3, IE6, IE7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-10T21:14:09.000-0400",
      "body": "Daphne, could you take a look at this and clarify what the styling differences (or sameness) should be between hovering over an inline edit and tabbing to it. Should both actions produce a yellow highlight?\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-07-11T01:00:30.000-0400",
      "body": "Sent in email to the list:\n\nI'm going to think aloud a bit hear in the hopes of hearing others perspective.\n\nThe current design describes these 2 actions as having the same visual representation.  The point of the highlight is to help users discover the functionality.  The worst case would be to have a user staring at a screen trying to find the edit link.\n\nFor keyboard interaction, tabbing into the field is when we want the user to know they can edit the information in the field.  Since the field has focus I assume it will display as an editable field at that point?  Perhaps that's enough of an indicator of the ability to edit.  With keyboard interaction what we are missing is the ability to accidentally discover the inline edit option.  I don't think there is a  parallel in keyboard interaction to mouse users randomly moving the mouse around on the screen?  Or perhaps it's just beginning to \"tab around\"?  If editable fields are all changing their display editable then users will get that it's an option.\n\nThoughts?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-11T14:29:55.000-0400",
      "body": "Currently, focus does **not** switch the component into edit mode, you have to press Enter to do that. So it is necessary to have some other indication that the text is editable, and putting on my user hat, I would think it would be more consistent if the visual indication was the same regardless of mouse vs. keyboard.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-07-14T22:19:44.000-0400",
      "body": "I agree with Anastasia & Justin here.  I think the yellow highlighting should display when the user tabs into a field.  The dotted outline can also display since this is an expected visual cue to show where the user is on the screen.\n\nOur current task is to add keyboard interactions to the storyboards which I'm hoping to get to in the next day or so.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-07-18T17:45:29.000-0400",
      "body": "This is resolved at revision 5239 - however, note that the highlight semantics can now appear \"unusual\" in the case where the user tabs focus to one control using the keyboard, and then hovers over a different one with the mouse. This can lead to either 2 or zero \"invitation style\" edit controls in the document.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-21T13:19:22.000-0400",
      "body": "Filed Antranig's 18July08 comment as Fluid-949 (<http://issues.fluidproject.org/browse/FLUID-949>)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-21T13:19:51.000-0400",
      "body": "Verified fix in FF2 & FF3 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
The wrong focus styling is applied to the in-line edit fields when using keyboard navigation. On mouse over, the in-line edit field is highlighted in yellow. On keyboard navigation, the in-line edit field is only given a dotted border.

Steps to reproduce:

1\) Open the in-line edit demo from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Tap the 'tab' key until one of the in-line edit fields has focus. Notice the dotted border and lack of yellow highlighting

dev-iteration39

        
---json
{
  "title": "FLUID-3669",
  "summary": "Screen reader usability issues with Inline Edit (esp. uneven feedback, lack of overall orientation for screen reader users)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jan Richards",
  "date": "2010-06-04T17:00:33.365-0400",
  "updated": "2014-07-30T15:28:42.524-0400",
  "versions": [
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "WindowsXP+IE8+NVDA2010\\\nWindowsXP+IE8+JAWS10\\\nWindowsXP+FF3.5+NVDA2010\\\nWindowsXP+FF3.5+JAWS10\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-06-07T09:00:17.941-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-11T09:52:43.784-0500",
      "body": "With all the changes to Inline Edit in Infusion 1.3, this task should be evaluated to see if it has been sufficiently addressed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-30T15:28:42.524-0400",
      "body": "There are have been a number of changes since this was filed, as well as updates to the various screen readers. This will need to be retested.\n"
    }
  ]
}
---
F.2 WindowsXP+Firefox+NVDA

Browser: Firefox v3.5.9\
Screen Reader: NVDA 2010.1\
Tester: Jan Richards

BROWSE MODE:

* "The quick brown fox jumped button clickable over the lazy dogs and then" \[similar to FLUID-2652]\
  -"edit autocomplete over the lazy dogs" =OK
* Weird: when press enter on the first editable area, it is editable. But then pressing ENTER on it again causes the focus to shift to that area's "undo edit" link This is not the case with any subsequent editable areas.

FORMS MODE:

* works the same as above except without the weird issue affecting the first editable area
* though it is much easier to use "BROWSE MODE" overall since the other non-editable text is also readily available.\
  F.3 WindowsXP+Firefox+JAWS

Browser: Firefox v3.5.8

Screen Reader: JAWS 10\
Tester: Phil Richards

PC Cursor Mode

* if the mouse is used to click on an editable field, the audio will say "lazy dogs button to activate press space bar edit" but I can't figure out how to make those fields editable without directly clicking on them, it won't read the text so that I can press space bar to activate the fields

Jaws Mode

* arrow keys move the cursor, when it is placed on a line of text it will read the line but give no indication that any part of it is editable
* left/right arrows move the cursor letter by letter, but when it is over  letters in an editable field it says "blank" rather than reading the letter
* I can't figure out how to activate the editable fields with the keyboard; if I click on one with the mouse and leave the mouse in that field, the audio will say "edit over jumped the lazy type in text"
* If I click an editable field and then move the  mouse out of that field, audio will say "the lazy dogs and then dot dot dot read only edit read only use your reading keys to read the text"

Virtual Cursor

* Clicking on an editable field with the mouse causes the audio to say "edit the quick brown fox jumped over the lazy dog and then dot dot dot edit" or "the quick brown fox jumped button to edit type in text", I'm not sure what causes it to say one or the other
* If I navigate with the mouse it will read "the quick brown fox jumped over the lazy dogs button and then"\
  F.4 WindowsXP+IE+NVDA

Browser: IE8

Screen Reader: NVDA 2010.1\
Tester: Phil Richards

BROWSE MODE

* audio gives no indication of editable fields
* seems to be no way to edit the fields, enter key does nothing

FOCUS MODE

* audio only reads "Example 1. Default Inline Edit"
* no way to edit fields or read other text\
  F.5 WindowsXP+IE+JAWS

Browser: IE8

Screen Reader: JAWS 10\
Tester: Jan Richards

* VIRTUAL cursor reads things in useful chunks ARROW "the quick brown fox jumps" ARROW "over the lazy dogs"
* TAB through works well at finding the editable ares.
* JAWS reads "over the lazy dog button to activate press spacebar"
* SPACEBAR pressed JAWS reads: "edit over the lazy dogs type in text"
* JAWS read edit link as "undo edit link"&#x20;

        
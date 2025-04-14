---json
{
  "title": "FLUID-3666",
  "summary": "Screen reader a11y and usability issues with List Reorderer (esp. keyboard navigation conflicts, lack of feedback, lack of overall orientation for screen reader users)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jan Richards",
  "date": "2010-06-04T16:48:42.228-0400",
  "updated": "2017-03-13T11:11:02.906-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "WindowsXP+IE8+NVDA2010\\\nWindowsXP+IE8+JAWS10\\\nWindowsXP+FF3.5+NVDA2010\\\nWindowsXP+FF3.5+JAWS10\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-06-07T08:58:55.404-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-11T11:12:49.375-0500",
      "body": "A bunch of these issues have been addressed through <https://fluidproject.atlassian.net/browse/FLUID-3730#icft=FLUID-3730> and <https://fluidproject.atlassian.net/browse/FLUID-3711#icft=FLUID-3711>. Other issues should be broken out into there own jiras and this one closed.&#x20;\n"
    }
  ]
}
---
C.2 WindowsXP+Firefox+NVDA

Browser: Firefox v3.5.9\
Screen Reader: NVDA 2010.1\
Tester: Jan Richards

OVERALL:

* big picture: read "list with 6 items"

- In BROWSE mode
- arrow down is the NVDA key for going down line by line. So it moves down line by line, moving focus between list items only at the end of each.
- reads items ok (ex. "Clickable 1 Select the date"...)
- but i,k,m are all used NVDA for other things so they don't work ("i" actually moves focus down instead of up because it is the NVDA key for next link)
- ctrl+i,ctrl+j,ctrl+k,ctrl+m all work but with no audio feedback
- ctrl+arrows do not work at all

* In FOCUS mode
* keystrokes all work.
* reading is ok: e.g. "list item draggable drop target 4 of 6"
* no audio feedback when items are moved with ctrl+\
  C.3 WindowsXP+Firefox+JAWS

Browser: Firefox v3.5.8

Screen Reader: JAWS 10\
Tester: Phil Richards

PC Cursor Mode

* Once you tab into the list, up/down arrows  and i/m move up and down through list items
* ctrl + arrows, ctrl + i/m work, move items up/down
* audio reads text of box that is in focus

Jaws Mode

* i,m will move focus up and down, and audio will read all text in the box
* arrow up/down moves cursor line by line, and audio only reads the text on that line, ie just "book rooms", not "book facilities" or "select building"
* moving cursor to a line with a number causes audio to read the number, ie "five book caterer", while moving focus with i/m results in only "book caterer" without the number included
* audio will sometimes read where the cursor is and sometimes act as if both the cursor and the text below it are not there, so sometimes it says "six select graphic 235 date" and sometimes "five book cater"
* ctrl + i/m will move list items, audio feedback is "control i", "control m"
* ctrl + arrows will cause cursor to jump between numbers and first bulleted item in a list where present, ie "one, two, three, email campaign, five"; this does not move any of the list items

Virtual Cursor

* arrows and i,m do not work
* ctrl + i,m work
* ctrl + up/down causes focus to cycle through all items or jump directly to last item, none of them change position\
  C.4 WindowsXP+IE+NVDA

Browser: IE8

Screen Reader: NVDA 2010.1\
Tester: Jan Richards

SAME AS FOR FIREFOX v3.5.9 (C.2) EXCEPT:

* NVDA uses BROWSE mode by default

- In BROWSE mode
- arrow down is the NVDA key for going down line by line. So it moves down line by line, moving focus between list items only at the end of each.
- reads items ok (ex. "Select the date"...)
- ctrl+i,ctrl+j,ctrl+k,ctrl+m all work with audio feedback "selected dragging"

* In FOCUS mode
* when using arrows (or i,m keys) reading is a mess - moving to a new draggable item causes NVDA to read everything on the page
* TAB doesn't go through the items in the list. It just jumps in then out.
* reads item ok when dragging with ctrl+arrows or i,m = "Select the date dragging"&#x20;

        
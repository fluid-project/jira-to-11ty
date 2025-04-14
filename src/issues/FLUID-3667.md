---json
{
  "title": "FLUID-3667",
  "summary": "Screen reader a11y and usability issues with Grid Reorderer (esp. keyboard navigation conflicts, lack of feedback, lack of overall orientation for screen reader users)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jan Richards",
  "date": "2010-06-04T16:52:25.077-0400",
  "updated": "2017-03-13T13:47:11.440-0400",
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
      "date": "2010-06-07T08:59:22.572-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-11T11:15:26.668-0500",
      "body": "A bunch of these issues have been addressed through <https://fluidproject.atlassian.net/browse/FLUID-3730#icft=FLUID-3730> and <https://fluidproject.atlassian.net/browse/FLUID-3711#icft=FLUID-3711>. Other issues should be broken out into there own jiras and this one closed.&#x20;\n"
    }
  ]
}
---
D.2 WindowsXP+Firefox+NVDA

Browser: Firefox v3.5.9\
Screen Reader: NVDA 2010.1\
Tester: Jan Richards

Screen reader hint to turn off virtual cursor is for JAWS users not NVDA.

BROWSE MODE

* only up and down arrows work but they move the focus left and right instead of up and down as when NVDA is not running
* ctrl+arrows do not work
* i,k,m do not work
* ctrl-i,j,k,m work but with no audio feedback
* when moving around the audio sounds like "Clickable We", "Clickable you"...

FORM MODE

* better audio feedback "We draggable selected"
* arrows all work
* ctrl+arrows all work but with no audio feedback
* ctrl-i,j,k,m all work but with no audio feedback\
  D.3 WindowsXP+Firefox+JAWS

Browser: Firefox v3.5.8

Screen Reader: JAWS 10\
Tester: Phil Richards

PC Cursor Mode:

* arrow keys work
* i,j,k,m work, audio will read the letter as well as the word, ie "m happy", "k dog"
* ctrl + left/right work, but audio reads random words. There is likely a pattern but I can't figure it out
* strange behavior from ctrl + up/down. Will sometimes read the three words on the current line, will sometimes jump to other boxes, ie from box 2 to box 4, or from 7 to 5 to 8 with one button press.  If focus is on a box in the top row and ctrl + up is pressed (same for bottom row/down) sometimes the focus will loop through that row several times before stopping and reading random words
* ctrl + i,j,k,m works but audio does not read the word in the box, just says "control i", "control j", etc

Jaws Mode:

* arrow keys move mouse cursor, audio says "blank" unless over a letter, where it will read the letter

- i,j,k,m work, will read the letter as well as the word, ie "m happy", "k dog"
- ctrl + arrows will move mouse cursor to each box; if the cursor is in the first box audio will read all three words on the row, if it is on second or third box it will only read the word in that individual box
- ctrl + i,j,k,m works but audio does not read the word in the box, just says "control i", "control j", etc

Virtual Cursor

* arrow up/down will read forwards/backwards through boxes in sequential order and will identify which item is selected
* arrow left/right will read individual letters forwards/backwards
* i,j,k,m do not work
* ctrl + left/right work but read random words
* ctrl + up/down shows the same behavior as PC cursor mode
* ctrl + i,j,k,m works but audio does not read the word in the box, just says "control i", "control j", etc\
  D.4 WindowsXP+IE+NVDA

Browser: IE8

Screen Reader: NVDA 2010.1\
Tester: Phil Richards

BROWSE MODE

* i,k,m don't work
* j moves box backwards through images, when moving audio sounds like "ReYou", "ReAm", etc
* up arrow always moves focus to the instruction box at the top of the page
* left/right arrows read letter by letter forwards/backwards
* down arrow moves focus to "You" and audio reads all nine words
* ctrl + up moves focus to instruction box
* ctrl + down arrow moves focus to "You" and audio reads all nine words
* ctrl + right/left move focus from image to image

FORM MODE

* i,j,k,m and arrows work but audio says "sortable grid document YouAreIAmWeWonderfulDogsCATTHappy Table Dogs Draggable Selected"
* ctrl + arrows work, ctrl + i,j,k,m work, feedback is "CATT dragging selected"
* after dragging, if focus is moved to a different image, audio says "draggable sortable grid document YouAreIAmWeWonderfulDogsCATTHappy Table Dogs Draggable Selected" but only for the first image that focus is placed on, "draggable" omitted for subsequent images

        
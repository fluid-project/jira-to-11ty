---json
{
  "title": "FLUID-3668",
  "summary": "Screen reader a11y and usability issues with Image Reorderer (esp. keyboard navigation conflicts, lack of feedback, lack of overall orientation for screen reader users)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jan Richards",
  "date": "2010-06-04T16:59:07.791-0400",
  "updated": "2017-03-13T13:47:27.446-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "WindowsXP+IE8+NVDA2010\\\nWindowsXP+IE8+JAWS10\\\nWindowsXP+FF3.5+NVDA2010\\\nWindowsXP+FF3.5+JAWS10\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-06-07T08:59:42.604-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-11T11:17:05.527-0500",
      "body": "A bunch of these issues have been addressed through <https://fluidproject.atlassian.net/browse/FLUID-3730#icft=FLUID-3730> and <https://fluidproject.atlassian.net/browse/FLUID-3711#icft=FLUID-3711>. Other issues should be broken out into there own jiras and this one closed.&#x20;\n"
    }
  ]
}
---
E.2 WindowsXP+Firefox+NVDA

Browser: Firefox v3.5.9\
Screen Reader: NVDA 2010.1\
Tester: Jan Richards

-Screen reader hint to turn off virtual cursor is for JAWS users not NVDA.\
-"big picture" instructions lacking \[FLUID-1822]

BROWSE MODE

* only up and down arrows work but they move the focus left and right instead of up and down as when NVDA is not running
* ctrl+arrows do not work
* i,k,m do not work
* ctrl-j,k work but with no audio feedback
* ctrl-m appears to do nothing. Ctrl-i opened an bookmarks sidebar in FF
* when moving around the audio sounds like "Graphic draggable grapes "...

FORM MODE

* audio feedback includes whole SRC URL e.g. "Fig graphic [http://...draggable](http://...draggable/)"
* arrows all work
* ctrl+arrows all work but with no audio feedback
* ctrl-i,j,k,m all work but with no audio feedback\
  E.3 WindowsXP+Firefox+JAWS

Browser: Firefox v3.5.8

Screen Reader: JAWS 10\
Tester: Phil Richards

PC Cursor Mode:

* left/right will select image, audio says "blank cherry graphic" then reads the url of the image
* up/down do not work
* j,k work, audio says "j blank cherry graphic" then reads url of image
* i,m do not work, audio says "i" or "m"
* ctrl + left/right work but there is no audio at all
* ctrl + up/down will just read the name of each fruit from left to right
* ctrl + i,m do not work
* ctrl + j,k work but audio does not read the word in the box, just says "control k", "control j"

Jaws Mode:

* arrow keys move mouse cursor, audio says "blank" unless over a letter, where it will read the letter
* if cursor is moved from above or below on to the images, audio will say "banana graphic nine hundred forty four gon fruit blackberry cherry fig grapes" or other variations depending on which images are highlighted and which image the cursor is on
* i,m do not work
* j,k move focus, audio says "j blackberry graphic" and then the url of the image, with the fruit name depending on where the mouse cursor is positioned.&#x20;
* ctrl + right moves mouse cursor through images in order, audio reads the whole name then part of the name, ie "dragonfruit agonfruit" or "blackberry erry"
* ctrl + left moves mouse cursor back through images and only reads full name.  It will sometimes skip images
* ctrl + i,m do not work
* ctrl + j,k work but audio does not read the word in the box, just says "control k", "control j"

Virtual Cursor

* arrow up/down will read the text in the instruction box at the top or read the name of each fruit in order

- arrow left/right will read individual letters forwards/backwards
- i,j,k,m do not work
- ctrl + arrow up/down will read the text in the instruction box at the top or read the name of each fruit in order
- ctrl + arrow left/right reads word by word forwards/backwards
- ctrl + i,m do not work
- ctrl + j,k work but audio does not read the word in the box, just says "control k", "control j"\
  E.4 WindowsXP+IE+NVDA

Browser: IE8

Screen Reader: NVDA 2010.1\
Tester: Phil Richards

BROWSE MODE

* i,k,m do not work
* j moves backwards, audio sounds like "ReFig graphic draggable"
* left/right arrow will read letter by letter, then move to the next image; audio says "out of graphic graphic draggable space", repeat the same thing, then start reading letters
* up/down work, audio says "graphic draggable" after first arrow press, "graphic draggable \[fruit name]" after second, then moves to next image
* when on the last image, pressing down keeps repeating "graphic draggable"
* ctrl + j,k work, audio says "linked dragging"
* ctrl + i,m do not work
* ctrl + arrows do not work
* ctrl + up/down audio is "graphic drop target dragging" or "graphic drop target draggable", sometimes with the name of the fruit at the end, sometimes without
* ctrl + left/right audio is "out of graphic graphic dragging/draggable"

FORM MODE

* i,m do not work
* j,k move focus but audio is "image reorder document" followed by all fruits in an order followed by "table" followed by the url of the image selected followed by "draggable \[fruit name]"
* arrows are the same, up/down do not work, left/right result in same audio as j/k
* ctrl + j,k,i,m do not work
* ctrl + arrows do not work\
  E.5 WindowsXP+IE+JAWS

Browser: IE8

Screen Reader: JAWS 10\
Tester: Phil Richards

PC Cursor Mode

* Can tab from one image to another, but the arrow keys do nothing
* ctrl + left/right causes the audio to read the name of the item currently selected
* ctrl + up/down causes the audio to read all six fruits in order
* i,j,k,m and ctrl + i,j,k,m do nothing

Jaws Mode

* Arrows will move the cursor onto the images, but audio will read all six regardless of where cursor is placed
* Once on a word, left/right will read letter by letter
* ctrl + left/right move cursor from one box to another, audio only reads text in that box
* i,j,k,m and ctrl + i,j,k,m do nothing

Virtual Cursor

* Arrow up/down read each image as "visited link graphic banana thumbnail banana" but there is no way to select or move images
* Arrow left/right reads letter by letter
* i,j,k,m and ctrl + i,j,k,m do nothing

NOTE: There appears to be no way to move these items even though they are selectable, even with the mouse.&#x20;

        
---json
{
  "title": "FLUID-3670",
  "summary": "Screen reader usability issues with Pager (esp. lack of overall orientation for screen reader users)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Jan Richards",
  "date": "2010-06-04T17:01:33.629-0400",
  "updated": "2014-07-30T15:29:06.207-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "WindowsXP+IE8+NVDA2010\\\nWindowsXP+IE8+JAWS10\\\nWindowsXP+FF3.5+NVDA2010\\\nWindowsXP+FF3.5+JAWS10\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3670/FLUID-3670-pager-common-issues.xls",
      "filename": "FLUID-3670-pager-common-issues.xls"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3670/FLUID-3670-ScreenReaderTest.xls",
      "filename": "FLUID-3670-ScreenReaderTest.xls"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-06-07T09:00:41.870-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-04T11:31:32.916-0400",
      "body": "FLUID-3670-ScreenReaderTest which contains all the tests done by different versions of the screen readers such as NVDA2010.1-2, JAWS10-12 and ORCA. Browser used Mozilla 3.5.8, 3.5.9, 3.6.3, and IE8.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-09T11:03:31.904-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3670#icft=FLUID-3670>  common issues found during the pager demo test.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-30T15:29:06.207-0400",
      "body": "There are have been a number of changes since this was filed, as well as updates to the various screen readers. This will need to be retested.&#x20;\n"
    }
  ]
}
---
G.1 Gnome+Firefox+Orca

Browser: ??\
Screen Reader: ??\
Tester: ??\
G.2 WindowsXP+Firefox+NVDA

Browser: Firefox v3.5.9\
Screen Reader: NVDA 2010.1\
Tester: Jan Richards

BROWSE mode

* "list with 8 items link 1 link 2 link 3 link 4 last out of list clickable link previous clickable link next link show combobox collapsed submenu 10 per page"
* when select a link no audio feedback
* controls appeared to be operable

FORMS mode

-also worked fine\
G.3 WindowsXP+Firefox+JAWS

Browser: Firefox v3.5.8\
Screen Reader: JAWS 10\
Tester: Phil Richards

PC Cursor Mode

* clicking on the combo box causes the audio to say "list box five", once I select something it says "combo box five"
* audio will read links when clicked
* I'm not sure how to get it to read any of the other text, it only reads links and the combo box, and when I click in an editable box it says "edit", but will not read any other text

Jaws Mode

* arrow up/down will move cursor line by line and audio will read the line
* arrow left/right will move cursor letter by letter and audio will read letter
* audio reads letters in links and numbers in editable boxes and combo box but gives no indication that they are clickable/editable and there seems to be no way to activate links/buttons with the keyboard

Virtual Cursor

* arrow up/down will read field by field, ie name, then another press for user id, another for points, etc
* when cursor is in an editable box like in the points column, up/down arrow will move it to the box above or below, but there is no way to leave the boxes.  Up/down will continue to read other lines, and left/right will read individual characters until you try to use left/right to get out of the edit box.  For example, if I'm in an edit box that says 87, whenever I press left it will say 8 over and over.  Pressing right once will cause it to say 7, but pressing right again will just say space over and over
* using arrow keys to read the top line will result in audio that says "show combo box collapsed ten per page"
* there appears to be no way to change the value in the combo box with the keyboard
* no way to activate links with the keyboard\
  G.4 WindowsXP+IE+NVDA

Browser: IE8

Screen Reader: NVDA 2010.1\
Tester: Phil Richards

BROWSE MODE

* controls appear to work fine
* no audio feedback when link is clicked
* "list link 1 2 link 3 out of list link previous link next show combo box collapsed 5 per page"

FOCUS MODE

* appears to work fine\
  G.5 WindowsXP+IE+JAWS

Browser: IE8

Screen Reader: JAWS 10\
Tester: Phil Richards

PC Cursor Mode

* Tab will move between links, editable boxes and combo box
* Audio will read the name of the link or the value in the box, and for the combo box says to use the arrow keys to change the value
* No way to click on links
* Arrow keys do change value in combo box, and text in grade boxes is editable
* Only text that the audio reads is that which is selected via tab, so none of the non link/editable text is read

Jaws Mode

* Moving cursor from line to line with arrows will cause audio to read all text on the line, but it does not indicate if something is a link or is editable
* No way to click links, change value of combo box, or type in editable boxes

Virtual Cursor Mode

* Arrow keys will move through each individual field/item
* Audio indicates links, combo box, editable boxes
* Possible to change value of combo box and edit text boxes, but no way to click on links

        
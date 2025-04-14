---json
{
  "title": "FLUID-3665",
  "summary": "Screen reader a11y and usability issues with Layout Reorderer (esp. keyboard navigation conflicts, lack of feedback, lack of overall orientation for screen reader users)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jan Richards",
  "date": "2010-06-04T16:46:18.870-0400",
  "updated": "2017-03-13T11:09:05.490-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "WindowsXP+IE8+NVDA2010\\\nWindowsXP+IE8+JAWS10\\\nWindowsXP+FF3.5+NVDA2010\\\nWindowsXP+FF3.5+JAWS10\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-06-07T08:58:39.530-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-11T11:01:59.956-0500",
      "body": "A bunch of these issues have been addressed through <https://fluidproject.atlassian.net/browse/FLUID-3730#icft=FLUID-3730> and <https://fluidproject.atlassian.net/browse/FLUID-3711#icft=FLUID-3711>. Other issues should be broken out into there own jiras and this one closed.\n"
    }
  ]
}
---
B.2 WindowsXP+Firefox+NVDA

Browser: Firefox v3.5.9\
Screen Reader: NVDA 2010.1\
Tester: Jan Richards

OVERALL:

* our hidden instruction text for screen reader users says "Screen reader users turn off virtual cursor (insert + z)." I'm guessing this is speaking to Jaws users but this is not correct for NVDA.
* there is "no big picture" available. How many columns, how many items in each column etc. Maybe this could be indicated with live regions somehow? <https://fluidproject.atlassian.net/browse/FLUID-2964#icft=FLUID-2964>

BROWSE mode

* reads ex. "Clickable Content Portal A2"
* does not read "Can't place above locked portlet"
* up down arrows OK, but left+right used by NVDA  for other things so they don't work
* but i,k,m are all used NVDA for other things so they don't work
* ctrl+i,ctrl+j,ctrl+k,ctrl+m all work but with no audio feedback
* ctrl+arrows do not work at all
* when content is moved between columns, the next arrow key down pulls focus back over to the original column instead of moving to the next item down in the new column (as happens with NVDA off)

FOCUS mode

* keystrokes all work.
* but the reading is wrong...each draggable div is read as "Document draggable"
* no audio feedback when things are moved with ctrl+arrows\
  B.3 WindowsXP+Firefox+JAWS

Browser: Firefox v3.5.8

Screen Reader: JAWS 10\
Tester: Jan Richards

OVERALL:

Virtual Cursor ON:

* can TAB in
* doesn't read draggable modules
* arrows do not work
* i,j,k,m do not work
* reading does not work

Virtual Cursor OFF:

* can TAB in
* doesn't read draggable modules
* arrows work
* i,j,k,m work
* ctrl-arrows do not work
* ctrl i,j,k,m work
* reading does not work

I COULD NOT GET THIS TO WORK AT ALL

B.4 WindowsXP+IE+NVDA

Browser: IE8\
Screen Reader: NVDA 2010.1\
Tester: Jan Richards

SAME AS FOR FIREFOX v3.5.9 (B.2) EXCEPT:

* In BROWSE mode
* reads ex. "Content Portal A2"
* ctrl+i,ctrl+j,ctrl+k, ctrl+m all work with audio feedback "dragging"

- In FOCUS mode
- when using arrows (or ijkm keys) reading is a mess - moving to a new draggable item causes NVDA to read everything including hidden "can't place above locked item" messages
- when using TAB things are a bit better (reads "Content Portal B2 Grouping Dragging")
- no audio feedback when things are moved with ctrl+arrows (NVDA just restates the name of the item moved)\
  B.5 WindowsXP+IE+JAWS

Browser: IE8

Screen Reader: JAWS 10\
Tester: Jan Richards

OVERVIEW:

* once again the "big picture" is missing. What have I arrived at? What am I supposed to do? etc.

Virtual Cursor OFF:

* i,j,k,m work
* ctrl-up, ctrl-down do not work
* reads the label but nothing about "draggable" etc.
* no audio feedback when moved
* locked-warnings not read

        
---json
{
  "title": "FLUID-3671",
  "summary": "Screen reader a11y and usability issues with Progress (esp. lack of feedback for screen reader users)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Golam Chowdhury",
  "reporter": "Jan Richards",
  "date": "2010-06-04T17:02:41.663-0400",
  "updated": "2014-03-03T13:43:06.264-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Progress"
  ],
  "environment": "WindowsXP+IE8+NVDA2010\\\nWindowsXP+IE8+JAWS10\\\nWindowsXP+FF3.5+NVDA2010\\\nWindowsXP+FF3.5+JAWS10\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3671/FLUID-3671.patch.txt",
      "filename": "FLUID-3671.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3671/FLUID-3671.v.2.patch",
      "filename": "FLUID-3671.v.2.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-06-07T09:01:07.111-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jan Richards",
      "date": "2010-06-15T12:35:06.041-0400",
      "body": "This jQuery progress bar seems to be handled properly by NVDA. I note that it identifies itelf as an application:\\\n<http://hanshillen.github.com/jquery-ui/demos/aegis/index.html#>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-08-11T08:09:43.981-0400",
      "body": "There was a question on the fluid-work list ( <http://fluidproject.org/pipermail/fluid-work/2010-August/006939.html> ) regarding what example this was tested against. I would assume that it was from the Progress Demo ( <http://build.fluidproject.org/infusion/demos/progress/html/progress.html> ). Jan, if this is incorrect could you please make note of the correct url.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-20T09:06:46.611-0400",
      "body": "I have filed a ticked with NVDA about this issue. \\\n<http://www.nvda-project.org/ticket/913>\n\nWe should try to provide a work around until it has been addressed.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-09-20T17:46:48.723-0400",
      "body": "Created patch <https://fluidproject.atlassian.net/browse/FLUID-3671#icft=FLUID-3671>.patch.txt for fixing the progress bar issues in NVDA2010 with FireFox 3.5.9.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-09-27T14:00:26.346-0400",
      "body": "For patch <https://fluidproject.atlassian.net/browse/FLUID-3671#icft=FLUID-3671>.v.2.patch where we added options for the integrator to switch between aria-valuetext and aria-valuenow.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-09-27T16:33:04.046-0400",
      "body": "Fluid Progress component now provides the option to the integrator to switch between aria-valuenow and aria-valuetext. By setting the ariaBusyText to empty string will default to aria-valuenow and if ariaBusyText is set to some string then aria-valuetext will be enable.\n"
    }
  ]
}
---
H.2 WindowsXP+Firefox+NVDA

Browser: Firefox v3.5.9\
Screen Reader: NVDA 2010.1\
Tester: Jan Richards

BROWSE mode

* form worked ok except no audio feedback of any kind for the progress bar

FORMS mode:

* form worked ok and when "Do Something" was pressed the only audio feedback was "Progress example document"\
  H.3 WindowsXP+Firefox+JAWS

Browser: Firefox v3.5.8

Screen Reader: JAWS 10\
Tester: Phil Richards

PC Cursor Mode

* "Do Something" button activates with mouse, enter and space; bar appears and fills up, but there is no audio feedback for the appearance or completion of the progress bar

Jaws Mode

* Audio will only say "Do something"when the cursor is placed beside the button, not on the button, but gives no indication that it is clickable
* Audio will read individual letters in "Do Something" when cursor is moved over them, but gives no indication that it is clickable
* Audio will read "current progress" and "xx% complete" when it is placed beside or on the text in the progress box, will also read individual letters
* Difficult to get cursor to the box using only the keyboard, while the progress bar is visible the cursor moves very slowly and holding the arrow keys often causes the cursor to continue moving after releasing the button, placing it beyond the progress box

Virtual Cursor

* Generally works, only space will activate the button, not enter
* Audio says "heading level three current progress"\
  H.4 WindowsXP+IE+NVDA

Browser: IE8

Screen Reader: NVDA 2010.1\
Tester: Phil Richards

BROWSE MODE

* Works ok, audio is "Do something current progress zero percent complete

FOCUS MODE

* form works ok, only audio feedback when Do Something is clicked is "space" (if space is used, no feedback if mouse is used)
* will state current progress if mouse cursor is moved beside Do Something button\
  H.5 WindowsXP+IE+JAWS

Browser: IE8

Screen Reader: JAWS 10\
Tester: Phil Richards

PC Cursor Mode

* No way to make audio read "Example of a simple Progress indicator, using some sample code."
* Possible to tab to "Do Something" button, and audio identifies it as a button and says to activate with space
* Pressing space does show button being pressed, but no progress indicator is displayed and there is no audio indication that anything has happened

Jaws Mode

* Audio will read "Example of a simple Progress indicator, using some sample code." and "Do Something" when cursor is placed over them, but gives no indication that "do something" is a button
* However, if cursor is on "Do Something" and space is pressed, the button will be highlighted and the audio will say "Do Something button".  This does not press the button, though, and neither enter nor space will activate the button

Virtual Cursor

* Arrows will cause audio to read through text and "Do Something" is identified as a button, but there is no way to activate the button. Enter and space do not work.&#x20;

        
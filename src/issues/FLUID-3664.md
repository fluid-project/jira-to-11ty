---json
{
  "title": "FLUID-3664",
  "summary": "Screen reader a11y and usability issues with Uploader (esp. keyboard navigation problems, lack of feedback, lack of overall orientation for screen reader users)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jan Richards",
  "date": "2010-06-04T16:35:45.864-0400",
  "updated": "2011-01-05T15:24:42.194-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "WindowsXP+IE8+NVDA2010\\\nWindowsXP+IE8+JAWS10\\\nWindowsXP+FF3.5+NVDA2010\\\nWindowsXP+FF3.5+JAWS10\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-06-07T08:57:35.634-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T15:24:42.190-0500",
      "body": "Keyboard navigation has been greatly improved with the new HTML5 mutli-file uploader.   ARIA live regions have also been added to provide better feedback on uploading progress.\n"
    }
  ]
}
---
A.2 WindowsXP+Firefox+NVDA

Browser: Firefox v3.5.9\
Screen Reader: NVDA 2010.1\
Tester: Jan Richards

Overall:

* instructions would be helpful \[FLUID-664] <https://fluidproject.atlassian.net/browse/FLUID-1829#icft=FLUID-1829>

FLASH VERSION:

In BROWSE mode

* can use tab or arrow to move through the UI
* but speech feedback is hard to understand \[similar to FLUID-665]
* unable to select the "Browse" button with either ENTER or SPACEBAR \[FLUID-2031]\
  &#x20;(I had proceed by using the mouse to press "Browse" or "Add More")
* using TAB unable to delete the file added, but was able to do with arrow keys
* "Upload" button worked

In FOCUS mode

* can't TAB to "Add More"
* even less intelligible audio output
* "Upload" button worked

STANDARD SINGLE FILE VERSION:

* worked fairly well
* but "Save" moved me to the Flash version so I wasn't sure what feedback is provided automatically by the widget \[similar to FLUID-662, FLUID-2849]\
  A.3 WindowsXP+Firefox+JAWS

Browser: Firefox v3.5.8

Screen Reader: JAWS 10\
Tester: Phil Richards

Flash Uploader

PC Cursor Mode

* Can only use tab to move through interface
* When the "Choose Browse files" box, the audio only says "queue of files to upload" and gives no other indication of what is in the box or of the browse files link \[FLUID-3835]
* Can't activate "Browse files" link with enter or space, only with mouse
* No audio feedback on page at all until a file is selected, but then only audio is "upload button"
* Can select files with keyboard, upload button works by pressing enter or space, can tab or arrow on to button
* After clicking upload audio just says "stop upload button", gives no indication that it has been clicked or that a file has been uploaded\
  Can use enter or space to activate the "switch to standard single file uploader" link but only after tabbing to select the link
* No audio indication that the page has changed

Jaws Mode

* No indication that "browse files" is a link \[FLUID-704]
* Space will activate "browse files", enter will not\
  Can't select documents to upload with the keyboard
* If you highlight a document with the mouse, enter can be used to select it

- Can use enter or space to activate upload button
- Audio will say "upload button" and then "stop upload button" when it is clicked, but no indication that it has been clicked or that a document has been uploaded
- Focus is automatically placed on upload button after a file is selected; if you use the keyboard to move focus from this button, it cannot be activated again by the keyboard if you move the cursor back to it.  Tabbing back to the button does allow it to be activated with enter or space
- Can only use space to activate the "switch to standard single file uploader" link
- No audio indication that the page has changed, except that it will read the link that the cursor is over (ie switch to standard uploader or switch to flash uploader depending on which page it is on); however, it sometimes gets stuck in a loop, so it will say "switch to the standard single file uploader read only edit read only" followed by the url, and continues to repeat this until the link is clicked or the cursor is moved.  This does not always happen and I am not sure what triggers it.

&#x20;\
Virtual Cursor

* Can't activate "browse files" link with keyboard
* Can tab into file list and then use keyboard to select file
* Can activate Upload button with enter or space
* Audio will say "upload button" and then "stop upload button" when it is clicked, but no indication that it has been clicked or that a document has been uploaded
* Can use enter or space to activate the "switch to standard single file uploader" link but only after tabbing to select the link
* No audio indication that the page has changed
* Sometimes audio will only say "flash movie start" or "flash movie end"

Standard Uploader

PC Cursor Mode

* Can only tab through interface, arrow keys don't work
* Can activate browse and save buttons with enter or space, but sometimes you have to press enter twice to activate buttons
* Usually no audio feedback on page at all except when pressing left/right arrows which causes audio to say "blank", but sometimes the audio will read the name of links and buttons when you tab to them, I don't know what causes it to read or not read
* Can tab into file list and move with arrows, can activate with enter or space

Jaws Mode

* Using arrows to move the cursor below the "save" button causes audio to say "graphic 896"
* Can activate browse button with enter or space, though enter does not always work
* Can't select documents to upload with the keyboard
* If you highlight a document with the mouse, enter can be used to select it
* Once a file is listed in the box, the "browse" button is highlighted by default. Pressing enter anywhere on the screen will activate this button, even if the cursor is on the "save" button. Space will activate the "save" button even if the "upload" button is highlighted.  Tabbing to the save button allows it to be activated with enter.
* Audio will not read the full name of the file in the box, only what is visible on screen. It will also include audio indicating where the cursor is, but this will override text under the cursor.  This results in something like "F colon backslash graphic 971 cuments and settin browse"
* No audio indication that a file has been uploaded

Virtual Cursor

* Can activate "browse" button with enter or space
* Sometimes arrows do not work at all, I'm not sure why\
  A.4 WindowsXP+IE+NVDA

Browser: IE8

Screen Reader: NVDA 2010.1\
Tester: Jan Richards

SAME AS FOR FIREFOX v3.5.9 (A.2) EXCEPT:

FLASH VERSION:\
-sometimes had trouble even tabbing into the page at all - had to click mouse in the body of the web page\
In FOCUS mode

* can't TAB to "Add More"
* even less intelligible audio output than browse
* "Upload" button worked

STANDARD SINGLE FILE VERSION:

In BROWSE mode

* Flash version "Browse" button seemed to remain in the tab order <https://fluidproject.atlassian.net/browse/FLUID-2857#icft=FLUID-2857>
* HTML version "Browse" button didn't read a label - sometimes read as "Read Only"

In FOCUS mode

* worked quite well (odd that NVDA wouldn't switch automatically to this mode since there is a form tag present) - maybe ARIA application role? \[ FLUID-3321]\
  A.5 WindowsXP+IE+JAWS

Browser: IE8

Screen Reader: JAWS10\
Tester: Phil Richards

NOTE: IE shows only the standard uploader, no flash uploader and no link to switch to the flash uploader.  It also looks quite different from how it is represented in Firefox.

PC Cursor Mode

* Arrow keys do not work, must tab to buttons
* Space activates "browse" button, enter does not
* In file select box, must use tab to move through fields, arrow keys can be used to move through documents and enter selects a document
* Space or enter activates "save" button, but the only thing that happens is that the file name disappears from the box.  No indication that it was uploaded, either visual or audio.
* When tabbing through fields, audio does read "browse to upload a file" and indicates where the text box and buttons are

Jaws Mode

* Audio reads "browse to upload a file", "browse" and "save" when cursor is moved, but no indication that browse and save are buttons
* In the "choose file to upload" box, arrows move the cursor but the audio will read all the text on a line, ie "my recent my network places aria-capture.camrec"
* Can tab into the list of files but cannot use arrow keys to move through the list, as they just move the cursor
* No way that I can see to move the scroll bar on the bottom so that more files are visible
* When in the file list, space will highlight the first file in the list and enter will select it, but no way to use the keyboard to select any other files
* Once a file is listed in the box, audio will read only the visible part of the filename, ie "f colon backslash documents and setting browse"
* Arrows can move cursor to "save" button and enter/space will click it, but as above there is no visual or audio indication that the file has been uploaded

Virtual Cursor

* Arrow keys navigate page and audio reads text and indicates where buttons are
* Once the audio got stuck in the edit box and seemed to be looping one letter over and over
* When a file is selected, audio behaves strangely:
* Moving downwards from top of page results in the audio completely skipping the line with the filename and the browse button, so you hear "browse to upload a file", "blank", then a tone, then "blank", "save button"
* Moving upwards from the bottom of the page results in "save button", "blank", "browse button", "file upload edit", "blank", "browse to upload a file"
* Enter and space activate "save" button but there is no audio or visual indication that a file has been uploaded

        
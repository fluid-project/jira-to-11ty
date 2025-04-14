---json
{
  "title": "FLUID-5395",
  "summary": "Expected keyboard and mouse error messages wrong when moving layout portlets to locked portlet",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "beth.mejsullivan",
  "date": "2014-06-03T12:11:31.281-0400",
  "updated": "2024-07-22T10:35:17.985-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Layout Reorderer"
  ],
  "environment": "Mac OS 10.8.5 Firefox 29.0.1, Chrome 35.0.1916.114, Safari Version 6.1 (8537.71)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4072/",
      "key": "FLUID-4072",
      "summary": "Invalid keyboard move displays inaccurate message for keyboard usage"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Keyboard and mouse error messages should be as follows according to the Test-to-fail criteria :

Test 1: Mouse, Move Portlet Above Locked Portlet

Procedure\
Open the browser and navigate to the specified URL\
Using the mouse, hover over the title bar of one of the unlocked portlets\
Using the mouse, press and hold the 'left-mouse-button' down\
Using the mouse, drag the avatar above the locked portlet\
Using the mouse, release the 'left-mouse-button' over a drop target\
Expected Results\
As the avatar is hovering over the locked portlet, an error message saying "This box cannot be placed above a locked box" should appear\
The avatar should drop to the location of the drop target\
Actual Results\
As the avatar is hovering over the locked portlet, no error message appears\
The avatar drops to the location of the drop target\
Stop Test\
Refresh the browser to return the page to its initial state

Test 2: Keyboard, Move Portlet Above Locked Portlet

Procedure\
Open the browser and navigate to the specified URL\
Using the keyboard, tap the 'tab' key until one of the portlets has focus\
Using the keyboard, tap the 'i', 'j', 'k', 'm', or an 'arrow' until the portlet, directly below the locked portlet, has focus\
Using the keyboard, hold the 'ctrl' key (on a Mac use the 'Apple' key)\
Using the keyboard, while still holding down the 'ctrl' key use the navigation keys (see step 3) move the portlet underneath a locked portlet, then attempt to move the portlet upward and above the locked portlet\
Expected Results\
On attempting to move the portlet above the locked portlet, an error message saying "This box cannot be placed above a locked box" should appear\
Actual Results\
On attempting to move the portlet above the locked portlet, an error message saying "This element can not be placed here. The element underneath is locked." appears.\
("can not" should be "cannot" and the directional "underneath is locked" instruction is confusing.)\
Stop Test\
Refresh the browser to return the page to its initial state&#x20;

        
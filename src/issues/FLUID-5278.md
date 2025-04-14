---json
{
  "title": "FLUID-5278",
  "summary": "Conditional subpanel controller loses focus on value change",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-02-17T12:55:17.315-0500",
  "updated": "2021-07-29T01:35:31.693-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Chrome 35, FF 29, Safari 7 (Mac OS 10.9)\\\nIE 8, IE 9, IE 10, IE 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The on/off toggles that are typically used to control the rendering of a conditional subpanel will lose focus when it is toggled. This means that a user would have to tab back to the control if they want to change the state again, and they cannot simply hit tab to jump into a newly rendered subpanel.

Steps to reproduce:

1\) Open one of the instructional demos for the conditional panels

2\) Open the prefs editor

3\) Using the keyboard navigate to one of the on/off toggles

4\) press the space bar to change the state\
Notice that focus is lost from the control and that pressing tab starts from the top.

        
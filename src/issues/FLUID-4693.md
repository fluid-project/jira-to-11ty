---json
{
  "title": "FLUID-4693",
  "summary": "On current Chrome (18) layout reorderer demos will throw an exception when moving an element back to its original position",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2012-04-10T16:09:00.921-0400",
  "updated": "2014-03-03T12:55:33.511-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "Chrome 18.0.1025.151 m and Windows 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-04-12T05:08:13.883-0400",
      "body": "Sequence: Move an element.\\\n\\--> render label from its old position into \"oldRender\"\\\n\\--> refresh reads this old label and generates a \"moved label\" for the moved item using oldRender, puts its plain label into newRender\\\n\\--> at the same time binds a focusout listener so that when the user leaves it, the label is replaced by the \"newRender\" and the map cleared.\n\nThis works fine the first time round. on Chrome, the 2nd move operation triggers a focusout immediately after the \"onMove\" handler, but with NO intervening refresh.\n\nSequence: onMove -> onRefresh - onMove2 -> focusout\n\nThe focusout catches the handler which was rendered on the FIRST onRefresh, whereas the 2nd onMove has already cleared the map and stuck an \"oldRender\" in it, ready for the next onRefresh render to catch it. The onRefresh will be the next thing which happens, but perversely the somewhat fictitious focusout event triggers the old handler before we get round to overwriting it.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-05-04T07:46:28.754-0400",
      "body": "I'm having trouble recreating the issue. Can you check to see that it is still a problem?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-05-04T15:47:46.397-0400",
      "body": "You're right, on Chrome 18.0.1025.162m the issue seems to have gone away 😞 I think it would still be a good idea for the fix to go in though, since it should be harmless and generally increase the reliability of the algorithm should there be a browser regression again.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-06-29T16:42:39.786-0400",
      "body": "Merged into project repo at 99a83cc49a8bbc344db44c464e39476165304429\n"
    }
  ]
}
---
Exception is thrown on Reorderer.js, line 800 - var oldLabel = movedMap\[id].newRender.label

This seems to correspond to a previously impossible sequence of events - a service of move of an element, followed by a focusout received AFTERWARDS.&#x20;

This effect can be triggered either using the mouse or the keyboard.

        
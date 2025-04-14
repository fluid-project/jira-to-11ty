---json
{
  "title": "FLUID-2656",
  "summary": "Inline edit: JAWS can't recognize \"undo\" or \"redo\" buttons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Benjamin",
  "reporter": "Alison Benjamin",
  "date": "2009-05-08T15:06:05.000-0400",
  "updated": "2009-07-10T11:38:26.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "MacBook running JAWS 10 on XP with VMWare\\\nWindows XP / JAWS 10&#x20;\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2652/",
      "key": "FLUID-2652",
      "summary": "JAWS announces that an inline edit area is a button"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2651/",
      "key": "FLUID-2651",
      "summary": "Inline edit: JAWS announces remove button as \"true\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alison Benjamin",
      "date": "2009-05-13T10:15:34.000-0400",
      "body": "I have done some research on this and the undo / redo buttons actually are read by JAWS. The problem is that the JAWS user does not know how to save an inline edit (see <http://issues.fluidproject.org/browse/FLUID-2652>). If you don't save an inline edit, a redo button will not appear. &#x20;\n"
    }
  ]
}
---
After an Inline Edit is saved, JAWS does not announce the presence of an "undo" or "redo" button.\
-using the JAWS 'find' keystrokes does not discover undo or redo

        
---json
{
  "title": "FLUID-3082",
  "summary": "Hitting Enter with the keyboard while focused on the Save or Cancel buttons doesnt activate the button: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jacob Farber",
  "date": "2009-08-10T14:08:42.000-0400",
  "updated": "2010-08-06T10:26:45.109-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 6, IE 7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2436/",
      "key": "FLUID-2436",
      "summary": "Enter doesn't activate save: using IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:51:41.096-0400",
      "body": "a11y issue\n"
    }
  ]
}
---
Focus the rich inline editor, make a change, tab out to the save or cancel button and hit enter.\
What might happen next is a new carriage return character is added to the editor, instead of the button being activated

        
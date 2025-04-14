---json
{
  "title": "FLUID-2834",
  "summary": "Pressing 'enter' after entereing a new minimum text size saves all changes and closes the UI Options interface",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Daphne Ogle",
  "date": "2009-05-28T21:08:53.000-0400",
  "updated": "2009-06-02T09:53:58.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "XP / IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-02T09:53:58.000-0400",
      "body": "This came about as a result of <https://fluidproject.atlassian.net/browse/FLUID-2374#icft=FLUID-2374>, there is a link, in the comments, to the discussion about this in the IRC Channel. In short it was decided that the typical behaviour for pressing the enter key, on a form field, is to submit the form.\n"
    }
  ]
}
---
I'm not sure if this is the intended behavior but it seems dangerous.

        
---json
{
  "title": "FLUID-2445",
  "summary": "Arrow keys do not navigate options on dropdown text edit menu",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Herb Wideman",
  "date": "2009-04-01T12:35:36.000-0400",
  "updated": "2009-05-05T14:08:21.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "XP, Opera 9.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T14:08:21.000-0400",
      "body": "You are able to change selection using the keyboard; however, due to <https://fluidproject.atlassian.net/browse/FLUID-2270#icft=FLUID-2270> you cannot see this happening. If you tap the down arrow and then hit enter, you'll see that the result changes.\n"
    }
  ]
}
---
One a dropdown simple inline text edit menu is opened, the options cannot be navigated through using arrow keys - the top option is the only one that can be selected.

        
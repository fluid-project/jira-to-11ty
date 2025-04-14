---json
{
  "title": "SJRK-448",
  "summary": "Add \"Start new story\" reset button & functionality",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Dana",
  "date": "2021-01-28T17:26:45.114-0500",
  "updated": "2021-02-01T13:58:25.909-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-448/Start new story button.png",
      "filename": "Start new story button.png"
    }
  ],
  "comments": [
    {
      "author": "Dana",
      "date": "2021-02-01T12:39:55.125-0500",
      "body": "For now we'll implement the button as text-only (no icon).\n"
    }
  ]
}
---
This will allow an author to clear all story content from the editor and start a new story (creating a new StoryID).

Being able to start a new story at any time is a useful function, so we will implement this button as a persistent feature in the tool.

This functionality was initially intended to provide a way for an author who lands on a draft story (loaded from local storage) that they did not create (e.g. on a shared computer) to easily reset the tool and create a new story. As long as we have guest authoring and local auto-saving the option to "start new story" is needed (along with other options - see [SJRK-384](https://issues.fluidproject.org/browse/SJRK-384) for details). If we move to account-only authoring (or if we implement server-side storage only), loading from local storage would no longer happen in this way.&#x20;

 

 

        
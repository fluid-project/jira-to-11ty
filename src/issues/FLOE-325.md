---json
{
  "title": "FLOE-325",
  "summary": "Use CTRL+R to wipe out saved prefs and reload the demo",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2015-05-06T14:20:48.690-0400",
  "updated": "2015-11-03T12:05:19.470-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-05-08T15:54:34.318-0400",
      "body": "When I use the tool, the preferences are not actually saved and re-applied to the tool. If I change the font size (for example) and then reload the tool, my font size changes are not re-applied; the default font size is applied. Does this mean that there's a bug in the saving of preferences, if it's supposed to be saving?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-12T09:28:05.851-0400",
      "body": "@@Anastasia Cheetham there was a bug with saving to the store. This has been fixed in <https://fluidproject.atlassian.net/browse/FLOE-314#icft=FLOE-314>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-12T09:32:43.201-0400",
      "body": "Rather than overloading ctrl-r and conflating it with a straight browser reload. I suggest we use ctrl-option/alt-r. This will also prevent confusion where there are other means of reloading the page that doesn't trigger a reset of the tool. (e.g. navigating away and coming back, clicking the refresh button).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-14T11:24:41.185-0400",
      "body": "Filed a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/46>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-14T14:14:20.667-0400",
      "body": "The pull request has been merged into the project master @ 2fe3b9cf148417938168502abaeb43605f7dfa1f\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-05-14T15:00:46.120-0400",
      "body": "This doesn't seem to be working in Chrome, for me\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-05-14T15:05:27.209-0400",
      "body": "Seems to work now, not sure what the problem was.\n"
    }
  ]
}
---
The regular workflow of the first discovery tool is, at the page reload, the preferences saved previously are re-apply to the tool. Since we don't have a "reset" button in the tool, to make it easier to demo this tool in the June 8th workshop, CTRL + R can be hooked up to do the reset. As CTRL + R is the default browser shortcut keys for page reload, with this implementation, it should do: 1. reset the preferences; 2. reload the page.

        
---json
{
  "title": "FLOE-350",
  "summary": "Styling issues with the navigation icon bar",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Cindy Li",
  "date": "2015-05-26T13:54:58.716-0400",
  "updated": "2015-11-03T12:41:20.518-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLOE-353/",
      "key": "FLOE-353"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-350/Screenshot 1 - Chrome.jpeg",
      "filename": "Screenshot 1 - Chrome.jpeg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-350/Screenshot 2 - Safari.jpeg",
      "filename": "Screenshot 2 - Safari.jpeg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-350/Screenshot 3 - Safari.jpeg",
      "filename": "Screenshot 3 - Safari.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-05-26T16:46:32.121-0400",
      "body": "Regarding the last screenshot, I wonder if this is because the checkmark is being \"applied\" to the text size icon, but it's happening after the scroll happens?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2015-05-28T11:35:39.755-0400",
      "body": "About that last screen shot:\n\n* it only happens in Safari.\n* it only happens when the \"Select to go to Next Step\" Tooltip has not changed positions. If you move the mouse slightly to change the position of the tooltip, the checkmark disappears.\n* if using keyboard, the checkmark would disappear if you change focus off the Next button.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-28T13:05:20.410-0400",
      "body": "@@Jonathan Hung could you please file a new jira for the last issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-28T13:07:51.620-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/69> ) into the project repo at 10f39477fdeb871883e21916b7407e3f698880e7\n"
    }
  ]
}
---
In both Chrome and Safari on Mac:\
Sceenshot 1: a white bar to the right of the last icon "aA" when it is active.

Safari only:\
Screenshot 2: the bottom of the checkmark badge is cut off.

Screenshot 3: the first time when you land on the second nav icon page, the green checkmark badge is somehow shown at the position of the last badge.

        
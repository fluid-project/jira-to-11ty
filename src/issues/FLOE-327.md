---json
{
  "title": "FLOE-327",
  "summary": "Tooltip position on voice button blocks mouse click",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2015-05-07T16:45:24.334-0400",
  "updated": "2015-11-03T12:43:54.360-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-361/",
      "key": "FLOE-361",
      "summary": "FD tooltips can be read on both mouse in and mouse out of buttons"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-05-28T14:17:45.303-0400",
      "body": "I observed this too - I can confirm that if you hover over the voice button itself, it works every time. For me, attempting to click anywhere on the text will fail, almost every time. I spent a little time investigating the issue last week but so far inconclusively. It appears that whatever the issue is, it is something native to jQuery and jQuery UI since I didn't see any framework code executing during the \"spurious repositioning of the tooltip\". As far as I could see, somehow something was directly relaying a \"click\" event to a \"mouseenter\" event. I can investigate some more if this issue is considered high priority.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-06-01T14:18:07.236-0400",
      "body": "Justin Obara believes this issue is related to <https://fluidproject.atlassian.net/browse/FLOE-361#icft=FLOE-361> - we should recheck whether this issue is solved once his branch is merged in\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-02T08:26:11.445-0400",
      "body": "While it is probably less of an issue after <https://fluidproject.atlassian.net/browse/FLOE-361#icft=FLOE-361>, this bug still exists as the tooltip is still positioned over the button. It's likely caused by the fact that it wants to be positioned above the button but there is no space left in the window.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-02T14:23:33.707-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/80>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-03T16:18:46.761-0400",
      "body": "Merged @ eef82cb336341e4f86767674f9e637610f28585b\n"
    }
  ]
}
---
When using the mouse to activate the Voice button at the top, sometimes the tooltip will block the mouse click. The result is that you can't activate the button even if you click multiple times.

To reproduce:\
1\. Load the demo <http://build.fluidproject.org/first-discovery/demos/>\
2\. Move your mouse to the middle of the screen so the mouse pointer is somewhere below the "n" letter of the word "turn". Be careful not to hover over the voice button.\
3\. Move the mouse point vertically up to the "Turn voice on/off" button.\
4\. Try clicking\
5\. Notice how the tool tip would jump position to below the mouse pointer - preventing you from clicking the button.

The only way to get around this is if you change your approach vector to the button (i.e. come from the side).

        
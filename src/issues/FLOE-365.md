---json
{
  "title": "FLOE-365",
  "summary": "Implement the screens for voting booth context for First Discovery",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Jonathan Hung",
  "date": "2015-06-01T14:35:37.367-0400",
  "updated": "2015-11-03T12:45:03.486-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-365/voting screen 1 how to vote.jpg",
      "filename": "voting screen 1 how to vote.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-365/voting screen 2 ballot info.jpg",
      "filename": "voting screen 2 ballot info.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-365/voting screen 3 first vote panel.jpg",
      "filename": "voting screen 3 first vote panel.jpg"
    }
  ],
  "comments": [
    {
      "author": "Dana",
      "date": "2015-06-02T13:38:23.706-0400",
      "body": "the first three screens of the voting section of the Anywhere Ballot are attached. The next button on the last FD tool panel will take the user to voting tool mockup (just need to decide which screen(s) to use)\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-05T08:54:00.042-0400",
      "body": "The pull request (<https://github.com/fluid-project/first-discovery/pull/91>) has been merged into the master branch @ d997c6ea57248f4e7fe295aecf8a4f3626282118\n"
    }
  ]
}
---
Using the screens specified by the wireframes, implement the screens used in the voting booth context.

Based on the current implementation on <http://anywhereballot.com/> the screens will be:\
1\. Language\
2\. Text Size\
3\. Contrast themes

This does not include styling - that will be done in a different Jira.

The wireframe for the voting demo - <https://www.dropbox.com/s/d7tow5u5y3ykx7p/FD%20tool%20voting.pdf?dl=0>

        
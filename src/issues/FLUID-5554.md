---json
{
  "title": "FLUID-5554",
  "summary": "Text size enactor calculates initial size based on .container, should be using .root",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2014-11-12T10:15:47.815-0500",
  "updated": "2015-06-26T10:16:37.535-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5.1",
    "1.9"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-11-12T10:23:02.408-0500",
      "body": "Justin suggests that this fix should go into the 1.5.x branch as well as master.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-11-12T10:45:00.607-0500",
      "body": "Two pull requests:\\\nmaster: <https://github.com/fluid-project/infusion/pull/568>\\\n1.5.x: <https://github.com/fluid-project/infusion/pull/569>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-11-12T12:49:32.296-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/568> ) into the master branch of the project repo at de2ea6df7df284829621f99c1a89ba50ebfcea2d\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-11-12T14:35:38.253-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/569> ) into the infusion-1.5.x branch of the project repo at 266bec518687521c2611951bc29fb6baa87d4ef6\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:30.907-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
As part of its initialization, the text size enactor calculates the initial pixel size and hard-codes that onto the root element to ensure that rems in the CSS will work. Incorrectly, the initial calculation is not using the root but rather the container. This causes problems if the root and container don't have the same initial font size. The calculation should be based on root.

This problem was discovered when adding UIO to a Wordpress child theme. Without UIO, the html element (the root) and the body element (the container) had different font sizes initially (10px and 18px respectively). When 18px was added to the html element, everything on the page expanded to enormous size.&#x20;

        
---json
{
  "title": "FLUID-2452",
  "summary": "Active linking broken in rich text editor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Herb Wideman",
  "date": "2009-04-01T13:38:17.000-0400",
  "updated": "2009-04-14T09:56:45.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "XP, FF3\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2438/",
      "key": "FLUID-2438",
      "summary": "Dialog opened by fck editor is missing"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-02T15:16:29.000-0400",
      "body": "I can reproduce the latter error. \\\nI am not sure I understand the former error - a URL is simply text, and shouldn't the effect of pasting this into an editor be to paste this text? The simpler editor is not configured with any affordances to create links.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-04-02T15:18:57.000-0400",
      "body": "The solution to the latter error is described at <http://drupal.org/node/344230>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-14T09:56:44.000-0400",
      "body": "fixed with <https://fluidproject.atlassian.net/browse/FLUID-2438#icft=FLUID-2438>\n"
    }
  ]
}
---
Pasting a URL into the simpler of the two rich text editors' window, saving and then clicking the saved text does not provide a live link to the web page. (The full rich text editor generates an Apache 404 server error when anything is pasted into its window).

        
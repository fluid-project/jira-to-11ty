---json
{
  "title": "FLOE-341",
  "summary": "The tooltip for the \"try it\" button may remain after the button is removed",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-05-15T15:38:33.054-0400",
  "updated": "2015-11-03T12:10:37.057-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": "Only occurs in Safari, not Chrome\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-341/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-15T15:50:26.928-0400",
      "body": "Screenshot.png shows the \"try it\" tooltip remaining after the \"try it\" button has been replaced by the sticky keys adjuster.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-20T10:31:38.390-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/51>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-20T10:45:35.930-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/51> ) into the project repo at 055b3b6ec381c1867a972bcce2811271285fdc94\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the first discovery tool\
<http://build.fluidproject.org/first-discovery/demos/>

2\) Navigate to the keyboard panel (sticky keys)

3\) type in an incorrect input into the text field

4\) Use the keyboard to place focus on the "try it" button\
Notice the tooltip has appeared

5\) Press the "Enter" key on the keyboard to activate the "try it" button\
Notice that the button has been replaced by the sticky keys adjuster but the tooltip remained.

        
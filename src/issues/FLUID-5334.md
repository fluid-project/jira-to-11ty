---json
{
  "title": "FLUID-5334",
  "summary": "Separated panel breaks on reset and hide.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-04-28T10:01:27.251-0400",
  "updated": "2014-04-29T10:44:55.134-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-28T12:14:53.811-0400",
      "body": "Submitted a pull request\\\n<https://github.com/fluid-project/infusion/pull/501>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-04-29T10:44:52.725-0400",
      "body": "Merged into the project repo @ 1f68cebd7093d20b6ccd8cb88eaab9a7c4b02ebe\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open anything that uses the separated panel

2\) Open the panel

3\) Click reset and immediately close the panel

Notice that it closes but then "opens" again. The component still thinks it is closed and the parent page overlaps the content of the iframe.

If you wait a sufficient amount of time between clicking reset and closing the panel, the issue doesn't appear.

        
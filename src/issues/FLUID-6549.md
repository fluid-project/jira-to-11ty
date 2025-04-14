---json
{
  "title": "FLUID-6549",
  "summary": "Use CSS variables (custom properties) to consolidate contrast theme stylesheets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Ned Zimmerman",
  "date": "2020-09-11T16:51:36.097-0400",
  "updated": "2020-09-23T08:38:51.465-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-09-23T08:38:47.376-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1007> ) into the project repo at 4e0124e9af46da914f1365d2aed117b749195cde\n"
    }
  ]
}
---
Now that IE is no longer supported, CSS variables (custom properties) can be used to apply contrast themes via variables. This will allow the contrast theme stylesheets to be simplified into a single stylesheet with variables which will be changed based on the applied contrast theme.

See also: <https://issues.fluidproject.org/browse/FLUID-6432?focusedCommentId=40963&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-40963>

        
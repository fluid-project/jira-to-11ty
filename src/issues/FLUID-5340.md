---json
{
  "title": "FLUID-5340",
  "summary": "ProgressiveCheckerForComponent test for progressive enhancement fails in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-04-29T12:43:27.161-0400",
  "updated": "2014-05-01T11:50:52.854-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "Progressive Enhancement"
  ],
  "environment": "IE 8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-30T11:13:01.761-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/503>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-05-01T11:50:50.126-0400",
      "body": "Merged into the project repo @ 08c28ad08b0544853268a67ef2be34433c075aeb\n"
    }
  ]
}
---
The progressiveCheckerForComponent test fails in IE 8 because it uses the indexOf method on an array which is not supported in IE8. This should either be changed or a polyfill used to provide this functionality into IE8.

        
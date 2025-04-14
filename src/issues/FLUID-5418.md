---json
{
  "title": "FLUID-5418",
  "summary": "Simplify Content does not work in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Jonathan Hung",
  "date": "2014-06-06T12:34:53.767-0400",
  "updated": "2014-06-16T09:54:53.080-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "IE8, Windows 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-06-09T12:45:38.493-0400",
      "body": "The solution might be to not deliver the simplified content panel when deployed on IE8, but the problem is not specific to HTML5 elements only.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-09T16:07:25.312-0400",
      "body": "Submitted a pull request to fix this issue: <https://github.com/fluid-project/infusion/pull/526>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-16T09:54:46.121-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/526> ) into the project repo at 7f4b77ee60cea864aa2c0dab36b686f3eaff0191\n"
    }
  ]
}
---
In IE8, Simplify Content does not work. Enabling and disabling the option only changes the default background and nothing else.

To reproduce:\
1\. Load the prefs framework demo: <http://build.fluidproject.org/infusion/demos/prefsFramework/>\
2\. Enable Simplify Content\
3\. Note there is no effect on the content.

        
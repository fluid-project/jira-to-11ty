---json
{
  "title": "FLUID-4320",
  "summary": "Refactor TextSizer and LineSpacer to remove repeated code",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2011-07-04T12:52:49.020-0400",
  "updated": "2015-06-09T14:04:56.807-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4207/",
      "key": "FLUID-4207"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-06T12:57:40.665-0400",
      "body": "The refactoring should probably revolve around grades now. Both of these panels could share a common grade and have specific configuration for the differences.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T14:04:56.805-0400",
      "body": "The underlying codebase for which this jira referenced, has already been refactored, likely in work for Infusion 1.5.\n"
    }
  ]
}
---
Text Sizer and Line Spacer use a similar strategy for enacting the setting upon the page and can be refactored to allow better code reuse. Here is the code review comment from Antranig for FLUID-4207:

Hi, these changes generally look very good. It's good to see the functions broken out into the public namespace and the new "half-ants". The only problematic area I see is the "set" functions. The responsibilities of these aren't well factored, and a lot of the implementation is in common. The "middle section" should instead be reformed as a "model normalisation function" which takes an incoming value ("times") into one which is suitable to set directly via xxxx.css(). The "ant" should then take as configuration the name of the CSS property which it modifies, and then the rest of the workflow of "set" can be in common between the "half-ants". It might be worth descending them from some common grade, or sharing implementation in some other way.

        
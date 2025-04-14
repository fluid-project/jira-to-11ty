---json
{
  "title": "FLUID-5152",
  "summary": "Ensure that all examples have 'autoInit' in the gradeNames",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-09-24T13:52:32.344-0400",
  "updated": "2015-06-17T10:31:13.909-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": "Current documentation space: <http://wiki.fluidproject.org/display/docs/Infusion+Documentation>\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-09-30T12:54:34.167-0400",
      "body": "I've searched the wiki for 'gradeNames' and ensured that any examples I found have 'autoInit' in the array of grade names. The only exception is the Getting Started tutorial, which needs more focussed attention and is covered by its own JIRA (<https://fluidproject.atlassian.net/browse/FLUID-5158#icft=FLUID-5158>).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-20T12:57:30.656-0400",
      "body": "We should confirm that all of the docs that were moved to the infusion-docs repo ( <https://github.com/fluid-project/infusion-docs> ) are correct.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-04-24T15:17:24.439-0400",
      "body": "All the markdown files are correct.\n"
    }
  ]
}
---
We current expect all grades and components to be defined using the "autoInit" grade keyword. We wish to discourage developers from leaving it out, so we want to ensure that all of our examples use "autoInit" where appropriate. Any examples that explicitly discuss not using "autoInit" should be removed.

        
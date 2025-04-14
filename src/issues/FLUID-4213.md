---json
{
  "title": "FLUID-4213",
  "summary": "The pager's defaults contain configuration which requires it to be overridden or else will almost always fail.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2011-05-10T14:15:31.831-0400",
  "updated": "2011-05-11T16:23:14.489-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-10T15:44:00.608-0400",
      "body": "Sent a pull request to merge changes from my <https://fluidproject.atlassian.net/browse/FLUID-4213#icft=FLUID-4213> branch in github. <https://github.com/fluid-project/infusion/pull/41>\\\nI've modified the defaults annotateColumnRange is set to undefined again, and the columnDefs are set to an empty array, with a comment showing the correct format.\\\nA unit test has been provided\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-11T16:23:14.487-0400",
      "body": "Antranig merged this into the project repo at 844e1be791b768d12a686edca7fb3d54637cd0e8\n"
    }
  ]
}
---
When converting the pager to use self-rendered version by default ( for <https://fluidproject.atlassian.net/browse/FLUID-2329#icft=FLUID-2329> ), some problematic configuration was added at the same time.&#x20;

<https://github.com/fluid-project/infusion/blob/5c50980c58cb59498c187d8871c2e50c5ebf7a79/src/webapp/components/pager/js/Pager.js#L857-865>

The "annotateColumnRange" option should have been left as undefined, and there shouldn't have been any default "columnDefs". In place of the "columnDefs" a comment explaining how to fill it out would have been better. Something like what was done in the progressiveEnhancer.

<https://github.com/fluid-project/infusion/blob/master/src/webapp/framework/enhancement/js/ProgressiveEnhancement.js#L52>

This issue was reported in the fluid-work irc channel:\
<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2011-05-09>

        
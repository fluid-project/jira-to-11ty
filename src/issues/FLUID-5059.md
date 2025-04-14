---json
{
  "title": "FLUID-5059",
  "summary": "UI Options 'Reset' doesn't reset the 'underline links' checkbox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-06-19T11:12:11.904-0400",
  "updated": "2013-07-22T09:32:35.931-0400",
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
      "author": "Anastasia Cheetham",
      "date": "2013-06-19T11:17:30.587-0400",
      "body": "This issue has been fixed in the currently ongoing <https://fluidproject.atlassian.net/browse/FLUID-5043#icft=FLUID-5043> branch (<https://github.com/cindyli/infusion/tree/FLUID-5043>) tested June 19 at commit 9b075df2786507025d272a1159fa73fcc2e5bb28\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-06-20T08:24:43.359-0400",
      "body": "The work for <https://fluidproject.atlassian.net/browse/FLUID-5043#icft=FLUID-5043> is changing direction and will need to be restarted. I'm reopening this jira to ensure that we do not forget to look into this issue again. Also, it may no longer be solved in work for <https://fluidproject.atlassian.net/browse/FLUID-5043#icft=FLUID-5043>.\n"
    },
    {
      "author": "y z",
      "date": "2013-07-22T09:30:34.598-0400",
      "body": "Resolved as part of work on the new UIOptions.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-07-22T09:32:25.055-0400",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/360> ) was merged into the project repo at 4fe208404cd0cdafc68dd59fdb7669991b6ab4dd\n"
    }
  ]
}
---
To reproduce:

1\) Visit demo: <http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>, open UIO\
2\) Check the 'underline/bold links' checkbox\
Note that links are underlined and bolded\
3\) Click the 'reset' button\
Note that the 'underline/bold links' check box is NOT reset\
Note that links are back to normal

        
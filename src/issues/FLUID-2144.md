---json
{
  "title": "FLUID-2144",
  "summary": "OSDPL workflow: Investigate how content is \"stamped\" depending on their stage in workflow.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-19T15:16:26.000-0500",
  "updated": "2009-03-30T14:22:21.000-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-01-19T16:06:55.000-0500",
      "body": "iteration29\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-03-30T14:22:20.000-0400",
      "body": "Using Workflow-NG, we can check the state of the content and have contemplate output a proper stamp.\n"
    }
  ]
}
---
**Functionality:**

* Content to be stamped as "Draft", "Work in Progress", "In Review", and "Published" as it passes through the workflow.

**Possible Drupal Modules:**

* [Workflow](http://drupal.org/project/workflow) - has this built in?
* [Workflow-ng](http://drupal.org/project/workflow_ng) - has this built in?

it is possible that this issue may be accomplished by completing <https://fluidproject.atlassian.net/browse/FLUID-2140#icft=FLUID-2140>.

        
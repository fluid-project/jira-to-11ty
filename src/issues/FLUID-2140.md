---json
{
  "title": "FLUID-2140",
  "summary": "OSDPL workflow: Investigate workflow schemes and implement a solution.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-19T14:55:13.000-0500",
  "updated": "2009-03-20T11:44:35.000-0400",
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
      "date": "2009-01-19T14:57:40.000-0500",
      "body": "Iteration29\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-21T11:06:54.000-0500",
      "body": "* Workflow module: workflow-ng\n* Stamping of contents: use CCK Field Permissions on a field and only allow Admin to modify it. Then use wf-ng to modify it using custom php code through actions.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-03-20T11:44:34.000-0400",
      "body": "Done for now. User can now change visibility of their pattern and the interface displays it accordingly depending on the user's role.\n"
    }
  ]
}
---
Investigate a workflow module to control the creation of design patterns on the OSDPL.

* &#x20;Stages: Draft, Community Feedback, Review, Published.
* Draft: Editable only by the creator. Visible to Editors.
* Community Feedback: Commentable by registered users, editable by author only.
* Review: Editable and commentable by Editors and Author. Hidden to all other users.
* Published: Drupal default.

Possible Drupal Modules

* Workflow (<http://drupal.org/project/workflow>)&#x20;
* Workflow-ng (<http://drupal.org/project/workflow_ng>)

        
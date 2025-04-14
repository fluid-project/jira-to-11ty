---json
{
  "title": "FLUID-2142",
  "summary": "OSDPL workflow: Investigate and implement a Notification scheme for workflow and community",
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
  "date": "2009-01-19T15:10:13.000-0500",
  "updated": "2013-04-11T17:45:51.211-0400",
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
      "date": "2009-01-19T16:06:42.000-0500",
      "body": "iteration30\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-20T12:57:37.069-0500",
      "body": "Implemented using a workflow.\n"
    }
  ]
}
---
Investigate a way to use notifications to alert users to new content and for actions to be taken.

**Functionality:**

* Send out emails and in-system notifications to relevant and subscribed users.
* Allow users to define how they receive these notifications.
* Notifications sent to registered users when pattern enters "Comments" stage.
* Notifications sent to Editors when pattern created and enters "Request for Edits" stage.
* Notifications sent to registered editors when pattern becomes published.
* Notification displayed in a special block for registered users and editors.

**Possible Drupal Modules**

* [Notifications](http://drupal.org/project/notifications)
* [Workflow](http://drupal.org/project/workflow)
* [Workflow-ng](http://drupal.org/project/workflow_ng)

**Notes:**

* Investigate how notifications can be sent to a OSDPL mailing list.

        
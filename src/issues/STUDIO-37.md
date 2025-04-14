---json
{
  "title": "STUDIO-37",
  "summary": "Create a wordpress plugin to restrict the post title length",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-12-15T15:54:27.466-0500",
  "updated": "2012-01-20T17:32:12.681-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-16T16:28:41.183-0500",
      "body": "Merged into project repo at e42e17e6e673cd1695c156d68d70617bb0edc7f0\n"
    }
  ]
}
---
The post title length is currently restricted by modifying the wordpress core script wp-admin/edit-form-advanced.php, which creates the complexity at the future wordpress upgrade.

The solution is to create a wordpress plugin to do this task.

        
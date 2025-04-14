---json
{
  "title": "FLUID-2141",
  "summary": "OSDPL workflow:  Investigate and implement an invitation module that integrates into the Workflow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-19T15:07:09.000-0500",
  "updated": "2014-04-02T16:35:53.514-0400",
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
      "date": "2009-01-19T16:06:33.000-0500",
      "body": "iteration29\n"
    }
  ]
}
---
To be done after <https://fluidproject.atlassian.net/browse/FLUID-2140#icft=FLUID-2140>.

Investigate and implement a way to invite users to the OSDPL using the system's UI.

**Functionality**

* Allow author to invite users to check out their pattern during "Request for Comment" and "Publish" stage.
* UI should present them with an option to invite users when they transition their pattern to "Request for Comment" or to "Published".
  * There should also be a link on the pattern itself that allows the sharing of a pattern to others in these states.

**Possible Drupal Modules**

* Node Invite - <http://drupal.org/project/node_invite>
* Invite - <http://drupal.org/project/invite>
* Temporary Invite - <http://drupal.org/project/temporary_invitation>

**Integration**

* Invites are sent during the workflow, therefore should integrate into the workflow module we choose.

        
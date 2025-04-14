---json
{
  "title": "FLOE-230",
  "summary": "Use model relay to deal with the interaction between the match and mismatch buttons.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2014-09-03T11:09:16.650-0400",
  "updated": "2014-09-25T12:10:39.552-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5517/",
      "key": "FLUID-5517",
      "summary": "Error in batching composite changes in model relay system"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-09-25T12:10:39.552-0400",
      "body": "Currently there is an issue with the model relay (See FLUID-5517 ), that is preventing this issue from being resolved. There is a work in progress branch that can be continued after FLUID-5517 is finished.\n"
    }
  ]
}
---
According to the wireframe (<http://wiki.fluidproject.org/download/attachments/37855787/metadata-feedback.pdf?api=v2>), only either the match button or the mismatch button should be turned on at a time. Turning on one of them automatically turn off the other one. This interaction is currently implemented by manually triggering the model change to update the state of the other icon. According to Antranig's comment,&#x20;

<https://github.com/fluid-project/metadata/pull/38#diff-for-comment-16867885>

the implementation can be simplified by using model relay.

        
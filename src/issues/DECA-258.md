---json
{
  "title": "DECA-258",
  "summary": "Code that exposes invokers to listeners in the pre-init functions should be commented",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-16T08:37:10.042-0400",
  "updated": "2012-05-18T14:47:45.011-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-16T12:11:26.792-0400",
      "body": "Added in the suggested comment and changed the calls to refershView to point at renderer.refreshView as per suggestions from the channel log.\n\nThe changes can be found in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-ui-05release>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:47:41.682-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Several of the components use a strategy of pre-definining an invoker in the pre-init function so that they can be used in the listeners block. The code for this looks strange though, since it relies on the framework to re-write the function underneath. This should be properly commented in all situations.&#x20;

see the chat in the irc channel around 08:39 \
<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2012-05-15>

        
---json
{
  "title": "FLUID-5597",
  "summary": "Message bundles shouldn't be merged, but passed directly to the requesting component.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-02-25T10:33:01.584-0500",
  "updated": "2016-03-22T11:03:34.594-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5880/",
      "key": "FLUID-5880"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-02-25T17:01:02.631-0500",
      "body": "See conversation with Bosmon7 in the today's IRC channel logs.\\\n<https://botbot.me/freenode/fluid-work/2015-02-25/?tz=America/Toronto>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-03-16T10:57:18.192-0400",
      "body": "Additional conversation with Bosmon in today's IRC channel logs.\\\n<https://botbot.me/freenode/fluid-work/2015-03-16/?tz=America/Toronto>\n\nThe conversation was regarding composite panels. The idea here is to update the rebaseTree logic to replace the messageKeys with the literal outputs from the sub panel's message bundle.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-03-18T13:44:41.567-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/589>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-04-02T11:57:26.205-0400",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/589> ) was merged into the project repo at 809231c7525798ead15f214497721b6ea9e619f7\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:49.193-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Currently the message loader merges all of the message bundles into a single parent bundle, which is passed down to each component. However this causes collisions if bundles contain the same keys. What should happen instead is that the message loader should fetch all of the bundles and pass them down to the components that requested them.

        
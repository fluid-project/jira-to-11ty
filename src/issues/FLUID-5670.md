---json
{
  "title": "FLUID-5670",
  "summary": "Move utterance options into the model",
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
  "date": "2015-05-25T08:50:19.629-0400",
  "updated": "2015-11-03T12:01:49.669-0500",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-318/",
      "key": "FLOE-318"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-05-25T10:26:36.932-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/605> has been merged into the master @ 14d03122a48712b81790bb73471890ff830271ec\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:57.702-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Currently the utterance options of the fluid.textToSpeech wrapper component are held in the top level options block. However, this does not easily enable changing these options after instantiation. While it is true that any of the options can be overridden in a call to queueSpeech, this override only lasts for that specific call. However, in cases where you want to pair this with an enactor (see: <https://fluidproject.atlassian.net/browse/FLOE-318#icft=FLOE-318>) it would be more useful to allow for changes that will affect all subsequent calls to queueSpeech.

What seems to be the most appropriate approach would be to move the utteranceOpts into the component's model.

        
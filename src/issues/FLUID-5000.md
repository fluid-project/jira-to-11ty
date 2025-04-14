---json
{
  "title": "FLUID-5000",
  "summary": "Migrate the 'Climate Change' demo into the master branch",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2013-04-29T12:53:16.821-0400",
  "updated": "2014-04-28T15:18:31.134-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-01-29T14:41:26.547-0500",
      "body": "We decided (<https://botbot.me/freenode/fluid-work/>, Jan. 29, starting roughly 2pm ET) to recreate the demo in master, from scratch, using the HTML/CSS from the demo branch.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-01-29T14:52:15.146-0500",
      "body": "The demo will live in demos/prefsFramework, and will not follow the internal hierarchy required by the demo portal.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-31T12:59:07.540-0500",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/459>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-04T16:32:31.292-0400",
      "body": "To note, this demo requires a server side implementation of the festival text to speech server.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-23T15:58:38.422-0400",
      "body": "Merged into project repo at da23338\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-28T15:18:31.134-0400",
      "body": "Deleted the demo branch (<https://github.com/fluid-project/infusion/tree/demo>) from the repo, as the code was merged into master.\n"
    }
  ]
}
---
We developed the 'Climate Change' demo, including extra panels for content simplification and self-voicing, in a separate 'demo' branch where upgrades to UIO were carried out. The modification to UIO have (for the most part) now been merged into master, but the Climate Change demo has not.

The content simplification and self-voicing work done for that demo is not yet ready for master, but the Climate Change demo (without those extras) still serves as a useful demo showing UIO integrated into a 'real-world' setting. As we more formally work on the content simplification and self-voicing, that demo could be used for those purposes.

We should add the Climate Change demo – without the two extra panels – into the master branch, in the 'integration-demos' folder.

        
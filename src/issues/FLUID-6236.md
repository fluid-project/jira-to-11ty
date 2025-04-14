---json
{
  "title": "FLUID-6236",
  "summary": "Provide ability to test Infusion in multiple Vagrant VMs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-01-12T05:24:00.377-0500",
  "updated": "2024-07-22T10:35:27.052-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-12T05:25:54.672-0500",
      "body": "To quote @@Alfredo Matas when discussing this earlier:\n\n> <https://github.com/fluid-project/infusion/Vagrantfile> , seems very similar to the universal one to me 11:01\\\n> I think that using the same definition of the used at universal repo, and changing the lasts steps to this: <https://github.com/fluid-project/infusion/blob/master/package.json#L22-L25>\\\n> \\*to use these lines\n"
    },
    {
      "author": "Alfredo Matas",
      "date": "2018-01-12T05:41:56.395-0500",
      "body": "In fact, with the plugin we can run the tests inside a Windows VM as well as we do in the Fedora.\n\nThis can be also a good recent example:\n\n<https://github.com/colinbdclark/Flocking/blob/master/.vagrant.yml>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2020-12-16T08:11:47.596-0500",
      "body": "IMO this is no longer needed.  CI testing of Infusion is now handled using GitHub actions.\n"
    }
  ]
}
---
Currently, Infusion is tested on our CI servers using the linux Vagrant vm, and its one one-off Vagrantfile and provisioning.

This ticket covers replacing that with a comparable configuration for the [Vagrant CI Plugin](https://github.com/amatas/vagrant-gpii-ci) developed by @@Alfredo Matas, and defining multiple environments, so that we can easily test in both linux and windows (even if we choose to primarily test one or the other).

        
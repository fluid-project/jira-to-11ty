---json
{
  "title": "FLUID-5852",
  "summary": "Set up automated browser tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Avtar Gill",
  "reporter": "Avtar Gill",
  "date": "2016-02-02T18:34:52.896-0500",
  "updated": "2024-07-22T10:35:24.497-0400",
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
      "author": "Avtar Gill",
      "date": "2016-02-02T20:30:40.139-0500",
      "body": "I forgot to add that using the changes in the `saucelabs` branch require the creation of a `provisioning/secrets.yml` file. An example can be found here:\n\n<https://github.com/avtar/infusion/blob/saucelabs/provisioning/secrets.yml.example>\n"
    }
  ]
}
---
This issue is a mirror of [GPII-1550](https://issues.gpii.net/browse/GPII-1550).

I have also looked into using Testem's Sauce Labs integration. The results of that work can be found in the following branch:

<https://github.com/avtar/infusion/tree/saucelabs>

The process entails launching one VM in which Testem is used. Within that VM a tunnel is established with Sauce Labs, providing access to their hosted browsers. This means we can get test results for [numerous platforms](https://saucelabs.com/platforms/) without having to launch separate VMs. Here is the configuration I used:

<https://github.com/avtar/infusion/blob/saucelabs/tests/testem.json>

The drawback of this approach is the considerable latency involved which seems to cause even more test failures than the Vagrant/Fedora VM work in [my pull request](https://github.com/fluid-project/infusion/pull/664).

        
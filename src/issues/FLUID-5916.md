---json
{
  "title": "FLUID-5916",
  "summary": "Update the versions of Node.js and Fedora used by Infusion's vagrant test automation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2016-06-14T10:09:58.851-0400",
  "updated": "2016-06-14T11:26:16.633-0400",
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
      "author": "Justin Obara",
      "date": "2016-06-14T11:26:05.948-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/719> ) into the project repo at 11d7bc8caea147804ad771fd9b649d0f73802858\n"
    }
  ]
}
---
Currently, Infusion's [Vagrant provisioning variables](https://github.com/fluid-project/infusion/blob/0f226e56725f1ebd6fdd5c27149b2fa3c22affa0/provisioning/vars.yml#L7) are set up to use Node.js 0.10.40. This is a very old version, and we should upgrade to the latest LTS version of Node.js instead.

Also, we still use Fedora 22 instead of the latest, Fedora 23. By upgrading, those developers who are also developing on the GPII will require one less vagrant box installed on their computers.

        
---json
{
  "title": "FLUID-1921",
  "summary": "Include the versions of our third party depedencies in the top-level Infusion README.txt file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2008-12-04T11:29:39.000-0500",
  "updated": "2011-02-28T16:45:16.841-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-25T11:15:48.000-0400",
      "body": "Clean Up Parade 1.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T08:52:50.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-06-01T16:03:44.000-0400",
      "body": "I've added the version info to the list of third party software in the README file.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:16.838-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
At the moment, it's not clear to our users what versions of our third party dependencies we distribute. For example, jQuery and jQuery UI. We do have some information about jQuery-related versions here:

<https://source.fluidproject.org/svn/fluid/components/trunk/src/webapp/fluid-components/js/jquery/ui-FLUID-readme.txt>

But it's buried in a place where no end-user will find it. Let's move the version up into here:

<https://source.fluidproject.org/svn/fluid/components/trunk/README.txt>

1.1-release-process

        
---json
{
  "title": "FLUID-6325",
  "summary": "Simplify copyright information by maintaining copyright holders in a centralized location",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-08-20T08:17:06.967-0400",
  "updated": "2024-07-22T10:35:09.467-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6107/",
      "key": "FLUID-6107"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2019-07-25T17:40:44.092-0400",
      "body": "I merged Justin Obara's pull request for this change at 132aa848c1c55f88dac7e8ebd996c67bca8d482e.&#x20;\n"
    }
  ]
}
---
Rather than specifying all of the individual copyright holders individually in each JS file, we should switch to using an authors/contributors/copyrights file that includes all of them and update the individual copyright statements to point at them.

 

see: 

* <https://opensource.google.com/docs/releasing/authors/>
* <https://ben.balter.com/2015/06/03/copyright-notices-for-websites-and-open-source-projects/>
* <https://softwarefreedom.org/resources/2012/ManagingCopyrightInformation.html>
* <https://github.com/kentcdodds/all-contributors>

        
---json
{
  "title": "FLUID-3879",
  "summary": "Update the README.txt file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-12-07T11:24:30.116-0500",
  "updated": "2011-01-13T16:54:18.922-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3879/FLUID-3879-a.patch",
      "filename": "FLUID-3879-a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3879/FLUID-3879-b.patch",
      "filename": "FLUID-3879-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3879/FLUID-3879-c.patch.txt",
      "filename": "FLUID-3879-c.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-07T11:25:55.109-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-07T11:48:23.845-0500",
      "body": "We should mention the fact that some of the demos (ex. pager) require AJAX calls to self, and therefore a security config option needs to be changed in firefox for this to work\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-15T16:07:44.153-0500",
      "body": "Mockjax was added to the lib folder in the tests and should be added to the readme.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-22T17:38:09.251-0500",
      "body": "Here's a new revision of the general Infusion README file.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-22T17:51:36.260-0500",
      "body": "I've reviewed the changes to the Readme - looks great. I've attached a revised patch (FLUID-3879-c.patch.txt) that makes some very minor tweaks, and adds one more Uploader known issue.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-22T17:58:58.738-0500",
      "body": "New edits for Infusion 1.3 committed at r10450.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-22T18:05:30.172-0500",
      "body": "Looks great.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:10.858-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Be sure to update the version number, the zip file names (which include the version number), the "What's New" section with a list of features of the release, folder hierarchy if it has changed at all (e.g. new sample-code folders added), the list of supported browsers if it has changed, and the "Known Issues" section with highlights of the known issues.

        
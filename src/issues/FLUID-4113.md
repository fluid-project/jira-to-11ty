---json
{
  "title": "FLUID-4113",
  "summary": "Upgrade to jQuery 1.6.1",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "John Kremer",
  "date": "2011-02-24T10:44:21.060-0500",
  "updated": "2011-05-17T09:36:42.493-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-06T16:13:55.220-0400",
      "body": "Now upgrading to 1.6\\\n<http://blog.jquery.com/2011/05/03/jquery-16-released/>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-12T11:28:07.155-0400",
      "body": "Upgrading to 1.6.1 rc1 test results, the following fails\n\n**Ubuntu**\\\nFF4\\\ncache fails\\\nimage-reorderer focus\\\n3rd party fails\\\nbasic uploader test\n\nChrome\\\ncache\\\nimage-reorderer focus\\\nUI option tests: hangs \\\nbasic uploader test\n\n**OSX 10.6**\\\nFF4\\\ncaching\\\n3rd party fails\\\nimage-reorderer focus\\\nbasic uploader fails&#x20;\n\nsafari:\\\n3rd party\\\nimage-reorderer\\\nUI options safari\\\nbasic uploader fails\\\ncaching\n\n**Win7**\\\nIE9\\\n3rd parth\\\nimage-reporderer\\\ncaching\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-13T17:11:14.897-0400",
      "body": "UI option related to <https://fluidproject.atlassian.net/browse/FLUID-4210#icft=FLUID-4210>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-14T18:10:17.337-0400",
      "body": "Pull request from <https://github.com/harriswong/infusion/tree/jkkremer-FLUID-4113>, including the following changes:\n\n* Updated jQuery to 1.6.1\n* added 3rd party test for .val()\n* Upgraded tooltip plugin to a newer version\n* Replaced attr with prop calls due to some changes from jQuery API, 1.5.x -> 1.6 -> 1.6.1.&#x20;\n* Updated ImageReorderer tests to test selected listener\n* Replaced mockjax.js to 1.4 to address ajax API changes from jQuery 1.5\n\nPull request was closed with the following changes:\n\n<https://github.com/fluid-project/infusion/commit/8c90d8cf5217e7c2370d72c1f8aac0a4fa420059>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:36:42.491-0400",
      "body": "This has been merged into the project repo at a1b483114135907b9b78dacffb2c68734d6a8d8e\n"
    }
  ]
}
---
Originally the plan was to upgrade to jQuery 1.5.1; however, while prepping the release, jQuery has progressed all the way to 1.6.1

        
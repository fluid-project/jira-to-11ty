---json
{
  "title": "FLUID-2784",
  "summary": "Uploader unit tests failing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-05-27T11:29:04.000-0400",
  "updated": "2009-05-27T13:00:16.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2784/FLUID-2784-patch2.txt",
      "filename": "FLUID-2784-patch2.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2784/FLUID-2784-selector-patch.txt",
      "filename": "FLUID-2784-selector-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-27T11:31:57.000-0400",
      "body": "The problem is a bad default selector for the manually degrade container. It is an id instead of something that is more reusable. I think it should actually be 'body' since in most cases there would only be a single manual degrade piece of markup for the uploader on a page.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-27T11:33:27.000-0400",
      "body": "Here's a patch that fixes the issue by changing the default selector for the manual degrade container to 'body'.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-27T12:00:00.000-0400",
      "body": "New patch that removed the override of the default selector for the manual degrade container.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-27T12:16:49.000-0400",
      "body": "I have reviewed the patch and found it worthy\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-27T12:20:56.000-0400",
      "body": "Committed Michelle's patch. The unit test passes again.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-27T13:00:16.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\n"
    }
  ]
}
---
Uploader unit tests failing

<http://build.fluidproject.org/infusion/tests/component-tests/uploader/html/Uploader-test.html>

Notice that the first 3 sets of unit tests are failing

        
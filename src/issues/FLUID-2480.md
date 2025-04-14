---json
{
  "title": "FLUID-2480",
  "summary": "File Queue View unit test throws an error: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-02T14:48:44.000-0400",
  "updated": "2009-04-07T12:42:14.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2480/FLUID-2480.patch",
      "filename": "FLUID-2480.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-02T14:58:40.000-0400",
      "body": "can verify fix in just Opera 9.6\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-03T08:43:50.000-0400",
      "body": "Attached a patch to fix remove the old paths to the qunit files\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-04-06T16:02:28.000-0400",
      "body": "I have reviewed the patch and it does what it says it will do.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-06T16:10:42.000-0400",
      "body": "removed the old paths at r7047\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-07T12:42:14.000-0400",
      "body": "I tested this and looked at the commit.&#x20;\n"
    }
  ]
}
---
This is because there is a script block for the old paths still on the page. This should have been removed. Unfortunately the new script block was added, without removing the old. The tests still pass, because the correct paths are there. Removing the wrong script paths should remove the errors.

This is the incorrect script block:

\<link rel="Stylesheet" media="screen" href="../../jqUnit/testsuite.css" />\
\<script type="text/javascript" src="../../jqUnit/testrunner.js">\</script>\
\<script type="text/javascript" src="../../jqUnit/jqUnit.js">\</script>

        
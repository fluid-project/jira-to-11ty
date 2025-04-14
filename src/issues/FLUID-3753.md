---json
{
  "title": "FLUID-3753",
  "summary": "Redesign the manual switching from Flash to Simple uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Justin Obara",
  "date": "2010-09-22T18:07:22.061-0400",
  "updated": "2010-12-08T17:13:01.256-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3753/FLUID-3753.patch",
      "filename": "FLUID-3753.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:01:00.358-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-03T13:08:48.047-0500",
      "body": "Thought about this a bit. The reason why someone would care about the non-Flash version would be because:\\\n1\\. They have accessibility needs.\\\n2\\. They prefer not using Flash.\n\nTherefore, the text should address both of these.\n\nThe suggested text is \"Simple (non-Flash) version available.\" which addresses both I think.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-03T15:35:01.341-0500",
      "body": "Kicking around ideas:\n\nCurrent text: \"Switch to the standard single-file uploader.\"\n\nWhy?\n\n* improved accessibility for screen readers and keyboard users.\n* user preference - they don't like Flash\n\nPossibilities:\n\n\"Switch to non-Flash version.\"\\\n\"Having issues? Switch to simple non-Flash version.\"\\\n\"Simple (non-Flash) version available.\"\n\n\"Prefer a simpler version? Try this.\"\\\n\"Try the simpler version if you like.\"\\\n\"Want something simpler? Try this.\"\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-06T20:56:48.024-0500",
      "body": "Changed strings for switching to and from simple to flash uploader.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-08T14:31:18.309-0500",
      "body": "Patch and review.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-08T17:13:01.231-0500",
      "body": "CLOSED:  The link at the top of the Uploader is no longer needed as progressive enhancement is in place.  See <https://fluidproject.atlassian.net/browse/FLUID-3872#icft=FLUID-3872> for details.\n"
    }
  ]
}
---
If the user has Flash installed but prefers to use a non-Flash version of the Uploader, a mechanism should be provided to allow them to do so.

In v1.2, it exists as a "Switch to the standard single-file uploader." link.\
<http://fluidproject.org/releases/1.2.1/demos/uploader/demo.html>

        
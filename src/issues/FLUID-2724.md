---json
{
  "title": "FLUID-2724",
  "summary": "Verify dependencies for components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-05-14T10:22:24.000-0400",
  "updated": "2011-01-13T16:54:18.736-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2724/patch.txt",
      "filename": "patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T10:22:39.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-05T17:00:48.000-0400",
      "body": "I've looked at the UI Options dependencies and they are fine. I also did a custom build of uiOptions just to be sure and it worked.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-05T17:58:15.000-0400",
      "body": "Interestingly I didn't actually look at the UIOptions.html file the way Yura did. He added a dependency on the delegate plugin because UIOptions pulls it in. This makes sense and we should do it.&#x20;\n\nI think in actuality UIOptions does not depend on either the keyboard a11y plugin or the delegate but I think it's too late in the release to deal with this. I'll open a bug for 1.2.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T17:58:25.000-0400",
      "body": "I've reviewed yura's patch for Uploader and Inline Edit and it looks good. I also committed my own update to Uplaoder, adding the relevant FSS dependencies.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-05T18:25:37.000-0400",
      "body": "Verified, and committed at revision 8250\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-05T18:39:52.000-0400",
      "body": "closed based on above reviews\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:10.266-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Verify dependencies for components

Ensure all of the dependencies are properly defined

        
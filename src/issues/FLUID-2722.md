---json
{
  "title": "FLUID-2722",
  "summary": "Autobinding not working for <textarea> elements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2009-05-14T10:00:40.000-0400",
  "updated": "2009-05-25T10:20:28.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Data Binder",
    "Renderer"
  ],
  "environment": "FF2, FF3, Opera (Mac and PC)\\\nIE6, IE7 (PC)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-05-20T19:48:09.000-0400",
      "body": "Fixed at revision 7198, with manual test case (automated test case could probably not verify this issue authoritatively)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-21T08:56:48.000-0400",
      "body": "manual test in the wrong location in the directory. It was placed in the stand alone demos, but should be moved to the manual tests directory\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-21T09:07:47.000-0400",
      "body": "Moved the manual test from the standalone-demos directory to the manual-tests  directory. However, there is a dependency from the manual test to a js file in the standalone-demos directory. This may need to be rethought. Also removed a trailing comma from the model on line 29.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-21T10:06:29.000-0400",
      "body": "I've reviewed the code for this, and it looks good. It does fix the original issue that I found in the CSpace code.\n\nThe only further change I would recommend would be to remove the commented lines from applyAutoBind() in fluidRenderer.js\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-21T10:52:08.000-0400",
      "body": "need to remove the commented out lines of code (See comment above)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-21T13:04:41.000-0400",
      "body": "Sorry for all the stray material - the commented lines and the standalone-demo include have been removed.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T10:05:22.000-0400",
      "body": "I've reviewed the changes: +1. I also took the liberty of making small cosmetic changes to the HTML headers so that the text more accurately reflects the content.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-25T10:20:28.000-0400",
      "body": "Closing based on Anastasia's code review (see previous comment)\n"
    }
  ]
}
---
The "autobinding" functionality is not working for \<textarea> elements when rendered by the Renderer.

Bug Parade 1.1 release&#x20;

        
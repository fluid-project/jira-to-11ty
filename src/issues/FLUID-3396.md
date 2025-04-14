---json
{
  "title": "FLUID-3396",
  "summary": "Rename Infusion Builder-related files to consistently refer to the component as \"Builder\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Colin Clark",
  "date": "2009-12-01T18:41:23.000-0500",
  "updated": "2009-12-09T11:56:21.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-08T13:50:53.000-0500",
      "body": "\\[09:57:28 EST(-0500)] \\<colinclark> I'm wondering if we should be naming Builder in line with all the other components.\\\n\\[09:57:42 EST(-0500)] \\<colinclark> It's consistent, even if it doesn't seem consistent. If you know what I mean.\\\n\\[09:58:03 EST(-0500)] \\<colinclark> Which is to say, infusionBuilder for the directory and InfusionBuilder for all file names.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-08T18:07:44.000-0500",
      "body": "I think I've got all the renaming done consistently as of r8835. If you seen anything I've missed Laurel, can you go ahead and reopen the issue and fix?\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-09T09:08:01.000-0500",
      "body": "I believe that Colin's fixes are complete.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-09T11:56:21.000-0500",
      "body": "Closed as per previous comment.&#x20;\n\nAlso I sat with Laurel and it appeared to be working fine.\n"
    }
  ]
}
---
At the moment, we've still got a few files that use some variation of the "custom build" name. Just for consistency, we should probably ensure that all files and references are to Builder or InfusionBuilder (whatever our preference is).

        
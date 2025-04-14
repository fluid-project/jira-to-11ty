---json
{
  "title": "FLUID-3459",
  "summary": "NVDA does not read module listings",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2010-01-05T08:59:16.000-0500",
  "updated": "2014-03-03T11:20:13.423-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:01:51.922-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.422-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
In the latest version of NVDA (2009.1), when a module is selected, its dependencies aren't read. You can still manually cycle back or forth in the tab order to verify what modules have been chosen, so it's accessible, but the UX doesn't seem as good as with JAWS.

        
---json
{
  "title": "FLUID-3429",
  "summary": "The titles and descriptions of our dependency modules can be improved to be clearer and more explanatory when displayed in the Builder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-12-11T15:08:56.000-0500",
  "updated": "2009-12-17T11:08:39.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infrastructure",
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3429/FLUID-3429-a.patch",
      "filename": "FLUID-3429-a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3429/FLUID-3429-b.patch",
      "filename": "FLUID-3429-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3429/FLUID-3429-c.patch",
      "filename": "FLUID-3429-c.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3429/FLUID-3429-d.patch",
      "filename": "FLUID-3429-d.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-12-11T15:10:32.000-0500",
      "body": "Bug Parade Builder 1.1.2&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-11T16:45:30.000-0500",
      "body": "Here's a patch containing revisions to the first column of modules in the Builder. This is still a draft, and mainly posted here so I don't accidentally lose these changes over the weekend.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-15T13:23:49.000-0500",
      "body": "Here's a second patch, which replaces the first version, containing new text for the third party libraries. Still need to do the Components column.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-15T16:40:27.000-0500",
      "body": "The title of the Builder page is \"Infusion Builder Demo,\" so we should also change that as part of this fix.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-16T10:54:50.000-0500",
      "body": "Here's the penultimate patch, with changes to all modules. Still a bit of tweaking of the component descriptions left to do.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-16T11:06:29.000-0500",
      "body": "This should be the final patch with changes to the titles and descriptions for all modules in Infusion.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-17T11:08:39.000-0500",
      "body": "This one seems to be done, new issues will be filed under new jiras\n"
    }
  ]
}
---
At the moment, the titles and descriptions for our various modules in Infusion aren't particularly clear or descriptive. In anticipation of launching the Builder to the world, let's improve these. This will require a change to the various dependency JSON files scattered around Infusion, and can be included as part of the 1.1.2.1 pseudo-release of Infusion.

        
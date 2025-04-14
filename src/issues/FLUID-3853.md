---json
{
  "title": "FLUID-3853",
  "summary": "Pager doesn't include an application role, requiring the user to switch to Browse Mode to fullly interact with it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Golam Chowdhury",
  "reporter": "Colin Clark",
  "date": "2010-11-18T14:01:22.979-0500",
  "updated": "2010-11-19T12:18:20.450-0500",
  "versions": [
    "1.2",
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3853/FLUID-3853-aegis.patch.txt",
      "filename": "FLUID-3853-aegis.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3853/FLUID-3853-trunk.patch.txt",
      "filename": "FLUID-3853-trunk.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-18T16:31:19.339-0500",
      "body": "Attaching two patches to add the application role to the container of the pager component. FLUID-3853-aegis.patch.txt should be used for the aegis demo branch and FLUID-3853-trunk.patch.txt is good to use for trunk.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-18T16:33:53.021-0500",
      "body": "Michelle code reviewed the patches and I committed FLUID-3853-aegis.patch.txt into the aegis branch\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-11-18T18:09:38.595-0500",
      "body": "This patch can be committed to trunk as-is.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T10:19:07.357-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T12:16:15.647-0500",
      "body": "Committed FLUID-3853-trunk.patch.txt to trunk\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T12:18:19.956-0500",
      "body": "All the patches have been committed and reviewed\n"
    }
  ]
}
---
Pager includes a number of application-style interactions, including the tooltip descriptions that are attached to the list of page links. Testing it with NVDA, much of the descriptive richness of Pager isn't apparent until the user manually switches into Browse Mode. We don't include any instructions to the user about the need to do this.

However, since they'll also need to do this to interact with the data table, it seems reasonable to wrap the whole Pager container in an "application" role so that the mode-switching occurs automatically.

We'll need to test this with real screenreader users to verify that it is the best approach, but it seems like a reasonable starting point.

        
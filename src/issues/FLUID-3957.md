---json
{
  "title": "FLUID-3957",
  "summary": "The Renderer demo does not validate correctly using the W3C markup validator",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "heidi valles",
  "date": "2010-12-20T09:39:07.839-0500",
  "updated": "2011-01-14T14:40:07.446-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3957/FLUID-3957.patch",
      "filename": "FLUID-3957.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-12-20T16:32:00.042-0500",
      "body": "Thanks for the report, Heidi - here is a patch which as well as fixing the doctype to transitional, fixes a few other problems with the markup so that it validates successfully\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-01-14T14:40:07.442-0500",
      "body": "Successfully validated using the following site:\\\n[http://validator.w3.org](http://validator.w3.org/)\n"
    }
  ]
}
---
Validate <http://build.fluidproject.org/infusion/demos/renderer/html/renderer.html> \
There are currently 4 errors, 8 warnings, probably most caused by using the strict instead of transitional doctype.

[http://validator.w3.org](http://validator.w3.org/)

        
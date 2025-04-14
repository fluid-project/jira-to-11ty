---json
{
  "title": "FLUID-2743",
  "summary": "Gracefull Degradation toggle should be first in the tab order",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-05-19T10:47:40.000-0400",
  "updated": "2009-06-02T10:46:54.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2743/FLUID-2743-a.patch",
      "filename": "FLUID-2743-a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2743/FLUID-2743-b.patch",
      "filename": "FLUID-2743-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2743/FLUID-2743-c.patch",
      "filename": "FLUID-2743-c.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2743/FLUID-2743-d.txt",
      "filename": "FLUID-2743-d.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-19T14:20:57.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-22T17:49:21.000-0400",
      "body": "Here's a patch with a substantial refactoring of the component (formerly called clickToEdit, but renamed to manuallyDegrade to be more inclusive). This refactoring allows the markup to be much more substantially configurable, allowing users to supply their own enable/disable links in the DOM. We still self-render if these aren't present, but also offer a configuration option for the location of the element in the DOM.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-22T18:35:40.000-0400",
      "body": "Here's a new patch that configures this properly as a decorator, allowing users to control the various configuration options associated with the manuallyDegrade component.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-25T15:11:50.000-0400",
      "body": "Here's a third patch, making the component more generic and generally tidy.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-26T16:56:35.000-0400",
      "body": "This is a patch that should apply cleanly to trunk at revision 7252. The actual modifications should be identical to patch c.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-02T10:46:54.000-0400",
      "body": "Appears to have been resolved with one of the many changes to the uploader during bug parade&#x20;\n"
    }
  ]
}
---
Gracefull Degradation toggle should be first in the tab order

Currently it is placed below the uploader. However, FLUID-2052 will mean that a user may not actually be able to reach the toggle.

The toggle can either be moved ahead of the uploader, or given a tabindex of 1, so that it is reachable first.

        
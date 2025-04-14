---json
{
  "title": "FLUID-3421",
  "summary": "Screen reader UX tweaks for Inline Edit ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Benjamin",
  "reporter": "Alison Benjamin",
  "date": "2009-12-08T17:33:24.000-0500",
  "updated": "2010-03-31T15:32:20.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3490/",
      "key": "FLUID-3490",
      "summary": "Undo component doesn't have a strings option, making i18n difficult"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3421/FLUID-3421.txt",
      "filename": "FLUID-3421.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3421/FLUID-3421-b.patch.txt",
      "filename": "FLUID-3421-b.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3421/FLUID-3421-c.patch.txt",
      "filename": "FLUID-3421-c.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Alison Benjamin",
      "date": "2009-12-08T17:36:17.000-0500",
      "body": "removes brackets around undo / redo (graphic semantics that don't make sense aurally)\\\nchanges undo to undo edit, redo to redo edit&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-30T16:47:23.000-0400",
      "body": "The patch FLUID-3421-b.patch.txt is a slight modification to the <https://fluidproject.atlassian.net/browse/FLUID-3421#icft=FLUID-3421>.txt patch. Basically it takes the changes made in the <https://fluidproject.atlassian.net/browse/FLUID-3421#icft=FLUID-3421>.txt patch and also removes some excess markup and changes the default selectors.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-30T17:45:08.000-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3421#icft=FLUID-3421>.c.patch.txt is an update to the <https://fluidproject.atlassian.net/browse/FLUID-3421#icft=FLUID-3421>.b.patch.txt which now also provides i18n support to the undo component.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-31T15:31:14.000-0400",
      "body": "Justin committed a fix for this at r9786\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-31T15:32:20.000-0400",
      "body": "I've reviewed Alison and Justin's fix for this issue and it looks good. This also addresses a long-standing internationalization issue in Undo. +1 for inclusion in Infusion 1.2\n"
    }
  ]
}
---
Small changes to Inline Edit (markup for demos & code) to enhance UX.&#x20;

        
---json
{
  "title": "FLUID-2438",
  "summary": "Dialog opened by fck editor is missing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-04-01T11:24:59.000-0400",
  "updated": "2009-04-07T16:07:28.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2452/",
      "key": "FLUID-2452"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2438/FLUID-2438.patch",
      "filename": "FLUID-2438.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2438/FLUID-2438-2.patch",
      "filename": "FLUID-2438-2.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-02T14:54:59.000-0400",
      "body": "If this is just a missing file or an incorrect path, it can be verified on just one or two configurations. (probably FF and Safari)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-04-06T19:16:31.000-0400",
      "body": "This patch appears to resolve the issue.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-04-07T08:41:08.000-0400",
      "body": "Resolved with supplied patch - needs application and review.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-07T13:53:23.000-0400",
      "body": "I've reviewed this patch. It looks good and it works. +1\n\nI've asked Antranig to add a comment explaining the nature of the fix, just so we are aware of it in the future.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-04-07T14:31:20.000-0400",
      "body": "Updated patch with commenting for intention\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-07T16:07:28.000-0400",
      "body": "Verified fix using:\n\nFF2 (Win XP)\n"
    }
  ]
}
---
Dialog opened by fck editor is missing

Steps to reproduce:

1\) Open the rich text inline editor\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/rich-text-inline-edit.html>

2\) Open one of the fck inline edit fields into edit mode

3\) Do something that causes the dialog to open, such as attempting to add the link using the toolbar&#x20;

Notice that in FF and Opera, a 404 error is given in place of the dialog\
In Safari no dialog is displayed but the page is still blocked as though a modal dialog was there.\
In IE it is relatively unnoticeable that a dialog is missing.

        
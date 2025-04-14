---json
{
  "title": "FLUID-2206",
  "summary": "Cannot edit text in Tiny MCE rich-text inline edit: using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-02-09T08:59:20.000-0500",
  "updated": "2009-02-16T22:36:38.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1957/",
      "key": "FLUID-1957",
      "summary": "Caret not placed in rich text editor upon activation of inline edit field: using FF2"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-09T09:00:21.000-0500",
      "body": "Bug Parade 0.8 release&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-13T22:50:18.000-0500",
      "body": "Fixed at revision 6507\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T08:49:11.000-0500",
      "body": "Verified fix using:\n\nTested using FF 2 (Mac OS 10.5, Win XP)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T22:12:31.000-0500",
      "body": "I committed a minor tweak to Antranig's workaround for <https://fluidproject.atlassian.net/browse/FLUID-2206#icft=FLUID-2206>, commenting out the body variable in the FF2-specific block, since it's not used. Also JSLinted the file. These changes are in r6514.\n\n+1 on FLUID-2206's inclusion in Infusion 0.8.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T22:36:38.000-0500",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5)\n"
    }
  ]
}
---
Cannot edit text in Tiny MCE rich-text inline edit: using FF2

Steps to reproduce:

1\) Navigate to the rich-text inline edit demo page:\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/rich-text-inline-edit.html>

2\) Click one of the tiny mce inline-edit fields

3\) Attempt to edit the text in the rich-text field

Notice that it is not editable and that a caret is never displayed there

        
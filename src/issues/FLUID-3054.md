---json
{
  "title": "FLUID-3054",
  "summary": "tiny_mce Inline Edit text editor fails when used with advanced theme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2009-07-22T16:15:18.000-0400",
  "updated": "2009-07-31T10:39:57.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3054/FLUID-3054_final.txt",
      "filename": "FLUID-3054_final.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3054/FLUID-3054.txt",
      "filename": "FLUID-3054.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3054/FLUID-3054-c.patch",
      "filename": "FLUID-3054-c.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3054/patch.txt",
      "filename": "patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2009-07-22T16:23:04.000-0400",
      "body": "Patch for review fixing the advance theme problem\n"
    },
    {
      "author": "y z",
      "date": "2009-07-23T12:23:09.000-0400",
      "body": "Polished patch for the issue\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-07-23T16:07:18.000-0400",
      "body": "I've attached a new patch that should resolve the issue. It does need some fairly substantial testing, since I changed the way options get merged before instantiating the actual InlineEdit instance.&#x20;\n"
    },
    {
      "author": "y z",
      "date": "2009-07-24T11:28:16.000-0400",
      "body": "latest patch\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-24T17:08:41.000-0400",
      "body": "Committed Yura's latest patch, which solves the issue of the advanced themed tinyMCE from opening and closing when trying to launch it hte first time. This patch also removes the jquery.tinyMCE plugin. The one addition that I have made was to convert one of the tinyMCE examples in the inlineEdit quickstart example to use the advanced theme.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-27T17:19:53.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-28T07:33:26.000-0400",
      "body": "This has now been back ported into the 1.1.x branch\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-07-30T12:27:55.000-0400",
      "body": "Yes, this fix looks correct to me. The original code just before 0.6 used to do a deep merge here, which is correct.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-31T10:39:57.000-0400",
      "body": "Verified fix using:\n\nIE 7, FF3 (Win Vista)\\\nSafari 3, Safari 4, Opera 9.6, FF3.5\n"
    }
  ]
}
---
When using tiny mce editor for inline text edit component with "advanced" theme tiny\_mce editor opens and closes first time the user tries to edit text. This happens because tiny mce. To reprodcude:\
1\. create a tiny\_mce example\
2\. pass {tinyMCE: {theme : "advanced"}} as the option when calling fluid.inlineEdit.tinyMCE()\
3\. run the demo and notice that component closes instantly after the first time it is being opened.

        
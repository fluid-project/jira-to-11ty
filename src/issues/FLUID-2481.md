---json
{
  "title": "FLUID-2481",
  "summary": "\"Links\" selection does not work correctly in UIOptions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T14:55:58.000-0400",
  "updated": "2011-01-07T13:31:12.004-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2501/",
      "key": "FLUID-2501"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2766/",
      "key": "FLUID-2766",
      "summary": "Feature Request: Styles for typical form layouts"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2481/sakai-uioptions.png",
      "filename": "sakai-uioptions.png"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-04-30T16:11:33.000-0400",
      "body": "This is an issue of the preview window already containing items that the UIOptions interface is trying to set.\\\nI think the solution is to build a better preview, one that does not use any styles outside of the class names UI Options uses - this way when you change the UI Options options, it will enable a change in the preview.\n\nAlso, perhaps UI Options might want to have certain features pre- selected to match the intial state of the preview.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-04-30T16:12:57.000-0400",
      "body": "Also, for the word wrapping issue, we could stack the items vertically if there are too many.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:10:02.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-22T15:21:05.000-0400",
      "body": "Im splitting this issue into several sub issues, since there are too many parts to address here\n"
    },
    {
      "author": "y z",
      "date": "2009-05-28T12:56:24.000-0400",
      "body": "Bold option does not work neither in IE6, Opera 9.6, FF3 on WinXP\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-05-29T14:30:28.000-0400",
      "body": "Bold option also not working in OS X: FF3, FF2, Safari, Opera 9.3.&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-07T13:31:12.002-0500",
      "body": "Only bold link issues remains, so closing this, and keeping bold link jira.\n"
    }
  ]
}
---
The layout for the "links" section wraps poorly, with the word "Larger" appearing on its own line. Also there is no clear association through spacing or grouping of the text representing the checkbox value and the control. (IE6, FF2, FF3, Opera)

Also, specifically in the Sakai sample on IE6, the "Bold" option does not function - the links already appear in bold, but unticking the "Bold" checkbox does not remove this (IE6 only)

In the "plain" version of the component. the "Underline" options for links does not work in any browser.

        
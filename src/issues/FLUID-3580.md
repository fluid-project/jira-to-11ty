---json
{
  "title": "FLUID-3580",
  "summary": "Pager demo has invalid markup",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2010-04-01T10:17:12.000-0400",
  "updated": "2010-12-07T07:03:09.232-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3600/",
      "key": "FLUID-3600",
      "summary": "Pager demo markup has errors when testing with AChecker."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3822/",
      "key": "FLUID-3822"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-11-09T15:10:15.214-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-06T20:46:55.556-0500",
      "body": "New pager demo passes W3C Validator with XHTML 1.1 and UTF-8 encoding.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-07T07:03:09.227-0500",
      "body": "Closing, since it is now passing w3c validation\n"
    }
  ]
}
---
Pager demo has invalid markup\
<http://build.fluidproject.org/infusion/demos/pager/html/pager.html>

1. &#x20;Error  Line 82, Column 46: document type does not allow element "span" here; assuming missing "li" start-tag

\<span class="flc-pager-summary">1-10 of 500 items\</span>

1. Error Line 83, Column 19: end tag for "li" omitted, but OMITTAG NO was specified

\</ul>

You may have neglected to close an element, or perhaps you meant to "self-close" an element, that is, ending it with "/>" instead of ">".

        
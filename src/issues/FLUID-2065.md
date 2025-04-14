---json
{
  "title": "FLUID-2065",
  "summary": "Tech review of Simple Text Inline Edit API docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-01-06T15:28:21.000-0500",
  "updated": "2009-06-03T13:41:56.000-0400",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-02-08T17:29:29.000-0500",
      "body": "I've reviewed the Simple Inline Edit API docs, and made some minor revisions where necessary.&#x20;\n\nThere are three things missing from the current docs, they may have been added after 0.7, or it maybe that they are things which we don't want to document because they are of limited utility to the integrator, although I note them because they seem to have some utility:\n\nUnder Supported Events, we don't mention the afterInitEdit event.\n\nUnder Functions, we don't mention that.isEditing() or that.cancel()\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-11T10:55:29.000-0500",
      "body": "I've documented afterInitEdit and that.cancel(), waiting for input from Antranig on that.isEditing().\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-11T11:29:28.000-0500",
      "body": "All of Eli's comments have now been addressed.\n"
    }
  ]
}
---
A technical review of\
<http://wiki.fluidproject.org/display/fluid/Simple+Text+Inline+Edit+API>

* &#x20;Check page for correctness against current code base:\
  &#x20;         o function signatures\
  &#x20;         o options (selectors, supported events, styles, etc.)\
  &#x20;         o dependencies\
  &#x20;         o etc.
* Check links between pages, add and update where appropriate.

Bug Parade 0.8 release&#x20;

        
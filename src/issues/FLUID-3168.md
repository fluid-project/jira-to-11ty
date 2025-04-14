---json
{
  "title": "FLUID-3168",
  "summary": "Restructure svn for demos",
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
  "date": "2009-09-10T16:59:31.000-0400",
  "updated": "2011-01-15T15:20:49.641-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-09T11:17:31.000-0500",
      "body": "There is now a demos directory of this structure. There are some other demos that still need to be moved into here though, but those should be handled as a separate jira.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T12:29:05.739-0500",
      "body": "Reopening these issues in order to add the democomponent.&#x20;\n"
    }
  ]
}
---
Restructure svn for demos

The layout should look something like this:

Demos/\
portal/\
index.html\
css/\
js/\
inlineEdit/\
simple/\
demo.html\
html/\
css/\
js/

etc.

        
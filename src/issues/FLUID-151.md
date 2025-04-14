---json
{
  "title": "FLUID-151",
  "summary": "Adding a namespace to the role attribute causes FireFox to ignore it completely",
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
  "reporter": "Colin Clark",
  "date": "2007-12-17T18:37:57.000-0500",
  "updated": "2008-08-09T14:29:08.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "FireFox 2.0.x on Windows\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-83/",
      "key": "FLUID-83",
      "summary": "The ARIA roles and states in the Lightbox aren't read by JAWS or Windows-Eyes"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2007-12-17T20:52:47.000-0500",
      "body": "Fixed, tested, committed. Done.\n"
    }
  ]
}
---
The Lightbox markup declares an XHTML 1.0 name space, and prefixes all role attributes with this namespace. Here's an example:

xhtml10:role="wairole:grid"

This prefix will cause FireFox to completely ignore the role attribute, thus not exposing it to MSAA .

The solution is to remove the role prefix, like so:

role="wairole:grid"

        
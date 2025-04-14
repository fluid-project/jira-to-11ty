---json
{
  "title": "FLUID-3145",
  "summary": "Nested image reorderer throws a \"rootnode is undefined\" error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-08-31T15:31:13.000-0400",
  "updated": "2009-09-08T08:57:03.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-08T08:57:03.000-0400",
      "body": "Looks like this was fixed at r7876\n"
    }
  ]
}
---
Nested image reorderer throws a "rootnode is undefined" error

Steps to reproduce:

1\) Open the uPortal mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>

Error:&#x20;

rootnode is undefined

var inputs = rootnode.getElementsByTagName(tagname);

ImageReorderer.js (line 39)

        
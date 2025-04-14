---json
{
  "title": "FLUID-5174",
  "summary": "Demos for preference framework fail at initialization in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2013-10-08T13:08:22.480-0400",
  "updated": "2013-11-22T09:19:59.746-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Only in IE8\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5172/",
      "key": "FLUID-5172",
      "summary": "Some framework IoC tests fail in IE8"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-11-22T09:19:59.561-0500",
      "body": "This issue is fixed by the resolving of <https://fluidproject.atlassian.net/browse/FLUID-5172#icft=FLUID-5172>.\n"
    }
  ]
}
---
1\. In IE8, open up <http://build.fluidproject.org/infusion/demos/uiOptions/schemaDemo/html/uiOptions.html>

2\. The page load throws an error:\
"Object doesn't support this property or method

ASSERTION FAILED: Event specification for event with name onCreateTOCReady does not include a base event specification"

        
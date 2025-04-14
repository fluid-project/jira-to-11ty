---json
{
  "title": "FLUID-2893",
  "summary": "URL rewritting for the build scripts removes bgiframe.js from the head when it shouldn't",
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
  "reporter": "Justin Obara",
  "date": "2009-06-02T14:37:18.000-0400",
  "updated": "2009-11-13T09:15:37.000-0500",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-02T14:52:51.000-0400",
      "body": "For the bSpace example, the outer page has jQuery but no Fluid in the js references.\n\nSince the InfusionAll.js replaces the reference to Fluid.js it is removing the jquery reference but not putting InfusionAll.js in.\n\nShould probably check for Fluid.js before doing an URL rewriting in a file. Or replace Fluid.js with infustionAll.js and not do any more removing of js references unless InfusionAll.js is present.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-11T12:44:22.000-0400",
      "body": "Actually looks now as though it is removing jQuery, which is the only js file on the outer page that is in the concatenated js file\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-11T12:57:11.000-0400",
      "body": "Instead of replacing Fluid.js with a reference to the single concatenated js file, the first occurence of a file that is contained within the single js file, is replaced. This will prevent the issue of the single js file not being added to pages where Fluid.js does not occur but other files from the single js file do.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:15:37.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
URL rewritting for the build scripts removes bgiframe.js from the head when it shouldn't

It should only remove references to files for which are contained within the InfusionAll.js file

        
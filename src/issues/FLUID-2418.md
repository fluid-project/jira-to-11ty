---json
{
  "title": "FLUID-2418",
  "summary": "many tests contain CSS link declarations in head after some script declarations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Eli Cochran",
  "date": "2009-03-30T17:31:05.000-0400",
  "updated": "2011-01-14T10:43:10.418-0500",
  "versions": [
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-16T18:01:55.000-0400",
      "body": "This is also the case in the test template.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-16T22:29:58.000-0400",
      "body": "Placed CSS files ahead of JS files\n"
    }
  ]
}
---
When we changed the paths for Fluid 1.0, the head tags for our automated tests were reorganized. Unfortunately in an attempt to group the jqUnit files together the declaration: \<link rel="Stylesheet" media="screen" href="../../../lib/qunit/css/testsuite.css" />

ended up after some of the script declarations which is generally considered a no-no, although the incidence of things failing because of this are few and far between.&#x20;

        
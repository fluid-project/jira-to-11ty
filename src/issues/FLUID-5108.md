---json
{
  "title": "FLUID-5108",
  "summary": "Source and supplied dynamic grades that both have common option(s) to be handled by IoCSS don't get merged correctly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-08-02T11:23:50.967-0400",
  "updated": "2014-03-03T11:29:55.944-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5085/",
      "key": "FLUID-5085",
      "summary": "Correct grade merging algorithm to ensure that grade overriding is always effective"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-17T04:06:20.276-0400",
      "body": "This is actually a much more fundamental issue and results from <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085>, in that the grade merging algorithm as currently implemented is incorrect. It is actually unrelated to the IoCSS or dynamic grade machinery, and the test case has been accordingly simplified to act as a basic test for <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085>.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-09-10T00:25:41.533-0400",
      "body": "Merged into trunk at revision 40de4e2 together with a revision of the grade merging algorithm for <https://fluidproject.atlassian.net/browse/FLUID-5085#icft=FLUID-5085>\n"
    }
  ]
}
---
If both the source component and the supplied dynamic grade have option(s) that need to be passed down to a sub-component via IoCSS, the option(s) defined in the source component take precedence over the dynamic grade.&#x20;

The right behavior is vice versa.

The test case is created @ <https://github.com/cindyli/infusion/blob/FLUID-5108/src/tests/framework-tests/core/js/FluidIoCTests.js#L3114-3150>

        
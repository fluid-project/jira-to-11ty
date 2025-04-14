---json
{
  "title": "FLUID-4340",
  "summary": "jqUnit.assertDeepEq has exponential computational time when comparing two trees with a lot of levels",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Harris Wong",
  "date": "2011-07-14T10:17:45.383-0400",
  "updated": "2014-03-03T13:05:21.922-0500",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": "FF5, Chrome on Ubuntu.\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4360/",
      "key": "FLUID-4360"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-07-28T17:45:22.566-0400",
      "body": "Fixed with fix of <https://fluidproject.atlassian.net/browse/FLUID-4360#icft=FLUID-4360>\n"
    }
  ]
}
---
Description:\
When using jqUnit.assertDeepEq to compare two trees, the run time grows exponentially and causes the browser to throw a timeout error. &#x20;

Suggested Fix:\
Use deepEqual(actual, expected, message) instead.  Wrap this function with our assertDeepEq. &#x20;

Additional Notes:\
This might be the same for assertDeepNeq as well.

        
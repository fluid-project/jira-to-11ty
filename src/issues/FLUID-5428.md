---json
{
  "title": "FLUID-5428",
  "summary": "Manual demo \"some kind of news\": increasing text size causes calendar on the side bar to overlap with the main content",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2014-06-09T09:58:23.329-0400",
  "updated": "2015-06-26T09:54:13.939-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos"
  ],
  "environment": "All browsers\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5428/overlapping.jpeg",
      "filename": "overlapping.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T15:33:39.624-0400",
      "body": "This demo was replaced by <http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/assortedContent/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:45.936-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
1\. Open up "some kind of news" demo: <http://build.fluidproject.org/infusion/tests/manual-tests/html/SomeKindOfNews.html>\
2\. Click "show display preferences" to open up the preferences editor;\
3\. Increase the preference "text size";\
4\. The calendar on the sidebar expands beyond the sidebar area and overlaps with the main content.

        
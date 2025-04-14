---json
{
  "title": "FLUID-3202",
  "summary": "Add local same-origin policy warnings for components that rely on ajax",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-09-23T10:34:34.000-0400",
  "updated": "2011-01-15T15:16:16.762-0500",
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
      "date": "2009-09-29T16:10:09.000-0400",
      "body": "To reiterate the above:\n\nif you run the demo locally using firefox 3+ , it won't work unless you change some of the security settings.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-30T13:26:04.000-0400",
      "body": "Going to :\\\n1\\) Check if ajax based demo \\\n2\\) Check for FF 3+\\\n3\\) Check for server loc (if url starts with file:///)\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-01T14:38:42.000-0400",
      "body": "New strategy: launch dummy synchronous ajax call to prohibitive (in FF) location. If it fails, then show the warning.\n\nThis is akin to feature detection rather than scrubbing fragile aspects of the page.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-10-01T17:17:08.000-0400",
      "body": "This looks good to me.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T12:29:05.640-0500",
      "body": "Reopening these issues in order to add the democomponent.&#x20;\n"
    }
  ]
}
---
If a demo requires it to be delivered via a server due to ajax in FF problems, then there needs to be some sort of warning about this.

        
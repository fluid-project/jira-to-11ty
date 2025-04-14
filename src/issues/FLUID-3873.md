---json
{
  "title": "FLUID-3873",
  "summary": "Revisit Uploader's public APIs and ensure that they are sufficiently usable with both the Flash and HTML 5 strategies",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-12-02T16:28:44.257-0500",
  "updated": "2014-05-22T14:28:19.245-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-03T08:48:20.328-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:28:19.245-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
At the moment, all of Uploader's public APIs (options, events, and some methods) reflect a built-in bias towards the design of SWFUpload. This was done pragmatically at the time--SWFUpload was the only strategy we had available at the time.

However, now that we have the HTML 5 upload strategy, it's time to revisit all our options, events and public method signatures to ensure they are most useful to our users, regardless of which strategy they are using.&#x20;

As an example to illustrate this issue, we expose SWFUpload's approach to specifying file types, which is awkward and non-standard.

        
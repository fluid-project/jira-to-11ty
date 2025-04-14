---json
{
  "title": "FLUID-6479",
  "summary": "make use of browserlist to identify and report which browsers are supported",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Justin Obara",
  "date": "2020-03-17T11:06:55.037-0400",
  "updated": "2024-07-22T10:35:33.312-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-27T12:51:55.195-0400",
      "body": "Currently supported browsers: <https://wiki.fluidproject.org/display/fluid/Browser+Support>\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-27T13:33:23.573-0400",
      "body": "@@Justin Obara I've created a shareable config and requested a transfer to you so you can add it to the fluid-project organization.\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-27T13:34:05.339-0400",
      "body": "<https://github.com/greatislander/browserslist-config-fluid>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-11-02T11:24:39.825-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1018> ) into the project repo at a332ffefb66ff07c718cac734238d4cd6c1ffcd1\n"
    }
  ]
}
---
Make use of [browserlist](https://github.com/browserslist/browserslist) for configuring which browsers are support. It also provides integrations into other tools for linting, css styling, and js transpilation. 

The [https://browserl.ist](https://browserl.ist/) online tool can be used to see which browsers are matched by the specified configuration.

        
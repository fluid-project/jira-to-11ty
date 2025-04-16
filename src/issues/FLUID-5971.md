---json
{
  "title": "FLUID-5971",
  "summary": "Add binder transformation functions to model transformation API....",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-09-27T05:54:37.646-0400",
  "updated": "2024-07-22T09:21:27.944-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-09-27T05:55:50.896-0400",
      "body": "Antranig Basman, is there a particular branch I should start with?\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-09-27T08:00:12.858-0400",
      "body": "Also, do you want me to pull up any of the rest of the functions here?\n\n<https://github.com/the-t-in-rtf/gpii-binder/blob/GPII-1886/src/js/codingTransforms.js>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-05T09:07:09.346-0400",
      "body": "In discussions with Antranig on the [previous PR](https://github.com/GPII/gpii-binder/pull/4), we agreed that I would migrate the existing functions out of gpii-binder into infusion.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-10T07:33:45.700-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/761>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-10-12T19:28:11.049-0400",
      "body": "Was merged into trunk on 27 Jan 2017\n"
    }
  ]
}
---
In reviewing my proposed date-handling transformation functions in [gpii-binder](https://issues.gpii.net/browse/GPII-2053), Antranig Basman asked me to submit this against Fluid's Model Transformation API instead.

There are two functions, one for string -> date, the other for date -> string.   Both use RFC 3339 conventions, which builds on ISO 8601 and is used with both the HTML5 date field and JSON Schema.

        
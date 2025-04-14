---json
{
  "title": "FLUID-2845",
  "summary": "jQuery has deprecated the jQuery.browser tests in favor of jQuery.support",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Eli Cochran",
  "date": "2009-05-29T13:10:04.000-0400",
  "updated": "2014-04-02T16:37:16.186-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-04-02T16:37:16.185-0400",
      "body": "In this release we bundle a ripped-off version of jQuery's browser detect code with the framework, since it has been removed from jQuery 1.9 and later\n"
    }
  ]
}
---
in version 1.3, jQuery deprecated the $.browser.\<browsername> and $.browser.version tests in favor of jQuery.support\
We can assume that these methods will be removed at some point in the future.

We have a number of instances of these tests which should be rewritten to use other methods of detection

        
---json
{
  "title": "FLUID-3126",
  "summary": "Run load tests for the Infusion Builder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Laurel Williams",
  "date": "2009-08-21T15:38:24.000-0400",
  "updated": "2013-09-06T14:00:25.928-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3126/load customBuild Page.jmx",
      "filename": "load customBuild Page.jmx"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3126/post customBuild Page.jmx",
      "filename": "post customBuild Page.jmx"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-08-27T14:46:54.000-0400",
      "body": "The two attached files are jMeter test plans for loading the customBuild page (gets the data to render the customBuild page), and posting to the customBuild server side code to initiate the build and obtain the resulting zip file.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-15T11:38:04.000-0400",
      "body": "Critical that load testing is not done on live server at the moment, as the post test will bring the site down. I did this...so don't let's do it again!!\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-15T11:41:27.000-0400",
      "body": "Load testing of the load custom build page. Summary of results.\\\nRan 1000 simultaneous hits of this page and looped 10 x (ie. 10,000 hits).\n\nAverage time 5.1s, max time 95sec, approx 5% error where errors were timeouts.\\\nThroughput 93 sec.\n\nI did do runs where the error rate was HUGE: 78% once. I think there must have been a server problem at that particular time, but not sure how to tell.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-15T12:00:37.000-0400",
      "body": "For the post test: 50 simultaneous hits crashes the server, so kind of hard to really do any metrics. 10 simultaneous hits was ok.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-15T12:01:44.000-0400",
      "body": "this should really be listed as \"completed\" rather than \"fixed\".\\\nWill return to this task once we've written code to cache the results of the posts.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-21T15:24:39.000-0400",
      "body": "Re-opening after writing caching for downloads.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-21T15:27:38.000-0400",
      "body": "Just did a test of 100 simultaneous hits of the postProcessor with caching in place. First request was about 22 seconds, but subsequent loads required only about 33 ms. One REALLY strange issue which did occur was that every 6th post timed out...in a very nice pattern. Tried this manually but did not have any problem, so this must be related to the density of the hits. Should we be concerned about this?\n"
    }
  ]
}
---
In order to get a better sense of the ability for Builder to handle concurrent usage, we should write and maintain a set of JMeter load tests for it.

        
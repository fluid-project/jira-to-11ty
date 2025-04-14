---json
{
  "title": "FLUID-3825",
  "summary": "Upgrade primeCacheFromResources and fluid.fetchResources to support cooperation on joining future joinsets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-11-05T01:20:30.225-0400",
  "updated": "2011-01-15T15:39:29.584-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-05T15:03:57.037-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-08T04:13:33.305-0500",
      "body": "Implemented at revision 10189. Comment:\n\nUpgrade of fluid.fetchResources to support PROLEPTICK JOINSETS. The opportunity was taken to thoroughly refactor this rather gnarled nodule of pretty ancestral code that \"just grew\" as it came to handle more complexity. Now with a proper \"that\" as well as a dedicated namespace - previously unannounced functions \"primeCacheFromResources\" and \"clearCache\" have been moved into this fluid.fetchResources namespace. Addition of \"mockjax\" testing framework to our test image which allows the issuing of \"deterministic asynchronous\" tests of which \"CachingTests.js\" now exhibits the style. All possible interleavings of response cycles are tested to demonstrate correct behaviour of caching system - this exposed a fatal bug with the \"forceCache\" implementation to date.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-15T16:21:01.661-0500",
      "body": "Reviewed.&#x20;\n"
    }
  ]
}
---
Within CollectionSpace, which is pursuing increasing componentisation of markup, a component's source file can request loading of a template at read time, in order to start I/O as early as possible. An "experimental" framework method named "primeCacheFromResources" allows this to be initiated, and such that all subsequent request for the same markup will be satisfied from a local cache held in the framework. However, this initial I/O **must** complete before any instances of the component defined in the file itself are created. The main point of coodination of page loading constructs a "main joinset" which waits for all pending I/O on which the construction of component trees and rendering is dependent - therefore the cache-priming request, issued early and before the joinset is even constructed, must be able to retrospectively join this joinset if it has not already concluded.&#x20;

        
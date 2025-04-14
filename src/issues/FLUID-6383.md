---json
{
  "title": "FLUID-6383",
  "summary": "Investigate skipping Headless Chrome in tests/testem.js/testemOptions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2019-07-19T10:34:03.951-0400",
  "updated": "2020-07-29T09:24:55.454-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2019-07-19T10:43:55.885-0400",
      "body": "I've opened a PR to make this change at <https://github.com/fluid-project/infusion/pull/957>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-07-22T07:36:53.230-0400",
      "body": "In previous similar discussions in other projects, @@Antranig Basman and I went the other way, i.e. disabling \"headed\" Chrome:\n\n<https://github.com/GPII/gpii-json-schema/blob/2a449b128f5f2bee94eb4b7325d00f33d5cb30d1/tests/testem.js#L30>\n\nI think there is a speed boost to running headless.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-07-22T07:44:08.539-0400",
      "body": "@@Justin Obara asked whether there were any issues with focus with Headless Chrome, all tests passed for me using a command like:\n\n```java\nnode node_modules/testem/testem.js ci --file tests/testem.js --launch \"Headless Chrome\"\n```\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-22T08:14:52.551-0400",
      "body": "If we switch to Headless Chrome, maybe we can also run Firefox headless. I was talking to @@Tony Atkins \\[RtF] about this in the [fluid-work channel today](http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-07-22.log) and it seemed to work for him. \n"
    },
    {
      "author": "Alan Harnum",
      "date": "2019-07-22T12:29:15.140-0400",
      "body": "Thanks @@Tony Atkins \\[RtF] and @@Justin Obara - I will see if I can get the PR running both in Headless mode. Agree using both (if it doesn't impact the focus of the tests) is ideal for speed purposes.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-17T15:18:28.608-0400",
      "body": "+1 for running headless Chrome/Firefox if we can make it work. It would simplify CI enormously.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-27T08:08:02.962-0400",
      "body": "@@Giovanni Tirloni I vaguely remember having issues with using headless browsers in GitHub Actions. I think it's related to <https://issues.gpii.net/browse/GPII-4064>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-29T09:24:51.143-0400",
      "body": "Work on <https://fluidproject.atlassian.net/browse/FLUID-6368#icft=FLUID-6368> switched to only support the headless version of chrome for testem configuration. \n"
    }
  ]
}
---
"Chrome" and "Headless Chrome" are registered as separate launchers by Testem, and many systems (including the current CI infrastructure) will have both.

Running Headless Chrome in addition to Chrome results in:

* redundant testing
* harder to read test results
* longer CI jobs
* possible intermittent failures due to the lack of a graphical interface (reflected most immediately in the second instance of Chrome tests consistently failing in [https://github.com/fluid-project/infusion/pull/956](https://github.com/fluid-project/infusion/pull/956,) until Headless Chrome was added to the skip list)

Currently we exclude the following browser launchers in Infusion's tests/testem.js testemOptions block:

{

`...`

`skip: "PhantomJS,Opera,Safari",`

`...`

{{}}}

I would propose we add Headless Chrome and skip it if available. I don't believe we've ever had a discussion about a need to have both available, but I may be wrong.

        
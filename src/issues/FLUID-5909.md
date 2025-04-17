---json
{
  "title": "FLUID-5909",
  "summary": "Move linting infrastructure over to ESHint and update grunt tasking to 1.0",
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
  "reporter": "Antranig Basman",
  "date": "2016-05-25T11:39:16.781-0400",
  "updated": "2016-06-07T06:11:07.904-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-05-25T12:33:42.711-0400",
      "body": "I have been refining my first pass at setings here:  <https://github.com/the-t-in-rtf/gpii-express/blob/GPII-1800/.eslintrc>\n\nThat project is configured to test with both.  I encountered a few last small niggles that showed up in JShint, but not ESlint, but I believe it's pretty close at this point.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-05-26T08:58:37.111-0400",
      "body": "Antranig Basman is this going to be a test or should all our other projects/repos make the switch to ESHint now too?\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-06-02T15:55:12.342-0400",
      "body": "The infusion pull request <https://github.com/fluid-project/infusion/pull/716> has been merged into the master branch at 71f24487ee70abf5cf19ede582a8ae99f56ab907\n\nIn order to upgrade infusion to use grunt 1.x, the grunt plugin grunt-modulefiles needs to be upgraded accordingly. This plugin upgrade is done at <https://github.com/fluid-project/grunt-modulefiles/pull/6> that also has been merged at 3a7e857bbc0a0d0b3980783d116e6b3a7a3f6405\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-06T08:16:14.405-0400",
      "body": "I was hoping to reuse the new `.eshintrc` from infusion, but I immediately get linting errors not previously reported by JSHint in gpii-express.  Here's just the example output from a single file:\n\n```java\n/Users/duhrer/Source/rtf/gpii-express/testIncludes.js\r\n  1:1  error  Use the function form of 'use strict'          strict\r\n  2:1  error  'require' is not defined                       no-undef\r\n  2:2  error  Newline required at end of file but not found\n```\n\nThe first error is a result of this configuration option:\n\n> \"strict\": \\[\"error\", \"function\"],\n\nThe second error is a result of this configuration option:\n\n> \"eol-last\": \"error\",\n\nBoth of these changes to our style were not previously enforced by JSHint.  I know because I set up both JSHint and ESLint in a single project and used them in parallel for a week or two to confirm that:\n\n1\\. ESLint reported all the problems that JSHint did previously.\\\n2\\. ESLint did not report any code conventions that were previously allowed as errors.\n\nIt seems like this change introduced two new rules and that someone just ran eslint --fix to fix the errors here.  Really, unless this ticket was also about changing our styles, this needs to be reopened and reviewed before we can expect other projects to follow suit and migrate to ESLint.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-06-06T08:44:06.427-0400",
      "body": "> It seems like this change introduced two new rules and that someone just ran eslint --fix to fix the errors here.\n\nIt would help if you had actually participated in the review thread for this fix or at least looked at it before you started slinging around unsourced accusations.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-06T08:48:17.648-0400",
      "body": "I apologize for implying that anyone ran --fix.  However, even if I agree that it's appropriate to sneak in one style change, that doesn't explain the migration of \"use strict\" to function form, which is not even mentioned in the PR.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-06T08:50:40.984-0400",
      "body": "It also seems very much like fair game to just use the `.eslintrc` from infusion without reading the PR, as that is exactly what we suggest that other people do:\n\n<https://wiki.fluidproject.org/pages/viewpage.action?pageId=3903458>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-06T08:51:25.377-0400",
      "body": "So, let's start again.  I tried to follow the instructions on the wiki and use the standard .eslintrc.  It reports problems that were never reported by the previous settings in the old .jshintrc.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-06T08:54:09.626-0400",
      "body": "Only reopening because you can't edit comments on a closed issue...\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-07T05:44:20.872-0400",
      "body": "Anyway, just to close this out, the \"new\" errors related to \"use strict\" were a function of not having the right environment.  On reflection, I do think that we have enough \"non Crockford-isms\" now that it would be worth adding a bit more to the wiki, including of course the fact that the default file is configured for browser code and needs to be edited to be used with node components.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-06-07T06:11:07.904-0400",
      "body": "Just to follow up, the migrated \"strict\" setting does cause problems in node projects. I am preparing a fix here:\n\n<https://issues.fluidproject.org/browse/FLUID-5914>\n"
    }
  ]
}
---
Tony Atkins \[RtF] has brought to our attention an alternative linting tool to our JSHint (frozen at an ancient version to retain whitespace support), ESHint, that appears to have considerably superior engineering values and supports essentially all of the requirements motivating our JSHint fork at <https://github.com/fluid-project/jshint>

We should move over to ESHint, draw up an equivalent .eshintrc file to our existing rules, and also take the opportunity to move over to the grunt 1.x release which appeared recently.

        
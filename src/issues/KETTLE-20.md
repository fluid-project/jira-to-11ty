---json
{
  "title": "KETTLE-20",
  "summary": "Kettle should always make a full console log on fluid.fail even if there is a current request",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-01-13T15:35:01.290-0500",
  "updated": "2014-07-30T12:19:47.784-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-01-14T19:51:51.037-0500",
      "body": "We should take the opportunity at the same time to fix logging in another crucial case, where there is NOT a current request and we receive an unhandled exception notification. This blocked the characterisation of <http://issues.gpii.net/browse/GPII-520>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-07-30T12:19:47.706-0400",
      "body": "Merged into Kettle trunk at revision 78410a0c99326a5b7b4173bf84fbb1c6d3ce9de0 on 7 Feb 2014\n"
    }
  ]
}
---
Kettle's utils.js currently has (line 52):

fluid.pushSoftFailure(function errHandler(args, activity) {\
var messages = args.concat(activity),\
request = fluid.expand("{request}", {\
fetcher: fluid.makeEnvironmentFetcher()\
});\
if (!request) {\
messages = \["ASSERTION FAILED: "].concat(messages);\
console.log.apply(null, messages);\
throw new Error(args\[0]);\
}

we should move the console log outside the request test, since the version of the error logged to the browser is seldom very readable, especially if it includes Objects as part of the logged list. This issue made several error reports we received from GPII universal very hard to read during preparation for the review meeting.

        
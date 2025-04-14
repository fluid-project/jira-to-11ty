---json
{
  "title": "FLUID-4973",
  "summary": "Function.prototype.bind is not available in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-04-08T13:02:51.017-0400",
  "updated": "2013-04-29T09:29:17.618-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-04-08T13:37:30.336-0400",
      "body": "Added a pull-request ( <https://github.com/fluid-project/infusion/pull/310> ) with a fix for this issue. It makes use of the Public Domain code from the MDN site.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-04-08T15:35:51.361-0400",
      "body": "The call to fluid.applyHostFunction has always been guarded by a check for typeof (console.log) === \"function\" which always returns false on IE8. In fact we shipped this way for the Infusion 1.4 release so if we are now considering this code problematic we need a better characterisation of what the problem is. Can you produce a failing test or other demonstration to show why this fails?\\\nThanks\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-04-08T17:43:33.689-0400",
      "body": "This issue was observed when testing the upcoming UIOptions branch (<https://fluidproject.atlassian.net/browse/FLUID-4927#icft=FLUID-4927>) on UIO. It turns out that the issue was intermittent, and triggered by a race condition in the IoC Testing framework, which then tried to invoke fluid.fail. fluid.fail then invoked the new framework utility \"fluid.logActivity\" which then issues a bare call to fluid.applyHostFunction without the implicit checking applied by the guard mentioned in the previous comment. We should just take the opportunity to rationalise this entire area, since there is actually no useful benefit gained by the use of multi-argument console.log on IE8 and IE9 anyway - exactly the same effect could be had by args.join(\"\").\n\nWe should attempt to consider the previous reports of a console.log with type \"function\" but without a working \"apply\" method as apocryphal and see how far we can get before encountering the problems again. I don't see any reference to such a possibility in any of the support discussions (docs, stackoverflow,e tc.) that have been cited\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-04-09T08:41:10.206-0400",
      "body": "pull-request 310 replaced by <https://github.com/fluid-project/infusion/pull/311>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-04-09T17:36:21.253-0400",
      "body": "Pull request merged into project repo at 80108b7e5d3c066e64a0dbfc04defe04c93d4b37\n"
    }
  ]
}
---
IE8 does not support Function.prototype.bind. It is used in the framework as part of fluid.applyHostFunction. It appears to have been added or modified at this commit:\
<https://github.com/fluid-project/infusion/commit/b53ae2769bd042de4a92ef40bcbebabdba79311c>

This stackoverflow post talks about a work around, linking in a MDN article:\
<http://stackoverflow.com/questions/11054511/how-to-handle-javascript-bind-method-missing-in-ie-8>\
<https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind>

        
---json
{
  "title": "FLUID-1306",
  "summary": "fluid.fail() throws an exception when invoked.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-08-22T12:10:04.000-0400",
  "updated": "2011-02-22T16:27:51.017-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-08-22T12:11:25.000-0400",
      "body": "I fixed this by removing the call to message.fail() entirely.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-08-22T13:56:04.000-0400",
      "body": "Apparently fluid.fail() is supposed to fail this way, in order to ensure that logging and a real browser error occurs.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:51.014-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The fluid.fail() utility method, used to report errors and exceptions, ends up throwing an error itself. Here's the code:

fluid.fail = function (message) {\
fluid.utils.setLogging(true);\
fluid.utils.debug(message.message? message.message : message);\
message.fail(true);\
};

It expects message to either be a plain old String (aka "") or a plain old Object (aka {}). However, the last line attempts to invoke a fail() function on the message. Neither String nor Object implements fail(), so it explodes.

        
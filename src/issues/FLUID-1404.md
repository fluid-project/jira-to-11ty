---json
{
  "title": "FLUID-1404",
  "summary": "fluid.fail() is confusing.",
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
  "date": "2008-09-02T13:35:45.000-0400",
  "updated": "2014-03-04T09:05:55.385-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4842/",
      "key": "FLUID-4842",
      "summary": "Improve flexibility of framework error handling in fluid.fail"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-18T15:51:09.000-0500",
      "body": "The issue is that Firebug won't break on a throw() even with \"break on all errors\" turned on, so the error is hard to debug.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-18T15:52:45.000-0500",
      "body": "We decided, for now, to change it to a throw() for the release only, then change it back so we can debug easily. There was discussion (in the IRC logs Dec. 9, 2008, <http://wiki.fluidproject.org/x/RYtI> ) of trying to automate this process, and other options.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T10:21:44.000-0500",
      "body": "perhaps we could use a global debug flag, for example fluid.debug = true/false, then we would only have to change it in one location. Potentially this could also be used by the renderer to force debug mode off in case we miss it in any of the code. Jacob also had the idea of having a config object that would be part of the framework. I think that might look something like&#x20;\n\nfluid.config = {\\\ndebug: true,\\\n...\\\n}\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-01-10T22:57:16.356-0500",
      "body": "The current behaviour for fluid.fail was introduced because of unhelpful behaviour in several browsers (mostly IE, but not just IE - FF will also do this in some cases) when throwing exceptions. Given that these \"soft exceptions\" (caused by a literal \"throw new Error()\" or similar statement) are catchable by catch blocks, they are sometimes swallowed by the browser and do not cause a transition into the debugger. Generating this kind of \"hard failure\" is the only way we discovered to consistently allow the debugger to be invoked at the point of the error in all browsers, even if the message resulting in the console is not entirely relevant.\n\nThat said, this argument only demonstrates that this behaviour is appropriate for debug or development builds of Infusion, and production builds should have this behaviour turned off. This is what we have done for all the recent releases, and the comment below by Justin was acted on a while back by means of introducing the \"pushSoftFailure\" directive which allows this behaviour to be under user control - this behaviour was improved further with the <https://fluidproject.atlassian.net/browse/FLUID-4842#icft=FLUID-4842> work allowing the strategy to be fully configurable, especially for special environments such as node.js. I therefore think we've done all we can about this issue, and even at this late stage in 2012 the \"hard failure\" behaviour is still helpful in several current browsers. That said, this issue interacts interestingly with our recent discussions about changing our release policy. Should we move away from making formal releases, it will be harder to find a workflow point at which we adjust the fluid.fail() behaviour for release. This might be another task that we end up pushing onto the new Infusion Builder.&#x20;\n"
    }
  ]
}
---
At the moment, fluid.fail() logs out an error message and then causes the browser to log a real error by calling a "fake" method on an object that doesn't implement it. Here's how it works:

fluid.fail = function (message) {\
fluid.utils.setLogging(true);\
fluid.utils.debug(message.message? message.message : message);\
message.fail(); // Intentionally cause a browser error by invoking a nonexistent function.\
};

The problem is a user experience issue. Firebug reports a big, fat, red error message saying "message.fail is not a function." Which is correct, but causes one to often over look the message logged above, which provides more informative details about the error.

I remember that fluid.fail() was implemented to work around a problem with throwing exceptions in JavaScript. What are the specifics of this problem?

        
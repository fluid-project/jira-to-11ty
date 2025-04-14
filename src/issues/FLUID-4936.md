---json
{
  "title": "FLUID-4936",
  "summary": "Create refined logging system that allows filtering of logged messages by priority",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-03-15T03:19:39.693-0400",
  "updated": "2013-04-29T09:31:36.885-0400",
  "versions": [
    "1.4"
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
      "date": "2013-04-10T22:31:04.543-0400",
      "body": "Merged into master at 577a30\n"
    }
  ]
}
---
During a code review of some improvements to the IoC Testing system (FLUID-4929) some of the direct console.log messages shown there were highlighted as a hazard ( <https://github.com/fluid-project/infusion/pull/267/files#r3325612> ) - it seems that IE9 of our environments will still throw an error on receiving a console statement if the console is hidden. This highlighted the need for some refinement in our logging system which is largely unchanged from its primitive and crude incarnation from 2007 - especially since Infusion is now being used in production-critical environments like GPII servers. The need in FLUID-4927 was to report at high priority to the user when one of their tests was either skipped or queued as a result of QUnit's UI-based filtering (triggered by double-clicking on a fixture) - since this is a very high priority cause of user error when one is looking into the cause of why one's tests are not running.

We will implement a system of logging levels similar to those seen in the ancient days of "commons logging" etc., which are accepted as an optional first argument to fluid.log, as well as to the logging control directive fluid.setLogging - the system will be backward compatible with the old one in that the levels formerly known as "true" and "false" will be mapped to fluid.logLevel.INFO and fluid.logLevel.IMPORTANT respectively, the former being the default logging priority applied to all fluid.log statements without a logLevel as the first argument. Here is the initial set of logging levels to be supported (subject to easy expansion on demand):

fluid.logLevelsSpec = {\
"FATAL":      0,\
"FAIL":       5,\
"WARN":      10,\
"IMPORTANT": 12, // The default logging "off" level - corresponds to the old "false"\
"INFO":      15, // The default logging "on" level - corresponds to the old "true"\
"TRACE":     20\
};

A new "guard" function fluid.passLogLevel is now available to users who wish to guard the expense of logging statements that will not appear.

Note that this system is currently entirely independent of the stack-based "activity tracing" system developed for FLUID-4884, but needs to be integrated with it. "Activities" have the natural effect of applying to stack frame levels, whereas plain "log" messages simply occur at a point in time. It's clearly natural to be able to convert "activities" into logging messages (via, for example, the utility "logActivity" but not necessarily vice versa.)

        
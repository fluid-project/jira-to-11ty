---json
{
  "title": "FLUID-5496",
  "summary": "IoC testing framework syntax for \"event\" listener fixtures should support the standard IoC resolution applied to \"arguments\"",
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
  "date": "2014-08-19T11:55:45.550-0400",
  "updated": "2015-06-26T10:11:56.500-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "IoC System",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-11-20T19:02:27.214-0500",
      "body": "Merged into trunk at revision <https://github.com/fluid-project/infusion/commit/d591ebe6e5f2475dffda1ffbdd12d4247de9de09> Aug 22 2014\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:21.129-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The IoC Testing framework seems to have been designed before "listener boiling" was a commonplace feature of the IoC framework itself. As a result, it has a peculiar syntax for supplying varying arguments to "event" fixtures, involving the "listenerMaker" and "makerArgs" values. For example, from the metadata component's tests, we have the following:

gpii.tests.bindDialog.makeEventChecker = function (eventName) {\
return function () {\
jqUnit.assert("The " + eventName + " event was fired.");\
};\
};

with a fixture entry \
{\
listenerMaker: "gpii.tests.bindDialog.makeEventChecker",\
makerArgs: \["onBindDialogHandlers"],\
event: "{bindDialog}.events.onBindDialogHandlers"\
}

There's no good reason for this unusual record naming, as well as the redundant level of "return function () {}" in the fixture entry - this should instead be

gpii.tests.bindDialog.checkEvent = function (eventName) {\
jqUnit.assert("The " + eventName + " event was fired.");\
};

with

{\
event: "{bindDialog}.events.onBindDialogHandlers"\
listener: "gpii.tests.bindDialog.checkEvent",\
args: "onBindDialogHandlers"\
}

        
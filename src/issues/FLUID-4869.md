---json
{
  "title": "FLUID-4869",
  "summary": "Individual listeners subscribed to changeApplier events cannot be removed",
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
  "reporter": "Antranig Basman",
  "date": "2012-12-14T00:50:18.863-0500",
  "updated": "2014-03-03T12:29:56.390-0500",
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
      "date": "2013-02-26T14:17:09.320-0500",
      "body": "This was fixed at ad4348 as part of the <https://fluidproject.atlassian.net/browse/FLUID-4850#icft=FLUID-4850> IoC testing work\n"
    }
  ]
}
---
The ChangeApplier operates a non-standard workflow for adding events to its "base listeners". The listener actually subscribed is not the same one supplied by the user, since it undergoes wrapping by the applier.&#x20;

DataBinding.js lines 604-613 has

function adaptListener(that, name) {\
that\[name] = {\
addListener: function (spec, listener, namespace) {\
baseEvents\[name].addListener(wrapListener(listener, spec), namespace);\
},\
removeListener: function (listener) {\
baseEvents\[name].removeListener(listener);\
}\
};\
}

As a result, the "removeListener" call can only succeed when the argument consists of a namespace name rather than a listener. It seems that previous tests were fudged in order to dodge this issue - this problem was discovered when writing the "changeEvent" record type for <https://fluidproject.atlassian.net/browse/FLUID-4850#icft=FLUID-4850> IoC-driven tests.

        
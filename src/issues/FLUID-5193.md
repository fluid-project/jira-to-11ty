---json
{
  "title": "FLUID-5193",
  "summary": "The matching form '*' in IoCSS doesn't match any subcomponents",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-10-28T12:04:17.897-0400",
  "updated": "2021-07-29T01:37:59.758-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
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
      "date": "2013-11-19T12:23:56.466-0500",
      "body": "Hi - this is indeed a bug in the framework which we should fix, but I think it is of low priority since the use case for matching all subcomponents without qualification is quite weak - in fact, it could be seen to be positively harmful since it prohibits the \"openness\" of the subcomponent set, in that we do usually expect that subcomponents can be freely contributed by 5th parties without penalties. In the medium term we suggested a workaround based on the use of grade qualification in the IoCSS expression to {that > fluid.prefs.enactor} - see recent IRC discussion at <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-11-19>\n"
    }
  ]
}
---
When the star sign :yellow\_star: is used in the target to match and pass down options to any sub-compnents, for example:

distributeOptions: {\
source: "{that}.options.userOption",\
removeSource: true,\
target: "{that > \*}.options.userOption"\
}

The specified option doesn't get passed down to all direct subcomponents in this example.

A test case has been created @ <https://github.com/cindyli/infusion/blob/FLUID-5193/src/tests/framework-tests/core/js/FluidIoCTests.js#L3575-L3599>

        
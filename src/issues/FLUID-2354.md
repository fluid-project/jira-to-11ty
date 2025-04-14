---json
{
  "title": "FLUID-2354",
  "summary": "Return semantics for \"preventable\" events do not agree with those of the DOM",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2009-03-16T14:29:50.000-0400",
  "updated": "2011-02-22T16:27:42.724-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
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
      "date": "2009-03-16T14:31:35.000-0400",
      "body": "Fixed at revision 6750. I have updated various handlers in InlineEdit and Reorderer to conform to the new model, but I believe that this behaviour was never exercised.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:42.722-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Historically, "preventable" events have been implemented with the opposite semantics for preventing propagation to those in the DOM. For "preventable" events, a return value of  "true" has the effect of both stopping propagation and also of any default effect of the event, whereas, the DOM uses a return value of "false". For the 1.0 release, this API should be adjusted to conform to the DOM convention.

        
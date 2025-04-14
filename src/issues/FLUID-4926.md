---json
{
  "title": "FLUID-4926",
  "summary": "Support resolution of invokers onto existing functions using \"func\" notation",
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
  "date": "2013-02-26T02:51:15.455-0500",
  "updated": "2014-03-03T12:25:42.740-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-09-09T04:53:44.611-0400",
      "body": "This was merged into trunk at revision a653e4e (March 2013)\n"
    }
  ]
}
---
A helpful improvement to the framework, motivated by recent work on the uploader, would be to be able to resolve invokers directly onto existing functions, rather than being required to resolve them onto global function names using the existing "funcName". This would bring it into consistency with the new expander system, which allows an "unnamed expander" (actually a modification of the historical "deferredInvokeCall" expander) to resolve either using funcName onto a global function name or func onto a function. It is also consistent with the "listener" system whereby an entry named "listener" in a listener record can be resolved onto either a function or function name.&#x20;

Here is an example:

invokers: {\
enableBrowseButton: {\
func: "{that}.swfUpload.setButtonDisabled",\
args: false\
},

The only position remaining where only "funcName" is acceptable is in a demands block.

        
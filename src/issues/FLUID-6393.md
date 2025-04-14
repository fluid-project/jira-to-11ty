---json
{
  "title": "FLUID-6393",
  "summary": "Create facility for \"conditional model listeners\" which only activate for certain upcoming model values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-08-07T14:56:55.672-0400",
  "updated": "2019-08-07T14:56:55.672-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
A constantly recurring requirement is the ability to "gate" model listeners based on whether the upcoming model state meets some criterion. The most basic and endlessly appearing variant of this is a listener to a boolean value which only activates on one value of the flag - for example, the following pull request has required a noisy 3-line function just to gate on a "falsy" value

<https://github.com/fluid-project/infusion/pull/959/files>

A more advanced version of this facility might allow more complex conditions to be expressed via the "reduced expression parser" FLUID-5894

        
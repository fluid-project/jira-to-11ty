---json
{
  "title": "FLUID-6418",
  "summary": "Failure when referring to dynamic component location via ginger reference during afterDestroy",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-10-24T07:23:23.722-0400",
  "updated": "2024-07-22T10:35:05.858-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As part of the <https://fluidproject.atlassian.net/browse/FLUID-6278#icft=FLUID-6278> improvements to the TTS component in <https://github.com/fluid-project/infusion/pull/962#discussion_r337986436> Justin Obara ran into a case similar to <https://issues.fluidproject.org/browse/FLUID-5266> where a ginger reference seemed capable of pushing into existence a createOnEvent component.

As it turns out, this issue was quietly fixed during the FLUID-6148 work, but we should add a dedicated test case to prevent regression. This issue was caused by the old framework keeping records of subcomponents by bashing on the "options.components" area of the parent's options, which confused the old ginger algorithm into believing that there was a component there which could be constructed.

        
---json
{
  "title": "FLUID-6433",
  "summary": "Supply diagnostic when context name resolution is ambiguous",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-11-22T08:08:24.994-0500",
  "updated": "2021-06-21T12:37:12.199-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
An annoyance exposed recently during work on <https://fluidproject.atlassian.net/browse/FLUID-6426#icft=FLUID-6426> was that the framework will quietly resolve short context names into a containment level where they are ambiguous - and particularly, where there are member names and short grade-derived names which match. In the pull at <https://github.com/fluid-project/infusion/pull/970/commits/e45140a6dd6d064ed24b2cf1670d2b2a519b7d3a#diff-0322b3f60fc2ecfad187809947f88218R370> there was one site where the lineSpace enactor was referred to as {lineSpace} which matched the short context name derived from "fluid.tests.prefs.enactor.lineSpace". Further, in a related fix, a component named "utterance" needed to be named "utteranceSuccess" in order for resolution not to be ambiguous with the short context name from fluid.tests.textToSpeech.utterance: <https://github.com/fluid-project/infusion/pull/968/files#diff-db48edb1bc07eabb83304f3d98f2759cR337>&#x20;

We should be able to revert the rules applied by "fast scoping" from fluid.expandImmediate and the like so that they give member names priority as before, but we should also highlight such matches to the user, especially once we have visual authoring tools.

        
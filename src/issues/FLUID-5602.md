---json
{
  "title": "FLUID-5602",
  "summary": "Improve diagnostics on misformatted event boiling configuration, and consider removing \"events\" wrapping level",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-03-03T17:36:04.816-0500",
  "updated": "2015-03-03T17:36:04.816-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In a recent report on gpii-architecture list

\[placeholder for link to post from 3/3/15 from Tony Atkins "Can't seem to wire in" which has not yet appeared on http://lists.gpii.net/pipermail/architecture/2015-March/date.html ]

there was a problem where the extra containment level "events" was missed out from a compound event boiling specification: "The events block was omitted from Antranig's otherwise excellent example, and is necessary to avoid cryptic errors about not having a base event name."

This syntax is documented at <https://github.com/fluid-project/infusion-docs/blob/master/src/documents/EventInjectionAndBoiling.md#boiling-multiple-events> - we should consider whether we can&#x20;

i) provide a better diagnostic in this case and/or\
ii) remove the need for the "events" container entirely.

It's unclear how many more FRP-like event conjunctions we might need to support here, and/or whether we will be able to remove almost all cases of such explicit boiling by means of a) promise-like semantics applied to configuration in general (causing "multiple waits" in the case of multiple dependencies) and/or b) "integral models" derived from streams of differential model changes

        
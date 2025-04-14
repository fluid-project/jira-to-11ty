---json
{
  "title": "FLOE-509",
  "summary": "Bring the Materialization Toolkit into being from the Chart Authoring library + others",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Epic",
  "priority": "Major",
  "status": "Open",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2017-05-17T16:00:00.651-0400",
  "updated": "2017-05-17T16:09:40.063-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
High-level JIRA to note eventually anticipated work on this...

As we work further on projects involving the Chart Authoring library, it becomes clear that its functionality and concepts should be broken apart into separate modules, and incorporate some functionality from other projects (such as the Nexus) into the **Materialization Toolkit** (so named by @@Colin Clark).

The toolkit will support our need to materialize data and other "things" in different states to support one-to-one individualized learning, such as:

1. Visualization - charts, graphs, and otherwise. In current state this is largely implemented using D3.
2. Sonification - making data or information into sound. Our two uses of this so far as the sonified charts, and the sonified sensors of the Nexus.

It will also provide support for common tasks needed to materialize, such as:

1. Data transformation

1)
   1. Model mapping of transformed values via Infusion transforms - see the "pure configuration" sonifier at <https://github.com/waharnum/nexus-demos/blob/GPII-2189/science-lab/sensor-presentations/js/sensorPlayer.js#L111> for a simple but concrete example of what we'd eventually like to achieve for more complex cases
2) Scheduling behaviour, including mixing event-based and timer based scheduling such as we see in <https://github.com/waharnum/nexus-demos/blob/GPII-2189/science-lab/sensor-presentations/js/sensorPlayer.js#L111>

Eventually we'll want a monorepo structure, but per the meeting notes: "for all mono repos, we don't yet have tooling to support monorepos, so we'll use a mega repo with a hiearchical directory structure reflective of the future subrepos."

        
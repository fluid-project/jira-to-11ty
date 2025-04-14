---json
{
  "title": "FLUID-3185",
  "summary": "Provide a way to disable the Inline Edit component.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-09-16T16:35:10.000-0400",
  "updated": "2021-07-29T01:46:09.634-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5283/",
      "key": "FLUID-5283",
      "summary": "Utility \"fluid.enabled\" is broken in several ways and should be rewritten or removed"
    }
  ],
  "attachments": [],
  "comments": []
}
---
At the moment, there's no way to disable Inline Edit. We should provide an API that allows users to turn editability--and its associated cues--on and off as needed. We should also stop preventing any default actions for underlying markup when the editor is disabled.

        
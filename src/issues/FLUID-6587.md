---json
{
  "title": "FLUID-6587",
  "summary": "Impossible to override any expanders in defaults",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-01-08T11:13:55.080-0500",
  "updated": "2021-11-02T08:59:50.786-0400",
  "versions": [],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5304/",
      "key": "FLUID-5304"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6156/",
      "key": "FLUID-6156",
      "summary": "Impossible to implement \"defaultable\" values in defaults via expanders returning undefined"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The problems with the defaults merging workflow are even more fundamental than reported in <https://fluidproject.atlassian.net/browse/FLUID-6156#icft=FLUID-6156>. Rather than just not being able to make expanded default options defaultible, we can't override any expanders listed in defaults.

The following setup:

```java
fluid.defaults("hortis.leafletMap", {
...
    outerBounds: "@expand:fluid.geom.emptyBounds()",
});

fluid.defaults("fluid.covidMap.map", {
    gradeNames: ["hortis.leafletMap", "hortis.streetmapTiles", "hortis.CSVLeafletMap", "hortis.conditionalTemplateRenderer"],
....
    outerBounds: {
        min: [-95.2, 41.6],
        max: [-74.3, 56.9]
    },
)}
```

ends up with the original expander being evaluated, since the merging algorithm produces a corrupt record with the (long-form) expander record plasted on top of the overriding value.

Yet another thing to fix when we regularise the expansion and merging pipeline for <https://fluidproject.atlassian.net/browse/FLUID-5304#icft=FLUID-5304>.

        
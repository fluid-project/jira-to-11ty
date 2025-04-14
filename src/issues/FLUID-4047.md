---json
{
  "title": "FLUID-4047",
  "summary": "Extend column sorting to allow per-column callbacks",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Eric Dalquist",
  "date": "2011-02-01T12:09:21.925-0500",
  "updated": "2011-10-17T09:30:25.656-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4047/fluid_pager_sort.js",
      "filename": "fluid_pager_sort.js"
    }
  ],
  "comments": [
    {
      "author": "Eric Dalquist",
      "date": "2011-02-01T12:11:09.286-0500",
      "body": "New default sorting function along with a default sorting callback impl and two example value extractors for dates and numbers.\n\nThis would be used like:\\\ncolumnDefs: \\[ \\\n{key: \"date\",   valuebinding: \"\\*.date\",   sortable: true, sortValueExtractor : dateExtractor},\\\n{key: \"status\", valuebinding: \"\\*.status\", sortable: true, sortFunction: hrs.pager.statusComparator},\\\n{key: \"total\",  valuebinding: \"\\*.total\",  sortable: true, sortValueExtractor : hrs.pager.currencyExtractor},\\\n{key: \"type\",   valuebinding: \"\\*.type\",   sortable: true},\\\n{key: \"title\",  valuebinding: \"\\*.title\",  sortable: true}\\\n]\n"
    }
  ]
}
---
Extend the built-in sorting method of the fluid pager to allow columnDefs to provider either a custom comparator or a custom value extractor to use when sorting.

        
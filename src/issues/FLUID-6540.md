---json
{
  "title": "FLUID-6540",
  "summary": "Evaluate web scraping libraries and produce simple initial implementation for WeCount Covid testing centre app",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-08-05T10:56:37.827-0400",
  "updated": "2024-07-18T15:49:25.860-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-08-06T09:40:27.539-0400",
      "body": "Since the discovery of a data feed for this data at <https://data.ontario.ca/dataset/covid-19-assessment-centre-locations/resource/04bede2c-5e30-4a05-b890-cd407043485e>\\\nthe scraping portion of this work was temporarily shelved - very preliminary implementation which outputs list of testing centre names at <https://github.com/amb26/fluid-scrapy/tree/FLUID-6540>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-18T15:49:25.690-0400",
      "body": "Migrated to <https://github.com/inclusive-design/covid-data-monitor/issues/38>&#x20;\n"
    }
  ]
}
---
As planned in the WeCount technical checkin notes at <https://docs.google.com/document/d/1WQxLj77GzzbwWyj5lFaIY_RzOW2yDV79qtNP5wEm30A/edit#> in section for Thursday, July 30, 2020 - item 1 g (Project planning) subitem v 1, "Antranig will evaluate web scraping tools and possible locations/modalities to host data: <https://covid-19.ontario.ca/assessment-centre-locations/>

, we decided to apply a simple web scraping approach to harvest locations of Ontario Covid testing centres, in preparation to presenting these on an accessible map-based interface.

This task covers evaluation and selection of the tools necessary to go from data embedded in HTML into CSV, driven in a relatively manageable declarative format.

        
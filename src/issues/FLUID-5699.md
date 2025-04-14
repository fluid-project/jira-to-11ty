---json
{
  "title": "FLUID-5699",
  "summary": "There should be a way to include headers which are in a  section that is excluded",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2015-06-24T13:55:41.185-0400",
  "updated": "2021-07-29T01:31:34.173-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5697/",
      "key": "FLUID-5697",
      "summary": "There should be an easy way for Table of Contents to ignore certain content"
    }
  ],
  "attachments": [],
  "comments": []
}
---
There should be a way to "force" the inclusion of headers into the table of contents even if they are within a container that is excluded from the table of contents. In practice this is really just a short cut for having to add the exclude class to many headers when only one or a few need to be a included.

For example a class could be provided, such as, "flc-toc-include"

        
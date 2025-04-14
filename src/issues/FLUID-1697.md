---json
{
  "title": "FLUID-1697",
  "summary": "OSDPL Views: when Browsing design patterns, some design patterns are listed twice.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-10-21T15:09:12.000-0400",
  "updated": "2011-02-22T16:27:52.771-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-10-21T15:09:22.000-0400",
      "body": "iteration22\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-23T12:37:47.000-0400",
      "body": "This actually doesn't seem to be a bug, but a limitation in Views.\n\nIf a node uses multiple terms from a vocabulary, that node will be listed for each vocabulary term used. i.e. if a pattern is tagged with \"Drag and Drop\", \"drag and drop\", and \"mouse\", it will appear three times in a View.\n\nUsing Node:Distinct filter does not fix the issue because Node:Distinct does not act on Taxonomies.\n\nAt this time there is no real solution to this except for restricting Design Patterns to use only a single category term so it will appear once in a list. However, this isn't what we want because we want pattern authors to be able to select multiple categories.\n\nCurrently trying to figure out an alternative approach to categorizing with a decent browsing experience.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-11-16T00:45:42.000-0500",
      "body": "Fixed with <https://fluidproject.atlassian.net/browse/FLUID-1806#icft=FLUID-1806>.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:52.769-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
If a design pattern belongs to more than one category, it should only be listed once in the Browse design patterns View. The View should list all categories belonging to that one pattern instead of listing it multiple times.

        
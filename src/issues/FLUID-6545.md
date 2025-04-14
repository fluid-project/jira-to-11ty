---json
{
  "title": "FLUID-6545",
  "summary": "Create a Nexus-based spreadsheet differ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-08-26T12:04:59.175-0400",
  "updated": "2020-08-26T12:04:59.175-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As part of the data collection effort for the [COVID-19 assessment centre accessibility map](https://wiki.fluidproject.org/display/fluid/Accessibility+Map+of+COVID-19+Assessment+Centres) project, we are working with a set of correlated spreadsheets: the Ontario Open Data repository's list of assessment centres, our copy of that list, and our "augmented list", which has additional columns for tracking the additional work.

The repository list is periodically updated, adding and removing centres, as well as changing the data schema. When this happens, we need to re-associate our additional columns with the new list. Presently, this is doable manually, but in the long term, we want a similar tool to the hypothetical \[Naturalist's Friend|<https://github.com/amb26/papers/blob/master/ppig-2019a/ppig-2019a.pdf>,] which can automatically maintain associations between documents stored in different locations, and formats or warn us to go do some work when it runs into an ambiguous update.

This looks like a good demonstrator case for the Nexus sheets library. The demo tool should be a webpage that takes links to remote data (either on google sheets or in the Ontario Open Data repository) and reports on the pairwise differences between documents. In this case the diff algorithm will be specifically adapted to the assessment centre data.

        
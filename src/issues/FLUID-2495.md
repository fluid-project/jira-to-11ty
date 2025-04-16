---json
{
  "title": "FLUID-2495",
  "summary": "RangeAnnotator options should not be top-level Pager options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2009-04-02T17:03:15.000-0400",
  "updated": "2017-01-16T09:54:32.033-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-14T15:15:53.764-0400",
      "body": "As of 1.4, annotateColumnRange is still a top level option. The other two no longer are.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-09T10:09:16.431-0400",
      "body": "Antranig Basman do you have thoughts on this issue?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-16T09:54:32.029-0500",
      "body": "It seems that there has been some refactoring to the pager component which changes the implementation related to the rangeAnnotator. There is still a [fluid.pagedTable.rangeAnnotator](https://github.com/fluid-project/infusion/blob/master/src/components/pager/js/PagedTable.js#L26-L28) grade; however, this grade doesn't appear to be used at all. It seems to be used more like a call to fluid.registerNamespace with a method in its namespace used as a [listener](https://github.com/fluid-project/infusion/blob/master/src/components/pager/js/PagedTable.js#L101).\n"
    }
  ]
}
---
Currently, the Pager supports three top-level options that are used to configure its RangeAnnotator subcomponent:\
annotateColumnRange\
tooltipDelay\
tooltipId

Since these options are specifically for configuring the subcomponent, they should be defined as options to the subcomponent itself, and passed in through the subcomponent definition object.

        
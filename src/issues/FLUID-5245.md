---json
{
  "title": "FLUID-5245",
  "summary": "distributeOptions is not sensitive to gradeNames which arise through dynamic grades",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-01-07T18:32:36.579-0500",
  "updated": "2015-06-26T10:00:44.031-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5185/",
      "key": "FLUID-5185"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-02-13T15:23:36.824-0500",
      "body": "Committed to trunk at <https://github.com/fluid-project/infusion/commit/6fd1d7f4688fbe7ca5d28de7483aa502a63899d1> on Jan 24th, 2014\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:56.799-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
This was discovered in the context of trying to upgrade the pager to use the new more efficient Tooltip API enabled by our jQuery upgrade for <https://fluidproject.atlassian.net/browse/FLUID-5185#icft=FLUID-5185>. I attempted to write the following configuration in PagedTable.js

distributeOptions: {\
target: "{that renderedPageList}.options.listeners.afterRender",\
record: {\
funcName: "fluid.pagedTable.configureTooltip",\
args: \["{pagedTable}", "{arguments}.0"]  \
}\
},

this **should** have been sensitive to the fact that the configured pageList component was actually a renderedPageList. Unfortunately the grade information for this component is **itself** broadcast via a distributeOptions block in Pager.js - in the following combination:

distributeOptions: {\
source: "{that}.options.pageList",\
removeSource: true,\
target: "{that fluid.pager.pageList}"\
},\
pageList: {\
type: "fluid.pager.renderedPageList",\
options: {\
pageStrategy: fluid.pager.gappedPageStrategy(3, 1)\
}\
},

This peculiar thing was done so that we could demonstrate maintaining backwards compatibility with the very ancestral pager which before IoC expected this configuration at top level rather than in a "components" block. This is a little perverse but should be perfectly valid. It implies that we can't really get away with receiving distributeOptions in a single block up front as we currently do, but need to split resolution with an "early" and a "late" phase. The "early" phase is necessary as historically we discovered that people would like to broadcast top-level non-options such as "type" for FLUID-5013 - this "late" phase is now needed since we need to be sensitive to absolutely all gradeNames which are received after the last round of collectDynamicGrades rather than just the very poor fake set which is sent along by our still remnant fluid.embodyDemands.

This will most likely need to be done by making a record in the component's shadow to record which distributions have already been reacted to, to avoid double counting. This in turn requires that each distribution will be supplied with a unique id.

        
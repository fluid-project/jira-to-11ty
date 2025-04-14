---json
{
  "title": "FLUID-5673",
  "summary": "Tooltips are not closed by closeAll and accumulate endlessly if some descendents are not part of \"items\" option",
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
  "date": "2015-05-30T15:50:11.124-0400",
  "updated": "2015-11-03T12:43:54.562-0500",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Tooltip"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-361/",
      "key": "FLOE-361"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-01T13:01:55.349-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/607> ) into the project repo at fcb1c18a9f4da94d6564a521175e772f2180e8c5\n"
    }
  ]
}
---
This issue was encountered whilst trying to resolve <https://fluidproject.atlassian.net/browse/FLOE-361#icft=FLOE-361>. It was found that our default policy of applying items: "\*" as an option to the underlying jQuery UI widget was causing interaction problems - mouse movement (or clicking) within an item that should have counted as a single tooltip source would cause the tooltip to redisplay as well as potentially also swallowing the event.

However, attempting to reconfigure the "items" option to be more specific caused problems of its own. As diagnosed on the JIRA, this would cause any tooltips constructed by the component to accumulate endlessly if some collateral event caused them to be closed (where "collateral" signifies "outside the direct influence of the underlying UI widget" - for example, re-rendering, or opening of a different tooltip).

The diagnosis on <https://fluidproject.atlassian.net/browse/FLOE-361#icft=FLOE-361> is correct - the root cause is that the id stored in the Infusion component's openIdMap is incorrect and is that of the event target rather than the one that jQuery UI believes to be the tooltip target. As a result, jQuery UI ignores the request to "close" the tooltip when we ask for it by this id.

The resolution is to add an extra piece of solution in addition to "fluid.resolveEventTarget" in order to ensure that we only ever dispatch a valid node matched by "items" to the underlying UI widget's close method.

        
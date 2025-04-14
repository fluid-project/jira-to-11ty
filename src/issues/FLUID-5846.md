---json
{
  "title": "FLUID-5846",
  "summary": "Attaching a tooltip to a container inside of an iframe prevents the closeAll method from working",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2016-01-22T09:42:15.341-0500",
  "updated": "2016-02-04T15:55:52.100-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tooltip"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-02-04T15:50:07.272-0500",
      "body": "merged pull request ( <https://github.com/fluid-project/infusion/pull/666> ) into the project repo at ab20b889330ee0b8eb37471fb166e315419f8e12\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-02-04T15:55:48.442-0500",
      "body": "Merged pull request (  <https://github.com/fluid-project/infusion-docs/pull/82> ) into the infusion-docs repo at 36f98fe266052cdc790193bfeb0f284f0eb809f8\n"
    }
  ]
}
---
This issue was discovered while working on FLUID-5837, which involved adding tooltips to the panel. The panel is rendered inside of the Separated Panel Prefs Editor's iframe. The tooltip is created properly and most of the functions work as expected; however, it will not ensure that only one tooltip is open at once. This functionality is mediated via the closeAll method which is called when a tooltip is opened. The closeAll method makes use of fluid.byId to find the target. However, no document argument is provided to fluid.byId, which results in the lookup occurring in the parent page rather than the iframe.

        
---json
{
  "title": "FLUID-5185",
  "summary": "Upgrade to the latest version of jQuery, jQuery UI and Qunit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-10-21T10:37:49.522-0400",
  "updated": "2014-03-03T11:27:07.520-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5245/",
      "key": "FLUID-5245",
      "summary": "distributeOptions is not sensitive to gradeNames which arise through dynamic grades"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-11-22T14:11:27.800-0500",
      "body": "When updating jQuery UI we should take care to look at re-implementing the tooltip and tabs wrapper components. These should be brought up to modern standards. In particular for tooltip we should avoid the current idiom of creating new tooltips for each instance, rather we should share a single tooltip and move it around. Additionally, we should make sure that it supports all the modern features, e.g. custom-content (<http://jqueryui.com/tooltip/#custom-content>)\n"
    },
    {
      "author": "Andrew Wills",
      "date": "2013-12-20T16:31:52.439-0500",
      "body": "Justin – do you really mean the \"latest\" versions?  1.10.x (at present)?  Is there a sense of when this work will be complete, and Fluid 1.5 available?  Thanks!\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-12-20T22:28:55.951-0500",
      "body": "Two recent postings to fluid-work describing progress and discoveries during this work:\n\n<http://fluid.2324889.n4.nabble.com/jQuery-upgrades-for-Infusion-FLUID-5185-td8864.html> (Dec 18th, 2013)\n\n<http://fluid.2324889.n4.nabble.com/Breaking-changes-in-recent-versions-of-jQuery-focus-handling-td8867.html> (Dec 19th, 2013)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-12-20T22:31:51.902-0500",
      "body": "Hi Drew - yes, I am currently pushing upgrade to 1.11 beta 2, given it seems that a new jQuery release is imminent. This is now essentially working in my branch (minus the tooltip component which needs a big rewrite) and I expect this to be done in a day or two. It should be merged with trunk within a couple of weeks - the 1.5 release process should hopefully follow not long after that, although we would like to get our documentation into better shape.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-12-20T22:33:52.078-0500",
      "body": "Make that beta 3 🙂\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-20T08:45:08.805-0500",
      "body": "@@Antranig Basman jQuery UI 1.10.4 was just released on Jan 17. You may want to update this in your branch too.\\\n<http://blog.jqueryui.com/2014/01/jquery-ui-1-10-4/>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-01-27T05:18:38.244-0500",
      "body": "Pull request is now ready for review at <https://github.com/fluid-project/infusion/pull/448> including last week's final versions of jQuery 1.11.0 and jQuery UI 1.10.4\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-01-31T18:01:08.672-0500",
      "body": "Merged into trunk at revision 6218b16, along with various other upgrades that this provoked to the core framework - including a new \"delegate tooltips\" feature for the tooltip component and a new core lifecycle event \"afterDestroy\". Various fixes to the IoC testing framework also included\n"
    }
  ]
}
---
Upgrade Infusion to use the latest version of jQuery UI, Qunit, and 1.x line of jQuery.

Since we still need to support IE 8 we cannot jump to the 2.x line of jQuery yet.

        
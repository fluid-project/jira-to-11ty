---json
{
  "title": "FLUID-3487",
  "summary": "Promote fluid.deadMansBlur() to framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2010-01-28T15:26:45.000-0500",
  "updated": "2012-03-27T02:50:53.687-0400",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework",
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3898/",
      "key": "FLUID-3898"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3487/FLUID-3487.patch",
      "filename": "FLUID-3487.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3487/FLUID-3487-b.patch",
      "filename": "FLUID-3487-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3487/FLUID-3487-c.patch",
      "filename": "FLUID-3487-c.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3487/FLUID-3487-d.patch",
      "filename": "FLUID-3487-d.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3487/FLUID-3487-i.patch",
      "filename": "FLUID-3487-i.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3487/FLUID-3487-j.patch",
      "filename": "FLUID-3487-j.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:23:46.785-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-12T19:29:40.413-0500",
      "body": "Fixed at revision 10236\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-19T13:06:19.132-0500",
      "body": "There are no tests for fluid.deadMansBlur() (nor for anything else in FluidDocument.js). I know we might be restructuring things again, but it would be really great if we took this opportunity to increase our test coverage.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-10T15:32:49.723-0500",
      "body": "Implemented with test cases at revision 10382 - review required\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-14T02:14:50.320-0500",
      "body": "Test cases and implementation were found to be failing under IE. Reopened as release blocker\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-14T02:18:04.477-0500",
      "body": "Fixes with test case and implementation verified functioning under both FF and IE8.&#x20;\n"
    },
    {
      "author": "y z",
      "date": "2010-12-14T13:22:32.912-0500",
      "body": "Focusin doesn't seem to work on exclusions that are dynamically rendered on the page in IE.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-14T13:29:35.159-0500",
      "body": "FluidView-test.html test runs fine in IE7 WinXP. Manual dropdown.html test can not load in IE7 WinXP. (\"Operation aborted\" when loading page).\n\nFluidView-test.html test runs fine in IE8 Win7. Manual dropdown.html test runs fine in IE8 Win7.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-14T14:45:08.535-0500",
      "body": "Revised version of the patch \"FLUID-3487-b\" that may succeed in resolving some issues on IE.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-14T15:10:39.569-0500",
      "body": "Attached version \"c\" of patch which works under IE6, as well as test cases. Uses \"document.ready\" for initialising component\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-14T15:57:31.759-0500",
      "body": "Version \"d\" of the patch corrects for the linting that occurred in trunk since it was generated. This patch has been relinted.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-14T16:51:30.984-0500",
      "body": "Version \"i\" of patch using focusin which is verified under FF, IE6, and IE8 - please test on IE7 also\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T10:26:37.253-0500",
      "body": "I reviewed, tested, and committed Antranig's -i patch for this issue, and it looks good. +1 for inclusion in Infusion 1.3.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-16T02:42:29.127-0500",
      "body": "Unfortunately the implementation supplied for the \"i\" patch and accepted for the 1.3 release is not sufficient for some use cases in IE8, especially where those involve the use of the jquery.keyboard-a11y \"selectable\" plugin within the domain managed by Dead Man's Blur. More work will be needed on an even more capable implementation for the 1.4 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-16T02:44:58.429-0500",
      "body": "New implementation involving \"proleptic blur\" and use of synthetic \"fluid-focus\" and \"fluid-blur\" events in keyboard-a11y is now capable of dealing with interactions between fluid.selectable and fluid.deadMansBlur on IE8. This patch \"FLUID-3487-j\" is non-cumulative and applies to the state of trunk after patch version \"i\" was applied.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-17T11:52:23.170-0500",
      "body": "fluid.deadMansBlur is now in FluidView\\.js. Any issues related to it, should be filed under new jiras\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-03-27T02:50:53.685-0400",
      "body": "See <http://old.nabble.com/CSPACE-3304---dismissing-popup-areas-on-IE8-ts30470733.html> for discussion on CSPACE-3304, the corresponding issue which motivated most of this development.\n"
    }
  ]
}
---
The InlineEdit component includes a function called fluid.deadMansBlur() that has proven helpful in several contexts outside of InlineEdit. It would be nice if it was promoted to a framework function so that users could use it without having to include InlineEdit.js in their application.

        
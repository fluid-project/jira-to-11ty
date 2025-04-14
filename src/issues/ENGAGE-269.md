---json
{
  "title": "ENGAGE-269",
  "summary": "Provide the ability switch the nav list view to a grid.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-21T15:16:54.000-0500",
  "updated": "2014-03-03T14:14:59.523-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-291/",
      "key": "ENGAGE-291",
      "summary": "The \"selector mapping\" code in fluid.engage.renderUtils.createRendererFunction() eats component DOM binders for breakfast"
    },
    {
      "type": "Supersedes",
      "url": "/browse/ENGAGE-186/",
      "key": "ENGAGE-186",
      "summary": "NavigationList should support refreshing/rerendering itself"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-269/ENGAGE-269-b.patch.txt",
      "filename": "ENGAGE-269-b.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-269/ENGAGE-269-c.patch.txt",
      "filename": "ENGAGE-269-c.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-269/ENGAGE-269-d.patch.txt",
      "filename": "ENGAGE-269-d.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-01-21T15:22:12.000-0500",
      "body": "The ability to toggle from list to grid is now in the component but the grid looks really ugly. Time to learn more about FSS!\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-25T22:59:13.000-0500",
      "body": "Here's a patch with a working (though still slightly rough) grid/list toggle for NavigationList. Committing this will break trunk for two reasons:\n\n1\\. NavigationList-esque markup has been cut and pasted throughout the code base, and this change will break those uses\\\n2\\. There's a fatal bug in fluid.engage.renderUtils.createRendererFunction() that causes it to eat NavigationList's selectors\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-25T23:00:11.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-291#icft=ENGAGE-291> needs to be fixed before we can commit the patch attached to <https://fluidproject.atlassian.net/browse/ENGAGE-269#icft=ENGAGE-269>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-25T23:50:16.000-0500",
      "body": "Here's a new patch that improves the styling a bit more\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-01-26T17:25:16.000-0500",
      "body": "Patch 'd' contains changes to components that use navigation list. At this point we need to fix the tests and manually test everything.&#x20;\n"
    }
  ]
}
---
Several of the wireframes require the ability to toggle between a list and grid view. Instead of creating a new component, we should be able to do this with FSS.&#x20;

        
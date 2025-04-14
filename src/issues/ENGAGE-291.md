---json
{
  "title": "ENGAGE-291",
  "summary": "The \"selector mapping\" code in fluid.engage.renderUtils.createRendererFunction() eats component DOM binders for breakfast",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2010-01-25T21:11:34.000-0500",
  "updated": "2010-01-26T13:44:44.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-269/",
      "key": "ENGAGE-269"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-291/ENGAGE-291.patch.txt",
      "filename": "ENGAGE-291.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-291/ENGAGE-291-b.patch.txt",
      "filename": "ENGAGE-291-b.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-01-25T22:54:16.000-0500",
      "body": "Here's a patch with a test case that shows the issue, along with a refactoring to the code that:\n\n1\\. Fixes the bug by ensuring we always copy the selectors before destroying any of them\\\n2\\. Simplifies the code somewhat\\\n3\\. Improves naming\n\nIt's late and I'm a bit tired, so I've submitted this as a patch rather than committing directly to SVN--needs more eyes.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-26T12:45:13.000-0500",
      "body": "Here's a second patch that fixes a few stray issues and removes the \"that\" object, ostensibly for clarity. Justin, can you test this patch and verify that it's good?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-26T13:44:44.000-0500",
      "body": "I have tested the  ENGAGE-291-b.patch.txt and it seems to be working quite well. I have committed it into SVN.\n"
    }
  ]
}
---
The selector mapping code inside fluid.engage.renderUtils.createRendererFunction() has a bug in it. If you directly pass it a component's live options.selectors object, as well as a set of selectorsToIgnore, it will actually remove each of those selectors from the component's options, causing its DOM Binder to break as well.

The reason this happens is because the code doesn't make its own private copy of the selectors before deleting properties from it. Ack!

Here's the offending code:

fluid.engage.renderUtils.selectorMapper = function (selectors, options) {\
var map = \[];\
options = options || {};

if (options.selectorsToIgnore) {\
selectors = fluid.engage.renderUtils.removeSelectors(selectors, options.selectorsToIgnore);\
}\
...\
return map;\
};

fluid.engage.renderUtils.removeSelectors = function (selectors, ignore) {\
$.each(ignore || \[], function (index, selectorToIgnore) {\
delete selectors\[selectorToIgnore];\
});\
return selectors;\
};

        
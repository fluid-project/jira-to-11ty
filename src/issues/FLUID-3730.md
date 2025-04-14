---json
{
  "title": "FLUID-3730",
  "summary": "Create a little component that will manage the items that should be announced audibly through a screen reader.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-09-10T13:19:54.722-0400",
  "updated": "2011-01-14T10:45:18.543-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3710/",
      "key": "FLUID-3710"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3711/",
      "key": "FLUID-3711"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3730/FLUID-3730-ariaLabeller.patch",
      "filename": "FLUID-3730-ariaLabeller.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:01:45.948-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-29T09:39:21.367-0400",
      "body": "Suggested implementation:\n\nGrid reorderer: \\<row>, \\<column>. \\<description / contents>. \\<movable / fixed> element.\\\ni.e. \"Row 1, Column 1. Quick Brown fox... Movable element.\"\n\nLayout reorderer: \\<item position in column> in \\<column number>. \\<description / contents>. \\<movable / fixed> element.\\\ni.e. \"Element 1 in Column 2. Graphic Apple. Fixed element.\"\n\nList reorderer example: \\<position>. \\<description / contents>. \\<movable / fixed> element.\\\ni.e. \"Element 1. Lorem ipsum. Movable element.\"\n\nInstructions on how to reorder items should be provided in an alternate location.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-11-17T19:33:30.781-0500",
      "body": "Here's a tiny patch for the little component fixing a slight bug.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-10T15:42:14.390-0500",
      "body": "Implemented at revision 10364 with some test cases at revision 10382 - review required\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-14T16:49:19.965-0500",
      "body": "I've written a quick test for the live region functionality of the labeller. To avoid patch conflicts, I've pasted the relevant test below:\n\nfluidViewTests.test(\"ARIA labeller live region test\", function () {\\\nvar target = $(\"#component-3\");\\\nvar labeller = fluid.updateAriaLabel(target, \"Label 1\", {\\\ndynamicLabel: true\\\n});\n\nvar region = fluid.jById(fluid.defaults(\"fluid.ariaLabeller\").liveRegionId);\\\njqUnit.assertEquals(\"Live region should have the correct label\", \"Label 1\", region.text());\\\nlabeller.update({\\\ntext: \"Label 2\", \\\ndynamicLabel: true\\\n});\\\njqUnit.assertEquals(\"The live region should be updated\", target.attr(\"aria-label\"), region.text());\\\n});\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T10:27:51.355-0500",
      "body": "I reviewed, tested, and committed Antranig's ariaLabeller component, adding an additional unit test along the way. Other commits under this ticket involved general framework changes, which I will review separately. +1 for inclusion of the fluid.ariaLabeller() component in 1.3.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:44:40.544-0500",
      "body": "Reopening to add the framework component to the issue.&#x20;\n"
    }
  ]
}
---
This will be used by the reorderer to announce the location of a given reorderable element, as well as to announce its new location on reordering. This little component will be akin to the way we are able to add tabindex to an element.

Several variations of this component will be needed:

1\. A static label component that makes it easy to associated elements with labels using aria-labelledby\
2\. A dynamically changing label, which is updated based on user interactions. This may be implemented by switching the element's aria-labelledby on the fly, or may need to be implemented using a live region

        
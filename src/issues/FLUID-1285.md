---json
{
  "title": "FLUID-1285",
  "summary": "Layout Customizer API Consistency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2008-08-21T09:39:12.000-0400",
  "updated": "2011-02-22T16:27:53.594-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-705/",
      "key": "FLUID-705"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-08-21T11:59:47.000-0400",
      "body": "We chatted about this in the channel:\n\ncolinclark: So there seems to be three options on the table:\\\n\\[11:23am] colinclark: 1. Two different functions... say, dataDrivenLayoutCustomizer() and just plain old layoutCustomizer().\\\n\\[11:24am] colinclark: 2. Overloading: a single layoutCustomizer() function that either takes a container (jquery or selector string) or a simple hash containing a layout and a perms object.\\\n\\[11:24am] colinclark: 3. Options stuff: user either supplies a container and set of selectors, or a layout. In the case of getting both, we pick.\n\nHere's how they'd be used:\n\ncolinclark: 1a. var myLC = dataDrivenLayoutCustomizer(layout, perms, options);\\\n\\[11:26am] colinclark: 1b. var myLC = layoutCustomizer(\"#foo\", options);\\\n\\[11:27am] colinclark: 2a. var myLC = layoutCustomizer({layout: myLayout, perms: myPerms}, options);\\\n\\[11:27am] colinclark: 2b. var myLC = layoutCustomizer(\"#foo\", options);\\\n\\[11:28am] colinclark: 3a. var myLC = layoutCustomizer(\"#foo\", {layout: myLayout, perms: myPerms});\\\n\\[11:28am] colinclark: 3b. var myLC = layoutCustomizer(\"#foo\", {selectors: {columns: \".column\", portlets: \".portlet\"}});\n\nAfter thinking about it a bit, my vote is for scenario #3. We'll have options for selectors and layout. If a layout is found, it is used and the selectors are ignored. Permissions should be optional in either case. If they're not specified, they should be synthesized from the selectors.\n\nWe agreed to wait to check in with Antranig about the topic since he's already changed the code significantly in the <https://fluidproject.atlassian.net/browse/FLUID-1148#icft=FLUID-1148> branch.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-09-16T09:27:03.000-0400",
      "body": "Given the substantial refactoring of Reorderer and the removal of the permissions structure, this issue is now moot.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-16T12:47:56.000-0400",
      "body": "The API should still be modified to be consistent with other components, i.e.\\\nfluid.layoutCustomizer(container, options);\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-17T17:56:17.000-0400",
      "body": "initLayoutCustomizer was removed and the examples now use reorderLayout\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.593-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The layout customizer currently has this API:

fluid.initLayoutCustomizer = function (layout, perms, orderChangedCallbackUrl, options)&#x20;

This is inconsistent with our other APIs. orderChangedCallbackUrl should be pushed into the options. Perhaps layout and perms should be to.&#x20;

dev-iteration43

        
---json
{
  "title": "FLUID-3707",
  "summary": "The reorderer should have the aria application role",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2010-09-07T10:00:13.640-0400",
  "updated": "2014-04-02T15:27:27.097-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3321/",
      "key": "FLUID-3321",
      "summary": "All demos that use arrow key navigation should include the application role to enable screen readers to swtich cursor modes automatically"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-09-07T10:02:04.013-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-09T13:58:23.824-0400",
      "body": "The grid reorderer already specifies a role of grid... should the nesting be\n\n\\<element role=\"application\"> \\\n\\<element role=\"grid\">\\</element>\\\n\\</element>\n\nor&#x20;\n\n\\<element role=\"grid\"> \\\n\\<element role=\"application\">\\</element>\\\n\\</element>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-13T10:59:19.690-0400",
      "body": "Checked with Joseph. He was saying that technically if it has the role of grid, it shouldn't need the application role. However, he was saying to be careful we should use it, with application coming before grid. He also mentioned that we may not be using the grid role correctly, as fluid nature of the layout causes the elements to move between columns. The use of the role grid in the layout reorderer may make more sense.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-12-08T17:32:12.417-0500",
      "body": "Suggested Solution:\\\nSimilar to the fix in Pager.js, we can add \"application\" to the container \"role\" attribute by adding the following to src/webapp/components/reorderer/js/Reorderer.js line 124\\\nthatReorderer.container.attr(\"role\", \"application\");\\\nThis fix will add application to the role in the markup within the reorderer's container.  However, this change won't fix the current reorderers (including gridReorderer, layoutReorderer, ImageReorderer, listReorderer) because they already have their own roles set.  Alternatively, we can overwrite these roles by moving this line to the end of the block, which is at line 500, but this will make the reorderer to lose its original role (ie. from \"grid>>gridcell\" to \"application>>gridcell\", grid is lost).\\\nTo address this, Justin suggested to add another markup on top of the existing ones which will then allow us to include the application role (ie. \"application>>grid>>gridcell\") .  This might result a change in the API and might not be ideal for users because they will have a unwanted second-container on top.  Furthermore, styles and existing markup/layout might be affected. &#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-13T14:35:50.951-0500",
      "body": "I found that this patch seemed more urgent as a result of the need on NVDA to put the AT into \"focus mode\" by pressing the \"NVDA + Space\" key without which the component is totally broken. However, on attempting to wrap the reorderer container in a div with role=\"application\" I found that the behaviour instead became much worse, and that the AT dropped back into \"browse mode\" with every keypress making the component permanently unusable.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-23T15:41:05.200-0500",
      "body": "Please check if this is done and either close it or put it into another release.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-11T12:15:50.019-0500",
      "body": "Based on the comments here we may want to think about abandoning this change.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:27:27.096-0400",
      "body": "We recommend that integrators using the reorderer add the application role to their application\n"
    }
  ]
}
---
The reorderer component should add the role of application. In some cases of the reorderer, there is already a role attached, the application role should wrap around  this.

        
---json
{
  "title": "FLUID-2178",
  "summary": "Error caused by incomplete fix to FLUID-2046 in case of single properly closed <li> tag",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Antranig Basman",
  "date": "2009-01-30T11:55:41.000-0500",
  "updated": "2009-01-30T12:29:32.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-01-30T12:02:14.000-0500",
      "body": "Fixed at revision 6385\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-01-30T12:29:32.000-0500",
      "body": "Confirmed fixed.\n"
    }
  ]
}
---
With template of  \<div id="toc">            \
\<ul rsf:id="toc-list:">\
\<li rsf:id="toc\_item:">foo\</li>\
\</ul>\
\</div>

and component tree of&#x20;

var myOriginalTree = {\
"toc-list:": \[{\
"toc\_item:": \["foofer", "barbar"]\
}]\
};

one receives Error parsing template: Element: must be nested correctly at line 3 - the "escape branch" used to detect broken markup in IE does not distinguish between open and close tags

        
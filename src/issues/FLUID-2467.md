---json
{
  "title": "FLUID-2467",
  "summary": "fluid.pager.selfRender() hard-codes style class for root node.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Anastasia Cheetham",
  "date": "2009-04-02T10:07:36.000-0400",
  "updated": "2009-06-03T13:40:07.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2467/patch.txt",
      "filename": "patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2009-05-07T10:16:42.000-0400",
      "body": "this is a patch for the issue\n"
    },
    {
      "author": "y z",
      "date": "2009-05-07T10:31:32.000-0400",
      "body": "this is a patch for the issue\n"
    }
  ]
}
---
The fluid.pager.selfRender() function programmatically adds a hard-coded class name to the root node:

var root = that.locate("root");\
root.addClass("fl-pager");

Instead of using "fl-pager" directly, the style name should be taken from the styles option (which would default to "fl-pager", and users should be allowed to override it:

root.addClass(options.styles.root);\
...\
fluid.defaults("fluid.pager.selfRender", {\
styles: {\
root: "fl-pager"\
}\
}

        
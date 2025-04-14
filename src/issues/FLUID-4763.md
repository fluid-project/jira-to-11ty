---json
{
  "title": "FLUID-4763",
  "summary": "Renderer unit tests failing on IE8 (many; see description)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2012-08-15T15:29:48.474-0400",
  "updated": "2014-04-30T08:59:13.803-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Renderer"
  ],
  "environment": "IE8/Win7\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4763/Screen Shot 2012-08-15 at 3.26.15 PM.png",
      "filename": "Screen Shot 2012-08-15 at 3.26.15 PM.png"
    }
  ],
  "comments": []
}
---
UI select test with HTML multiple selects: tests #3, #7\
UI select binding test with HTML multiple selects: test #3, #7\
UI select binding test with HTML multiple selects with autobind: test #3, #7\
UI select test with checkboxes: test #3, #7\
UI select binding test with checkboxes: test #3, #7\
UI select binding test with checkboxes with autobind: test #3, #7\
Nested databinding: test #3

* All failing tests above are duplicated.

        
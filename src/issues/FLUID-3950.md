---json
{
  "title": "FLUID-3950",
  "summary": "None of the demo.html files validate (xhtml strict instead of transitional)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2010-12-17T15:56:14.172-0500",
  "updated": "2014-07-30T15:32:40.562-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-30T15:32:40.560-0400",
      "body": "All the demos are now HTML5 (doctype \"html\"), and pass validation.\n"
    }
  ]
}
---
The doctype on the demos is XHTML 1.0 Strict and doesn't validate for two main reasons:

-there is no attribute "src" &  element "iframe" undefined  for \<iframe src="about:blank">\</iframe>\
-end tag for "ul" which is not finished \<ul id="tabs" class="fl-tabs fl-tabs-left">\</ul> – doesn't like that there are no children \<li>s

We should switch to transitional.

        
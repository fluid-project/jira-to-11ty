---json
{
  "title": "FLUID-5712",
  "summary": "Create a helper which adds link-external class to links with http:// preceding it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2015-07-21T09:56:37.726-0400",
  "updated": "2015-12-14T08:24:42.923-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Design Handbooks",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-12-14T08:24:42.920-0500",
      "body": "Duplicate of <https://issues.fluidproject.org/browse/FLUID-5773>\n"
    }
  ]
}
---
Create a helper function which takes a link with "http://" in markdown and apply the class ".link-external" to it when generating output.

For example:\
(Link 1)<http://www.example.com> = \<a href="[http://www.example.com](http://www.example.com/)" class="link-external">Link1\</a>\
(Link 2)[/foo.html](/foo.html) = \<a href="/foo.html">Link 2\</a>

        
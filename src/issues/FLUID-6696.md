---json
{
  "title": "FLUID-6696",
  "summary": "Table of Contents toggle initially has no effect if TOC container has display: none style",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2021-11-01T13:21:22.514-0400",
  "updated": "2024-07-22T10:35:08.206-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-11-02T08:35:25.660-0400",
      "body": "Originally mentioned in <https://github.com/inclusive-design/guide.inclusivedesign.ca/pull/87#issuecomment-956305695>\n"
    }
  ]
}
---
If the flc-toc-tocContainer has a style display:none in its CSS, the UIO Table of Contents adjuster requires toggling-on-off-on in order for the table of contents to appear.

To a user, this might make TOC appear broken as it has no perceivable effect the first time it is toggled to ON.

To reproduce:\
1\. Go to any website with UI Options. \
2\. Reset preferences and reload the site\
3\. Using the debugger, add a style of display: none to the flc-toc-tocContainer.\
4\. Set the Table of Contents adjuster to ON.\
5\. Notice how the Table of Contents does not appear when it should be visible.\
6\. Turn Table of Contents adjuster to OFF then ON again. Notice how the Table of Contents is now visible as expected.

        
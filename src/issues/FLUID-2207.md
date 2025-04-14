---json
{
  "title": "FLUID-2207",
  "summary": "Inline edit field throws a JScript error when pressing 'esc': using IE 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-02-09T10:04:27.000-0500",
  "updated": "2009-02-10T08:56:49.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1145/",
      "key": "FLUID-1145",
      "summary": "Pressing the 'esc' key, while in an inline edit field, will erase the content; using IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-10T08:56:49.000-0500",
      "body": "Appears to have been resolved with fix for <https://fluidproject.atlassian.net/browse/FLUID-1145#icft=FLUID-1145>\n\nTested using&#x20;\n\nIE 7 (Win Vista)\n"
    }
  ]
}
---
Inline edit field throws a JScript error when pressing 'esc'. This only seems to happen on the uPortal mock-up page

Steps to reproduce:

1\) Open the uPortal mock-up page\
<http://build.fluidproject.org/fluid/sample-code/shared/portal/portal.html#>

2\) In the "Bookmarks Portlet" click "Default folder behavior" to activate the inline edit field

3\) Press the 'esc' key&#x20;

Notice that a JScript error is thrown

object expected

(line 446 of portal.html)&#x20;

        
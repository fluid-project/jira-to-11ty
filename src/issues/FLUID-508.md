---json
{
  "title": "FLUID-508",
  "summary": "OSDPL: Tweak styling  of OSDPL site and check cross browser behaviour",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-04-15T14:30:35.000-0400",
  "updated": "2008-08-20T10:15:22.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-598/",
      "key": "FLUID-598",
      "summary": "OSDPL: Left sidebar hover for parent menu links bleeds into Left padding"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-599/",
      "key": "FLUID-599",
      "summary": "OSDPL Styling: Enlarging text size on IE and FF creates unexpected results."
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-508/Fluid-508-FF2.JPG",
      "filename": "Fluid-508-FF2.JPG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-508/Fluid-508-IE7.JPG",
      "filename": "Fluid-508-IE7.JPG"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-04-30T15:11:16.000-0400",
      "body": "Enlarged font size in FF2.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-30T15:11:33.000-0400",
      "body": "Enlarged font size in IE7.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-30T15:15:42.000-0400",
      "body": "Did a quick test in IE7 and FF2. (See attached images)\n\nIn FF2 enlarging font size causes overlapping of text. Div containers do not scale accordingly (i.e. the left sidebar stays a fixed width).\n\nIn IE7, behaviour is a little better. Sidebar div scales with font size, but still some overlapping text at the extremes.\n\nSuggested Task: Don't make the div containers fixed width?\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-05-13T18:50:20.000-0400",
      "body": "There are some issues with tables being too large for small screens, such as this one: <http://127.0.0.1/drupal-5.7/admin/settings/taxonomy-breadcrumb>, which I hope can be fixed as part of this task.\n\nThere is also an issue with the underlines on links which have children under them (e.g. \"Administer\", \"UI Design Patterns\") having underlines that extend beyond the text into the left padding. It is appearing for me on the Mac in both Safari & Firefox.\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2008-08-05T16:36:04.000-0400",
      "body": "futuretask\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-08-20T10:15:22.000-0400",
      "body": "Tasks being covered by other Jiras. Closing.\n"
    }
  ]
}
---
[http://ui-designpatterns.org](http://ui-designpatterns.org/)

tasks:

* spacing issues
* make header smaller & header text darker
* check out text resizing issues in Firefox and IE
* check cross-browser behaviour.

CONTACT: Allison (abloodworth\@berkeley.edu) or Jonathan (jonathan.hung\@utoronto.ca) to help out with this task--thanks!

        
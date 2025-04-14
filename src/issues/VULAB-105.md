---json
{
  "title": "VULAB-105",
  "summary": "RASCAL JavaScript should not use embedded handlers in the HTML markup, and should use \"vulab\" namespace instead of globals.",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "David Makalsky",
  "reporter": "Colin Clark",
  "date": "2008-12-01T16:22:17.000-0500",
  "updated": "2008-12-01T18:00:26.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "RASCAL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2008-12-01T16:23:49.000-0500",
      "body": "vulab9\n"
    },
    {
      "author": "David Makalsky",
      "date": "2008-12-01T18:00:26.000-0500",
      "body": "Fixing in <https://fluidproject.atlassian.net/browse/VULAB-108#icft=VULAB-108>\n"
    }
  ]
}
---
I'd suggest you move your JavaScript code out of onclick handlers in the HTML and into your rascal.js file, binding event handlers unobtrusively. A toolkit like jQuery\
will simplify this for you a lot. I'd also suggest you keep the functions in rascal.js out of the global namespace to avoid collisions. All easy fixes, and there's tons of documentation in the Fluid wiki to help you with it:

<http://wiki.fluidproject.org/display/fluid/DHTML+Developer+Checklist>\
<http://wiki.fluidproject.org/display/fluid/Fearless+JavaScript+Workshop>

        
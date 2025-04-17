---json
{
  "title": "FLOE-499",
  "summary": "Add comments to code and similar about how to visually style chart elements",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2017-03-06T13:48:29.115-0500",
  "updated": "2017-03-06T13:48:29.115-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Cindy Li's recent experience with the QI dashboard has shown that we need more clarity about how to visually style charts.

Specifically, the issue that we saw:

1\) The chart components themselves accept directives in many places about colour, opacity, etc - this results in directives on the SVG elements themselves\
2\) In modern browsers, SVG elements also respond to CSS syntax (<https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS>), which will override anything set on the element itself. This matches the standard behaviour of CSS as applied to HTML element attributes that also set visual presentation (but no one does that these days, we hope).

In practice, this is confusing because the component configuration suggests that it should be done there, but it may in practice be overridden by an external style sheet, as is the case in the QI dashboard.&#x20;

At minimum, we need to have some comments in the code in appropriate places so that an implementor has more clarity about this behaviour. The README should also be updated with  commentary to this effect.

Other thoughts for longer term:

* we may want to remove (where possible) any code that sets colour, stroke or similar on the SVG element, make sure all elements have good CSS classes, and advise the use of CSS throughout.

- where it is necessary that colours or similar be programatically determined (as for automatic colour scales), these should perhaps be implemented using inline CSS on the element.

* a key question to answer is whether all SVG visual elements (or at least the ones we are concerned about commonly such as stroke, color and opacity) are controllable through CSS in current browsers.

        
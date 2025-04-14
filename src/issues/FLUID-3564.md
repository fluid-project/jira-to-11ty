---json
{
  "title": "FLUID-3564",
  "summary": "Progress demo: improve contrast",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Alison Benjamin",
  "date": "2010-03-30T14:45:41.000-0400",
  "updated": "2014-03-03T12:05:40.029-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:09:38.699-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-12T09:41:14.374-0400",
      "body": "New progress demo for Infusion 1.3 is WCAG 2 AA and AAA compliant except for the disabled Submit button which doesn't have enough contrast. Since the button is disabled and low contrast by design, I suggest this bug is sufficiently addressed.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-12T10:28:04.723-0400",
      "body": "Contrast requirement not required for inactive UI elements. See: <http://508-255-refresh.trace.wisc.edu/content/5042-text-and-images-text-contrast-ratio>\n\nThis bug can be closed.\n"
    }
  ]
}
---
a11y

In this demo @ <http://build.fluidproject.org/infusion/demos/progress/demo.html>

According to the WebAIM contrast checker (<http://webaim.org/resources/contrastchecker/>), the current contrast ratio of the text between foreground colour (FFFFFF) and background color (5678C5) on the progress text (the text label that says e.g. "39%") is not sufficient.&#x20;

Maybe just change the background color in the progress-pop-up class to fix this.&#x20;

        
---json
{
  "title": "FLUID-5870",
  "summary": "Reorderer demo failures on IE 11",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Antranig Basman",
  "date": "2016-03-04T14:33:52.629-0500",
  "updated": "2024-07-23T11:18:44.740-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 11\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T11:18:44.558-0400",
      "body": "Could not reproduce with MS Edge 126 on macOS 14.5, and Internet Explorer is no longer supported.&#x20;\n\nWith MS Edge now being based off of Chromium,@@Antranig Basman your wish mostly came true.\n"
    }
  ]
}
---
This was originally reported as part of the fixes for FLUID-5821 on pull request <https://github.com/fluid-project/infusion/pull/670> . When the keyboard is used to circulate the letter D in /demos/reorderer/gridReorderer/ clockwise and anticlockwise in the bottom right 4 squares, the bottom right letter will go missing and the dev tools will crash if they are open.

This issue has been difficult to reliably reproduce. Some failing configurations are with IE11 on Windows 10, some passing configuration are with IE11 on Windows 7, with ambiguous results with Edge on Windows 10. I (amb26) have been unable to reproduce the issue at all, although on Edge on Windows 10 I can observe what looks like a separate problem, that if the active element is dragged out of the square (e.g. ctrl-right when at the right edge of the square), the entire page will refresh rather than the noop which we receive on other platforms.

If only Microsoft would simply give up their efforts to produce a browser and stop plaguing the rest of us.&#x20;

        
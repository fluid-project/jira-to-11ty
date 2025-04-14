---json
{
  "title": "FLUID-6653",
  "summary": "Tab focus doesn't cause offscreen elements to scroll into view",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-06T08:17:14.687-0400",
  "updated": "2021-07-06T08:17:37.963-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Safari 14 (iPadOS 14.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-07-06T08:17:37.963-0400",
      "body": "This is likely an issue with keyboard navigation on iPadOS.\n"
    }
  ]
}
---
Steps to reproduce:

1. Open an instance of a full page UIO such as the [full page manual test](https://build-infusion.fluidproject.org/tests/manual-tests/framework/preferences/fullpage/).
2. Using an external keyboard (or keyboard cover) use the "tab" key to navigate through the adjusters
3. Notice that any adjuster offscreen is not scrolled into view when it gains focus.

        
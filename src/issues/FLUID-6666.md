---json
{
  "title": "FLUID-6666",
  "summary": "Both the old and new pager summary are announced by screen reader when page changed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-15T08:39:27.230-0400",
  "updated": "2021-07-15T08:39:27.230-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Safari 14.1.1 & VoiceOver (macOS 11.4)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The pager summary has the aria-relevant=all. This tells the screen reader to announce both the removed and added text. Causing both to be announced, for example:

* Viewing page 1. Showing records 1 - 20 of 164 items.
* Viewing page 2. Showing records 21 - 40 of 164 items.

Which is rather confusing, as at first it seems that the page didn't change. Setting aria-relevant to "text" (default) or "additions" may perform better.

Steps to reproduce:

1. Open the [Pager demo](https://build-infusion.fluidproject.org/demos/pager/)
2. With VoiceOver enabled click on a different page link
3. Noice that the the old page summary and new page summary are both announced.

        
---json
{
  "title": "FLUID-5779",
  "summary": "docs-template wraps single letters in topics sidebar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2015-09-29T15:27:27.069-0400",
  "updated": "2024-07-23T10:37:49.057-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T10:35:27.739-0400",
      "body": "Appears to no longer be an issue with the current site design. See: <https://handbook.floeproject.org/techniques/>&#x20;\n"
    }
  ]
}
---
* In the mobile layout, the line wrapping for “Inclusive EPUB 3” puts only the 3 on the second line, which makes it look strange.
* It's possible for a single letter to wrap and be on its own on a line.&#x20;

Example 1: in the ILDH, In the mobile layout the word “Introduction” is split across two lines with only the “n” being on the second line.&#x20;

Example 2: "Standardized" is also split across two lines.&#x20;

Example 3: Enlarge text size on a laptop sized browser window, on the side bar, 1, the one word title "methods" wraps into 2 parts;&#x20;

Example 4: The currently-selected flag (a vertical line) for the side menu item wraps into its own line. This doesn't happen with other side menu texts.

        
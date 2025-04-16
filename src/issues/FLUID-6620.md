---json
{
  "title": "FLUID-6620",
  "summary": "Text size and line height values are announced as percentages in Safari with VoiceOver",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Ned Zimmerman",
  "date": "2021-05-12T09:31:04.169-0400",
  "updated": "2021-05-13T16:37:46.248-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-05-12T16:02:19.621-0400",
      "body": "Ned Zimmerman found a related issue filed against webkit.\n\n<https://bugs.webkit.org/show_bug.cgi?id=221102>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-05-13T16:37:21.300-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1049> ) into the project repo at 39a1465e3b2fc2ab0346d072374c3248e5401264\n"
    }
  ]
}
---
On Firefox and Edge/Chrome (macOS 11), values for the line height and text size adjusters are announced by VoiceOver as 1, 1.1, etc. However in Safari, a value of 1 is announced as *33.3%*. Justin Obara theorized that this is the result of Safari performing a calculation based on `aria-valuemin`, `aria-valuemax` and `aria-valuenow`. The announced value should match the displayed value.

        
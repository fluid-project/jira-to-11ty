---json
{
  "title": "FLUID-3275",
  "summary": "In Safari, the download button blends into the background",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-10-09T11:21:20.000-0400",
  "updated": "2009-10-09T11:25:12.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3274/",
      "key": "FLUID-3274",
      "summary": "Download button is not visible: using Safari"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Because of the Safari input text resizing problem, the fss-text.css file is forcing a background color that is the same as the website color onto the button.

        
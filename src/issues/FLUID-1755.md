---json
{
  "title": "FLUID-1755",
  "summary": "cursor/avatar offset after scroll very large",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-10-30T14:48:24.000-0400",
  "updated": "2008-10-30T15:42:47.000-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Layout Reorderer"
  ],
  "environment": "IE5 IE7 (WinXP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-894/",
      "key": "FLUID-894",
      "summary": "Avatar moves offscreen and away from pointer, at screen edges; using IE"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Hold and drag an image or portlet below the viewport to force it to scroll. The more scroll the more offset between cursor and avatar, making avatar non visible.

        
---json
{
  "title": "FLUID-6660",
  "summary": "Improve the CSS positioning of right arrow for mobile (Android)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2021-07-07T11:02:18.264-0400",
  "updated": "2021-07-07T11:02:18.264-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Android 11\\\nChrome 91.0.4472.120\\\nFirefox 89.1.1\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6660/Screenshot_20210707-100220.png",
      "filename": "Screenshot_20210707-100220.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6660/Screenshot_20210707-100418.png",
      "filename": "Screenshot_20210707-100418.png"
    }
  ],
  "comments": []
}
---
The next (right) arrow on Prefs Framework on Android appears too close to right edge making it hard to select (especially if the phone has a protective case that wraps around the edge of the bezel). On initial rendering, the right arrow is visually clipped on the edge of the screen.

The CSS styling should be changed so that the arrow lays out properly across different devices, screen and font scaling.

To reproduce:\
1\. Open any Prefs Framework or UIO demo on build.fluidproject.org\
2\. Open the preferences panel.\
3\. notice the position of the Next arrow.

        
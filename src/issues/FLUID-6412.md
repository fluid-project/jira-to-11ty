---json
{
  "title": "FLUID-6412",
  "summary": "Orator highlighting not working in some cases",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-10-09T14:03:04.997-0400",
  "updated": "2020-07-02T16:41:55.691-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "Google Pixel 3\\\nAndroid 10\\\nChrome 77, Chrome 80\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6412/Screenshot_20191009-135005.png",
      "filename": "Screenshot_20191009-135005.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6412/Screenshot_20191009-135424.png",
      "filename": "Screenshot_20191009-135424.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6412/Screenshot_20191009-135453.png",
      "filename": "Screenshot_20191009-135453.png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-03-19T18:49:58.225-0400",
      "body": "Confirmed to be an issue in Chrome 80 on the same device, even after a factory reset.\n"
    }
  ]
}
---
in Chrome 77 on my phone (Pixel 3, Android 10), the highlighting is not present while the Orator is voicing.

**To reproduce:**

* Navigate to the Orator demo page: <https://build.fluidproject.org/infusion/demos/orator/>
* Click the Play button to begin self-voicing playback

**Expected:**\
Each word is highlighted as it is read aloud

**Actual:**\
No highlighting occurs

        
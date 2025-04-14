---json
{
  "title": "FLUID-6646",
  "summary": "Dropdown Inline Edit editable text field and help text improperly laid out on Chrome on Android",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2021-06-29T15:41:33.241-0400",
  "updated": "2021-06-29T15:42:41.480-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Android 11\\\nChrome 91.0.4472.120\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6646/Screenshot_20210629-152738.png",
      "filename": "Screenshot_20210629-152738.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6646/Screenshot_20210629-154113.png",
      "filename": "Screenshot_20210629-154113.png"
    }
  ],
  "comments": []
}
---
If the client screen is not sufficiently wide, the drop-down editable text field and help text improperly render.

To reproduce:\
1\. Run <https://build-infusion.fluidproject.org/tests/manual-tests/components/inlineEdit/dropdown/> in portrait orientation.\
2\. Select the editable drop-down.\
3\. Notice the editable field and help text appear in two different locations.

        
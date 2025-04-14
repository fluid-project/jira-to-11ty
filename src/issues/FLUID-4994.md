---json
{
  "title": "FLUID-4994",
  "summary": "Convert existing icons to font icons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2013-04-29T10:29:38.133-0400",
  "updated": "2015-06-26T10:08:04.481-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS",
    "Inline Edit",
    "Prefs Framework",
    "UI Options",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4934/",
      "key": "FLUID-4934",
      "summary": "Research the viability of using icon fonts in UI Options in order to simplify the styling process"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5034/",
      "key": "FLUID-5034"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4994/UIO Icon fonts (complete).zip",
      "filename": "UIO Icon fonts (complete).zip"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2013-05-06T14:10:31.467-0400",
      "body": "We discussed the issue of font icons a bit more in the channel today. Here is the transcript:\n\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-05-06>\n\nIn short, we decided:\n\n1\\. That we should not include any of IcoMoon's icons in Infusion, since we don't use them in any of our designs\\\n2\\. That we should create four separate icon fonts, one each for:\\\ni) UI Options\\\nii) Inline Edit\\\niii) Uploader\\\niv) the Fluid Skinning System (FSS)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.681-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:08.459-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
FLUID-4934 tasked us with researching the viability of using Font Icons in place of our traditional rasterized icons. We also discussed this on list and on the wiki.&#x20;

<http://lists.idrc.ocad.ca/pipermail/fluid-work/2013-April/009016.html>\
<http://wiki.fluidproject.org/display/fluid/Research+the+viability+of+using+icon+fonts+in+UI+Options>

The result of all of this was the decision to move to Font Icons. We should now look at replacing our existing rasterized icons with new font icons.

        
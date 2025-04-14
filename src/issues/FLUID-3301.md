---json
{
  "title": "FLUID-3301",
  "summary": "Selecting 'serif' from menu doesn't set font to serif",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2009-10-15T17:29:08.000-0400",
  "updated": "2011-05-24T11:19:29.585-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5) \\\nSafari 3.2 (Mac OS 10.4) \\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP) \\\nFF3, IE7, IE8 (Win Vista) \\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2801/",
      "key": "FLUID-2801",
      "summary": "UI Options displays \"Serif\" as the default font style even though the page defaults to a \"Sans-Serif\" font"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-04-21T09:34:21.835-0400",
      "body": "Fixed at git commit: 2c758f61c1a2355ba8a5\n\nSet \"arial\" as initial default value of font style, instead of \"serif\".\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-06T14:00:32.452-0400",
      "body": "This issue needs more considerations. Setting default to \"Arial\" fixes the issue because our demo pages happen to use \"Arial\" font. This fix seems likely introducing another bug that the user's pages are forced to be initialized with \"Arial\" font. The previous default, a empty string, makes more sense in this case. However, with an empty default font, the users have to supply whatever font they use into UIEnhancer defaults block, which may not be a ideal as well.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-05-06T15:03:40.063-0400",
      "body": "I believe the new designs for UI Options include a \"keep the page's original settings\" option in the various pull-downs: Something that can be selected  to indicated that the Enhancer shouldn't do anything that affects the font family. This should be the default setting when UI Options is first opened. The implementer wouldn't have to inform the Enhancer of what the default font is, since the default is \"whatever the page originally specifies.\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T12:42:44.910-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-24T11:19:29.584-0400",
      "body": "This issue is resolved with the new UI Options wireframe design. As Anastania mentioned, a \"default\" font value is introduced and it is the default selection on the font drop down list box. This value means leaving whatever on the user's page, which fits the current behaviour.\n"
    }
  ]
}
---
When bringing up the UI Options dialog for the first time, the Serif font, being the first font in the list, is "selected" (even though the user hasn't set a preference for serif).

If you pull the menu down and click on Serif, this still doesn't "set" the preference to Serif (presumably because the value of the control hasn't changed) and so the preview doesn't change, and if you save the settings, the site doesn't change.

If you select a different font, and then select serif, it works fine.

        
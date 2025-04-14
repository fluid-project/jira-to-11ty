---json
{
  "title": "FLUID-6339",
  "summary": "Expand range for adjusters to allow for decreasing size/spacing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-09-11T12:13:57.770-0400",
  "updated": "2018-09-12T12:26:05.580-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2018-09-12T12:26:01.148-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/932) has been merged into the project repo master branch at 016cc1ea1133dfaa9337321e83fa1de46be794df\n"
    }
  ]
}
---
The prefs framework includes preferences for text size, line space, and letter space. Currently the lowest value is the default/unchanged value. However, we should allow the user to decrease the size/spacing. This could be because the default size used on the site is too large, because of the font selected, and etc. 

 

Note for some values, like letter-spacing, decreasing the value can result in overlapping text. Caren mentioned that even if a lower value isn't used, it is still useful to help a user understand what the effects of changing the preference are.

        
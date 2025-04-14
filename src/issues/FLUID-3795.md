---json
{
  "title": "FLUID-3795",
  "summary": "UI Options - investigate design of high-contrast disabled UI elements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2010-10-13T09:57:19.362-0400",
  "updated": "2014-07-15T14:35:20.348-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
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
      "author": "Justin Obara",
      "date": "2014-07-15T14:35:20.348-0400",
      "body": "@@Dana and @@joanna vass perhaps you might have thoughts on this. It seems like something that is coming up for GPII work as well. <http://lists.gpii.net/pipermail/ux/2014-July/001121.html>\n"
    }
  ]
}
---
Conventional method to convey an inactive / disabled element is to reduce its contrast (i.e. "grey out"). However, to a high-contrast user, this styling is insufficient.

Investigate different methods of conveying an inactive element in high contrast (i.e. strike through, different borders etc.) and implement the option best suited to users (after some user testing).

        
---json
{
  "title": "FLUID-6679",
  "summary": "The text style option \"Times New Roman\" actually tries to set \"Georgia\".",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-08-05T11:16:41.852-0400",
  "updated": "2022-02-03T10:39:18.059-0500",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
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
      "author": "Caren Watkins",
      "date": "2021-08-05T11:29:41.892-0400",
      "body": "Classification could be: \\\nGeorgia (serif), Comic Sans (script), Arial (sans serif), Verdana (sans serif). Open Dyslexic is specialized and doesn't fit into the \"traditional\" classification system but I think that is ok, I would think it doesn't need a label\n\nReference resource re: type classification:\n\n<https://www.fonts.com/content/learning/fontology/level-1/type-anatomy/type-classifications> \n"
    }
  ]
}
---
Currently the text style option for the UIO mentions "Times New Roman" however, the actual implementation of the CSS to apply that options, set's Georgia as the preferred font-family ( <https://github.com/fluid-project/infusion/blob/9ffd91df3cd9eeea6255c998fd1ad19bced90e14/src/framework/preferences/css/sass/utils/_fonts.scss#L7> ).

The option and the preferred font in the implementation should match, either changing the name of the option or changing the fallback order in the CSS.

A suggestion from @@Caren Watkins is to also include some added information in the option e.g. Georgia (serif) to make it more clear for those making the choice. And Georgia is also a more legible font, so may make sense to change the option name instead of the implementation. 

See the [conversation](https://matrix.to/#/!CiNvDHGGdtIVCpYoGy:matrix.org/$H-KMuGnpAk1woo4g30q0MlTe0BY42xLAL2-eRSV8HQI?via=matrix.org) in the fluid-design matrix channel. 

        
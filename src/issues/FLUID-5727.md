---json
{
  "title": "FLUID-5727",
  "summary": "PrefsEditor.css is missing the \";\" at the end of the the src property for the @font-face style",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-07-29T10:41:41.969-0400",
  "updated": "2019-07-12T09:14:56.772-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Build Scripts",
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-08-22T10:10:09.164-0400",
      "body": "It appears that the \";\" is stripped out of the compressed version only. I could also not reproduce the case where an error or warning is thrown by a browser related to it.\n"
    }
  ]
}
---
The PrefsEditor.styl file does include a ";" at the end, but it seems that the generated file (PrefsEditor.css) is missing it. This is causing a CSS error.

in PrefsEditor.styl

@font-face {\
font-family: 'InfusionIcons';\
src: url('../fonts/InfusionIcons-PrefsEditor.ttf'),\
url('../fonts/InfusionIcons-PrefsEditor.eot');\
}

in PrefsEditor.css

@font-face {\
font-family: 'InfusionIcons';\
src: url("../fonts/InfusionIcons-PrefsEditor.ttf"), url("../fonts/InfusionIcons-PrefsEditor.eot")\
}

        
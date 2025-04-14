---json
{
  "title": "FLUID-5547",
  "summary": "When in contrast mode UIO hide / show buttons is missing right border and has a drop shadow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2014-11-06T16:57:02.010-0500",
  "updated": "2024-07-23T08:23:22.081-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T08:23:21.938-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
When in contrast mode, the drop shadow on the hide/show tab should be removed. However, removing the drop shadow reveals a missing right border on the buttons.

A possible fix would be to add the following CSS:

.fl-theme-bw .fl-prefsEditor-separatedPanel .fl-prefsEditor-buttons,\
.fl-theme-by .fl-prefsEditor-separatedPanel .fl-prefsEditor-buttons {\
box-shadow: inherit;\
border-left: 0.2rem solid #000;\
border-right: 0.2rem solid #000;\
border-bottom: 0.2rem solid #000;\
}\
.fl-theme-lgdg .fl-prefsEditor-separatedPanel .fl-prefsEditor-buttons{\
box-shadow: inherit;\
border-left: 0.2rem solid #bdbdbb;\
border-right: 0.2rem solid #bdbdbb;\
border-bottom: 0.2rem solid #bdbdbb;\
}\
.fl-theme-wb .fl-prefsEditor-separatedPanel .fl-prefsEditor-buttons{\
box-shadow: inherit;\
border-left: 0.2rem solid #fff;\
border-right: 0.2rem solid #fff;\
border-bottom: 0.2rem solid #fff;\
}\
.fl-theme-yb .fl-prefsEditor-separatedPanel .fl-prefsEditor-buttons{\
box-shadow: inherit;\
border-left: 0.2rem solid #FFFF00;\
border-right: 0.2rem solid #FFFF00;\
border-bottom: 0.2rem solid #FFFF00;\
}

        
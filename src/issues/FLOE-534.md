---json
{
  "title": "FLOE-534",
  "summary": "Responsive UIO display:block conflicts with a11y theme display:flex",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Eloisa Guerrero",
  "date": "2018-01-29T13:35:31.313-0500",
  "updated": "2018-01-29T14:17:39.830-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UIO WordPress plugin"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2018-01-29T13:44:02.751-0500",
      "body": "In UIO's SeparatedPanelPrefsEditor.css see the section where wideScreen is display: block:\n\n```java\n@media screen and (min-width: 40em) {\r\n  .fl-prefsEditor-separatedPanel {\r\n    display: block;\r\n  }\r\n  .fl-prefsEditor-separatedPanel .fl-panelBar {\r\n    box-shadow: none;\r\n    font-size: 1rem;\r\n  }\r\n  .fl-prefsEditor-separatedPanel .fl-panelBar.fl-panelBar-smallScreen {\r\n    display: none;\r\n  }\r\n  .fl-prefsEditor-separatedPanel .fl-panelBar.fl-panelBar-wideScreen {\r\n    display: block;\r\n  }\n```\n\n \n\nWhereas in the a11y theme's foundation-flex.css display is flex:\n\n```java\n.row {\r\n max-width:75rem;\r\n margin-right:auto;\r\n margin-left:auto;\r\n display:-webkit-box;\r\n display:-ms-flexbox;\r\n display:flex;\r\n -ms-flex-flow:row wrap;\r\n flex-flow:row wrap\r\n}\n```\n"
    }
  ]
}
---
Flexbox assigns class row to display: flex, but this conflicts with the UIO wordpress plugin which is displayed as block. This causes UIO to appear side-by-side the a11y row and makes them look like they are two columns in one row.

        
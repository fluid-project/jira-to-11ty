---json
{
  "title": "SJRK-80",
  "summary": "Icons and logos do not adapt to UIO high contrast",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Alan Harnum",
  "date": "2018-04-17T10:54:41.768-0400",
  "updated": "2019-06-12T11:01:04.621-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-12-05T15:51:22.235-0500",
      "body": "Consider switching to icon fonts to make this less painful\n"
    },
    {
      "author": "Simon Bates",
      "date": "2019-01-11T14:31:36.377-0500",
      "body": "I've changed this issue from an \"Improvement\" to a \"Bug\", as it's possible for icons to disappear if certain UIO high contrast settings are selected. For example, selecting the White On Black UIO high contrast setting will cause the Audio icon to disappear.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2019-01-11T14:43:06.464-0500",
      "body": "I see in the current implementation, we use PNG images pulled in with CSS background-image.\n\nThis approach would need alternate assets, as described in the issue title/description.\n\nAn alternative approach is to use inline SVGs and use CSS to apply the high contrast colours. With this approach, we don't need to maintain separate assets – we style the SVGs directly.\n\nFor example, for the Cities project:\n\n<https://github.com/inclusive-design/website-cities/blob/cc5a21e9b4c6ca3e2dcea36540823bb57e9c3b82/static/css/style.css#L1170-L1195>\n\nWhen a UIO high contrast theme is applied, UIO adds an appropriate class to the document body, such as \"fl-theme-wb\" for White On Black. We can then use that class to apply styles to the SVGs.\n\nAs mentioned above, for this to work, the SVGs need to be inline in the document and cannot be included as separate images.\n\nFor Cities, I used Hugo's partials support to inject the SVGs into the document (and keep them in their own separate file):\n\n```java\n<span role=\"img\" aria-label=\"Perspective\">{{ partial \"perspective.svg\" . }}</span>\n```\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-01-13T08:58:25.406-0500",
      "body": "Another option would be to use [infusion-icons](https://github.com/fluid-project/infusion-icons) to setup a similar thing using icon fonts. Which would also allow for setting the colours via CSS.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2019-01-17T10:58:09.351-0500",
      "body": "Renamed to \"Icons and logos do not adapt to UIO high contrast\".\n\nSteps to reproduce:\n\n* Set UIO high contrast theme Black On White\n\nExpect:\n\n* Icons and logos to adapt\n\nActual:\n\n* The icons stay as is (black on green)\n* The logos in the footer disappear (white on white)\n\n \n"
    }
  ]
}
---
We should have contrast theme versions of all the assets for the various UIO contrast themes, similar to what we do for the Oak and IDRC logos on <https://sojustrepairit.org/>

        
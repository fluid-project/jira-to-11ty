---json
{
  "title": "FLUID-458",
  "summary": "Move location not consistently indicated on uPortal test page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2008-04-04T17:24:34.000-0400",
  "updated": "2008-11-13T13:28:13.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP,  IE7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-407/",
      "key": "FLUID-407",
      "summary": "Nested drop targets sometimes display the drop marker in the wrong place."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T10:47:18.000-0400",
      "body": "Duplicates <https://fluidproject.atlassian.net/browse/FLUID-407#icft=FLUID-407>, which we're working on.\n"
    }
  ]
}
---
When moving portals on the uPortal test page (<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/uportal3-newskin/new_theme_sample_html.htm>) the orange coloured bar denoting the location of the drop does not always appear (although the drop will cause the desired move).

        
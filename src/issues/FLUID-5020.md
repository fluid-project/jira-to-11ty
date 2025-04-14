---json
{
  "title": "FLUID-5020",
  "summary": "Allow html in show/hide tab",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2013-05-14T10:10:12.871-0400",
  "updated": "2014-04-04T15:39:28.964-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Sliding Panel"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4410/",
      "key": "FLUID-4410",
      "summary": "Allow dynamic styling of fat panel \"show/hide\" button"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-18T13:16:21.895-0400",
      "body": "Submitted pull request <https://github.com/fluid-project/infusion/pull/419>\n\nProvided a new selector for the label. This allows the toggleButton and it's label to be separate elements. Allowing for more complex markup in the toggle button.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-26T16:12:55.264-0400",
      "body": "pull request merged at 861d635d56c7546c764d23cf40e7f96e85516b17\n"
    }
  ]
}
---
In uiOptions/js/SlidingPanel.js , the showText and hideText are text only and will not allow for html. We'd like to add a font icon span to this tab, ie. \<span class="fl-icon-preferences">\</span> , to appear to the left of the text.

        
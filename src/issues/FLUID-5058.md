---json
{
  "title": "FLUID-5058",
  "summary": "Full page with preview demo: The stored prefereces are not applied to the preview window ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Cindy Li",
  "date": "2013-06-19T09:16:43.539-0400",
  "updated": "2013-06-27T13:25:23.651-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5058/FLUID-5058.jpeg",
      "filename": "FLUID-5058.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-06-27T13:25:23.645-0400",
      "body": "Merge pull request ( <https://github.com/fluid-project/infusion/pull/347> ) into the project repo at ebaa5277b04094de40091ecf3b33385d53791648\n"
    }
  ]
}
---
1\. Open the full page with preview demo: <http://build.fluidproject.org/infusion/tests/manual-tests/html/uiOptionsFullWithPreview.html>\
2\. Adjust some preference settings;\
3\. Click "Save and Apply";\
4\. Refresh the page.

After the page refresh, the preset preferences are only applied to the main page not the preview window.

        
---json
{
  "title": "FLUID-3347",
  "summary": "handle local vs dynamic data better",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-11-02T15:30:25.000-0500",
  "updated": "2009-11-25T11:17:17.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-11-02T15:35:35.000-0500",
      "body": "Took this one step further (with some advice from Michelle) and tested for fluid.customBuild.dependencies. If it exists then use it, otherwise, use the local data.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-11-25T11:17:17.000-0500",
      "body": "This issue was essentially totally removed with <https://fluidproject.atlassian.net/browse/FLUID-3349#icft=FLUID-3349>\n"
    }
  ]
}
---
Colin Clark says "Taking a look at the HTML file, I'm reminded that there are better strategies for switching between local testing data and the real thing, instead of commenting out code. Typically we check the window\.location property to determine if the page is being hosted at a file:// URL instead of http\://. In that case, just load the test data automatically."

The html file being referred to is infusion-builder/html/CustomBuild.html around line 98, where the data is loaded from a file vs dynamically assembled from the json files. I've commented out the code for each usage. Find a better way to do this.

        
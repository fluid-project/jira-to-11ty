---json
{
  "title": "FLUID-6532",
  "summary": "Center UIO Panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Teddy",
  "reporter": "Teddy",
  "date": "2020-07-16T23:27:27.180-0400",
  "updated": "2020-07-20T09:25:22.390-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6532/Screen Shot 2020-07-17 at 12.46.38 PM.png",
      "filename": "Screen Shot 2020-07-17 at 12.46.38 PM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6532/Screen Shot 2020-07-17 at 12.48.03 PM.png",
      "filename": "Screen Shot 2020-07-17 at 12.48.03 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-07-17T11:36:24.705-0400",
      "body": "@@Teddy, could you please update this JIRA with:&#x20;\n\n1\\. Talk about this ticket is created based on the suggestion from @@Lisa Liskovoi and Uttara at building the WeCount website;\\\n2\\. steps to reproduce the issue; \\\n3\\. screenshots of effects before and after applying your change.\n\nThanks.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-20T09:25:18.165-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1003> ) into the project repo at de7d4862533c4be46f576b8438849364aeee853d\n"
    }
  ]
}
---
The UIO panel is aligned to the left of the screen and it would look better if it was centred. At yesterday's We Count check-in [Lisa Liskovoi](https://issues.fluidproject.org/secure/ViewProfile.jspa?name=lliskovoi) and Uttara confirmed centring the UIO panel would look best. You can not see the error clearly on screen sizes with a smaller width but with a screen width greater than 3000px it becomes obvious.

To reproduce this issue:

1. Go to <https://wecount.inclusivedesign.ca/>
2. Inspect page in responsive view
3. Click on the UIO tab at the top of the webpage (it has the text + show preference)
4. Edit the screen width to be greater than 3500px.
5. View error - UIO panel is aligned to the left of the screen

Screenshots of the effects before and after correcting the error are attached below. The first image marked with a red rectangle is before the change. The second image is after applying the proper corrections.

        
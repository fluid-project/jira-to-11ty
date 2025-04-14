---json
{
  "title": "FLUID-6722",
  "summary": "Pager tooltip shows wrong data range after sorting by column",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2022-03-16T07:53:26.559-0400",
  "updated": "2022-03-16T07:53:26.559-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
After sorting the paged table by a column, the data ranges in the page links tooltips is not updated until one of them is clicked.

Steps to reproduce:

1. Open the [pager demo](https://build-infusion.fluidproject.org/demos/pager/)
2. Hover or place focus on the link for page 3, take note of the data range displayed in the tooltip
3. Click on one of the table column headers to sort by the column
4. Hover or place focus back on the link for page 3, notice the same data range is displayed in the tooltip
5. Click on the page link
6. Notice that the data does not match the range
7. Hovering or placing focus on the page links now will display the correct data ranges in the tooltips

        
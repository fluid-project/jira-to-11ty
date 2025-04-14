---json
{
  "title": "FLUID-5590",
  "summary": "UI Options does not work if website deployed to non-root path",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2015-01-21T10:54:54.520-0500",
  "updated": "2024-07-22T10:35:31.810-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5588/",
      "key": "FLUID-5588",
      "summary": "Fluid docpad build process should handle relative URLs / paths"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6477/",
      "key": "FLUID-6477"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-03-12T08:42:01.423-0400",
      "body": "Merged PR (. ) into the project repo at 96771c3fddecad7ec1cca0375757f527f1e5ad64\n\nThis PR addresses an issue where the scripts were not loading due to the relative paths supplied to the news item page.\n\nHowever, this PR doesn't address the case when the site is deployed a different level than root. \n"
    }
  ]
}
---
If the Fluid website is deployed to a non-root path, UI options will not work. This error is caused by the calculation of the paths in uio.js which uses window.location.origin to calculate the absolute path.

The absolute path is needed so the news content in the /news/ directory can use UIO.

uio.js should use relative path instead of absolute path.

        
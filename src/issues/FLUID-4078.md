---json
{
  "title": "FLUID-4078",
  "summary": "The HTML5 Upload strategy incorrectly interprets the fileSizeLimit option in megabytes instead of kilobytes.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Colin Clark",
  "date": "2011-02-17T18:15:44.194-0500",
  "updated": "2011-03-14T16:26:54.267-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-02-24T11:29:40.385-0500",
      "body": "A poor miscalculation on my part with converting file size limits between strategies.  The fileSizeLimit has been correctly converted from kilobytes to bytes in the HTML5 strategy.  The legacyBrowserLimit value has also been converted from MB to bytes.  The unit tests have been adjusted to reflect the bug fix.  We should be using the same units across the entire HTML5 strategy to avoid confusion in the future.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-02-24T11:54:14.616-0500",
      "body": "Re-opening to change the workflow to \"needs commit\".   The workflow button is disabled once the issue is resolved\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-03-14T16:24:50.462-0400",
      "body": "Reviewed and pushed into the project repository.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-03-14T16:26:25.673-0400",
      "body": "I need to re-open this JIRA so that I can resolve it and properly close it.\n"
    }
  ]
}
---
At the moment, the HTML5 strategy in the Uploader assumes the queueSettings.fileSizeLimit option is specified in megabytes instead of kilobytes. As a result, it multiplies the value by 1000000 when converting to bytes, causing the fileSizeLimit to be interpreted as 1000x larger than it should be. The current contract for the Upload clearly specifies that this value should be in KB, not MB

This should be fixed by either changing the contract to take MB (and updating the Flash strategy accordingly), or by correctly converting kilobytes in the HTML5 strategy.

        
---json
{
  "title": "FLUID-496",
  "summary": "File Upload: Re-factor for Uploader in a DHTML dialog scenario",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-04-14T09:33:40.000-0400",
  "updated": "2011-02-22T16:27:44.077-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-683/",
      "key": "FLUID-683",
      "summary": "File Upload: Implement new progress designs"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-683/",
      "key": "FLUID-683"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-05-27T12:31:17.000-0400",
      "body": "Most of the work for the dialog is done, except for the new progress indicators. Still using the old progress from the inline version.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-05-30T18:53:13.000-0400",
      "body": "Created new JIRA for the progress indicators, which then closes this bug\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:44.076-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Add the jQuery UI dialog code and re-factor uploader to be able to be presented inside a DHTML pop-up dialog.

Also use this as a chance to experiment with loading the uploader code on-demand with the AJAX which brings in the dialog.&#x20;

dev-iteration34

        
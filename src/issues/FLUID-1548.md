---json
{
  "title": "FLUID-1548",
  "summary": "Wiki demos are broken. Javascript references need to be updated.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Jonathan Hung",
  "date": "2008-09-11T13:50:46.000-0400",
  "updated": "2008-09-30T11:12:40.000-0400",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-16T14:35:41.000-0400",
      "body": "The demos have been updated to the latest API, and now reference the Fluid-all.js file on the server instead of an attached HTML file.\n"
    }
  ]
}
---
The demos on the wiki are broken. The attached fluid-include.html files reference files that are no longer available.\
I have attempted to correct this by uploading updated fluid-include.html files, but it did not work.&#x20;

Also maintaining multiple fluid-include.html files is problematic. We can upload a single HTML file to "Downloads and Demos" and reference that file for all demos.

dev-iteration43

        
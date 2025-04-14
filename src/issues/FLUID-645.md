---json
{
  "title": "FLUID-645",
  "summary": "File Upload: IE: contents of dialog area display before dialog displays and linger after dialog dismisses",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-27T12:29:52.000-0400",
  "updated": "2008-12-02T15:31:51.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "XPs2 IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-05-30T18:43:02.000-0400",
      "body": "This has been fixed by hiding the Uploader and then showing it after the dialog initializes.\\\nAlso hiding the Uploader just before the dialog hides.\n"
    }
  ]
}
---
In the File Uploader dialog scenario: \
When the page refreshes the contents of the dialog briefly display and then disappear.\
After the Cancel button is clicked the contents of the dialog are briefly displayed after the dialog UI vanishes.

This is probably a jQuery UI Dialog bug but we can easily write around it with CSS. &#x20;

        
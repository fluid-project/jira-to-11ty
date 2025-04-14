---json
{
  "title": "FLUID-1707",
  "summary": "Uploader 2: Add support for various queue states to the Uploader and UploadManagers.",
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
  "reporter": "Colin Clark",
  "date": "2008-10-25T14:29:35.000-0400",
  "updated": "2011-02-22T16:27:49.726-0500",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-01-08T12:56:23.000-0500",
      "body": "This was done in the 0.6. The way we set state is vastly simplified. Certain events set state based mostly on the type of event has happened, only occasionally having to check the \"state\" of the model to determine what the \"state\" of the view will be.&#x20;\n\nAlso there is not an overarching state class for the component anymore. The code now explicitly changes the classes and html attributes of the different elements in the component depending on the life-cycle of the Uploader.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.722-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---

        
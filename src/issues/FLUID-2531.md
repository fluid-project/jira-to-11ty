---json
{
  "title": "FLUID-2531",
  "summary": "Verify dependencies for Undo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Michelle D'Souza",
  "date": "2009-04-06T11:16:00.000-0400",
  "updated": "2011-01-21T09:21:28.505-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-07T16:10:20.000-0400",
      "body": "These dependencies are correct \"by eye\" and the file is correctly formatted - I have used it to create a custom build file.&#x20;\n\nHowever, there are a interesting issue with \"Undo\" - firstly, it is not an independent component, and so the correctness of its dependencies could not actually be verified without reference to a component which had even more dependencies - such as InlineEdit for example.\n\nFurther, there is an issue that the \"true\" dependencies of Undo are actually smaller than we can currently express - the smallest unit we have is \"framework\", whereas as it stands, Undo seems to depend only on the single file Fluid.js. However, it's unclear whether allowing this reduced dependency profile to be expressed would be very useful - certainly not at present, when we have only one framework client.\n"
    }
  ]
}
---

        
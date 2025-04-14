---json
{
  "title": "FLUID-533",
  "summary": "Clicking Browse causes an error.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2008-04-25T11:26:47.000-0400",
  "updated": "2008-04-28T13:22:53.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "WinXP FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T13:22:53.000-0400",
      "body": "The SWF plugin needs a special setting in order to work with local files. There are instructions in the readme accompanying the sample describing how to do this It is only an issue for developers working with local files - it shouldn't affect users working with a served-up application.\n"
    }
  ]
}
---
Clicking on the Browse button to select files to upload causes an error:

"\[Exception... "'Invalid function name' when calling method: \[nsIDOMEventListener::handleEvent]"  nsresult: "0x8057001e (NS\_ERROR\_XPC\_JS\_THREW\_STRING)"  location: "\<unknown>"  data: no]

Line 0"

        
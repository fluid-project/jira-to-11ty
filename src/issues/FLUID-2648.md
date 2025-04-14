---json
{
  "title": "FLUID-2648",
  "summary": "modify json file format",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-05-05T11:41:01.000-0400",
  "updated": "2009-05-05T21:40:00.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2648/FLUID-2648-1",
      "filename": "FLUID-2648-1"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2648/FLUID-2648-2",
      "filename": "FLUID-2648-2"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2648/FLUID-2648and2639-1",
      "filename": "FLUID-2648and2639-1"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-05-05T12:16:23.000-0400",
      "body": "This patch resolves both this issue 2648 and 2639.\n\nWould like reviewers to check cssFiles order in particular since it was difficult to be sure if I'd gotten that right. Jacob to check FSS dependencies in particular and ensure they are in the appropriate order.\n\nAlso please feel free to alter name and long descriptions if you think your favourite component isn't being represented fully. This was just a first attempt.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-05T14:14:08.000-0400",
      "body": "revised patch to include only changes to name and description\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-05T15:08:31.000-0400",
      "body": "removed trailing comma from fss file\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-05T21:40:00.000-0400",
      "body": "Checked this. The files are as expected.\n"
    }
  ]
}
---
Alter the css files to add name and description (required for front end of build tool)

{"ModuleName": {\
"name": "Verbose Module Name",\
"description" : "Verbose Module description",\
"files": \["File.js", "File.js"],\
"dependencies": \["ModuleName", "ModuleName"]\
"cssFiles" : \["fss-layout.css", "fss-text.css"]\
}}

        
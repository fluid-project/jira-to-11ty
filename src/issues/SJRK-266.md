---json
{
  "title": "SJRK-266",
  "summary": "Add separate config files for Stories sites",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-08-02T16:15:29.883-0400",
  "updated": "2020-06-02T16:36:22.614-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-343/",
      "key": "SJRK-343"
    }
  ],
  "attachments": [],
  "comments": []
}
---
In order to reduce the work required on changes to the config file format, add different configuration files to the project which will be copied to the web app container as part of the build process. I.e. one file for the production site, one for the development site. These could both be derivative of a common config file in order to reduce duplication.

Alongside this, the relevant CI jobs should be updated to add a new environment variable that tells the project which config file to load, and likewise the server code should be updated to use that env var.

        
---json
{
  "title": "FLUID-3856",
  "summary": "The Uploader demo in the demo portal is hopelessly broken, because was cut and pasted from old Uploader markup.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Jess Mitchell",
  "date": "2010-11-18T15:53:37.454-0500",
  "updated": "2010-11-19T10:44:24.466-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-11-18T17:57:17.992-0500",
      "body": "I've committed a fix for this at r10292. Michelle, can you verify that it's working?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-19T09:18:27.218-0500",
      "body": "It works - and thankfully with lots of the duplicated code removed. 🙂\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T10:44:24.461-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    }
  ]
}
---
The Uploader demo, running at <http://build.fluidproject.org/infusion/demos/uploader/demo.html> is broken. This is because it's out of date with the definitive markup for the Uploader located at <http://build.fluidproject.org/incubator/uploader/FLUID-3722/src/webapp/components/uploader/html/Uploader.html>.

Instead of cutting and pasting, the demo portal should load the Uploader's template via AJAX so that it remains fully up to date all the time.

        
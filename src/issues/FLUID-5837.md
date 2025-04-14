---json
{
  "title": "FLUID-5837",
  "summary": "Add the new \"GPII preference syncing\" panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2016-01-08T16:27:34.810-0500",
  "updated": "2024-07-23T10:47:38.060-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5853/",
      "key": "FLUID-5853"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-02-23T14:50:50.834-0500",
      "body": "In progress work is at <https://github.com/cindyli/infusion/tree/FLUID-5837>&#x20;\n\nThe work so far also covers some of the import functionality (<https://issues.fluidproject.org/browse/FLUID-5863>) and the export functionality (<https://issues.fluidproject.org/browse/FLUID-5864>).\n\nThis branch contains the implementation of the GPII syncing panel, part of the import and export functionality. The parts that haven't been included:\n\n1\\. Since the server side for this integration is at the planning stage, the server end points for sending ajax requests are not ready, all the ajax requests are not in place;\\\nThe notes from the server planning meeting: <https://docs.google.com/document/d/1Iccka4z7utljRqIN9w6ivzCNA6I_Igx9gI9WRUvr7v8/edit>\n\nAnd, Simon’s diagram: <https://docs.google.com/presentation/d/118yfJ_1pdQVcWx_ol4TChjvzx3KZFk5F9eoudt1099s/edit#slide=id.p>\n\n2\\. The export button on the button bar besides the reset and show/hide buttons are always displayed. It doesn't disappear based on the detection of the local UIO adjustments;\n\n3\\. The message boxes and dialogs required during the import and export processes are being re-designed and not implemented;\n\n4\\. The code for the import and export processes is roughed out but there are many TODO comments in the code due to the lack of 1 & 3 listed above.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T10:47:37.770-0400",
      "body": "GPII is no longer supported\n"
    }
  ]
}
---
The wireframe for UIO and GPII integration: <https://www.dropbox.com/s/v4pn0e4pzy1e4x4/uioptions%20GPII%20integration.pdf?dl=0>

* Add tooltips for import and export buttons
* Export button is disabled until adjustments have been made, and after new prefs have been stored

        
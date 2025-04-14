---json
{
  "title": "FLUID-3412",
  "summary": "add hidden span with component description for each module.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-04T14:46:49.000-0500",
  "updated": "2009-12-10T21:04:42.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-07T10:02:34.000-0500",
      "body": "because of the accessibility issue I think we should add this task to the Bug Parade Builder 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-08T13:38:17.000-0500",
      "body": "Altered the markup and js to add a hidden span to the checkbox label which contains the module description.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-09T15:03:17.000-0500",
      "body": "Re-opening to fix two issues:\\\n1\\) remove flc class on span..not needed\\\n2\\) programmatically add style from defaults block.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-09T15:36:04.000-0500",
      "body": "removed flc style where it shouldn't have been and added programmatic setting for the hidden style.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-10T21:04:42.000-0500",
      "body": "I've reviewed Laurel's change to the hard-baked class name for the hidden style and it looks good.\n"
    }
  ]
}
---
Jacob's redesign looks really great but unfortunately the screen readers do not read the module descriptions that are in the title tags of the labels. \
We need to add hidden spans in the labels to handle this.\
The current markup is:\
\<label title="The core of the Fluid Infusion framework. Required for all Fluid components" class="flc-customBuild-inputLabel" for="groups::module::moduleInput">Fluid Infusion Framework\</label>

New markup should be something like:\
\<label title="The core of the Fluid Infusion framework. Required for all Fluid components" class="flc-customBuild-inputLabel" for="groups::module::moduleInput">Fluid Infusion Framework\<span class="fl-offScreen-hidden">Fluid Infusion description\</span>\</label>

        
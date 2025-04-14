---json
{
  "title": "FLUID-2959",
  "summary": "The databound selection for a single select control, will output as an array initially and a string after the model is changed.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2009-06-18T10:59:33.000-0400",
  "updated": "2009-11-06T15:20:26.000-0500",
  "versions": [
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-06T15:20:26.000-0500",
      "body": "Tested this using the Renderer Demo, and can't seem to reproduce the issue.\n\n<http://build.fluidproject.org/infusion/demos/renderer/demo.html>\n"
    }
  ]
}
---
The databound selection for a single select control, will output as an array initially and a string after the model is changed.

For example:

if the model is &#x20;

{\
name: \["name1", "name2"],\
values: \["name1", "name2"],\
choice: \["name1"]\
}

After databinding and rendering, if you output the model the value of choice will be \["name1"]; however, if you change the selection the output will be "name1".

This is even the case when you specify the model with a string for the choice instead of an array of the string.

        
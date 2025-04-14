---json
{
  "title": "FLUID-2117",
  "summary": "Remove shorthand for specifing subcomponents in parent component default structure.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2009-01-13T12:07:09.000-0500",
  "updated": "2011-02-22T16:27:57.534-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Framework",
    "Inline Edit",
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-01-29T13:45:26.000-0500",
      "body": "There was another discussion regarding this issue on the channel:\\\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-01-29>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.533-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Currently there is a shorthand for specifying a subcomponent in the defaults of the parent component that can only be used when a subcomponent isn't configurable (has no options). Using the shorthand is error prone because it is easy for a component developer to add options at a later time while forgetting to change the specification in the defaults structure. The error would only show up when a user tried to override the option.&#x20;

See: <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-01-13>

        
---json
{
  "title": "FLUID-5205",
  "summary": "Allow for creation and destruction of sub panels based on the composite panels model.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-11-04T15:30:49.133-0500",
  "updated": "2013-11-27T15:45:45.714-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-11-27T15:45:45.685-0500",
      "body": "Merged with pull request ( <https://github.com/fluid-project/infusion/pull/439> ) at 73889463d799973a3a858c921d7bd2f9361c5906\n"
    }
  ]
}
---
Allow for composite panels to have sub panels that are created and rendered and subsequently destroyed based on a specific model path.&#x20;

Rather than being created by the default cerateOnInit event "initSubPanels" they will be created by another event that listens to the model change on a specific model path. A model change here will trigger afterRender and another event that determines if the sub panel should be created or destroyed. This will have to happen before the composite panels rendering phase triggers as the produce tree method will now have to ignore rendering the markup for components that don't exists.

In addition to this, the auxschema will need to be updated to provide a mechanism for declaring this new binding easily. Perhaps expanding on the panels array in the group block to take objects with a renderOnModelPath option. Or perhaps this can be declared in the panel block of a preference with it being ignored when not in a composite panel.

More details can be seen from a conversation with Bosmon in the IRC channel from today.\
<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-11-04>

        
---json
{
  "title": "FLUID-6171",
  "summary": "Update fluid.renderer.selection.inputs renderer expander to resolve an IoC reference for  ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2017-07-18T14:46:28.186-0400",
  "updated": "2024-07-22T10:35:00.608-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
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
      "date": "2017-07-29T09:43:41.874-0400",
      "body": "The PR ( <https://github.com/fluid-project/infusion/pull/836> ) was merged into the project repo at 850948841717745db7dcbd70726070c4d3db7de6\n"
    }
  ]
}
---
The fluid.renderer.selection.inputs renderer expander needs to be updated to pass relevant options through expandLight so that IoC references are resolved. Similar to <https://github.com/fluid-project/infusion/blob/master/src/framework/renderer/js/RendererUtilities.js#L368>

This came up as an issue after the refactoring to <https://fluidproject.atlassian.net/browse/FLUID-6166#icft=FLUID-6166> provided a base grade for themePicker adjusters. When more than themePicker based adjuster was used, all of the radio buttons from all of the panels were placed in the same radio button group. This is because the "name" attribute is derived from the selectID in the protoTree, which is currently the same and cannot be changed without overriding the entire protoTree. The changes to allow IoC references will allow the value to be sourced from another option or property of the component.

See discussion in fluid-work channel ( <https://botbot.me/freenode/fluid-work/2017-07-18/?msg=88731926&page=1> )

        
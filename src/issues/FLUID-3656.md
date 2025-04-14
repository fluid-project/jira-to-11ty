---json
{
  "title": "FLUID-3656",
  "summary": "Fluid Renderer does not apply proper workflow for uniquifying ids written to document",
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
  "reporter": "Antranig Basman",
  "date": "2010-05-18T01:18:45.829-0400",
  "updated": "2010-05-19T11:25:14.888-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-05-18T02:05:46.508-0400",
      "body": "This is quite a complex bug since the workflow for the various \"identifiers\" applied to components at the markup and component level is quite intricate. Although the actual ids written to the document are indeed unique, these are not determined \"in time\" to be available to the autobind workflow. This is somewhat awkward - since this workflow was only ever placed INSIDE the renderer so that it could provoke the allocation of ids before they hit the markup. Further intricacies involve the relationship between \"submitting names\" and ids. Autobind identifies components both through \"submitting names\" (which follow HTML rules for uniqueness within forms and also for radio button/selection scoping) in order to bind to data, but also though necessarily globally unique ids to actually bind event handlers. \\\nThere are various points within the renderer workflow in which it can be \"realised\" that an outputting component requires an id. ids are assigned \"initially\" only to elements which had ids already in the markup - however, discovering a decorator (including autobind) attached to an element \"forces\" allocation of the id. However, the \"changed id\" is not seen in time, within the event handler created within the renderer to respond to change events. It was initially thought that this bug might have been caused by the old chestnut of confusion in getElementById() which might sometimes return elements by matching NAME rather than ID but this is probably a red herring - that bug is probably only seen in IE6-era browsers.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-05-19T03:18:37.446-0400",
      "body": "Fixed at revision 9881. Significant reworking of the id assignment workflow and creation of new tree annotation \"finalID. Do note that because of this and various other renderer-initiated tree modifications, component trees are not reusable across invocations of the renderer, but need to be copied or regenerated afresh.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-05-19T11:25:14.886-0400",
      "body": "I have tested this fix in the CollectionSpace context where the problem was found, and it definitely works. FYI, a branch has been created at r9881 for CSpace to use: <http://source.fluidproject.org/svn/fluid/infusion/tags/infusion-1.2.x-collectionspace-0.7alpha/>\n"
    }
  ]
}
---
The renderer contains code and workflow for inspecting the "upcoming document" to assure that ids written into the markup do not conflict with ids that are already there. However, the workflow for this function does not interact correctly with the "autobind" feature which directs changes from form controls onto the model. This is particularly noticeable if the renderer is used to render instances of the same component multiple times into the document. Manual test case at \
<http://source.fluidproject.org/svn/scratchpad/multiple-renderers>

        
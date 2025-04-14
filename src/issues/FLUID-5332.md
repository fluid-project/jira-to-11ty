---json
{
  "title": "FLUID-5332",
  "summary": "Renderer's data binding will continue with notifications after source markup is destroyed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-04-28T02:00:31.562-0400",
  "updated": "2021-08-08T13:44:52.825-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4890/",
      "key": "FLUID-4890",
      "summary": "Firing an event to a listener registered by a destroyed component should trigger an error immediately"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5333/",
      "key": "FLUID-5333"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-08-08T13:44:52.805-0400",
      "body": "The old renderer will be retired in Infusion 5.x and no further improvements will be made to it.\n"
    }
  ]
}
---
This issue was noticed during work on the metadata component - a failing version was checked in at <https://github.com/jobara/metadata/tree/FLOE-116-broken-resolution> (commit is <https://github.com/jobara/metadata/commit/2f4fb58228493439f556d53c5606ca97f9081158> ).&#x20;

This failure can be observed by entering a new video URL and then operating one of the checkboxes (not the radio buttons) at the right panel. This issue was provoked by a bug in the configuration for the metadata component - two listeners were registered against the panel's model in two different locations, each of which triggered a call to "updateModel".\
The first of these triggered a call to refreshView in the parent component, which under the current renderer model must destroy and recreate the subcomponent - by the time the duplicate model listener executes, the target markup and component have already been destroyed. This triggers a particularly incomprehensible IoC resolution message complaining - Failed to resolve reference&#x20;



.model - could not match context with name panel from component ....

Note that this is currently an "old-style" model component and so the listener loop during which the component destruction occurs is "fireAgglomerated" inside the old ChangeApplier implementation. This is a particularly inaccessible location and the best solution would be to wait for the framework to be rationalised somewhat so that we can deal with the issue in just one place, the new ChangeApplier. However, this would also require advanced support for a new event facility described in <https://fluidproject.atlassian.net/browse/FLUID-5333#icft=FLUID-5333>, "abortable events"

This issue was discussed in IRC on 24/4/14 currently logged at <https://botbot.me/freenode/fluid-work/2014-04-24/> .

This issue is related to <https://fluidproject.atlassian.net/browse/FLUID-4890#icft=FLUID-4890> in that at least the fix for that issue would result in a much better diagnostic, failing in the listener early with the message that the component had been destroyed.

        
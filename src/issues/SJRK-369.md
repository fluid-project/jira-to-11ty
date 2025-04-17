---json
{
  "title": "SJRK-369",
  "summary": "Solve potential reorderer race condition on block addition",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-06-25T22:21:19.781-0400",
  "updated": "2021-07-14T10:03:04.197-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-422/",
      "key": "SJRK-422"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-07-14T10:03:04.197-0400",
      "body": "Would it be possible to get some more details on this issue, or possibly some sample code which causes the problem? What kind of pattern is being used during the activity \"this is called while many blocks are being added simultaneously\", and what kinds of errors result?\n"
    }
  ]
}
---
The introduction of the reorderer component in the storyEditor grade brought along with it the potential for a race condition whenever new blocks are added.

Ideally, we would like the reorderer to call its "refresh" invoker any time a new block is added, but if this is called while many blocks are being added simultaneously, errors will occur and break the page.

The temporary solution is to delay calling "refresh" until any block has focus, but this results in many superfluous calls to refresh along with subsequent activation of various model relays and listeners related to autosave. These aren't harmful per se (yet), but they do waste cycles and the solution is inelegant and somewhat obscure.

A better solution (proposed by Justin Obara) would be to implement a sort of event queue which, when a block is added:

1. enqueues (pushes) an object containing the args of the viewComponentContainerRequested event and whatever else is needed for queue management (maybe nothing),
2. fires the event, passing the args,
3. dequeues (shifts) the object when the block fires its onTemplateRendered event, and finally
4. calls refresh once the queue is empty (when length === 0)

This solution may also require disabling adding new blocks while the refresh is underway (perhaps with a model value and associated listeners), otherwise the race condition is still present.

        
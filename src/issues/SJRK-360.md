---json
{
  "title": "SJRK-360",
  "summary": "Allow editing of a story after publishing",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-05-27T17:20:45.878-0400",
  "updated": "2020-09-08T16:58:47.830-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-289/",
      "key": "SJRK-289",
      "summary": "Add auto-save or caching feature for story authoring"
    },
    {
      "type": "Dependence",
      "url": "/browse/SJRK-384/",
      "key": "SJRK-384"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-384/",
      "key": "SJRK-384",
      "summary": "Add user dialog for loading story draft "
    }
  ],
  "attachments": [],
  "comments": []
}
---
We have changed the goal of this issue to only cover the functionality to allow editing of a published story by someone with admin access.

In this case we need to consider how to frame the story tool UI to make it clear that it is an admin interface, so that in the event that the admin user is working on a draft of their own story, the two stories and interfaces are clearly distinguishable from one another (i.e. regular authoring vs admin editing). Having a different URL alone may not be obvious enough. A simple change to the styling around the story tool (header and/or heading) will probably be enough.

Admin access to edit a story will be very similar to admin access to delete a story.

From our meeting notes: Having new HTML page would make it easier to style it a bit different to distinguish them (some kind of admin interface)

\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~\~

Add the ability to save a draft upon publishing a story. This should also take into consideration how loading said draft would work, whether and how it would be accessible from browsers/devices other than the one the draft was originally authored in, etc.

This work depends significantly on <https://fluidproject.atlassian.net/browse/SJRK-289#icft=SJRK-289> being completed.

Preliminary designs: <https://files.inclusivedesign.ca/index.php/f/112363>

Some questions:

* How does this differ and interact with autosave as it is currently?
* Is saving only possible on a private device?
  * I.e. can a saved draft only be accessed from the browser and device that it was created in?
* Can only save one draft at a time?
  * If more than one concurrent draft is desired, should consider how to switch between them.
  * Pass in story ID to load? Would need to design the load interaction.
* New story will replace draft?
  * How would the author indicate they want to start a new story?
* Option to make drafts publicly available?
  * Would a publicly available draft be editable from any computer?
  * Would publishing one make the draft no longer editable or would it create a "copy" that gets published?

        
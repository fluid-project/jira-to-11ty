---json
{
  "title": "SJRK-411",
  "summary": "Implement UI for listing authored stories",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-10-22T17:01:44.587-0400",
  "updated": "2020-12-14T15:16:04.249-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-408/",
      "key": "SJRK-408"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-411/2020-10-22 Manage Stories design.PNG",
      "filename": "2020-10-22 Manage Stories design.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-12-03T10:54:55.114-0500",
      "body": "I've implemented a view to get stories by authorID and storyId for <https://fluidproject.atlassian.net/browse/SJRK-405#icft=SJRK-405>. However, at the moment it may not be re-usable to pull in all of the stories from a particular author. Hopefully the view end point is enough, currently called storiesByAuthor. For <https://fluidproject.atlassian.net/browse/SJRK-405#icft=SJRK-405> we filter the results with ?key=\\[authorID, storyId]. Hopefully based on [CouchDB view collation](https://docs.couchdb.org/en/latest/ddocs/views/joins.html#using-view-collation) we'll be able to use that same view to return all of the stories by the author instead of just a particular one; e.g. ?startkey=\\[authorID]. We may also need to override the url datasource's resolveURL method. See this [conversation](https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$J2web5x6s_mxLnJuhkzNhXv8WOD1FuguLzYACjuIvY0?via=matrix.org) from the matrix technology channel.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-12-14T15:16:04.249-0500",
      "body": "If we allow logging in and accessing this page while authoringEnabled is false, we should indicate to the user, somehow, that authoring is not enabled and restrict access to editing/deleting stories appropriately. If we don't allow logging in while authoringEnabled is false, disregard this note 🙂\n"
    }
  ]
}
---
Implement a UI for seeing an authenticated author's stories. This is, in effect, the Manage Stories page that was mocked up in the most recent round of designs (see attached screenshot).

The listing should include published and unpublished stories separately, though efforts should be made not to exclude a combined listing from being produced.

This listing should also include the ability to select a story to edit (see SJRK-407 and <https://fluidproject.atlassian.net/browse/SJRK-410#icft=SJRK-410> for details), and to delete a given story (SJRK-406).

The server-side aspect of this work is SJRK-408.

        
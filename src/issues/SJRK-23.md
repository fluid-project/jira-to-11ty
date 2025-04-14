---json
{
  "title": "SJRK-23",
  "summary": "Add search functionality",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T16:02:04.846-0400",
  "updated": "2018-07-17T09:39:36.007-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-11-09T15:44:01.688-0500",
      "body": "Questions from discussion:\n\n* In the search results, what should be shown? Current design has Title, Author byline and story Summary. Could consider having a preview or snippet of what exactly was matching with the search result. Implementation would be easier if it were just the summary.\n* Highlighting in the content? Once the user has selected their matching story, the search term is highlighted wherever it appears, with the option to clear or toggle the highlighting\n* \"Advanced search\" for later 🙂 Can make changes and features in the back end that would make adding an advanced search in the future much easier. The UI implementation would be the most difficult aspect of this, and so should be left for later.\n"
    }
  ]
}
---
Add search functionality to the Storytelling tool in general. This will need to be broken down at some point into finer JIRAs.

* Add view documents to the database to search in various ways

-
  * single terms
  * multiple terms
  * wildcards
- Search for tags or categories (should these be considered separately?)
- Advanced search interface?
- Add search context(s) to the UI
  * Add the new template(s)
  * Wire in the DB calls

        
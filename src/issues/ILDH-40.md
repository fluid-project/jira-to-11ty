---json
{
  "title": "ILDH-40",
  "summary": "Investigate and implement an EPUB plugin for inclusive learning design handbook",
  "tags": "ILDH",
  "project": {
    "key": "ILDH",
    "title": "Inclusive Learning Design Handbook"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2013-10-01T09:42:37.419-0400",
  "updated": "2020-10-21T11:02:37.871-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "MediaWiki\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-10-24T15:01:09.844-0400",
      "body": "After some investigation, EPUB export for Media Wiki may be a dead end. So far I have found the following plugins, but none are really suited for our needs (as noted below).\n\n* EPubExport Extension works, but hasn't been updated since 2010 and in Beta status (<https://www.mediawiki.org/wiki/Extension:EPubExport>)\n* Collection Extension - a stable extension that creates book formats in ODF, PDF, and other formats, except EPUB. (<https://www.mediawiki.org/wiki/Extension:Collection>)\n* Collection Extension 2 - appears to support EPUB based on wireframes, but development seems to have stalled? ( <https://www.mediawiki.org/wiki/Talk:Collection_Extension_2#Great.21_What_is_the_status.3F_18036>)\n* LuciwikEPUB Extension (<http://lucidor.org/luciwik/>) exports to EPUB but is marked as Beta (not much discussion about this extension. Not even sure if it's still active).\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-21T11:02:37.819-0400",
      "body": "<https://github.com/fluid-project/docs-inclusive-learning/issues/34>\n"
    }
  ]
}
---
Investigate and implement a way for end users to export articles from the Handbook into EPUB 3 format.

        
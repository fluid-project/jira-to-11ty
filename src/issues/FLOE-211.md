---json
{
  "title": "FLOE-211",
  "summary": "AbortError thrown from pouchDB at page load",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2014-07-31T16:10:55.645-0400",
  "updated": "2014-10-27T12:55:49.481-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-10-21T12:35:11.122-0400",
      "body": "The problem is caused by the page redirection. The decision is to remove PouchDB from the metadata demo since the demo is good enough for its purpose without showing the previously saved data.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-10-23T12:57:26.876-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/metadata/pull/46>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-10-27T12:55:49.479-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/metadata/pull/46> ) into the project repo at 9733e7cdc8999642710839f56226d38447036a0e\n"
    }
  ]
}
---
Open up firebug or developer console;

1\. Open up <http://metadata.floeproject.org/demos/html/index.html>\
2\. Click "climate change impacts" or "create new resource"

The next page loads with "AbortError" thrown from pouchDB.js. All subsequent page loads report the same error.&#x20;

        
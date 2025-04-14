---json
{
  "title": "KETTLE-51",
  "summary": "kettle.dataSource.URL.writable does not calculate data length correctly when data contains special character(s)",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2016-12-23T09:54:40.954-0500",
  "updated": "2017-01-05T20:16:21.920-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/KETTLE-53/",
      "key": "KETTLE-53"
    }
  ],
  "attachments": [],
  "comments": []
}
---
This issue was discovered at sending PUT request to CouchDB \`/\_bulk\_docs\` API in order to load JSON data that contains special characters such as "ä". CouchDB returns error:&#x20;

```java
{"error":"bad_request","reason":"invalid_json"}
```

This is because, the function kettle.dataSource.URL.handle.http() in dataSource-url.js use \`data.length\` to calculate "Content-Length" of the http request. \`data.length\` calculates the number of chars instead of the number of bytes, which causes problem when a special character exists in the post data. To fix it, the data should be converted with \`data = new Buffer(data);\` to get the proper length in bytes.

        
---json
{
  "title": "SJRK-443",
  "summary": "Improve CouchDB view datasource to make the reusable with different filtering options",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-12-14T11:36:19.030-0500",
  "updated": "2021-02-04T08:06:44.537-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6595/",
      "key": "FLUID-6595"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently he couchDB view datasources are quite specific in that if filtering needs to be applied the datasources cannot be reused easily, in particular if the filtering is very different. For example:

```java
/%db/_design/%designDoc/_view/%viewId?key=[%22%authorID%22%2C%22%storyId%22]
```

In the above example you can only use the datasource with the specified key values interpolated. However, you could use this same view with a range of keys using the {{startkey}} parameter instead.

 \
Should investigate overriding the resolveUrl invoker to allow for providing the query paramters via the directModel completely. In that way the view can be used for different filtering on the same view.

        
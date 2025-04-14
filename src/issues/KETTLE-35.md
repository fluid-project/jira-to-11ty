---json
{
  "title": "KETTLE-35",
  "summary": "kettle.dataSource.CouchDB.writable should be more easily able to read and write from different URLs...",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2015-09-27T08:51:27.493-0400",
  "updated": "2015-09-27T08:51:27.493-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In CouchDB, you are expected to know the current \_id and \_rev value of a record before you can update it.  kettle.dataSource.CouchDB.writable retrieves those values by making a call to that.get and then appending the existing \_id and \_rev values to the payload before POSTing to CouchDB.

As far as I can see, both that.get and that.set ultimately use the same termMap and url value.  This is reasonable for simple cases like GETing and POSTing a record with a known ID, when you expect to (for example) GET /db/id1 and POST /db/id1.  It is not reasonable for cases in which the id is not known, or in which you need to use a view to lookup a record by more than one existing field.

In those cases, you would more likely be looking up the original record using a view, and then updating the record through the standard document API.  There are many many use cases like this, to pick one at random, you might use a view to look up a user record by either username or email address, and then make a change to that record using the document API.

I have worked around this for the moment by making wrapper components that have a separate reader and writable child component.  These components use configuration blocks like the following to distinguish read and write conventions:

```java
urls: {
  read: "XXX",
  write: "YYY",
},
termMaps: {
  read: "ZZZ",
  write: "AAA"
}
```

I would suggest that we evolve the writable couchDB grade to do something similar.  Just to avoid the same collision over and over again in other environments, we might also consider renaming the common fields (url, termMap, directOptions) in one or both of the underlying kettle.dataSource.URL and kettle.dataSource.URL.writable grades.

        
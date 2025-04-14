---json
{
  "title": "KETTLE-34",
  "summary": "key URL information is stripped by kettle.dataSource.URL.handle.http",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2015-09-27T08:36:11.593-0400",
  "updated": "2016-05-25T18:56:48.352-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2015-11-02T08:10:56.625-0500",
      "body": "Can I get a link to the pull request for this?  I would like to start working on an alternative CouchDB dataSource and would rather not have to work around the lack of inline credentials.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2015-11-02T08:14:48.422-0500",
      "body": "This is supposed to have been fixed by this pull request:  <https://github.com/fluid-project/kettle/pull/21>\n\nLooks like this is the commit with the fix?  <https://github.com/amb26/kettle/commit/4047ebf80be4d7df624aaf6efd2f47da10022a4a>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-11-02T08:23:51.404-0500",
      "body": "Yes, that is it - although I'll be working on this area directly a bit more this afternoon, and reverting my previous change to the format of the \"termMap\" which I had made last month\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2015-11-02T09:05:44.522-0500",
      "body": "Thanks for the warning, I will hold off for a day or two and focus on cleaning up the PTD code a bit first.\n"
    }
  ]
}
---
kettle.dataSource.URL.handle.http is used for both URL read and write operations.  It converts the configured URL into its parts, as shown below.

```java
urlObj = url.parse(path, true),
        requestOptions = {
            host: urlObj.hostname,
            port: parseInt(urlObj.port, 10),
            path: urlObj.path,
            method: "GET"
        },
```

The only information preserved is the host, port, and path.  Notably we do not preserve either the scheme or any authentication information.

As far as I can see the scheme problems would prevent using a dataSource with an https URL, although I have not tested this.

I have seen problems with the authentication information in my own work.  When working with CouchDB, it is common to use URLs like the following when accessing CouchDB rest end points that require authentication:

<http://admin:admin@localhost:5984/ul/%id>

The current implementation of kettle.dataSource.URL.handle.http, and by extension kettle.dataSource.URL.writable can thus only be used with end points that do not require authentication.

        
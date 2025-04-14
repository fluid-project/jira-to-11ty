---json
{
  "title": "KETTLE-42",
  "summary": "Protect File dataSources against relative path resolution",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Simon Bates",
  "date": "2016-05-06T09:32:20.241-0400",
  "updated": "2016-05-06T09:34:25.214-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The kettle.dataSource.file grade does not currently protect against path terms containing relative path characters.

The risk is that if an application exposed file dataSource terms in a publicly accessible way (such as through an HTTP endpoint), an attacker could cause the application to access files outside of the application's directory on the filesystem. For read-only dataSources, an attacker could cause the application to read any file that the application has access to, such as application or system configuration. For writable dataSources, an attacker could also cause the application to write to the filesystem.

The URL varieties of the dataSource do URI encoding when populating the url from the termMap.

Some options for file dataSources:

* do escaping/encoding for file paths in a similar manner to that done for URL dataSources (some research would be necessary here to see if this can be done in a cross- operating system / filesystem manner)
* test the terms before populating the path and reject any that have relative paths in them

Proof of concept code showing access outside of an application's directory:

```javascript
var fluid = require("infusion"),
    kettle = require("kettle"),
    tests = fluid.registerNamespace("tests");

fluid.defaults("tests.testRelativeFileDataSource", {
    gradeNames: "kettle.dataSource.file",
    path: "/home/simon/idrc/test-kettle-relative-file-dataSource/%filename",
    termMap: {
        filename: "%filename"
    },
    components: {
        encoding: {
            type: "kettle.dataSource.encoding.none"
        }
    }
});

var myDataSource = tests.testRelativeFileDataSource();
var promise = myDataSource.get({filename: "../hi.txt"});

promise.then(function (response) {
    console.log("Got dataSource response of ", response);
}, function (error) {
    console.error("Got dataSource error response of ", error);
});
```

        
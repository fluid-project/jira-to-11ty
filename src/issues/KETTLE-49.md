---json
{
  "title": "KETTLE-49",
  "summary": "Architecture for configuring writable DataSources is confused",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-11-11T10:25:08.997-0500",
  "updated": "2020-11-02T08:20:48.103-0500",
  "versions": [],
  "fixVersions": [
    "2.0.0"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-11-02T08:20:17.658-0500",
      "body": "In the end we have ended up with a system based on a writable flag plus ContextAwareness definitions at each point where the hierarchy branches. E.g. in core DataSource we have\n\n```java\nfluid.defaults(\"fluid.dataSource\", {\r\n        gradeNames: [\"fluid.component\", \"fluid.contextAware\"],\r\n        contextAwareness: {\r\n            writable: {\r\n                checks: {\r\n                    writableValue: {\r\n                        contextValue: \"{fluid.dataSource}.options.writable\",\r\n                        gradeNames: \"{fluid.dataSource}.options.writableGrade\"\r\n                    }\r\n                }\r\n            }\r\n        },\n```\n\nwhereas in kettle.dataSource.CouchDB we have\n\n```java\nfluid.defaults(\"kettle.dataSource.CouchDB\", {\r\n    // Link on to the existing writable: true flag maintained by a core fluid.dataSource\r\n    contextAwareness: {\r\n        writableCouchDB: {\r\n            checks: {\r\n                writableCouchDB: {\r\n                    contextValue: \"{fluid.dataSource}.options.writable\",\r\n                    // Note that it would be preferable for gradeNames to form a hash as in FLUID-6439 so that we could\r\n                    // override it selectively rather than to duplicate the entire contextAwareness definition as here\r\n                    gradeNames: \"kettle.dataSource.CouchDB.writable\"\r\n                }\r\n            }\r\n        }\r\n    },\n```\n"
    }
  ]
}
---
We currently have two mostly unrelated schemes for contributing "writable" versions of DataSource grades into components.

The first, historical scheme consumes a boolean option named "writable" and uses this to manually compute a gradeName based on the option named readOnlyGrade:

```java
kettle.dataSource.getWritableGrade = function (that, writable, readOnlyGrade) {
    if (!readOnlyGrade) {
        fluid.fail("Cannot evaluate writable grade without readOnlyGrade option");
    }
    if (writable) {
        return fluid.model.composeSegments(readOnlyGrade, "writable");
    }
};
```

The second scheme, currently only used for the mixin grade "kettle.dataSource.CouchDB" uses the IoC grade linkage system to consume a generalised "kettle.dataSource.writable" grade and output the concrete writable grade: <http://docs.fluidproject.org/infusion/development/IoCAPI.html#fluid-makegradelinkage-linkagename-inputnames-outputnames->

```java
fluid.makeGradeLinkage("kettle.dataSource.CouchDB.linkage", ["kettle.dataSource.writable", "kettle.dataSource.CouchDB"], "kettle.dataSource.CouchDB.writable");
```

This confusion has confused implementors of new DataSource grades in the current PouchDB work on the GPII - <https://github.com/GPII/universal/pull/464#pullrequestreview-3041008> - a crucial commit is <https://github.com/GPII/universal/pull/464/commits/71594c2b444a7350f3cf6561d22cb301978ba290> .&#x20;

We should sort out this confusion when we refactor DataSources - presumably in favour of the second, linkage-based system, as the TODO comment at <https://github.com/fluid-project/kettle/blob/master/lib/dataSource-core.js#L187> suggests.

        
---json
{
  "title": "KETTLE-38",
  "summary": "DataSource fails to compute writable grade in the case of further derivation",
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
  "date": "2015-10-29T11:13:55.131-0400",
  "updated": "2016-12-04T17:27:00.110-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-12-04T17:27:00.076-0500",
      "body": "This was fixed prior to the 1.0 release, but in favour of the \"readOnlyGrade\" system which is documented in <https://fluidproject.atlassian.net/browse/KETTLE-49#icft=KETTLE-49> to still be less than desirably clear\n"
    }
  ]
}
---
The dataSource implementation relies simply on the typeName of the overall concrete grade in order to compute the "writable" version of the grade:

```javascript
getWritableGrade: {
            funcName: "kettle.dataSource.getWritableGrade",
            args: ["{that}.options.writable", "{that}.typeName"]
        }
```

This is always faulty since the grade's "principal type" is always an essentially random selection from the many gradeNames on offer.

        
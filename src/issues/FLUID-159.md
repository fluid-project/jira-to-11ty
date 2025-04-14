---json
{
  "title": "FLUID-159",
  "summary": "Moving all portlets out of a column results in an empty nonfunctional column",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Joseph Scheuhammer",
  "date": "2008-01-11T10:54:05.000-0500",
  "updated": "2008-02-04T11:06:51.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-187/",
      "key": "FLUID-187"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-02-01T14:13:06.000-0500",
      "body": "Which issue is this a duplicate of?\n"
    }
  ]
}
---
To see this, use the "portlets.html" abstract example in the ".../test/markupExamples/reorderer" folder.  Drag portlets 7, 8, and 9 out of the third column and drop them into either of the other columns.  The result is an thin empty third column.  The issues are:\
1\. Should this column disappear?\
2\. More importantly, this column is non-functional in that one cannot drag any moveable portlet from columns one and two into column three.

        
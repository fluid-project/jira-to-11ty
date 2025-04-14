---json
{
  "title": "FLUID-5826",
  "summary": "fluid.copy does not copy keys with undefined values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Antranig Basman",
  "reporter": "Kasper Galschiot Markus",
  "date": "2015-12-09T04:39:53.688-0500",
  "updated": "2024-07-22T09:30:49.934-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-12-09T08:30:51.669-0500",
      "body": "It's a design decision. Objects with \"undefined\" values are unnatural and invalid for interchange, and should not be used. fluid.copy is consistent with the wider body of algorithms which operate on JSON-like values such as $.extend, fluid.transform, etc. It's a widespread idiom (or axiom) within JavaScript that a standard means of cloning an object should be to convert it to JSON and then re-parse it - in fact in many environments such as CouchDB this is the only standard means provided.\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2015-12-09T08:35:27.238-0500",
      "body": "Awesome! Thanks for clearing that up, @@Antranig Basman\n"
    }
  ]
}
---
The fluid.copy function does not copy keys (and values) for which the value is undefined. For example:

```javascript
fluid.copy({ a: "hello world", b: undefined})
```

Will return the following object:

```javascript
{ a: "hello world" }
```

Whereas an exact copy obviously would be:

```javascript
{ a: "hello world", b: undefined}
```

@@Antranig Basman is this a design decision or a bug?

        
---json
{
  "title": "FLUID-4925",
  "summary": "Implement \"wave of explosions\", eagerly instantiating all component shells before their contents",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2013-02-24T03:22:20.679-0500",
  "updated": "2024-07-22T10:35:30.234-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5519/",
      "key": "FLUID-5519"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5028/",
      "key": "FLUID-5028"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4982/",
      "key": "FLUID-4982"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4155/",
      "key": "FLUID-4155"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-01-30T10:04:20.869-0500",
      "body": "A further requirement - we should try to eliminate the cumbersome piece of memory-ware \"fluid.typeFount\" and have the framework eagerly evaluate the shells of any components which appear to have the FORM of dynamic grades first amongst a set of siblings - since these are more likely to encode type decisions that might be consumed by other components.\n"
    }
  ]
}
---
Building on the <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> ginger world work, and preparatory to the "wave of promises" asynchronous ginger world, we can offer a significant improvement in regularity to the users of IoC by eagerly instantiating "component shells" and any type founts preferentially to evaluating any other contents of their options in the ginger process. This will allow reliable type-based access to components without requiring a dependence on instantiation order or reliance on hard-coded paths. For example, in this situation in the Uploader, the base component&#x20;

```java
fluid.uploader.multiFileUploader
 |
 +--- fluid.uploader.fileQueue
 |
 +--- fluid.uploader.html5Strategy
       |
       +--- queue
```

We would like to write the injection of the fileQueue as

```java
queue: "fluid.uploader.fileQueue"
```

but instead must write it as:

```java
queue: "{uploader}.queue"
```

This is because despite being a more deeply nested subcomponent of the base, we can't guarantee that the framework has not chosen an instantiation order which recurses more deeply on html5Strategy and has not yet seen the typename of the queue as "fluid.uploader.fileQueue" as the member at path "queue". The former form is preferable since it imposes less tight binding on the exact location of the fileQueue.

In the "wave of explosions" a wave of instantiations will spread eagerly from the root, in breadth-first order, with the usual priority given to type founts, and ensure that in virtually all cases by the time the body of any component options are expanding, the "type skeleton" of the entire component tree will be available (barring any components whose types depend on some portion of their options body material)

        
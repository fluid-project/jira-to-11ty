---json
{
  "title": "FLUID-1313",
  "summary": "It's awkward to override the default activation keys. Provide a clear means for overriding default keys",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2008-08-26T12:10:40.000-0400",
  "updated": "2017-02-22T18:17:00.550-0500",
  "versions": [
    "0.4",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6133/",
      "key": "FLUID-6133",
      "summary": "Implement generalised, schematised solution for universal keyboard accessibility"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:05:50.276-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-08-31T01:21:30.047-0400",
      "body": "This is an awful issue and must be resolved for the next major release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:39:24.868-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    }
  ]
}
---
At the moment, the keyboard-a11y's activatable() feature assumes that you'll always want the default key bindings: Enter and Spacebar. If you want to override this with only your own custom key bindings, you have do something like this:

```java
newQueueRow.activatable(null, {additionalBindings: [
          {key: $.a11y.keys.DELETE, activateHandler: function(){
                  // do something
              }
          }
        ]});
```

We're specifying a null handler for the default keys, then binding our own custom key and handler.

We should change the activatable() API so that keys can be overridden. The documentation currently suggests that this is possible, but the implementation doesn't allow for it. Here's what I'd suggest:

```java
row.activatable(deleteHandler, {
            keys: [$.a11y.keys.DELETE]
        });
```

This means that, if you want different handlers for different key strokes, you'll have to make multiple calls to activatable(), but I think this is reasonable.&#x20;

        
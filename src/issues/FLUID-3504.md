---json
{
  "title": "FLUID-3504",
  "summary": "ChangeApplier has no convenient way to add items to an array in a model",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2010-02-25T15:23:03.000-0500",
  "updated": "2018-04-05T04:16:30.200-0400",
  "versions": [
    "1.1.2",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2010-02-25T15:27:20.000-0500",
      "body": "Alternatively, I could create a copy of the existing 'things', add my 'thung's to it, then request a single change on the whole thing... That doesn't seem entirely optimal either.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-10-30T18:16:50.775-0400",
      "body": "In time, the ChangeApplier will be extended to support custom array insertion events as well as fixed to allow the DELETE operation to remove an array element. See IRC discussion in #fluid-work at <https://botbot.me/freenode/fluid-work/2014-09-17/?msg=21823956&page=2>\n"
    }
  ]
}
---
In cases where a model includes an array of some smaller objects, the ChangeApplier offers no convenient way to add several more of these smaller objects to that array all in one go. For example, if the form of the model includes

```java
{
  things: [
    { thung: "foo" },
    { thung: "bar" }
  ]
}
```

If I wish to add three more 'thung's to 'things', I must fire three separate requests for a change, using the fully qualified EL path into 'things' i.e. using knowledge of how many 'thung's there already are:

```java
applier.requestChange("things.2", newThungA);
  applier.requestChange("things.3", newThungB);
  applier.requestChange("things.4", newThungC);
```

It would be nice to be able to do it all in one request, so that only one modelChanged event is fired.

        
---json
{
  "title": "FLUID-5847",
  "summary": "Model relay fails to operate for rule which has both transform model dependency and source",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-01-22T21:08:52.089-0500",
  "updated": "2019-07-12T09:15:10.071-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-09-22T22:40:13.185-0400",
      "body": "Merged into trunk at revision 94fdce728416f1b38f0181c4fa32bcae347acdbd on March 4th 2016\n"
    }
  ]
}
---
A relay rule of the following form fails to operate when its data is invalidated -&#x20;

```java
modelRelay: {
        source: "dataRange.step",
        target: "position",
        singleTransform: {
            type: "souq.rescalePosition",
            dataRange: "{that}.model.dataRange"
        }
    },
```

This is because the relay parser is geared up to expect EITHER relays with data dependencies in their transforms, OR a source entry, not both. The relay machinery embodies this assumption in the crazy pathway which updates a relay document rule with a "newValue" of "undefined" - currently at DataBinding.js line 506:

```javascript
// TODO: This is just for safety but is still unusual and now abused. The transducer doesn't need the "newValue" since all the transform information
                    // has been baked into the transform document itself. However, we now rely on this special signalling value to make sure we regenerate transforms in
                    // the "forwardAdapter"
                    transducer(existing.transaction, options.sourceApplier ? undefined : newValue, sourceSegs, targetSegs);
```

At the very least we need to signal that writing such transforms is an error. They fail to operate since an source value of "undefined" when operating the transform culls it out. I recall that a hack we have tended to use is to manually apply an input value of "true" but obviously this is completely unsatisfactory - especially in the current case where we actually want the input value explicitly.

        
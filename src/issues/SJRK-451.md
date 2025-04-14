---json
{
  "title": "SJRK-451",
  "summary": "Update visibility model listeners to use new relay instead",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2021-02-22T15:27:39.461-0500",
  "updated": "2021-02-22T15:40:25.161-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
With recent updates to Infusion, the ability to control DOM element visibility from a model relay has become available. Update all modelListener records that are used to control an element's visibility to use this method instead.

**Before:**

```javascript
modelListeners: {
    progressAreaVisible: {
        this: "{loginUi}.dom.progressArea",
        method: "toggle",
        args: ["{change}.value"],
        namespace: "progressAreaVisibleChange"
    }
}
```

**After:**

```javascript
modelRelay: {
    progressAreaVisibleChange: {
        source: "progressAreaVisible",
        target: "{loginUi}.dom.progressArea.visible"
    }
}
```

Please note the syntax outlined above does not work as-is. There may be some in-progress documentation about this feature, or it may be forthcoming with a future Infusion release (perhaps 4.\* or 5.\*)

        
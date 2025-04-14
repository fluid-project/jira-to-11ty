---json
{
  "title": "SJRK-123",
  "summary": "Set hasMobileCamera to true for image block editor tests",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T13:51:06.523-0400",
  "updated": "2018-06-04T15:34:59.936-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-04T15:34:59.933-0400",
      "body": "hasMobileCamera was included by overriding the check function with a function that only returns true, this way the contextAwareness is still used and tested\n"
    }
  ]
}
---
On a desktop browser, the imageCaptureButton does not appear because of the context-awareness setup. However, the tests are not dependent on an actual working mobile camera or similar, so we should (for testing purposes) simply set the "hasMobileCamera" context to true so these tests will run and confirm what can be confirmed with automated testing.

Relevant lines at 68-75 of imageBlockEditor tests, currently commented out:

```javascript
{
   jQueryTrigger: "click",
   element: "{imageBlock}.dom.imageCaptureButton"
}, {
   event: "{imageBlock}.events.imageCaptureRequested",
   listener: "jqUnit.assert",
   args: ["The imageUploadRequested event fired"]
}
```

        
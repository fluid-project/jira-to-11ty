---json
{
  "title": "FLUID-6343",
  "summary": "UIO defaultLocale test will periodically stall, particularly on IE11",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2018-09-21T12:05:43.771-0400",
  "updated": "2024-07-24T13:09:40.618-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "IE11 quite often, Chrome sometimes\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-24T13:09:40.405-0400",
      "body": "Could not reproduce with MS Edge 126 on macOS 14.5\n"
    }
  ]
}
---
With a certain probability, the "UI Options Local Tests: UIO defaultLocale tests" will stall. This happens quite often on IE11 but I have seen it happen on Chrome as well. The hanging fixture is as follows:

```java
File: UIOptions-test.html
Fri Sep 21 2018 17:02:54 GMT+0100 (GMT Daylight Time):   Skipped test Pass in customized toc template
Fri Sep 21 2018 17:02:54 GMT+0100 (GMT Daylight Time):   Successfully queued test UIO defaultLocale tests
Fri Sep 21 2018 17:03:00 GMT+0100 (GMT Daylight Time):   Test case listener has not responded after 5000ms - at sequence pos 2 of 3 sequence element  [object Object]  of fixture UIO defaultLocale tests
   "Fri Sep 21 2018 17:03:00 GMT+0100 (GMT Daylight Time):  "
   "Test case listener has not responded after 5000ms - at sequence pos 2 of 3 sequence element "
   {
      [functions]: ,
      __proto__: { },
      args: "{prefsEditor}",
      event: "{prefsEditorBaseTest prefsEditor prefsEditorLoader prefsEditor}.events.onReady",
      listener: "fluid.tests.uiOptions.prefsEditorLocalizedTester.verifyPanelMessages"
   }
   " of fixture UIO defaultLocale tests"
```

        
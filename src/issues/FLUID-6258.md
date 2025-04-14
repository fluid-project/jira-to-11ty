---json
{
  "title": "FLUID-6258",
  "summary": "Test failure in SeparatedPanelPrefsEditorResponsive test",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2018-03-09T10:45:36.297-0500",
  "updated": "2018-03-12T12:27:01.596-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Firefox, Windows 10 with non-default desktop DPI setting\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2018-03-09T19:01:04.525-0500",
      "body": "I now saw this issue twice in a row, so I guess it needs some attention.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-03-10T18:46:32.116-0500",
      "body": "I can actually reproduce this all the time in Firefox on Windows. I guess I only ever considered it intermittent because testem isn't capable of finding Firefox on my baremetal machine and when I reported it, I had just done one complete testem run in my VM (which takes a good long time). The problem is entirely unrelated to testem.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-03-12T12:27:01.596-0400",
      "body": "Just found that reproducing this bug requires a non-default desktop DPI, e.g. 125% zoom\n"
    }
  ]
}
---
On one run I got the following failure when checking for the panel visibility. I don't suggest we devote much effort to fixing it right now since it is pretty hard to trigger the error (it might occur one time in 10 on heavily loaded hardware) but logging this just in case it comes up again. Also if we have some spare time we could "eyeball" the code to see if we can spot an obvious race condition. What's rather odd is that the asserted value is a floating point value than a boolean.

```java
not ok 32 Firefox 54.0 - Framework Tests: /tests/framework-tests/preferences/html/SeparatedPanelPrefsEditorResponsive-test.html
    ---
        actual: >
            0.399993896484375
        expected: >
            0
        stack: >
            runLoggingCallbacks@http://localhost:7357/tests/lib/qunit/js/qunit.js:1609:4
            push@http://localhost:7357/tests/lib/qunit/js/qunit.js:958:3
            strictEqual@http://localhost:7357/tests/lib/qunit/js/qunit.js:613:3
            assertEquals@http://localhost:7357/tests/test-core/jqUnit/js/jqUnit.js:137:13
            fluid.tests.prefs.responsive.assertPanelVisibility/<@http://localhost:7357/tests/framework-tests/preferences/js/SeparatedPanelPrefsEditorResponsiveTests.js:180:17
```

        
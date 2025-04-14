---json
{
  "title": "FLUID-6715",
  "summary": "Full Page with Schema manual test failing to load ToC message bundle",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2022-02-03T08:22:46.127-0500",
  "updated": "2022-02-09T09:52:17.310-0500",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-02-09T09:52:17.309-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1070> ) into the project repo at 50bdbf8d145ddfd64f3cc865397f8ef03982e443\n"
    }
  ]
}
---
The Preferences Editor: Full Page, With Preview, Using Schema manual test fails to load the Table of Contents message bundle as it does not appear to be resolving the `%messagePrefix` token in the URL.

<https://build-infusion.fluidproject.org/tests/manual-tests/framework/preferences/fullpage-schema/%messagePrefix/tableOfContents-enactor.json>

Steps to reproduce:

1. Open the [Full Page with Schema](https://build-infusion.fluidproject.org/tests/manual-tests/framework/preferences/fullpage-schema/) manual test
2. Toggle the Table of Contents preference on
3. Notice that it does not appear enabled in the preview
4. In the console notice the following errors that happen on page load.

```java
XHRGEThttps://build-infusion.fluidproject.org/tests/manual-tests/framework/preferences/fullpage-schema/%messagePrefix/tableOfContents-enactor.json[HTTP/2 400 Bad Request 37ms] 
XHRGEThttps://build-infusion.fluidproject.org/tests/manual-tests/framework/preferences/fullpage-schema/%messagePrefix/tableOfContents-enactor_en.json[HTTP/2 400 Bad Request 53ms] 
XHRGEThttps://build-infusion.fluidproject.org/tests/manual-tests/framework/preferences/fullpage-schema/%messagePrefix/tableOfContents-enactor_en.json
```

        
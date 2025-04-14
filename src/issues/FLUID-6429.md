---json
{
  "title": "FLUID-6429",
  "summary": "Syllabification enactor tests apply faulty escaping in selector causing no test to execute",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2019-11-19T11:55:27.718-0500",
  "updated": "2019-11-25T19:40:13.308-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Syllabification Enactor"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The Syllabification Enactor tests at <https://github.com/fluid-project/infusion/blob/master/tests/framework-> tests/preferences/js/SyllabificationEnactorTests.js#L293 apply faulty escaping in the following block:

```java
combined: {
                    ".flc-syllabification-injectWhenDisabled": "{that}.options.testOpts.injected.disabled.\.flc-syllabification-injectWhenDisabled",
                    ".flc-syllabification-injectWhenEnabled": "{that}.options.testOpts.injected.disabled.\.flc-syllabification-injectWhenEnabled"
                }
```

In a JavaScript string, the escape sequence "\\." is simply equivalent to "." and the proper escaping would have been "\
.". The result is that these values are undefined and no tests are executed. However, because of FLUID-6430 even if the correct escaping had been applied, the reference would still not resolve. The best disposition is to rewrite the test so that the index is a plain string, perhaps a selector name, rather than a full CSS class selector.

        
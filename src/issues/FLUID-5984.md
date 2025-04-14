---json
{
  "title": "FLUID-5984",
  "summary": "Document conditional testing utilities",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-10-17T11:22:09.873-0400",
  "updated": "2016-10-17T11:22:28.246-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5973/",
      "key": "FLUID-5973"
    }
  ],
  "attachments": [],
  "comments": []
}
---
<https://github.com/fluid-project/infusion/pull/757> merged in two conditional test utilities that should be documented.

While these specifically targeted issues with the text-to-speech tests, they may be generally useful to users of the framework, and should be documented. The features are:

* running different tests based on the results of promises (one test if a promise resolves, another if it fails); as a concrete example, this is used in the TTS tests to skip tests if a platform does not "truly" support TTS (an issue on some automated browser test platforms)
* a context-aware test runner; concretely, this is used to skip certain tests on Linux due to Linux browsers not fully supporting all TTS features

        
---json
{
  "title": "FLUID-6400",
  "summary": "Prepare and update prefs framework for closer convergence with GPII primitives and easier reuse",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2019-09-23T08:44:36.424-0400",
  "updated": "2024-07-22T10:35:06.913-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This is a subset of longer-term discussions which are being tracked in <https://pad.gpii.net/p/uio-and-prefs-framework-requirements-2u194n92> .&#x20;

Some relatively self-contained and bite-sized tasks have emerged -&#x20;

i) Updating our dialect of JSON schema used in our primary schema grades to the current draft (involving updates like updating "divisibleBy" to "multipleOf"\
ii) Moving towards the GPII solutions registry's profile of JSON schema, which involves making use of the "enumLabels" approach for referencing i18n message keys for enumerations

This should pave the way to eliminating the\
"controlValues" and "stringArrayIndex" intrusions identified in the OpenDyslexic pull at <https://github.com/fluid-project/infusion/pull/956> for FLUID-5525 which was identified by @@Alan Harnum as some of the obstructions to easily reusing and extending the prefs framework UI.

This might involve adopting some of the global conventions on message bundle naming and bundle orchestration that were discussed last year at <https://pad.gpii.net/p/i18n-meetings-6294n3p> and given a partial implementation by the Astea team at <https://github.com/GPII/gpii-app/blob/master/scripts/compileMessageBundles.js> .&#x20;

It seems like an integrated approach to coordinating message bundle names with primary schema grades will be an important part of the work of implementing the GPII "Presentation Registry" (headed up by @@Tony Atkins \[RtF]) that goes beyond what has been achieved so far with the "Auxiliary Schema" in the prefs framework, and should also significantly improve our reuse stories.

        
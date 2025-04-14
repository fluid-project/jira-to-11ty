---json
{
  "title": "FLUID-6309",
  "summary": "ESLint runs during `npm install`",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Giovanni Tirloni",
  "date": "2018-07-25T15:37:09.549-0400",
  "updated": "2024-07-22T10:35:23.718-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-07-25T15:38:41.338-0400",
      "body": "Because BuildKite lacks a truly effective way to cleanup a failed build, when a CI job fails at \"setup\" stage, a VM is left hanging and the agent is permanently broken. This is not caused by using \"prepublish\" but it's a side-effect in practice that has led to CI failures due to linting errors.\n"
    }
  ]
}
---
The "prepublish" script in npm runs before "npm publish" and "npm install". It has been deprecated in favor of "prepublishOnly", which only runs before "npm publish".

Infusion's prepublish is defined as: "npm run buildDists && npm run buildStylus"

The "buildDists" task can fail because of linting errors. It's reasonable to expect that new code changes could contain linting errors and thus "npm install" will fail during a CI build. One side-effect is that this will be reported as a build failure but no visibility will be given and users are right to assume there was a low-level error in starting the Vagrant VM.

The [deprecation notice](https://docs.npmjs.com/misc/scripts#deprecation-note) mentions the new "prepublishOnly", which will not run during "npm install".

If this is adopted, CI can continue to have a separate stage for linting checks that won't affect the VM setup stage and when people are truly publishing a new package (which is done through fluid-publish), the code will be linted.

        
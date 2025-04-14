---json
{
  "title": "FLUID-6308",
  "summary": "fluid-publish does not work with npm 2fa",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-07-23T10:06:36.907-0400",
  "updated": "2024-07-22T10:35:09.322-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
If two factor authentication (2fa) is enabled for npm. Fluid-publish is not able to properly run because there isn't a spot to set the one-time password. The one-time password can be set using the --otp=\<code> flag for the npm call. This should be appropriately surfaced either by allowing the the code to be passed in as a parameter when fluid-publish is called, or pausing the execution of the script and requiring user intervention.

<https://docs.npmjs.com/getting-started/using-two-factor-authentication>

        
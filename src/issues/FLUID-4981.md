---json
{
  "title": "FLUID-4981",
  "summary": "Move control styles from Fat Panel stylesheet to general UIO stylesheet",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2013-04-16T10:42:12.654-0400",
  "updated": "2013-04-29T09:38:14.606-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-04-26T14:10:11.553-0400",
      "body": "Merged pull request <https://github.com/fluid-project/infusion/pull/314> into project repo at ffd7f9f9de8854b68d9172380d654afe66a16aa5\n"
    }
  ]
}
---
If we assume that integrators will make use of the current UIO preference markup templates, we should include the styling for the controls within these templates in the general UIO stylesheet instead of fat panel's only. For example, a full page version of UIO may use the same markup and the controls should be functional. If specific control styling is required, they can still be over-ridden.

        
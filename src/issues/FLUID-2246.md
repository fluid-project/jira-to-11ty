---json
{
  "title": "FLUID-2246",
  "summary": "Ensure that documentation is in agreement with activatable handler return value semantics",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2009-02-17T12:25:19.000-0500",
  "updated": "2010-03-30T13:55:18.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Keyboard Accessibility",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-30T13:55:18.000-0400",
      "body": "This issue was addressed in the keyboard-a11y documentation in time for 1.1.2\n"
    }
  ]
}
---
We previously made no stipulation about the meaning of the return value of the "activationHandler" passed to our activatable API - as of release 0.8 for <https://fluidproject.atlassian.net/browse/FLUID-2243#icft=FLUID-2243> this now has been made to agree with browser defaults, whereby a return of false will prevent any browser default action, and any other return will not. If any documentation does exist which is inconsistent with this, it needs to be changed, and if there is not any, it needs to be written.

        
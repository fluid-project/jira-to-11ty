---json
{
  "title": "FLUID-1954",
  "summary": "uPortal nightly build should update the uPortal code (as well as the fluid code) from trunk nightly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2008-12-10T12:45:04.000-0500",
  "updated": "2009-02-16T22:47:52.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-13T14:05:14.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-13T15:38:46.000-0500",
      "body": "The uportal code is now being pulled from trunk and re-deployed as part of the nightly restart script. In addition, the gallery portlet has been removed, since it is very out-of-date.\n\nThe database does not get reset nightly.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T21:37:56.000-0500",
      "body": "I've reviewed Simon and Anastasia's two commits for this issue, r6499 and r6503. They look good overall. There's clearly a bit more work to do to setup the uPortal environment correctly, as reflected by the totally commented-out reset\\_hsql.sh file, but that can come later.\n\nThis isn't actually part of the Infusion release, but it managed to get on the bug parade nonetheless. +1.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T22:47:52.000-0500",
      "body": "Verified that the uPortal demo is still functioning after a rebuild.\n"
    }
  ]
}
---
Right now, our uPortal sample site updates the fluid code nightly, but deploys into a uPortal instance that is a static checkout from trunk at a certain point.

The uPortal code itself should also update from trunk nightly.

        
---json
{
  "title": "FLUID-3197",
  "summary": "Add keyboard navigation and ARIA roles to the demo portal, particularly the code tabs.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Colin Clark",
  "date": "2009-09-22T10:43:36.000-0400",
  "updated": "2009-10-05T18:08:32.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3197/fluid-jira.patch",
      "filename": "fluid-jira.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3197/fluid-jira.patch",
      "filename": "fluid-jira.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T10:47:16.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-09-29T07:21:18.000-0400",
      "body": "Attached a patch to address this jira.\n\nMichelle could you validate that tabs work properly using the keyboard navigation?.\\\nMany thanks in advance.\n\nTested on:\\\nSO: Ubuntu 9.04\\\nLinux pr040 2.6.28-11-generic #42-Ubuntu SMP Fri Apr 17 01:57:59 UTC 2009 i686 GNU/Linux\\\nBrowsers: Firefox 3.0.14 / 3.5.3\n\n* Main changes on:\\\n  &#x20;         fluid-all/infusion/src/webapp/demos/portal/js/demoAssets.js\n\ncheers,\n\njoan.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-29T14:13:14.000-0400",
      "body": "I review the patch, it looks good.\\\nThanks Joan,\\\nJacob\n"
    },
    {
      "author": "joan garcia",
      "date": "2009-10-01T05:11:33.000-0400",
      "body": "Second patch for the issue.\n\nApplied Colin suggestion to code.\n\nPlease colin and/or jacob, could you validate this new patch (overrides previous one)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-04T10:42:37.000-0400",
      "body": "I've reviewed Joan's second patch and it looks great. I've applied it.\n\nIn reviewing, I noticed we're still missing one thing: the anchors within the tabs should be taken out of the tab order with a tabindex of -1. I'll go ahead and implement this.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-04T10:42:59.000-0400",
      "body": "Still need to remove the tab anchors from the tab order.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-04T10:52:43.000-0400",
      "body": "I've removed the anchors from the tab order. Jacob can you take a quick peek just to be sure you approve?\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-05T10:49:24.000-0400",
      "body": "There is a small bug - when the user tabs off of the Tabs, the selected Tab is no longer hilighted, and the colorized/plaintext links no longer work.\n\nIm going to make a small addition to ensure the active tab stays selected, and then post this for review.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T18:08:24.000-0400",
      "body": "I've reviewed Jacob's last fix to this issue and it looks good. Also simplifies things a fair bit to remove the unnecessary call to activatable. Tests out in FF3.5.\n"
    }
  ]
}
---
At the moment, we have a set of tabs for the code view for each component in the demo portal. These tabs have click handlers but no keyboard navigation or ARIA roles/states. We should add these, along with accessibility support to any other parts of the portal.

        
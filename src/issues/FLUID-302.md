---json
{
  "title": "FLUID-302",
  "summary": "Add a removeState() method to jARIA",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-03-03T16:12:17.000-0500",
  "updated": "2009-04-03T22:22:39.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-302/jARIA.js",
      "filename": "jARIA.js"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-04T14:40:50.000-0500",
      "body": "Another issue:\\\nThe ariaRole() method is improperly adding the \"wairole:\" prefix in FF3 (should only do it for FF2)\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-04T14:58:25.000-0500",
      "body": "The ariaRole() function should not be altering the tabindices.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-03-05T10:43:34.000-0500",
      "body": "Here's a simple refactoring of jARIA to fix the \"wairole:\" bug in FF3, get rid of the the tabindex manipulation, remove the old ARIA css microformat parsing, and general cleanup.\n\nI don't want to circulate this more widely because it is still untested and I wrote it while attending a workshop today. It's just an experiment at this point. Let me know how it works for you.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T14:19:46.000-0400",
      "body": "We should ensure that we are up to date with jARIA.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-05-15T22:45:28.000-0400",
      "body": "I've submitted the ariaRole() patch to Chris Hoffman and he's merged it into the latest version of jARIA. It is available at:\n\n<http://www.outstandingelephant.com/jquery/plugins/jARIA.js>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-03T22:22:38.000-0400",
      "body": "Now that we've switched to using the ARIA support that's built into jquery ui core we don't depend on jARIA.\n"
    }
  ]
}
---
As we've started to use Chris Hoffman's excellent jARIA plugin, we've noticed a number of areas where we can help to improve it:

1\) Fix a bug in role namespacing in FF3 (DONE)\
2\) There is no way to remove a state (e.g "activedescendent"). Perhaps a "removeState() method?

Other changes, as we discover them, could be added to this issue.

        
---json
{
  "title": "FLUID-3849",
  "summary": "No screen reader indication whether a column is/will be sorted ascending or descending",
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
  "reporter": "Anastasia Cheetham",
  "date": "2010-11-18T12:56:59.147-0500",
  "updated": "2010-12-13T17:32:55.720-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": "XP + FF3.6 + NVDA\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3848/",
      "key": "FLUID-3848",
      "summary": "No screen reader indication that a column has been used for sorting"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3850/",
      "key": "FLUID-3850"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-19T16:16:42.029-0500",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-30T12:16:32.036-0500",
      "body": "Justin and I tried adding aria-sort into the pager demo, but NVDA-main-3946 and JAWS 12.0 didn't report the sort strategy (ascending/descending) after you click on the column with a mouse or keyboard. We have looked into the actual accessibility DOM tree with Accessibility Probe, there is a \"sort=ascending\" property in the attribute within ia2. This means that the aria-sort are reflected on FF3.6 but the screen readers are not picking it up. We believe it is a problem with the screen readers and we are waiting for a reply from them.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T17:30:06.932-0500",
      "body": "The fixes committed against this and <https://fluidproject.atlassian.net/browse/FLUID-3848#icft=FLUID-3848> look good, and work well to address the issues.\n"
    }
  ]
}
---
When using NVDA with the Pager, there's no way to know whether or not a sorted column is sorted ascending or descending.

        
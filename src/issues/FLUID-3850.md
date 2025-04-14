---json
{
  "title": "FLUID-3850",
  "summary": "After column sorted, no screen reader confirmation/indication of the fact",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2010-11-18T12:59:31.331-0500",
  "updated": "2010-12-13T17:33:09.262-0500",
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
      "url": "/browse/FLUID-3849/",
      "key": "FLUID-3849",
      "summary": "No screen reader indication whether a column is/will be sorted ascending or descending"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-19T16:17:35.470-0500",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-30T12:16:39.984-0500",
      "body": "Justin and I tried adding aria-sort into the pager demo, but NVDA-main-3946 and JAWS 12.0 didn't report the sort strategy (ascending/descending) after you click on the column with a mouse or keyboard. We have looked into the actual accessibility DOM tree with Accessibility Probe, there is a \"sort=ascending\" property in the attribute within ia2. This means that the aria-sort are reflected on FF3.6 but the screen readers are not picking it up. We believe it is a problem with the screen readers and we are waiting for a reply from them.&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-07T16:24:11.176-0500",
      "body": "Re: patch 3\n\nWorks great with voice over / safari, but worth noting there is an interesting difference to VO vs nvda on firefox.  After using the sort link, nvda rereads the page, but VO just rereads the sort link. I prefer the latter behaviour - clean and direct feedback. ex. \"Select to sort\" (click) \"Select to sort asc, currently in desc\"&#x20;\n\nStill waiting on fix for I8\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T17:30:28.142-0500",
      "body": "The fixes committed against this and <https://fluidproject.atlassian.net/browse/FLUID-3848#icft=FLUID-3848> look good, and work well to address the issues.\n"
    }
  ]
}
---
Using the Pager with NVDA:\
Once a column header has been activated to sort by that column, the screen reader reads the general pager summary again, but other than that, there's no sense as to whether or not the sort happened. The page summary doesn't change as a result of the sort, so you can't even infer it.

        
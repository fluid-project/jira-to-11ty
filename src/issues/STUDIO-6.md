---json
{
  "title": "STUDIO-6",
  "summary": "UIO menu jumps at the page refresh",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-12-06T11:21:06.461-0500",
  "updated": "2014-03-04T11:53:58.957-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-12-06T16:56:46.373-0500",
      "body": "The \"fluid studios\" version that uses Antranig's refactored UIO branch (<https://github.com/amb26/infusion/tree/FLUID-4525>) has been pushed into Github @&#x20;\n\n<https://github.com/cindyli/studios.fluidproject.org/tree/STUDIO-6>&#x20;\n\nThis version resolves the UIO menu jumping issue at the page load but introduces a blank gap above the UIO menu. This gap is gone once the UIO panel is opened an closed.&#x20;\n\nThe cause of the blank gap is from the removal of the initial setting of the style \"display: none\" from the div that contains the iframe. This style is set back once the slidingPanel function hidePanel() is called. That's why the gap disappears once the UIO is opened and closed once.\n\nThe ideal solution is to get rid of the gap without the presence of the initial \"display:none\" since according to the discussion with Antranig who said in the channel (<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2011-12-06):>\n\n\"I had to remove the \"display: none\" from the initial markup since it caused a horrifying timing issue\\\nOn FF in particular, the iframe existed in a crazy kind of \"half-allocated state\"\\\nIt had JS which had initialised but had not got the data structures for its DOM allocated\\\nSo any CSS operations would fail with a hard exception\"\n\nThe finding so far with where the gap comes from is that: it's from \\<iframe> node since once the node is deleted from DOM, the gap disappears. But I haven't identified any css within \\<iframe> that causes this gap.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-12-14T11:11:52.276-0500",
      "body": "Antranig has fixed the both gap and jumping issue with UIO menu. He will integrate the fix into his pull request for FLUID-4525 (<https://github.com/fluid-project/infusion/pull/189/files>).&#x20;\n\nThe decision is, once this pull request gets into the infusion master project repo, the infusion library used by Fluid Studios will be upgraded to the latest as the solution to this issue. We will live with the UIO menu jumpingness before the upgrade happens.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-04T11:53:58.956-0500",
      "body": "The fluid studios site has been taken down. There are no current plans to replace it.\n"
    }
  ]
}
---
At the page refresh, the UIO menu first appears with a blank gap at the top that gets closed quickly. which produces an impression that the UIO menu jumps. &#x20;

        
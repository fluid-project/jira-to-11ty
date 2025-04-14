---json
{
  "title": "FLUID-1603",
  "summary": "Make unit tests pass again :P",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2008-09-22T16:06:59.000-0400",
  "updated": "2008-09-25T14:44:41.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T16:09:18.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-24T03:41:35.000-0400",
      "body": "Reorderer family tests functioning again as of revision 5659\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-24T08:56:31.000-0400",
      "body": "There is an error when running the reorderer based unit tests in IE\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-24T09:35:32.000-0400",
      "body": "some of the tests are failing again, unfortunately\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-24T10:13:07.000-0400",
      "body": "Recovered lightbox-based tests at revision 5662. 1 subcase of LayoutCustomiser test still fails under IE6.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-24T13:21:44.000-0400",
      "body": "Commits up until revision 5664 have been reviewed by either myself or Antranig.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-24T13:39:17.000-0400",
      "body": "The following tests are still failing in IE\n\nLightbox Tests:\n\n3 (28, 29, 34, 35)\\\n15 (76, 77, 82, 83)\\\n17 (124, 125, 130, 131)\n\nLayout Customizer Tests:\n\n2 (3, 5)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-24T16:37:41.000-0400",
      "body": "I have spent some time investigating the IE Lightbox failures, which are all failures in the new test fixture I put in for <https://fluidproject.atlassian.net/browse/FLUID-1589#icft=FLUID-1589>. There appears to be some really crazy condition whereby IE will \"duplicate\" a DOM node and therefore lead to the keyboard event target not being recognised. This condition will \"go away\" if an alert() is placed in the focus handler. It seems this test failure, despite being extremely disturbing, does not correspond to a real failure. Will continue to investigate.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-25T12:37:23.000-0400",
      "body": "Tests all pass now in FF and IE. Commits have been reviewed.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-25T14:44:41.000-0400",
      "body": "Verified fix using:\n\nIE 7 (Win Vista)\\\nIE 6 (Win XP)\n"
    }
  ]
}
---

        
---json
{
  "title": "FLUID-2201",
  "summary": "Renderer Test 1.3 fails: using IE",
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
  "reporter": "Justin Obara",
  "date": "2009-02-06T08:36:37.000-0500",
  "updated": "2009-02-06T11:47:39.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Renderer"
  ],
  "environment": "IE\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-06T10:43:16.000-0500",
      "body": "Fixed at revision 6438 - \\\nIt seems we need quite a refined strategy to avoid the breakage of markup which is set via innerHTML.\\\nYesterday's change, to the direct use of innerHTML rather than jQuery.html() was prompted by the observation that jQuery.html() causes table markup to be destroyed under FF - setting the contents of a tbody to a raw list of tr causes all of the table packaging material to disappear - since jQuery's strategy is to always set the innerHTML of a plain div, and then to recover it.\n\nHowever, the jQuery strategy, while breaking on FF, is vital on IE - IE will simply throw a runtime error when presented with any bare table markup - this is even attested at the MS knowledgebase! <http://support.microsoft.com/kb/239832> - they insist that innerHTML of most table nodes is read only...&#x20;\n\nSo, we now have to adopt a mixed strategy in the renderer, of using jQuery.html on IE, for non-explosion, and direct innerHTML on FF, for non-destruction. This seems to work for now...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T11:47:39.000-0500",
      "body": "Verified fix using:\n\nIE 6 (Win XP, Win 2000)\\\nIE 7 (Win XP, Win Vista)\n"
    }
  ]
}
---
Renderer Test 1.3 fails

<http://build.fluidproject.org/fluid/tests/fluid-tests/Renderer-test.html>

        
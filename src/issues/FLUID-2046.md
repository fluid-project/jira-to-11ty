---json
{
  "title": "FLUID-2046",
  "summary": "Renderer version of pager throws an error; using IE",
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
  "reporter": "Justin Obara",
  "date": "2009-01-05T10:47:12.000-0500",
  "updated": "2009-01-13T11:24:39.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Pager"
  ],
  "environment": "IE 6, IE 7 (Win XP)\\\nIE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-06T12:06:58.000-0500",
      "body": "Bug Parade  0.7 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-01-08T12:53:49.000-0500",
      "body": "removed trailing commas\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-08T15:06:55.000-0500",
      "body": "As well as the trailing commas, there is a really fundamental issue that innerHTML is corrupt in IE in an entirely new bizarre and destructive way.&#x20;\n\nThe retrieved text for parsing reads like this on IE: \"\\<LI class=page-link>\\<A href=\"#\">1\\</A> \\\n\\<LI class=page-link>\\<A href=\"#\">2\\</A> \\</LI>\" - that is, the closing \\</LI> tag is completely missing. This is apparently a \"well-known and long-standing\" issue with all current versions of IE (from IE 5 through IE7) which is attested at these links:\n\n<http://objectmix.com/javascript/120675-ul-innerhtml-ex.html>\n\n<http://www.quirksmode.org/bugreports/archives/explorer_7_beta_2/index.html>\n\nThe parser will need to be hacked to specially invent the required closing tags.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-09T16:16:17.000-0500",
      "body": "Fixed at revision 6292 with testcase in RendererTests\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-01-13T11:06:26.000-0500",
      "body": "I reviewed the code commits - they look reasonable.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-13T11:24:39.000-0500",
      "body": "Verified fix using:\n\nIE 6, IE 7 (Win XP)\\\nIE 7 (Win Vista)&#x20;\n"
    }
  ]
}
---
Renderer version of pager throws an error; using IE

Steps to reproduce:

1\) Open the renderer version of pager\
<http://build.fluidproject.org/fluid/sample-code/pager/renderer/pager-render.html>

Notice that an error is thrown as the page loads

Line: 24\
File: pager-render-example.js

        
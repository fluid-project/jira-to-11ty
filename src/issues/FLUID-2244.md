---json
{
  "title": "FLUID-2244",
  "summary": "Pressing tab, after selecting a page, places focus on the first page link",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-02-17T10:15:25.000-0500",
  "updated": "2010-12-14T11:31:17.241-0500",
  "versions": [
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3847/",
      "key": "FLUID-3847"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2244/FLUID-2244-patch.txt",
      "filename": "FLUID-2244-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-05-15T13:48:33.000-0400",
      "body": "Fixed at revision 7176 - new \"delegate plugin\" and global focus manager\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-19T09:07:41.000-0400",
      "body": "This issue has been fixed for this page:\\\n<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#>\n\nbut not for this one:\\\n<http://build.fluidproject.org/fluid/sample-code/pager/renderer/pager-render.html#>&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-06-03T13:53:47.000-0400",
      "body": "This kind of problem affects almost all of our keyboard accessibility cases. In general, clicking something with a mouse, and then expecting that keyboard focus has also followed this selection does not work (cf \"accessible tabs\", etc.)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:17:26.371-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T14:41:02.675-0500",
      "body": "Try preventing the default action of the link, which is adding # to the end of the url. If this doesn't work, we may need to reassess for bug parade\n\nAlso this issue actually appears to be working in the current trunk, but regressed in the aegis branch\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T16:08:17.424-0500",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-30T12:32:05.460-0500",
      "body": "As part of the commit to <https://fluidproject.atlassian.net/browse/FLUID-3828#icft=FLUID-3828> & <https://fluidproject.atlassian.net/browse/FLUID-3829#icft=FLUID-3829> at r10313, the default action of the links were prevented. This didn't however solve this issue. It may have something to do with the id. Previously the pager had been using the same type of page link to represent all of the page links. Now it has switched to using the disabled type of page link for the current page. This is what is causing the issue. It seems thought that even switching the disabled page link to have the same markup as the other page links doesn't help, which is what leads me to suspect the differing id as the culprit. The id's on the standard page links look something like \"page-link:link1\" whereas the current page link id's look like \"page-link:disabled1\". If the current page were using the same type of page link as the others, the id would stay the same after navigating to that page, and focus would remain.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-30T12:37:20.115-0500",
      "body": "I've confirmed that it is related to the id.\n\nIn fluidRenderer.js\n\nline: 1446\\\nlastId is set to the id of the last focused element\n\nline: 1472 - 1477\\\nThe element identified by lastId is found. If it exists, focus is called on it.&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-12-01T11:55:03.610-0500",
      "body": "Instead of disabling the current element with the \"page-link:disabled\", we now apply the currentPage style onto the current element.  Also removed all \"flc-pager-pageLink-disabled\" from the Pager-tests.html.  Lastly, the pager tests are also adjusted respectively. &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-12-01T12:52:47.623-0500",
      "body": "Replaced patch. &#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-01T17:02:20.146-0500",
      "body": "Committed Harris' patch ( FLUID-2244-patch.txt ) which solves the issue of the changing id's by removing the notion of a disabled link. The code had recently been changed to use disabled links for the current page, which resulted in the id of the element changing, and the lack of focus after rerendering.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-14T11:31:10.819-0500",
      "body": "Functionally tested by Mike, code reviewed by me. All systems go.\n"
    }
  ]
}
---
Pressing tab, after selecting a page, places focus on the first page link. Focus should be moved to the next page link

Steps to reproduce:

1\) Open the renderer version of pager\
<http://build.fluidproject.org/fluid/sample-code/pager/renderer/pager-render.html#>

2\) Click one of the page links

3\) Using the keyboard, tap the "Tab" key

Notice that focus is placed on the first page link, instead of the next one.&#x20;

        
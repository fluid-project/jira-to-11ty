---json
{
  "title": "FLUID-3953",
  "summary": "Almost all image reorderer unit tests are failing: IE 9",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-12-18T13:14:32.906-0500",
  "updated": "2011-06-02T16:13:32.331-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "IE9 (Win 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3953/Screen shot.png",
      "filename": "Screen shot.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3953/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-18T13:15:29.527-0500",
      "body": "\"Screen shot\" shows some of the failing tests\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-10T14:16:03.313-0400",
      "body": "Another screen shot of the ImageReorderer.  The error message is a bit different than the Dec 18, 2010's screen shot.&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-16T16:08:01.778-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-20T15:53:45.000-0400",
      "body": "On IE9, if an element has both attribute \"id\" and \"rsf:id\", then IE9 overwrites \"id\" to \"rsf:id\".  Causing a \"not found\" for \"id\".\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-20T15:56:55.546-0400",
      "body": "Added unit tests for IE9 and attributes with both \"id\" and \"rsf:id\", <https://github.com/harriswong/infusion/tree/FLUID-3953>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-26T10:54:09.751-0400",
      "body": "Seems to be related to document mode in IE9.  If we switch Ducument Mode to IE8 and below, the tests will pass.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-26T15:25:38.405-0400",
      "body": "\\==== Brief ====\\\nIt seems like rsf:id + IE9 Document mode is the cause of this problem.  The details on the differences between IE8 and IE9 that causes this failure are uncertain.  I have tried using different doctypes, and the result is not consistent.  I have also tried using HTML5's doctype, still no luck. &#x20;\n\n\\==== Steps to Reproduce ====\\\n1\\. create an HTML page that loads jquery.js and fluid.js\\\n2\\. create 2 divs, \\\n\\<div id=\"test-no-rsf-id\">No rsf:id\\</div>\\\n\\<div id=\"test-with-rsf-id\" rsf:id=\"apple\">with rsf:id\\</div>\\\n3\\. run fluid.jById('test-with-rsf-id'); on IE9, it will fail.\\\n4\\. run fluid.jById('test-no-rsf-id'); on IE9, it should pass.\n\n\\==== More Details ====\\\nIf we run document.getElementById('test-with-rsf-id').getAttribute('id'), it will return null.\\\nIf we try to get the list of attributes,\\\ndocument.getElementById('test-with-rsf-id').attributes\\[0].name --> 'rsf:id'\\\ndocument.getElementById('test-with-rsf-id').attributes\\[1].name --> 'rsf:id'\\\nIt seems like the attribute \"id\" is overwrote by rsf:id in IE9's DOM. Where as in FF and Chrome, it's\\\ndocument.getElementById('test-with-rsf-id').attributes\\[0].name --> 'id'\\\ndocument.getElementById('test-with-rsf-id').attributes\\[1].name --> 'rsf:id'\\\nNote: This is true even without both jQuery and Fluid libraries.\n\n\\==== Unit test ====\\\nI have added a unit test for this, <https://github.com/harriswong/infusion/commit/c254cc75d213b534f3898e07c96525e590d84339>\n\n\\==== Suggested Fix ====\\\nThere are a few options to address this problem:\\\n1\\. Remove rsf:id, since image reorderer doesn't need rsf:id.  \\\n2\\. Add meta-data to force IE9 to use other document mode.  \\<meta http-equiv=\"X-UA-Compatible\" content=\"IE=xxx\" >, <http://msdn.microsoft.com/en-us/library/cc288325%28v=vs.85%29.aspx>\\\n3\\. This could be an IE9 bug since it makes no sense to overwrite the \"id\" attribute with our custom attribute \"rsf:id\".  We may want to mark this test case as \"expected to fail with IE9\" and wait till it's fixed, then re-test it again.\n\n\\==== Additional info ====\\\nPosted a thread in MSDN, <http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/dca80bb2-20b2-4029-8600-cd363cc64ddd>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-30T09:12:44.685-0400",
      "body": "Antranig has made a pull request for a potential fix.\\\n<https://github.com/fluid-project/infusion/pull/57>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-02T16:13:32.329-0400",
      "body": "Pushed antranig's fix at ca843c2cffac362c095ffdf00f8e6529336b9a6d\n"
    }
  ]
}
---
Almost all of the Image Reorderer unit tests are failing in Win7 of IE9.

The failing tests all have errors like.

1.Died on test #1: Problem in document structure - picked up element \[object HTMLDivElement] for id gallery:::gallery-thumbs::: without this id - most likely the element has a name which conflicts with this id

Steps to reproduce:

1\) Run the image reorderer unit tests\
<http://build.fluidproject.org/infusion/tests/component-tests/reorderer/html/ImageReorderer-test.html>

        
---json
{
  "title": "FLUID-3824",
  "summary": "The pager appears broken until you change the number of items per page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-11-04T10:25:54.658-0400",
  "updated": "2010-11-19T12:55:03.547-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3824/FLUID-3824.patch.txt",
      "filename": "FLUID-3824.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-04T12:49:53.026-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-08T16:45:02.429-0500",
      "body": "* Took out JSON.parse from line 29, 31.  The variables are already in object form, shouldn't be parsed. &#x20;\n* Also added a \"pageSize\" in the model option within fluid.paper(), pageSize is not defined at initialization and results a \"NaN\", then causes an error thrown by computerPageCount() in component/paper/js/Pager.js.  Added \"pageSize: 10\" to match the initial page size of the demo page.&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-10T16:45:47.798-0500",
      "body": "JSON.parse error is only thrown on my localhost, it seems my Apache server is converting the JSON string to Objects after the Ajax called.  If I run the html from my file system instead of my localhost, it does require the JSON.parse. &#x20;\n\nThe \"pageSize: 10\" did fixed the problem, but I am not sure if this is the best way to address this.  I dug a bit into the code and found out that the values from the Model aren't being merged as they should.  This has something to do with the perserve policy (in Fluid.js - line 536).  The condition return false for !fluid.mergePolicyIs(newPolicy, \"preserve\"). I think I will have to ping Antranig on this.  Model has a \"perserved\" policy which doesn't merge. &#x20;\n\nIn the demo, Model is being override with a\\\nmodel: {\\\npageIndex: 3\\\n},\\\nSo the pager actually starts at page 4.  However, with the preserved policy, pageSize is now not set (defaulted to 10) and became undefined, which broke the demo. &#x20;\n\nShould the fix be just fixing the demo?  Or should there be another function that we should call to trigger pageIndex change?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-12T13:44:09.032-0500",
      "body": "Two separate fixes committed for the two parts of the issue - one adjusts the behaviour of the core framework mergePolicy of \"preserve\" and the other applies jQuery .ajax dataType of \"text\" to ensure that JSON data is just decoded once on all platforms (it seems that some localhost servers might synthesis a content-Type header based on the file extension, a guess based on Harris' report)\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-19T12:55:03.545-0500",
      "body": "I've reviewed the changes for this - they look sound, and should ensure that similar problems don't arise.\n"
    }
  ]
}
---
Steps to reproduce:

1\) open the integration example of pager\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>

2\) Notice that there is no data, no page links, and NaN values representing the  item range

3\) Changing the number of items per page will cause the pager to work properly

        
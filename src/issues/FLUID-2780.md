---json
{
  "title": "FLUID-2780",
  "summary": "Clicking on either of the last two page links will throw an error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-05-27T10:27:08.000-0400",
  "updated": "2009-05-27T14:01:00.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2780/fluid-2780.txt",
      "filename": "fluid-2780.txt"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-05-27T13:19:05.000-0400",
      "body": "Attached patch which guards against this issue twice - There are two parts to this problem.&#x20;\n\nFirstly, the ids assigned to the page links in this case are not assigned stably, so the last 3 links in general will not have corresponding ids once the page link control is rerendered. This is now handled by setting the \"localID\" property for the control which now stably associates its id with the page number to which it corresponds.\n\nSecondly, this error should not be thrown under any circumstances, even if the element to be focused no longer exists. So the relevant code in the renderer is now guarded.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-27T14:01:00.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE7, IE8 (Win Vista)\n"
    }
  ]
}
---
Clicking on either of the last two page links will throw an error

Steps to reproduce:

1\) Open the Sakai Site Settings example \
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#>

2\) Click on either the last or second last page link

Notice that an error is thrown

Error:\
fluid.jById(lastId).focus is not a function\
<http://build.fluidproject.org/infusion/framework/renderer/js/fluidRenderer.js>

Another way to generate this error:

* open Sakai Site Settings example: <http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#>
* change the sort order by clicking on the table header
* click on the page number (for example 3)
* click next
* click on other page number (for example 18)
* notice that the list does not update and if you click next again, you jump to page 5 (if you used page numbers above)

        
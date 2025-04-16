---json
{
  "title": "FLUID-2720",
  "summary": "Only one file is visible in the file queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-05-13T16:04:57.000-0400",
  "updated": "2011-02-28T16:45:18.283-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE 8 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T10:11:27.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-21T11:50:31.000-0400",
      "body": "so the first row that gets added to the queue is added normally and all subsiquent rows are added with display: none. very odd.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-21T12:32:20.000-0400",
      "body": "known jQuery bug: <http://dev.jquery.com/ticket/4440>\\\nin IE8 only the first row will be shown if the row is hidden before showing\n\nrow problem... three choices to fix:\\\n1\\. special case IE8 and either not hide before show (which is just for animation)\\\n2\\. not animate for all browsers\\\n3\\. change table to divs, or maybe a fancy list (tempting would be more like the error list then)\n\nthere is one more thing to change and that is to try...\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-21T13:24:04.000-0400",
      "body": "4th option... which I have tested and works...&#x20;\n\nnot doing a $().hide() on the row, instead start the row with display: none;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-21T13:29:09.000-0400",
      "body": "spoke to soon... doesn't work... we're back to the 3 options\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-21T17:03:28.000-0400",
      "body": "We've gone with option 1, which means that any code or styles which hide the row must be removed, including the template styling, before the row created.&#x20;\n\nThe two changes are in Uploader.js:\n\nIn addFile (line 360):\\\n/\\* <https://fluidproject.atlassian.net/browse/FLUID-2720#icft=FLUID-2720> - do not hide the row under IE8 \\*/\\\nif (!($.browser.msie && ($.browser.version >= 8))) {\\\nrow\\.hide();\\\n}   &#x20;\n\nIn prepareTemplateElements (line 457):\\\n/\\* <https://fluidproject.atlassian.net/browse/FLUID-2720#icft=FLUID-2720> - do hide the row under IE8 \\*/\\\nif ($.browser.msie && ($.browser.version >= 8)) {\\\nthat.rowTemplate.removeClass(that.options.styles.hiddenTemplate).removeClass(that.options.styles.rowTemplate);\\\n}\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:18.282-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
Only one file is visible in the file queue.

Steps to reproduce:

1\) Open the either the server or the demo version of uploader\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>\
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

2\) Add multiple files to the file queue.

Notice that only one of the files is visible in the file queue. If you upload the files, all of them upload.

        
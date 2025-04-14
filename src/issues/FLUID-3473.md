---json
{
  "title": "FLUID-3473",
  "summary": "The Infusion Builder sometimes throws an error after downloading a package and reloading the page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2010-01-07T16:49:30.000-0500",
  "updated": "2013-09-06T14:04:18.757-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "Firefox 3.5 and Safari 4.0.4, Mac OS X 10.5\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3473/FLUID-3473.patch.txt",
      "filename": "FLUID-3473.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-01-07T16:53:16.000-0500",
      "body": "With a bit of patience, I can also reproduce this issue on the daily build instance of the Builder running at <http://forge.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>. Here's the error message I encountered:\n\n<http://www.pastie.org/770754>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-08T16:22:41.000-0500",
      "body": "Through a day's worth of testing, we've seen that this issue is consistently reproducible, thought still vaguely elusive.\n\nWe think that ultimately this issue is caused by the fact that we're returning the file's binary data directly as the result of a POST request. Proper use of HTTP should not return a resource as the result of a POST, so we should probably do the following:\n\n1\\. Ensure that the built file is Web-visible (i.e. has a proper URL to GET to)\\\n2\\. From the form submission POST, redirect the browser to a GET request for the file\n\nI expect that this should address the issue of POST requests getting resubmitted by the browser unexpectedly. In addition, we can further work around this problem by not hiding the Builder's main page upon submitting the form, ensuring that the user has no reason to refresh the Builder page unless they, well, want to refresh it.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-09-07T12:11:51.879-0400",
      "body": "The cause of the issue is because the server side script is not ceased when the download completes. A refresh right after the download forces the server script to push down the next page before the download request completes, in which case the refreshed page considers there is server output ahead of its http header, which is not allowed.\n\n<https://fluidproject.atlassian.net/browse/FLUID-3473#icft=FLUID-3473>.patch.txt fixes 2 issues:\\\n1\\. stop the server script once the download completes;\\\n2\\. use file\\_get\\_contents() instead of fpassthru() to retrieve the zip file for download. fpassthru() somehow makes the value of CONTENT-LENGTH, along with the whole http header, displayed on the page refreshed right after the download. This might because the fclose() never have a chance to be called for the file handler opened for fpassthru().\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-09-09T14:48:04.885-0400",
      "body": "Committed Cindy's patch at revision 10032\n"
    }
  ]
}
---
I can't get this to reproduce every time, but periodically I can. Steps to reproduce:

1\. Go to the Builder production server: <http://infusion-builder.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>\
2\. Pick a set of modules to download\
3\. Download the page\
4\. Refresh the page

Here are the error messages I was getting back from the PHP interpreter:

<http://www.pastie.org/770719>\
<http://www.pastie.org/770723>\
<http://www.pastie.org/770736>

Note that these messages are the same each time, but some are more complete than others.

        
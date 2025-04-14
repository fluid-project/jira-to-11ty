---json
{
  "title": "FLUID-3988",
  "summary": "When uploading non-image files to the image gallery demo using HTML5 uploader, things go wacko",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "James Yoon",
  "date": "2010-12-21T11:15:39.478-0500",
  "updated": "2011-03-03T16:29:41.466-0500",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3.6/WinXP\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4017/",
      "key": "FLUID-4017",
      "summary": "Total file progress information is inaccurate when uploading files with the HTML 5 version of Uploader"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2010-12-22T14:40:07.756-0500",
      "body": "Asynchronous XHR is responsible for this wackiness.   XHR processes are executed without any guarantee that the previous file has been completed uploaded to the server.  We may want to wait for the current file to completely upload to the server before processing the next so that it is consistent with the SWF Uploader. &#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-21T17:36:27.548-0500",
      "body": "These two issues appear to have the same underlying fix--we should be uploading files one at a time.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-27T11:09:06.135-0500",
      "body": "Related to <https://fluidproject.atlassian.net/browse/FLUID-4017#icft=FLUID-4017>.   Patch has been posted for review.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-03-03T16:29:41.460-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4017#icft=FLUID-4017> has been fixed and pushed into the main repository.\n"
    }
  ]
}
---
To reproduce:

1\. Visit <http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>\
2\. Upload a set of non-image files around \~5-10MB each\
3\. The uploader progress bar rapidly goes left-right multiple times in a seemingly arbitrary way, and then finishes uploading far quicker than it should

        
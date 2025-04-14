---json
{
  "title": "FLUID-3996",
  "summary": "In image gallery upload demo, deleting a file that's in uploader queue will halt upload at that file and requires resume to complete uploading (HTML5 uploader)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "James Yoon",
  "date": "2010-12-21T13:57:30.703-0500",
  "updated": "2014-05-26T15:42:52.561-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF3.6/Win7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2010-12-21T16:26:25.271-0500",
      "body": "Creates an Ajax error in the browser.   We are trying to upload a file into the image gallery that doesn't exist in the file system.  It looks like additional error handling should properly address this scenario.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-26T15:42:52.552-0400",
      "body": "The demo this is referring to no longer exists. We should create a new issue against the uploader if it is found to be an issue still in other instances.\n"
    }
  ]
}
---
To reproduce:

1\. Visit <http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>\
2\. Add a number of files, but do not upload yet\
3\. Delete a file in the middle from the file system\
4\. Upload\
5\. Uploading will stop at the file that was deleted, and requires clicking "Upload" again to resume uploading the rest of the files

        
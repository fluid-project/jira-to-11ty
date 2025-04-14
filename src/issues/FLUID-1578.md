---json
{
  "title": "FLUID-1578",
  "summary": "Can't browse files on Windows 2000 with a locally running instance of the Uploader, using FF3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2008-09-16T16:44:03.000-0400",
  "updated": "2009-02-04T14:07:18.000-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-16T16:46:20.000-0400",
      "body": "Error from Firebug\n\n\\[Exception... \"'Invalid function name' when calling method: \\[nsIDOMEventListener::handleEvent]\" nsresult: \"0x8057001e (NS\\_ERROR\\_XPC\\_JS\\_THREW\\_STRING)\" location: \"\\<unknown>\" data: no]\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-16T19:17:57.000-0400",
      "body": "I suspect that this is the same old permissions problem for running the local version of the Uploader. Cna you say what version you were using and whether you were using it in a server environment.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-17T08:48:50.000-0400",
      "body": "Using Uploader 2 locally.\n\nI set the permissions via the macromedia web site which allowed me to run it using IE 6.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-17T11:13:40.000-0400",
      "body": "I tested this again today and the same issue occurred.&#x20;\n\nUploader 1 works from the build site but not running locally, so it seems that it may be a local issue where firefox is having a problem picking up the swf file.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-19T15:02:59.000-0400",
      "body": "Since this seems to be a Windows 2000 problem only and restricted to the local case which is really only for testing anyway, I'm suggesting that we mark this \"will not fix\".&#x20;\n\nJustin has asked me to leave it open for now.&#x20;\n\nI'm going to update the Title of the bug to indicate the exact situation of the bug and downgrade the criticality\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-04T14:07:18.000-0500",
      "body": "It may have been fixed with an update to jQuery or SWFUpload. Or it may have been an issue with the virtual machine. At any rate, it appears to be working now\n"
    }
  ]
}
---
The browse files button has does not open the file open dialog. I have updated the location of the swf upload file and updated flash. It is working in IE.

Steps to reproduce:

1\) Open the uploader

2\) Click the "Browse Files" button. Notice that nothing happens

        
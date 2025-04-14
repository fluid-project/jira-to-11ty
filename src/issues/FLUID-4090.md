---json
{
  "title": "FLUID-4090",
  "summary": "Browser error message when performing any action in IE6, Windows XP",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Emily Servais",
  "date": "2011-02-18T14:09:43.208-0500",
  "updated": "2011-02-24T12:59:23.669-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE6, Windows XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-02-24T12:59:23.666-0500",
      "body": "I couldn't reproduce this using IE 6 in my win xp virtual machine. I wonder if this had something to do with running the IE6 standalone.\n"
    }
  ]
}
---
Loading page and performing any action produces browser error message "Exception: Error Message: Could not set the value property. Unspecified error."&#x20;

To reproduce:

1\) Open the template file in IE 6 on Windows XP:\
<http://build.fluidproject.org/sakai-imagegallery2-web/site/AddImages/>

2\) Error message "Exception: Error Message: Could not set the value property. Unspecified error." appears. Clicking "OK" several times allows you to continue to Uploader.

3\) Then, clicking "Browse files" produces the same error message, but also opens OS file open dialog box. File(s) can be added to queue.

4\) Clicking "Upload" also produces the same error message. I successfully uploaded files twice; other attempts produced the yellow bar and "File upload error: a network error occurred or the file was rejected (reasons unknown)"

        
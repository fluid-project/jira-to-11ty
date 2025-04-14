---json
{
  "title": "FLUID-2012",
  "summary": "Server version of uploader not working with flash 9",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-17T13:59:29.000-0500",
  "updated": "2008-12-17T15:39:33.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-17T15:39:33.000-0500",
      "body": "fixed at r6246\n\nverified using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Server version of uploader not working with flash 9

Steps to reproduce:

1\) Open the server version of uploader:\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/#>

2\) click the "Browse Files" button

Notice that nothing happens or an exception is thrown

Firebug throws the following exception:\
\[Exception... "'Invalid function name' when calling method: \[nsIDOMEventListener::handleEvent]" nsresult: "0x8057001e (NS\_ERROR\_XPC\_JS\_THREW\_STRING)" location: "\<unknown>" data: no]

        
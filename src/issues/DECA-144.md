---json
{
  "title": "DECA-144",
  "summary": "Refreshing capture page drops all captured images from the ui",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-07-15T15:56:53.897-0400",
  "updated": "2012-01-10T09:40:13.798-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-19T12:53:11.392-0400",
      "body": "Bug Parade Decapod 0.4&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-19T13:09:52.981-0400",
      "body": "It appears the the urls are coming back incorrectly on a page reload.\n\nHere is the return value after posting the images:\n\n{\"spread\": \"/book/capturedImages/decapod-0001-mid-decapod-0002-mid.png\", \"right\": \"/book/capturedImages/decapod-0002.jpg\", \"thumb\": \"/book/capturedImages/decapod-0001-mid-decapod-0002-mid-thumb.png\", \"left\": \"/book/capturedImages/decapod-0001.jpg\"}\n\nHere is the return value from the get after reloading:\n\n\\[{\"spread\": \"${book}/capturedImages/decapod-0001-mid-decapod-0002-mid.png\", \"right\": \"${book}/capturedImages/decapod-0002.jpg\", \"thumb\": \"${book}/capturedImages/decapod-0001-mid-decapod-0002-mid-thumb.png\", \"left\": \"${book}/capturedImages/decapod-0001.jpg\"}]\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-19T17:11:40.660-0400",
      "body": "This issue was resolved at revision d3abd3b12a99, along with web tests that show the issue and the fix.\n"
    }
  ]
}
---
Steps to reproduce:

1\) load the server and navigate to the capture page

2\) capture a few images

3\) click refresh on the browser\
Notice that all of the captured images are no longer present. The thumbnail cells are still there but are empty.

        
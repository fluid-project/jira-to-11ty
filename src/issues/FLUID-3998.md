---json
{
  "title": "FLUID-3998",
  "summary": "In regular upload demo, deleting a file that's in uploader queue will will do nothing--deleted file appears to upload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "James Yoon",
  "date": "2010-12-21T14:02:12.408-0500",
  "updated": "2010-12-21T16:22:55.923-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF3.6/Win7\\\nIE8/Win7\\\nSafari5/MacOS10.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Erin Yu",
      "date": "2010-12-21T14:54:04.355-0500",
      "body": "The same behaviour is observed in Safari5/MacOS10.6.\\\nIn FF3.6/MacOS10.6, however, deleting a file in the queue will disable the uploader. Clicking on Upload will not the upload process.&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-21T16:22:55.920-0500",
      "body": "Not a bug, since the uploader demo itself doesn't actually upload any files any where.   It's just a simulation .   However, see <https://fluidproject.atlassian.net/browse/FLUID-3996#icft=FLUID-3996> as this becomes an issue when we are actually uploading files to a server. &#x20;\n"
    }
  ]
}
---
To reproduce:

1\. Visit <http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>\
2\. Add some files, but do not upload\
3\. Delete a file or two from the system\
4\. Press upload\
5\. All files will appear to upload

        
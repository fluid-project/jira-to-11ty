---json
{
  "title": "DECA-306",
  "summary": "100MB file fails during upload (POST)",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2012-09-06T11:57:30.300-0400",
  "updated": "2012-12-03T10:52:09.304-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Export"
  ],
  "environment": "FF 15 (Ubuntu 12.04)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-306/Test Images.zip",
      "filename": "Test Images.zip"
    }
  ],
  "comments": []
}
---
When trying to upload a 100MB file, it is added to the queue. But the POST mysteriously fails. Possibly something to do with FF

        
---json
{
  "title": "DECA-307",
  "summary": "99MB tiff file fails at TIFF conversion",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2012-09-06T11:59:13.376-0400",
  "updated": "2012-12-03T10:51:22.065-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Export",
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-307/Test Images.zip",
      "filename": "Test Images.zip"
    }
  ],
  "comments": []
}
---
Uploading a 99MB file properly transmits the file, but during TIFF conversion for the pdf generation, it fails. This seems to be an issue with imagemagics convert tool.

        
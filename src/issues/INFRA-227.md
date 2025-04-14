---json
{
  "title": "INFRA-227",
  "summary": "Can't upload Word doc to IDRC site",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Jonathan Hung",
  "date": "2019-05-29T11:37:37.147-0400",
  "updated": "2019-05-30T11:19:28.610-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/INFRA-228/",
      "key": "INFRA-228"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/INFRA/INFRA-227/Capture.PNG",
      "filename": "Capture.PNG"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/INFRA/INFRA-227/OCADU EAS Referral.docx",
      "filename": "OCADU EAS Referral.docx"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2019-05-29T11:38:36.394-0400",
      "body": "Notes:\n\n* This bug is preventing uploading of a Doctor referral form required by VTS.\n* DOCX is an allowed file extension.\n* This bug is possibly caused by a permission error on the directory.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2019-05-30T11:16:59.523-0400",
      "body": "This was because of an SELinux policy issue. I disabled it temporarily and uploaded the file.\n\nI'll look longer term into what the SELinux policy setting should be for the /images directory to allow uploads from within the CMS web interface.\n"
    }
  ]
}
---
Attempting to upload a Word DOCX file gives a "Failed to move file: /var/www/993da6cd/tmp/phpSSUJwp to /var/www/993da6cd/images/OCADU-EAS-Referral.docx" error.

To reproduce:\
1\. Login as administrator.\
2\. Choose "Media" in left sidebar from the main Dashboard.\
3\. Choose "Upload", and attempt to upload the DOCX file.\
4\. Note the error.

        
---json
{
  "title": "FLUID-1609",
  "summary": "The name for the Lightbox should be renamed to \"Image Reorderer\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-25T10:31:03.000-0400",
  "updated": "2008-09-25T14:51:39.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-25T10:38:26.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-25T12:49:34.000-0400",
      "body": "There is still a file called \"LightboxRSF.html\" which is the RSF template. Changing the name of this file requires us to also change the Sakai gallery integration. I'm wondering if we should wait on the renaming of this file for now.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-25T13:43:18.000-0400",
      "body": "All the commits have been reviewed. The only outstanding change is the name of LightboxRSF.html which will be done for 0.6.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-25T14:51:39.000-0400",
      "body": "Image Reorderer appears to be working fine after the name changes\n"
    }
  ]
}
---
The name for the Lightbox should be renamed to "Image Reorderer"&#x20;

Following the "Deprecation > Compatibility file > Removal" model

        
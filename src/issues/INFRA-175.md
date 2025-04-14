---json
{
  "title": "INFRA-175",
  "summary": "Automate KVM template image creation",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Giovanni Tirloni",
  "date": "2018-05-04T15:56:23.205-0400",
  "updated": "2020-04-13T08:02:02.915-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-30T08:55:30.588-0400",
      "body": "Creation is automated with Packer so that's okay. We need to figure out how to deploy it.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-13T08:02:02.911-0400",
      "body": "There won't be a need to do this anymore in AWS/Azure/GCP.\n"
    }
  ]
}
---
Plug KVM template image creation and deployment into CI/CD.

        
---json
{
  "title": "FLUID-6290",
  "summary": "Upgrade to Fedora 28",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-05-02T11:32:46.468-0400",
  "updated": "2018-08-30T15:50:30.650-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-02T11:33:24.745-0400",
      "body": "Cannot build F28 box. Reported issue in libidn package here: <https://bugzilla.redhat.com/show_bug.cgi?id=1573966>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-14T13:06:31.725-0400",
      "body": "Workaround is to build without \"--excludedocs\" but that increases the image size. Waiting for an official fix.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-16T12:23:48.257-0400",
      "body": "Confirmed new libidn package in updates-testing repository fixes this issue.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-22T17:24:51.361-0400",
      "body": "Chrome 66 included in the new box is having issues running GPII/universal tests. Filled GPII-3077 for this.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-22T17:45:55.731-0400",
      "body": "Released Fedora 28 v20180522 vagrant box.\n\nTested successfully with fluid-project/infusion HEAD.\n\n<https://app.vagrantup.com/inclusivedesign/boxes/fedora28/versions/20180522>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-06-28T11:02:33.793-0400",
      "body": "Task is not a priority.&#x20;\n\nPR can be resubmitted when there's enough reviewers.\n\n<https://github.com/fluid-project/infusion/pull/907>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-08-30T15:50:30.650-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/907> ) into the project repo at 2060e79ff43769fe98bc1b53cfcd8a6d7c7a9c12\n"
    }
  ]
}
---
Fedora 28 was released on May 1, 2018.

Build new Vagrant box and test with usual repositories.

        
---json
{
  "title": "INFRA-44",
  "summary": "Vidyo - Enable password resets",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-09-17T16:16:22.810-0400",
  "updated": "2016-08-22T15:40:39.410-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T09:54:28.117-0400",
      "body": "Users can reset their passwords through the Vidyo client. If an user is an operator/admin, that will not work as an added security measure (defined by Vidyo and not able to be customized by us).\n\nAdmin/operators need to go to <https://conf.inclusivedesign.ca/admin> and request a password reset.\n"
    }
  ]
}
---
Password resets are not currently working. Users get the following error message if click on the "Forgotten password" link: "Email notifications for this system have not been configured. Please contact your Administrator."

        
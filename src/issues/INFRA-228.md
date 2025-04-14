---json
{
  "title": "INFRA-228",
  "summary": "SELinux enforcement on idrc.ocadu.ca prevents uploads from CMS web interface",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Alan Harnum",
  "date": "2019-05-30T11:19:12.868-0400",
  "updated": "2020-04-15T10:17:58.073-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/INFRA-227/",
      "key": "INFRA-227",
      "summary": "Can't upload Word doc to IDRC site"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-15T10:17:42.287-0400",
      "body": "I think this was fixed in another ticket:\n\n```\n# ls -dZ images/\r\ndrwxr-xr-x. 993da6cd www system_u:object_r:httpd_sys_rw_content_t:s0 images/\n```\n"
    }
  ]
}
---
SELinux policy on the /images directory of Joomla is read-only 'httpd\_sys\_content\_t'

It should probably be 'httpd\_sys\_rw\_content\_t' like the tmp directory.

        
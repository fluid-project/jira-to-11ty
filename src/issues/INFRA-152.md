---json
{
  "title": "INFRA-152",
  "summary": "Ansible warns about use of Jinja2 in when statements",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-02T11:15:36.274-0400",
  "updated": "2018-04-05T09:42:26.820-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-05T09:42:26.817-0400",
      "body": "<https://github.com/idi-ops/ansible-nodejs/pull/40>\n"
    }
  ]
}
---
```
default: TASK [nodejs : Fail if nodejs- RPM packages are specified in nodejs_app_rpm_packages] ***
    default:  [WARNING]: when statements should not include jinja2 templating delimiters
    default: such as {{ }} or {% %}. Found: 'nodejs-' in '{{ nodejs_app_rpm_packages|join('
    default: ') }}'
```

        
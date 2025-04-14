---json
{
  "title": "INFRA-184",
  "summary": "TTS - Dockerfile",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-05-10T20:42:04.826-0400",
  "updated": "2018-05-11T10:28:35.359-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-11T10:28:05.855-0400",
      "body": "Had to fix nodejs and facts modules so they work in Ansible 2.5:\n\n* <https://github.com/idi-ops/ansible-nodejs/commit/6e86f9391fb85eda7d69489725797902ae814135>\n* <https://github.com/idi-ops/ansible-facts/commit/7ede274868038ddb6dcc67f97b70a31ea6e99e45>\n\nBuilt and pushed images for the following Docker repositories needed for TTS:\n\n* inclusivedesign/centos - CentOS 7.5\n* inclusivedesign/nodejs - NodeJS 8.11.1\n* inclusivedesign/tts\n\nTTS service deployed as a container on i-0033. Accessible at <https://tts.idrc.ocadu.ca/?q=hello>\n"
    }
  ]
}
---
If TTS will continue to be used, it needs a Dockerfile.

<https://github.com/fluid-project/FestivalTextToSpeechService/pull/2>

Possibly based on node:alpine image, if Festival can be made to work on it.

        
---json
{
  "title": "FLUID-6684",
  "summary": "qunit-fixure may become empty instead of being updated",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-09-13T10:44:59.727-0400",
  "updated": "2024-07-22T10:35:16.748-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": "Safari 14.1.2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In Safari, the qunit-fixture may become empty instead of being replaced with the original fixture contents. This causes failures such as an Infusion component's container being missing.

This originally came up while testing the [Infusion 4.x PR](https://github.com/fluid-project/infusion/pull/1052) and further [discussed](https://matrix-client.matrix.org/_matrix/media/r0/thumbnail/matrix.org/pKgpbzxEHRcPsVgDjycvXYoi?width=60\&height=60\&method=crop) in the fluid-tech matrix channel.

See also:

* <https://bytes.com/topic/javascript/answers/491721-innerhtml-problem-safari>
* <https://ilia.ws/archives/112-Safari-+-innerHTML-Crash.html>

        
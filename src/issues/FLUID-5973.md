---json
{
  "title": "FLUID-5973",
  "summary": "TTS Pause/Resume Fails on Linux TTS-supporting Browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-09-29T12:16:05.164-0400",
  "updated": "2016-10-17T11:23:44.709-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5984/",
      "key": "FLUID-5984",
      "summary": "Document conditional testing utilities"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-09-29T12:26:52.005-0400",
      "body": "Speaking to @@Justin Obara we're going to do the following for now:\n\n* write a general test function for skipping tests based on OS detection\n* wrap the pause/resume test in this function so we skip them on Linux for the moment\n\nThis isn't ideal but the reality seems to be that the TTS support under Linux doesn't allow for pause and resume behaviour.\n\nMore broadly, we should establish practice about tests being skipped by browser or platform - when they should be revisited and how to indicate this.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-10-17T11:23:44.707-0400",
      "body": "Pause/Resume tests are now appropriately skipped on Linux. I've created a separate issue to document the conditional test features that were introduced as a result of this work.\n"
    }
  ]
}
---
The Pause/Resume portion of the TTS component tests fail (hangs) on Linux in some browsers that are supposed to support TTS. So far we've seen the following:

* failure in Firefox 49 in the CI VMs (Fedora 24), and in desktop under Fedora 24 and openSUSE
* failure in Chrome on desktop under Fedora 24 and openSUSE

Some IRC conversation on the issue is here: <https://botbot.me/freenode/fluid-work/2016-09-29/?msg=73942721&page=1>

A Firefox bug report at <https://bugzilla.mozilla.org/show_bug.cgi?id=1238538> seems to indicate this may be a known issue. Some testing on Firefox under Linux seems to indicate that pause/resume do not work in other contexts, such as the test page at <http://eeejay.github.io/webspeechdemos/> or a quick JSFiddle at <https://jsfiddle.net/5fewtbpv/7/>

        
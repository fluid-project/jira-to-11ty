---json
{
  "title": "FLUID-826",
  "summary": "Pausing upload hangs the browser, or causes endless loop",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-26T15:48:01.000-0400",
  "updated": "2008-06-26T17:14:57.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-26T16:54:32.000-0400",
      "body": "I left an extra param around in attempting to fix (work around) <https://fluidproject.atlassian.net/browse/FLUID-822#icft=FLUID-822>. Removed the param. All is happy.&#x20;\n"
    }
  ]
}
---
Pausing a upload either hangs the browser, or causes some kind of endless loop.

To reproduce:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>

1\) In Firefox, use Firebug to enable and show the console.\
2\) Select several files to upload. It seems more reproducable with larger files (eg. >500k)\
3\) Start the upload, then press Pause before it is complete.

One of two things may happen:

A) It may take some time for the 'pause' process to complete (with no console output indicating what's going on). It may, in fact, not come back, and you may have to kill the browser.

B) If you're very patient, and it does come back, the console will begin to display a continuous stream of repeating debug information.

This may actually be two separate issues, one related to the occasional hanging of the browser, and another related to the endless loop. I haven't been able to investigate enough to determine that.

Note that this **might** be related to <https://fluidproject.atlassian.net/browse/FLUID-822#icft=FLUID-822>, but I don't think so: 822 seems to happen when upload is **resumed** after pausing, and this bug doesn't let you get that far.

        
---json
{
  "title": "FLUID-6307",
  "summary": "Uploader and TTS do not show coverage despite having tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Antranig Basman",
  "date": "2018-07-21T08:05:12.484-0400",
  "updated": "2018-07-24T04:29:15.476-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6307/coverage-uploader.png",
      "filename": "coverage-uploader.png"
    }
  ],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-07-23T06:38:18.607-0400",
      "body": "@@Antranig Basman, I'm afraid we have a thornier question here, which is \"why isn't the missing coverage reported all the time?\"  Take a look at this report, generated just now in OS X from a test run against master:\n\n<http://the-t-in-rtf.github.io/coverage-reports/infusion/20180723/>\n\nThe components are reported as covered, and the overall coverage is higher than your results.\n\n> \\=============================== Coverage summary ===============================\\\n> Statements   : 93.48% ( 9732/10411 )\\\n> Branches     : 84.7% ( 4440/5242 )\\\n> Functions    : 94.23% ( 1780/1889 )\\\n> Lines        : 93.53% ( 9693/10363 )\\\n> \\================================================================================\n\nI also looked at a recent build on CI:\n\n<https://buildkite.com/fluid-project/infusion/builds/202#9edb5641-219b-4d63-b82b-a04d6111db91>\n\nAlthough the report itself is not retained, the overall totals are closer to your result than mine.\n\n> \\=============================== Coverage summary ===============================\\\n> Statements   : 92.95% ( 9701/10437 )\\\n> Branches     : 84.08% ( 4378/5207 )\\\n> Functions    : 93.71% ( 1773/1892 )\\\n> Lines        : 92.99% ( 9664/10392 )\\\n> \\================================================================================\n\nI'll try rerunning in a VM to see if I can track this down further.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-07-23T09:39:55.407-0400",
      "body": "@@Antranig Basman, the results in a clean VM exactly match my results.  I will need to fire up a windows VM to see if I can reproduce the discrepancy there.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-07-23T10:45:14.559-0400",
      "body": "The results from running in a Windows 10 VM are comparable to what I saw in CI (I suspect there are a few windows-unique branches that are hit, the coverage was even better):\n\n<http://the-t-in-rtf.github.io/coverage-reports/infusion/20180723-windows/>\n\n@@Antranig Basman, I'll need to rely on you for input about when you see this, with which combination of browsers, whether it occurs repeatedly, et cetera.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-07-23T11:08:11.450-0400",
      "body": "@@Tony Atkins \\[RtF] and @@Antranig Basman there are some TTS related tests that do not run in certain conditions (i.e. the web speech api isn't supported, the pause/resume tests don't run in Chrome, and in some cases the tests don't run when there isn't a proper audio driver which was happening in browerstack but may also be the case for our CI).\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-07-24T04:29:15.476-0400",
      "body": "Thanks, @@Justin Obara, that's an interesting point.  The tests run and report coverage in CI.  @@Antranig Basman, if you open the TTS fixtures in a browser on the machine where you saw the problem, do they all run?\n"
    }
  ]
}
---
As the enclosed screenshot shows, the Uploader and TextToSpeech components are showing as mostly without coverage despite having dedicated tests. I can't see a clear reason for this given the coverage configuration.

        
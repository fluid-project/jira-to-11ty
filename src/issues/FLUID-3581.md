---json
{
  "title": "FLUID-3581",
  "summary": "Contrast of pagination controls in pager demo do not meet wcag 2 AA standards",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2010-04-01T11:03:26.000-0400",
  "updated": "2010-11-10T10:21:01.645-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:08:23.654-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-09T15:08:31.746-0500",
      "body": "Fixed with new styling as part of work toward the updated pager demo.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-10T10:21:01.642-0500",
      "body": "Fixed with commits to <https://fluidproject.atlassian.net/browse/FLUID-3822#icft=FLUID-3822>\n"
    }
  ]
}
---
Contrast of pagination controls in pager demos do not meet wcag 2 AA standards

Running test 5 from the WCAG section of the pager tests, shows that there are contrast issues mainly regarding the pagination controls.\
<http://wiki.fluidproject.org/display/fluid/Pager+QA+Test+Plan+with+WCAG>

Demos:\
<http://build.fluidproject.org/infusion/demos/pager/html/pager.html>\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#>

        
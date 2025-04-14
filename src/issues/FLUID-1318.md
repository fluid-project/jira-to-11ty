---json
{
  "title": "FLUID-1318",
  "summary": "Can't tab to any of the inline edit fields until after one has been activated in Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-08-27T11:16:40.000-0400",
  "updated": "2014-07-07T15:38:18.178-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1317/",
      "key": "FLUID-1317"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-19T11:20:04.000-0400",
      "body": "This may be because the inline edit fields are in an iframe.\n\nClicking anywhere inside the iframe will allow you to tab to the inline edit fields\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:52:33.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-03T14:26:40.000-0500",
      "body": "yes, this is an iframe issue, since there is no corresponding problem with the announcements or other samples. Per the comments on <https://fluidproject.atlassian.net/browse/FLUID-1600#icft=FLUID-1600>, we cannot alter this behaviour without hijacking tab navigation entirely. It may not even be possible to affect this case at all.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:05:16.193-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T15:38:18.176-0400",
      "body": "Opera is no longer a supported browser.\n"
    }
  ]
}
---
Can't tab to any of the inline edit fields until after one has been activated

Steps to reproduce:

1\) Open the bSpace demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Press the tab key. Notice that you can't tab to any of the inline edit fields

3\) Click on one of the inline edit field to activate it.

4\) Press the tab key. Notice that you can now tab to all of the inline edit fields.

dev-iteration43

        
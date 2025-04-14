---json
{
  "title": "FLUID-3223",
  "summary": "The accessible jquery tabs demo does not switch to a new tab when the enter or space key is pressed.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2009-10-02T15:51:39.000-0400",
  "updated": "2010-12-08T15:11:09.082-0500",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3799/",
      "key": "FLUID-3799"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3223/FLUID-3223.patch",
      "filename": "FLUID-3223.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-02T15:53:26.000-0400",
      "body": "Here's a patch that fixes this issue--it was an API change to the keyboard-a11y plugin back in Infusion 1.0, but this example wasn't properly updated.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:53:23.595-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-03T10:27:53.225-0400",
      "body": "I tried the patch today, and still couldn't get it to work. The keyboard selection appears to be working correctly, but the activation of the tabs does not. I think it may have something to do with a change to jquery ui, but am  not sure yet.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:31:12.695-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-08T15:11:09.076-0500",
      "body": "This demo has been removed from the repository. See <https://fluidproject.atlassian.net/browse/FLUID-3731#icft=FLUID-3731>.\n"
    }
  ]
}
---
The accessible jquery tabs demo does not switch to a new tab when the enter or space key is pressed. It works fine when the automatic switching is enabled. This is a regression that happened between 1.0 and 1.1

        
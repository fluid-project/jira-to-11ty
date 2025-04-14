---json
{
  "title": "FLUID-3672",
  "summary": "event firer does not remove listeners of type 'function'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2010-06-14T14:12:42.367-0400",
  "updated": "2013-04-11T17:43:18.516-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": "all\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3672/FLUID-3672-1.patch.txt",
      "filename": "FLUID-3672-1.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3672/FLUID-3672-2.patch.txt",
      "filename": "FLUID-3672-2.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2010-06-14T14:17:49.826-0400",
      "body": "FLUID-3672-1.patch.txt includes a test to show the problem. Essentially, if you create an event firer, add a listener of type function, remove the listener and then fire the event, the listener has not been removed and runs.\n\nThis patch also includes the fix for the problem, which includes a test for listeners of type 'function'.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-06-17T11:11:40.364-0400",
      "body": "Attached patch (#2) is a second version of a fix for this problem, very similar to the first patch. The if statement in this case has been pared down to a minimal if statement with a test for the $$guid.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-06-17T11:53:16.561-0400",
      "body": "I've committed Laurel's patch for this.\n"
    }
  ]
}
---
The fluid event firer object does not remove listeners of type function.

        
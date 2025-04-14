---json
{
  "title": "FLUID-4205",
  "summary": "UI Enhancer attaches itself to container - UI Options assumes \"document'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2011-05-05T15:54:10.653-0400",
  "updated": "2011-06-20T16:39:56.511-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4235/",
      "key": "FLUID-4235"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-05-05T15:59:03.283-0400",
      "body": "At Justin's request, I'm updating \"Fix version\" to 1.4 so that we don't forget to at least consider this issue before the release. It will probably take a bit of thinking and considering.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:40:43.583-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-26T14:04:16.204-0400",
      "body": "Should be fixed with pull request: <https://github.com/fluid-project/infusion/pull/55>\n"
    }
  ]
}
---
The UI Enhancer accepts an optional "container" argument as its first parameter. If not provided, the container defaults to "document." The UI Enhancer attaches itself to this container for UI Options to find later.

UI Options **always** expects the UI Enhancer to be attached to "document". If UI Enhancer is actually initialized with a container other than "document", then the initialization of UI Options fails because it doesn't find the Enhancer attached to "document."

I'm not sure what the right solution is:

A) For UI Enhancer to always attached itself to "document" only.\
B) Have UI Options accept a configuration parameter letting it know where to find the enhancer.\
C) Have UI Options search for the UI Enhancer somehow.

None of these are ideal. Other suggestions?

        
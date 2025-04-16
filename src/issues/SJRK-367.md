---json
{
  "title": "SJRK-367",
  "summary": "Add Matomo analytics to story telling",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Giovanni Tirloni",
  "reporter": "Justin Obara",
  "date": "2020-06-23T14:55:25.508-0400",
  "updated": "2020-06-26T14:15:34.337-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-06-26T12:43:47.532-0400",
      "body": "There isn't a per-theme (or, ideally, per-deployment/domain) way to add the Matomo analytics code to the SJRK Story Telling tool.\n\nWe'd have to add a single analytics code to the base theme, but that wouldn't allow us to know which instances are not being actively used anymore.\n\nThe alternative is to do some refactoring of the code so that each deployment has its own \\<head> template where the analytics code could be added.\n\nCindy Li Gregor Moss thoughts?\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-06-26T13:29:22.260-0400",
      "body": "I agree each deployment/domain should have its own analytics code.\n\nEach domain has [its own theme folder](https://github.com/fluid-project/sjrk-story-telling/tree/master/themes) in the master branch. \"/template\" is one subfolder holding custom templates for this theme. I think the analytics code for a domain can be placed in its theme folder for it to be pulled in by the base template in the base theme.&#x20;\n\nGregor Moss, what do you think?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-06-26T14:15:34.337-0400",
      "body": "I also agree that it would be ideal if each deployment had its own analytics (including separating the FLOE-themed staging site from the FLOE-themed production site).\n\nWe can add a templated element to each HTML page (it doesn't need to be in the head tag, though that's certainly a possibility) that is filled in dynamically in much the same way the various UI components of each page grade are defined and overridden by theme. This could be achieved with a single template file in the base theme's \"templates\" directory, and then provide only the part that differs from site to site at creation/render time (which I guess is the part defined as {$IDSITE} in this sample code: <https://developer.matomo.org/guides/tracking-javascript-guide>).\n"
    }
  ]
}
---
Now that we have a Matomo set up, we should add the analytics/metrics tracking to the Story Telling tool. The purpose is to improve the tool and understand which browsers and devices to support.

The most important site at the moment is the AIHEC one, as it is in active use. However, something to consider is if all of the story telling sites should share a analytics or if they should be registered individually.

        
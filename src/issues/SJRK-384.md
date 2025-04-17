---json
{
  "title": "SJRK-384",
  "summary": "Add user dialog for loading story draft ",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Dana",
  "date": "2020-08-11T12:33:18.072-0400",
  "updated": "2021-01-21T22:06:53.715-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-360/",
      "key": "SJRK-360",
      "summary": "Allow editing of a story after publishing"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-358/",
      "key": "SJRK-358",
      "summary": "Add ability to \"Clear all\" story blocks at once"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-289/",
      "key": "SJRK-289",
      "summary": "Add auto-save or caching feature for story authoring"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-360/",
      "key": "SJRK-360"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-384/2021-01-21 ST autoload sketch.png",
      "filename": "2021-01-21 ST autoload sketch.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-384/restored draft notice.png",
      "filename": "restored draft notice.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-384/Start new story button.png",
      "filename": "Start new story button.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-384/Story draft detected.png",
      "filename": "Story draft detected.png"
    }
  ],
  "comments": [
    {
      "author": "Dana",
      "date": "2020-08-20T16:57:17.908-0400",
      "body": "If clear all functionality is implemented as per <https://fluidproject.atlassian.net/browse/SJRK-358#icft=SJRK-358>, this will make it easier to load/edit the draft, then decide to clear it and start a new story.\n\nWhat to do if user chooses to edit a published draft, then tries to publish it again without making any changes? Can we provide an error message stating that the story has already been published?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-08-31T10:14:52.300-0400",
      "body": "Does editing and publishing an existing story update the existing story or publish a new story and leave the existing one in place? If the former, republishing an already published story without any changes shouldn't may not have an impact. Please let me know if I'm missing something.\n"
    },
    {
      "author": "Dana",
      "date": "2020-09-08T16:17:35.875-0400",
      "body": "We decided not to implement the ability to save/edit a draft of a published story (and to only allow editing of a published story by someone with admin privileges if requested), also decided for now to take the approach of auto-loading a (unpublished) draft story into the story tool, along with Clear All functionality (<https://fluidproject.atlassian.net/browse/SJRK-358#icft=SJRK-358>) rather than asking user if they want to load the draft. It seems likely that a user will want to see the draft first in most cases before deciding, so eliminating an extra step will make this more user-friendly.\n\nIn other words, no dialog is needed, but an indication to the user that the draft has been restored should be provided in some way.\n"
    },
    {
      "author": "Dana",
      "date": "2021-01-21T22:06:53.715-0500",
      "body": "Gregor Moss, Justin Obara I attached latest version of mockups for adding the Start new story (reset) button and flow. Please add to the following description if I've missed anything.\n\nTo document our decision - this is a temporary stopgap to allow for an author to clear all content (and reset the Story ID), in the event that a draft story is loaded from local storage that they do not wish to edit/publish (possibly because it's left over from another author).\n"
    }
  ]
}
---
When a draft story is detected, ~~give user the option to load the draft, or to start a new story (and delete existing draft). Make it clear whether or not the draft is already published.~~

...load the draft automatically, and indicate to the author that an unpublished draft has been restored. (Sept 14, 2020)

        
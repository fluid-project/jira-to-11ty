---json
{
  "title": "FLUID-5190",
  "summary": "TextfieldSlider hard-codes model key to \"value\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-24T14:02:26.779-0400",
  "updated": "2013-11-08T11:14:08.911-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "Textfield Slider"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-10-25T10:12:35.422-0400",
      "body": "A discussion with Justin this morning reminded me that this would be a serious problem for someone who wanted to use more than one slider in a single panel.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2013-10-25T13:42:36.094-0400",
      "body": "A pull request has been issued: <https://github.com/fluid-project/infusion/pull/424>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2013-10-31T14:20:08.232-0400",
      "body": "After more discussion with Anastasia, Justin and Antranig, a decision was made to use the model relay to link fluid.prefs.textfieldSlider with panels, rather than continuing with the old fashion of model path.\n\nThe previous pull request has been closed in favor of the new implementation @ <https://github.com/fluid-project/infusion/pull/431>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-11-08T11:14:04.612-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/431> ) into the project repo at 722535cdc902f57bb449e7c3b17d96930a2feefc\n"
    }
  ]
}
---
The textfieldSlider component uses a model with a key of "value" for the current slider value. It's not possible to override this through configuration: the string "value" hard-coded into addListener() and requestChange() calls.

The Prefs Framework's wrapper, fluid.prefs.textfieldSlider, has a "path" option that is used instead of a hard-coded value, so that seems reasonable.

We should ensure that anyone creating a Prefs Editor using the Prefs Framework who makes use of the Prefs Framework's textfieldSlider can use whatever name they like for their model key.

        
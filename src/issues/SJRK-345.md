---json
{
  "title": "SJRK-345",
  "summary": "Add automated clean-up for unpublished stories",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-04-22T13:39:39.840-0400",
  "updated": "2020-11-26T11:12:26.455-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-431/",
      "key": "SJRK-431"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-10-28T01:50:35.045-0400",
      "body": "the story grade's model value \"timestampLastModified\" was removed from the <https://fluidproject.atlassian.net/browse/SJRK-289#icft=SJRK-289> development branch at commit [df267d73e9007b78a18075d99bf6c0d12a409bf9](https://github.com/BlueSlug/sjrk-story-telling/commit/df267d73e9007b78a18075d99bf6c0d12a409bf9). This should be reused when the work for this Jira is picked up.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-10-30T01:14:41.568-0400",
      "body": "The change in \"tests/ui/js/ui-storyUiTests.js\" at commit [d8de999f320e05ac82102c448a36f8573436b5fd](https://github.com/BlueSlug/sjrk-story-telling/commit/d8de999f320e05ac82102c448a36f8573436b5fd) is also necessary for the tests to pass with this update.\n"
    }
  ]
}
---
Once server-side autosave has been implemented (SJRK-289), there should be a task created to automatically clear out any unpublished stories that are older than a certain amount of time.

Consideration should be given to how old a story is before it is determined to be "too old", as we don't want to accidentally delete something that an author has been chipping away at. Since the SJRK-289 work will be adding timestamp values for first created date and last modified date, we'll have to decide which to use to calculate this duration.

#### **Design questions:**

* How old should a story be before it is determined to be "stale"?
* What timestamp should we use to determine staleness? Last modified? Created?
* What should happen to localStorage copies of stale stories that have been cleared out?

        
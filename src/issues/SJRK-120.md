---json
{
  "title": "SJRK-120",
  "summary": "Add tests for page grade",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T19:11:42.252-0400",
  "updated": "2018-08-24T13:15:16.042-0400",
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
      "author": "Gregor Moss",
      "date": "2018-06-11T02:01:10.754-0400",
      "body": "Testing to ensure the timing of the page's compound event onAllUiComponentsReady based on menu's onControlsBound event was leading to errors. It seemed the test framework wasn't unbinding the first listener after it was called initally, and so when the language was changed it was reasserting that the onControlsBound event had fired, seemingly even after the components had been destroyed. I have commented out the test sequence item in question:\n\n```java\n\"event\": \"{pageTest page menu}.events.onControlsBound\",\r\n\"listener\": \"jqUnit.assert\",\r\n\"args\": \"menu onControlsBound event fired.\"\n```\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-26T18:11:12.515-0400",
      "body": "After adding tests for the cookieStore, including clearing the cookie after all tests, the tests for sjrk.storyTelling.page.storyEdit no longer completed because the cookie was missing. The exact cause of this is unclear at the moment, and I have worked around it by re-setting the language to English after all of the tests for sjrk.storyTelling.page have run. This is not ideal, and the cause should be determined and addressed.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-26T18:13:08.470-0400",
      "body": "I also experienced some difficulty in testing whether the cookieStore had loaded the expected values upon the page creation. It seems to be related to all of the other events which occur around the same time being tested against already. I was otherwise unable to figure out how to re-initialize the test page grade in order to restart this sequence, including firing its createOnEvent.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-08-24T13:15:15.968-0400",
      "body": "Test coverage was reviewed, two new tests were added and coverage is satisfactory to me at this point.\n"
    }
  ]
}
---
There are some tests which should be added for sjrk.storyTelling.page:

* ~~uiLanguage changing and associated events~~
  * ~~check its value when it's expected to have changed~~
* ~~onContextChangeRequested event~~
* ~~loading from and storing to cookieStore~~
* ~~storySpeaker listener~~
* ~~storySpeaker creation timing~~
* ~~test the functions directly~~

        
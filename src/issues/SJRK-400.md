---json
{
  "title": "SJRK-400",
  "summary": "singleFileUploader is undefined when removing media blocks",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-10-20T20:50:25.058-0400",
  "updated": "2020-10-21T08:48:00.201-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Infusion 3.0.0-dev.20200728T104627Z.e6aa1a341.<https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145>\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-400/2020-10-20 ST tests hanging.PNG",
      "filename": "2020-10-20 ST tests hanging.PNG"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-10-20T20:59:27.611-0400",
      "body": "From today's discussion in the #fluid-work IRC channel, a discussion between @@Justin Obara and @@Antranig Basman around why one aspect of one of of the attempted solutions did not work:\n\n> \\<Justin\\_o> Bosmon: an unrelated questions. For the onDestroy event, is that fired before any destructive actions have taken place? With some updates to the storytelling tool that gmoss is working on. We were looking at firing a model change, to trigger an upstream model relay, just before the component is destroyed. I think there were some errors with a relay not being available though.\\\n> \\<Bosmon> Yes, onDestroy is fired before anything is torn down\\\n> \\<Justin\\_o> Bosmon: hmmm so the model relay should have worked then\\\n> \\<Justin\\_o> which is what I was expecting. I guess we'll have to take a look at that error again\\\n> \\<Bosmon> Justin\\_o - relays are not torn down until the last moment before afterDestroy\\\n> \\<Justin\\_o> Bosmon: thanks for confirming that. might have been something else... will try to remember to check this with gmoss when he's online later\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-10-21T08:26:52.412-0400",
      "body": "@@Gregor Moss and @@Antranig Basman I've pushed up a [branch](https://github.com/jobara/sjrk-story-telling/tree/SJRK-289-onDestroy) that will include the issues with using onDestroy as mentioned in the comment above. See further discussion from the [fluid-work irc channel](http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2020-10-21.log) today.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-10-21T08:48:00.201-0400",
      "body": "There is an underlying framework issue that prevents using onDestroy as mentioned above. See: <https://fluidproject.atlassian.net/browse/FLUID-6558#icft=FLUID-6558>\n"
    }
  ]
}
---
In certain (as yet unidentified) circumstances, when removing a media block (audio, image, video), the block editor's singleFileUploader component is undefined by the time [sjrk.storyTelling.ui.storyEditor.removeSelectedBlocks()](https://github.com/BlueSlug/sjrk-story-telling/blob/52e198dceae3e2aaa6a6e0334770cf9f25bdc6d5/src/ui/ui-storyEditor.js#L281-L304) is called.

This has only been observed in the tests for sjrk.storyTelling.ui.storyEditor and sjrk.storyTelling.base.page.storyEdit.

 

**To reproduce:**

1. Check out the tool at this exact commit: <https://github.com/BlueSlug/sjrk-story-telling/tree/52e198dceae3e2aaa6a6e0334770cf9f25bdc6d5>
2. Run the site via a basic HTTP server such as [Browsersync](https://browsersync.io/)
3. Navigate to the storyEditor browser tests: <http://localhost:3000/tests/ui/html/ui-storyEditor-Tests.html>

**Expected:**

Tests complete successfully

**Actual:**

The tests hang and an error is displayed on the developer console (see attached screenshot):

```javascript
ui-storyEditor.js:295 Uncaught TypeError: Cannot read property 'resetUploadState' of undefined
    at ui-storyEditor.js:295
    at Object.fluid.each (infusion-all.js:14543)
    at sjrk.storyTelling.ui.storyEditor.removeSelectedBlocks (ui-storyEditor.js:291)
    at togo (infusion-all.js:21310)
    at HTMLButtonElement.fire (infusion-all.js:15643)
    at HTMLButtonElement.dispatch (infusion-all.js:5189)
    at HTMLButtonElement.elemData.handle (infusion-all.js:4997)
    at Object.trigger (infusion-all.js:8255)
    at HTMLButtonElement.<anonymous> (infusion-all.js:8333)
    at Function.each (infusion-all.js:360)
```

        
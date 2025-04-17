---json
{
  "title": "SJRK-255",
  "summary": "Race condition in page grade blocking tests",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-07-15T12:36:14.055-0400",
  "updated": "2020-02-13T16:00:46.928-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6148/",
      "key": "FLUID-6148",
      "summary": "Implement \"potentia II\" constituting aligned, transactional records of author's creational intent"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-234/",
      "key": "SJRK-234",
      "summary": "Page grade has race condition in UIO message reload"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-320/",
      "key": "SJRK-320"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-237/",
      "key": "SJRK-237"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-07-17T16:43:44.247-0400",
      "body": "Could you describe in a little more detail what the race condition is and what components it involves? In your pull request <https://github.com/fluid-project/sjrk-story-telling/pull/33> you mention \"race condition relating to a bug with UIO implementation\" - is the bug actually in the UIO implementation itself, and if so, has a JIRA been filed for that?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-07-18T13:42:32.721-0400",
      "body": "[Antranig Basman](http://secure/ViewProfile.jspa?name=antranig) of course. This branch should capture the bug: <https://github.com/BlueSlug/sjrk-story-telling/commits/SJRK-237-race-condition>\n\n \n\nOnce you have the server and database running, you should be able to reproduce it by running the tests on this page:\\\n<http://localhost:8081/tests/html/storyTellingServerUI-Tests.html>\n\n \n\nThe bug involves the last two sequence items (see the latest commit for the relevant code). I haven't been able to reproduce it today, for some reason, even after a few dozen tries, so that's mildly perplexing.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-08-01T16:29:52.489-0400",
      "body": "Antranig Basman I've added more detail on reproduction and error messages received. Sorry for the delay 🙂\n\n \n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-08-05T06:40:02.225-0400",
      "body": "Hi Gregor Moss - thanks for the reproduction instructions, luckily it turns out I can reproduce the problem quite easily. I'm investigating the root cause which appears to be the message bundle not loading correctly for 2nd and subsequent UIO instances but in the meantime I've raised <https://github.com/fluid-project/sjrk-story-telling/pull/35> in which to accumulate suggestions for refactoring. My sense is at the moment there is a fault in the very-oldfashioned resource loading code in Infusion master, which is being exacerbated by there being a lot of component leaks in the SJRK implementation. Once I find the root cause of the race we should be able to patch it in Infusion but at the same time we should also head off the issue by removing the leaks in SJRK which should also result in better performance and a design that is easier to work with.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-01-22T16:43:55.406-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/53) has been merged into stories-floe-dev branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/58c559545a3788925e5236c407e7b8999aba0a50) so Gregor Moss can build upon them for other Jiras.\n\n[The initial pull request against re-review branch](https://github.com/fluid-project/sjrk-story-telling/pull/35) is preserved in order to accommodate further review on the source branch by Antranig Basman or others.\n"
    }
  ]
}
---
NOTE: This may be a duplicate / the same root cause as SJRK-234

***

A race condition present in sjrk.storyTelling.base.page is blocking properly-functioning tests for both sjrk.storyTelling.loadStoryFromParameter and sjrk.storyTelling.loadBrowse (both in storyTellingServerUI.js).

These tests were meant to be added alongside the changes described in <https://fluidproject.atlassian.net/browse/SJRK-237#icft=SJRK-237>, but the work required to remediate them would be substantial, hence this Jira.

To reproduce:

1. check out this branch: <https://github.com/BlueSlug/sjrk-story-telling/tree/SJRK-255> (at commit [cf3c37c](https://github.com/BlueSlug/sjrk-story-telling/commit/cf3c37c3d82857469284f39056c8bade52eac718), ideally)
2. run the database server (instructions in README)
3. run the webserver
4. navigate to <http://localhost:8081/tests/html/storyTellingServerUI-Tests.html>

Expected: all tests passing, no errors

Actual: sometimes tests pass, sometimes they fail with error

 

On Windows 10 Pro v.1903:

* running Chrome 75, the error was not reported after 100 loads
* Firefox 68 failed 92% of the time with this message:
  ```javascript
  TypeError: text is undefinedfluidParser.js:420:8
  XMLEncode fluidParser.js:420
      renderComponent fluidRenderer.js:980
      renderComponentSystem fluidRenderer.js:1139
      renderRecurse fluidRenderer.js:1327
      renderTemplates fluidRenderer.js:1405
      reRender fluidRenderer.js:1488
      render fluidRenderer.js:1555
      render RendererUtilities.js:104
      refreshView RendererUtilities.js:178
      invokeInvoker FluidIoC.js:1749
      togo FluidIoC.js:1813
      fire Fluid.js:1596
      finishInit PrefsEditor.js:469
      then FluidPromises.js:33
      finishInit PrefsEditor.js:467
      init PrefsEditor.js:488
  ```

- Edge 44 failed 59% of the time with this error message
  ```javascript
  0: Unable to get property 'replace' of undefined or null reference
  ```

        
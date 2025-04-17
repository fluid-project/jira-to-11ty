---json
{
  "title": "SJRK-320",
  "summary": "Convert storyTellingServerUI.js code into a component",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-01-16T15:43:57.650-0500",
  "updated": "2020-01-22T17:14:09.600-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-255/",
      "key": "SJRK-255",
      "summary": "Race condition in page grade blocking tests"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-01-16T16:01:50.474-0500",
      "body": "Work on this issue can be found in this branch: <https://github.com/BlueSlug/sjrk-story-telling/tree/SJRK-320>\n"
    }
  ]
}
---
In the review process for work on SJRK-255, Antranig Basman left the following review comments:

<https://github.com/fluid-project/sjrk-story-telling/pull/35#pullrequestreview-270700397>

> A big problem with the test set up is that this entire component tree leaks between tests, including the UIO instance nested in it. We need to arrange for teardown of the browse component once the fixtures finish. See below -

and

<https://github.com/fluid-project/sjrk-story-telling/pull/35#pullrequestreview-270701074>

> Any time there's a call to loadBrowse we need to arrange for cleanup - I suggest packaging the assertion functions into a reusable utility that as well as making the assertion calls storyBrowse.destroy() once it is done
>
> A slightly cleaner structure would just have one testEnvironment per use of a "page" and then repackage sjrk.storyTelling.loadThemedPage rather than as a standalone function, a definition for a "createOnEvent" subcomponent of a PageLoader component which fires on the completion of the I/O for /stories (and /clientConfig, with boiling, etc.). Then you could rely on the standard teardown of the testEnvironment to arrange for destruction of the PageLoader once you were finished tinkering with it in the fixtures. This might be enough in itself to stop the race on constructing the 2nd and further UIO components into the same page but I will continue to investigate

Address the review comments by creating a new component that will automatically handle loading clientConfig, custom theme files and story data, as well as have its lifecycle managed by Infusion and the IoC test framework.

        
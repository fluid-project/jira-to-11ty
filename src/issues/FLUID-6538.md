---json
{
  "title": "FLUID-6538",
  "summary": "Update to the latest version of jQuery ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2020-08-04T09:20:20.158-0400",
  "updated": "2024-07-22T10:35:27.499-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4729/",
      "key": "FLUID-4729",
      "summary": "the direct use of $.ui.keyCode prevents customBuilds that don't include jQuery UI Core"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6538/keyboard-a11yTest#3-failing-jquery_3.5.1.log",
      "filename": "keyboard-a11yTest#3-failing-jquery_3.5.1.log"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6538/keyboard-a11yTest#3-jquery_3.3.1.log",
      "filename": "keyboard-a11yTest#3-jquery_3.3.1.log"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-08-04T16:30:25.549-0400",
      "body": "@@Antranig Basman In trying to upgrade from jQuery 3.3.1 to 3.5.1 I'm finding that there are many test failures which all seem to be related to [fluid.focus](https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidDocument.js#L162-L174). If I replace the usage of fluid.focus with triggerHandler(\"focus\") on the same element, the tests pass. I'm not sure if we should still be maintaining fluid.focus, that is, if trying to get it working again should be the actual solution. It's a bit of a challenge to debug the issue though, because adding break points results in the tests passing. I'm assuming that the issue is that fluid.focus is now working asynchronously instead of synchronously. Perhaps through new mechanisms for the call to `node[func]()` within fluid.focus. There have been changes to the way focus and events work internally in jQuery; which can be seen in this comparison ( <https://github.com/jquery/jquery/compare/3.3.1...3.5.1> ). Please let me know if you have thoughts or suggestions about how to address this.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-08-06T10:23:40.021-0400",
      "body": "keyboard-a11yTest#3-failing-jquery\\_3.5.1.log contains a log of some console statements from from running the keyboard a11y test #3 which fails with the jQuery 3.5.1 update. \n\nkeyboard-a11yTest#3-jquery\\_3.3.1.log contains a log of some console statements from from running the keyboard a11y test #3 using jQuery 3.3.1 for comparison with the 3.5.1 related logs. The underlying jQuery code has changed quite a bit, so the statements don't line up very well. However, the logs from FluidDocument.js are the same for both logs.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-08-06T10:54:28.651-0400",
      "body": "@@Antranig Basman I've added some log files, see previous comment. There seems to be more places to log in jQuery 3.5.1 but otherwise, I'm not really sure what the issue is. Although it does seem like focus is triggered on each element twice in 3.5.1 rather than once in 3.3.1. \n\nIn the case of the logged example. We manually triggered focus on the element with id \"menuNoTabIndex\". This in turn pushes focus down to the element with id \"menuItem0\". In 3.3.1 this causes the underlying jQuery events to fire in this order: menuItem0, menuNoTabIndex, menuItem0. In 3.3..5 the same flow seems to look like: menuItem0, menuItem0, menuNoTabIndex, menuNoTabIndex, menuItem0, menuItem0. There may be some relation to the jQuery.event.add handler which fires with saved as false on the first call and with an array containing containing an object for the focus event in the second call.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-08-06T11:50:37.462-0400",
      "body": "@@Antranig Basman I just updated the 3.5.1 logs. I added in console.logs for the Assertion in the test as well as the blur and focus handlers bound in the test. It seems that the blur handler gets run just before the assertion.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-09-01T11:04:43.210-0400",
      "body": "@@Antranig Basman I'm reading over our last fluid-work channel conversation ( <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2020-08-06.log> ) from just before my vacation. I'm not entirely clear on where we left things, that is what the next step is. It seems that we could\n\n1. fake the focus calls in the tests\n2. re-write fluid-focus to make it return a promise.\n3. make the tests asynchronous (not sure if this was a separate point or part of 2). \n4. then there was the other confounding bit of blur being called before the assertion, and maybe is the actual problem.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-09-08T08:48:40.375-0400",
      "body": "Spoke with @@Antranig Basman in the fluid-work IRC channel again today ( <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2020-09-08.log> ). The suggestion is to have fluid.focus return a promise instead. We'll need to modify the tests and other uses to support the asynchrony. For the tests it's suggested to use the [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) flow where the test function is specified as async and we use await internally for all of the asynchronous actions. The purpose to use this for the tests is to minimize the diff. In the main code we can just use \"then\". \n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-09-17T11:11:06.312-0400",
      "body": "Managing the async calls all the way up the chain through component uses has been problematic. @@Antranig Basman suggested in the [channel](http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2020-09-17.log) today that for fluid.selectable we return the \"that\" component as usual, rather than a promise. However, we'd attach a promise to the \"that\" for those that needed it. This is similar to how the new Infusion framework from <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> will work.\n"
    }
  ]
}
---
We should update to the latest version of jQuery; currently 3.5.1. While making this change it would be good to investigate if <https://fluidproject.atlassian.net/browse/FLUID-4729#icft=FLUID-4729> can also be addressed. 

        
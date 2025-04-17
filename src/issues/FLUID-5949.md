---json
{
  "title": "FLUID-5949",
  "summary": "Improve IoC testing framework so that it can accept fixture types dispensing promises",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-09-01T12:04:45.178-0400",
  "updated": "2024-07-22T09:22:48.208-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2016-10-11T14:14:28.787-0400",
      "body": "Merged at <https://github.com/fluid-project/infusion/commit/499e6098c0151226c0989dbdc263b43635ca4521>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-14T07:41:21.204-0400",
      "body": "Is there a companion PR to document the new \"task\" construct?  If not, I can probably submit one based on my reading of [the new tests](https://github.com/fluid-project/infusion/blob/499e6098c0151226c0989dbdc263b43635ca4521/tests/test-core/testTests/js/IoCTestingTests.js#L440).\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-10-15T21:36:27.573-0400",
      "body": "Tony Atkins \\[RtF] - that would be incredibly welcome, yes!\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-17T08:07:59.084-0400",
      "body": "Antranig Basman, where would you like this to live?  Is it a new top-level concept that is useful beyond tests (\"The Task API\") or a part only of the IoC test framework?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-10-24T22:25:16.266-0400",
      "body": "Not to worry, Tony Atkins \\[RtF], I am taking care of these docs as part of the <https://fluidproject.atlassian.net/browse/FLUID-5903#icft=FLUID-5903> docs pull - thanks for the offer!\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-11-10T09:15:55.073-0500",
      "body": "Antranig Basman, I am starting to use this more in working with gpii-webdriver, which commonly returns promise-generating objects from various calls, and have a question.  Can a \"task\" be launched in response to an event?\n\nSpecifically, I am finding elements that are WebElement objects:\n\n<http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html>\n\nThe returned promise-generating object is available as `{arguments}.0` in the next sequence step, I would ideally like to use `{arguments}.0.isSelected` or the like as the `listener` for a given event, and then to check its result using `resolve` and `reject`.  [The new tests](https://github.com/fluid-project/infusion/commit/499e6098c0151226c0989dbdc263b43635ca4521) don't have an example of doing this.\n\nThis pattern mixes old-style promises that eventually fire an event with the new construct.  My other option is to chain promises, which also does not seem possible.\n\nAnyway, please advise.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-11-11T12:45:50.988-0500",
      "body": "Thanks, Tony Atkins \\[RtF] - this is an interesting suggestion. Do you think you could flesh it out with a specific example of a sequence you would want, either in old-fashioned JS or else in configuration (preferably both!) - cheers\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-11-17T08:00:20.590-0500",
      "body": "Antranig Basman, here (from the webdriver docs) is the simplest example of retrieving a page, clicking a link, and waiting until the title is correct:\n\n```java\ndriver.get('http://www.google.com/ncr');\r\ndriver.findElement(By.name('q')).sendKeys('webdriver');\r\ndriver.findElement(By.name('btnG')).click();\r\ndriver.wait(until.titleIs('webdriver - Google Search'), 1000);\r\ndriver.quit();\n```\n\nCurrently, I have no way of accessing elements of WebElement, such as \"sendKeys\" above, and then getting control back.  My solution thus far has been to create an [actionsHelper](https://github.com/the-t-in-rtf/gpii-webdriver/blob/GPII-1889/docs/webdriver.md#thatactionshelperactionsarray) that wraps these kinds of interactions.&#x20;\n\n```java\n{ func: \"{testEnvironment}.webdriver.get\", args: [\"http://www.google.com/ncr\"] },\r\n{ event: \"{testEnvironment}.webdriver.events.onGetComplete\", listener: \"{testEnvironment}.webdriver.findElement\", args: [gpii.webdriver.By.name(\"q\")] },\r\n{\r\n  event: \"{testEnvironment}.webdriver.events.onFindElementComplete\",\r\n  listener: \"{testEnvironment}.webdriver.actionsHelper\",\r\n  args:     [{ fn: \"sendKeys\", args: [\"webdriver\"]}],\r\n},\r\n{\r\n  event: \"{testEnvironment}.webdriver.events.onActionsHelperComplete\",\r\n  listener: \"{testEnvironment}.webdriver.findElement\",\r\n  args: [gpii.webdriver.By.name(\"btnG\")]\r\n},\r\n{\r\n  event: \"{testEnvironment}.events.onFindElementComplete\",\r\n  listener: \"{testEnvironment}.webdriver.actionsHelper\",\r\n  args: [{ fn: \"click\", args: [\"{arguments}.0\"]}] \r\n},\r\n{\r\n  event: \"{testEnvironment}.webdriver.events.onActionsHelperComplete\",\r\n  listener: \"{testEnvironment}.webdriver.wait\",\r\n  args: [gpii.webdriver.until.titleIs(\"webdriver - Google Search\"), 1000]\r\n},\r\n{\r\n  event: \"{testEnvironment}.webdriver.events.onWaitComplete\",\r\n  listener: \"jqUnit.assert\",\r\n  args: [\"The title should have been updated...\"]\r\n}\n```\n\nThe pattern is really calling a component, getting an arbitrary object back,  calling one of its promise-returning methods, and continuing once that promise completes.  There may be multiple links in the chain before I get to a state where I can listen for known events or call my own functions again.  For example, I might be clicking an inline edit in the above example and then sending keys to the same element.\n\nI can see mitigating this by having fluid.promise components to connect the gaps, for example:\n\n1. I call a named function that fires a known event, such as findElement.\n2. I listen for onFindElementComplete.  The results of that event are an object with promise-generating promises (such as the WebElement returned by findElement above).\n3. Within the same sequence step, I use {arguments}.0.sendKeys as my \"task\", and use \"{promiseComponent}.resolve\" as my listener.\n4. The next sequence step then uses \"{promiseComponent}.then\" as a task and either another promise component or a known function as \"resolve\".\n\nThis assumes that I can mix events and tasks somehow, which doesn't seem possible at the moment, and still seems convoluted.  Even that would be something, as it would reduce the number of cases in which I need to write wrappers for returned objects with promise-generating functions.\n\nAnyway, hope that makes sense at all.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-11-18T09:22:32.809-0500",
      "body": "Just to give another example of what I need better promise handling for:\n\n<https://github.com/the-t-in-rtf/gpii-webdriver/blob/GPII-1889/src/tests/helper-functions.js#L24>\n\nThis function is used to hit \"WebElement\" functions and inspect the results, I'm commonly working with the return value of a \"findElement\" call.  I use the function to do things like check visibility (using the returned \"WebElement\" object's \"isDisplayed\" method).\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-11-20T21:14:08.169-0500",
      "body": "I think there's nothing we can do about this in terms of extending the core IoC testing framework configuration primitives - I can't see there is any natural way of doing this that doesn't lead us to an \"infinite regress\" situation of imagining variants that handle \"promise-dispensing promise-dispensing promises\" etc. The issue is that code like\n\n```java\ndriver.findElement(By.name('q')).sendKeys('webdriver');\n```\n\nLooks very neat and intelligible, but covers a raft of authorial sins. Of course this syntax was **designed** to be isomorphic to the (synchronous) code which it replaced, so it is no surprise that it leads to the same issues.\n\nWhat I think is the way out here is to replace both your \"helpers\" and in addition the lumps of sequence elements which act on them by \"helper grades\" of the kind that were implemented for <https://issues.fluidproject.org/browse/FLUID-5903> - for which the docs are in review at <https://github.com/fluid-project/infusion-docs/pull/103> - any comments welcome.\\\nThis should enable you to make a syntax which is i) still relatively compact, but ii) authorially open - in the sense that someone could take parts of your sequences and replace parts of them with other expressions for reuse in other test fixtures.\n\nI appreciate this might not look like the most straightforward thing in the world - since noone has so far used the <https://fluidproject.atlassian.net/browse/FLUID-5903#icft=FLUID-5903> facility in the wild. But there is a first time for everything! We should talk this over - perhaps even at a topic meeting or so, since I have been meaning to get people up to speed with this facility for a while - we've accumulated years worth of stovepipe test sequences that need refactoring.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-11-21T03:38:07.613-0500",
      "body": "Thanks, Antranig Basman.  I will read through both and think about the new approach.  It may be that something like gpii-webdriver (or packages that use gpii-webdriver in their tests) are a good place to experiment with this, as I am struggling with exactly the reuse issues you mention regarding arrays in writing browser-driving tests.\n\nI suggest announcing it at the arch meeting and either discussing there or at least getting a show of hands for participants.  If we can't manage to arrange a meeting before, IMO we should have a breakout session as part of the offsite.\n"
    }
  ]
}
---
A lot of asynchronous components which rely on the IoC Testing framework has been forced to expose top-level events which mirror the sequence points of promises dispensed from their APIs. Whilst this is apparently helpful for configuration purposes, as a general practice this is not only verbose but rather unsafe. It creates the impression that an event can be relied upon as a signal for the termination of **a particular process** when it can't - without some extra information such as a request or a transaction id, it can only signal the termination of **a particular type of process**.

In order to head this off, and also to assist the widespread promise-based APIs that we are now producing until we can assimilate all of this activity behind a "megapayloadic idiom", we should produce a new fixture type in the IoC testing framework which accepts promises - this would be, from the framework's point of view, a mixed "active/passive" type of record.

Suggested structure is a member called "task" which is of type "function returning promise", with args at top level, and then two "listener" type records named onReject, onResolve&#x20;

        
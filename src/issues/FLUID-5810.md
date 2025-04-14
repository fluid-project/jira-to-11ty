---json
{
  "title": "FLUID-5810",
  "summary": "Enactors tests will often fail, particularly when run as part of all-tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Antranig Basman",
  "date": "2015-11-07T21:39:41.555-0500",
  "updated": "2016-07-08T09:05:25.448-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Chrome, Windows 7 x64 and others\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-06-12T17:07:09.898-0400",
      "body": "I went through a phase of thinking this was caused by the peculiar 1-element test sequence in BuilderTests.js, but eventually returned to being sure this is an implementation fault in QUnit. The question of **where** the fault is in QUnit, and why this failure is not seen more frequently, is hard to give a precise answer to. QUnit has an overall faulty approach to synchronisation, relying on a set of \"ad hoc\" delays and synchronizations which happens to \"in practice\" mostly work. Basically it is set up for a workflow where tests are queued \"extremely quickly\" and synchronously. It features an overall start delay hardcoded to 13ms which probably evades the synchronization bug in the vast majority of conventional setups.\n\nI believe that IoC testing framework sequences trip this bug far more frequently than conventional tests because of their explicitly \"back to back\" nature. The testing framework doesn't know what test is going to be issued next until the teardown for the previous one has finished - and it can't know what tests are to be run until it has begun to instantiate the following component tree. This hugely raises the chance that we will fail to queue the test before QUnit has finished the teardown for the previous test, with the chances raised further by the fact that a GC cycle may cause a longer pause due to a lot of objects being freed from the component tree that was just destroyed.\n\nIn cases where we \"win the race\", the QUnit queue shows that 2 elements remain in its queue, which will consist of \"teardown\" and \"finish\". When we lose the race, the QUnit queue drains and QUnit synchronously considers that the run is finished - calling QUnit.done() within the iframe, which then causes QUnit.composite to step along to the next set of fixtures, whilst the old ones continue running in previous iframe.\n\nThe best route seems to be to explicitly patch QUnit to allow the IoC testing framework's idea that some fixtures remain to be queued to be communicated to it. We have done this with a piece of config state named \"testsArriving\" (this is lazily allocated as most such elements are in QUnit). This reduces the chance of a failure to zero if the entire test run is queued by a single call to fluid.test.runTests(), or \"near zero\" (that is, to pretty much the existing failure rate, which has been observed to be zero in practice by QUnit users) if the test run uses more than one such call.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-06-13T08:59:39.560-0400",
      "body": "@@Antranig Basman I wonder if we should consider switching off of QUnit, especially if we are going to be forking it and adding in our own patches. If these patches aren't taken up by Qunit itself, it will cause more difficulty in maintaining it going forward. I'd assume that the jqUnit and IoC testing framework abstractions will make a change to the underlying testing infrastructure less of a disruption.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-06-13T19:39:46.306-0400",
      "body": "@@Justin Obara - switching off QUnit isn't practical, because we have hundreds of thousands of lines of test case code that depend on it. jQunit and IoC testing aren't really an abstraction, they are rather a relabelling and repackaging of the functionality provided in QUnit. We are so tightly bound to its oddities that it's not clear that we can even easily switch to a later version of QUnit (they made a lot of structural changes after the version 1.12.0 that we are bound to) without a lot of work, let alone to a different system entirely. QUnit's \"abstractions\" are very leaky (as this issue itself shows) - especially relating to how async tests work. I notice that QUnit's own userbase are blocking the move to QUnit 2.0 since this offers a change in abstraction without any really clear benefit in function.\n\nWe're sort of stuck with it, but on the upside we are relatively familiar with many of its oddities, and this patch you will see is sufficiently localised that it could very likely be applied quite easily to a later version of QUnit if we ever think it is worth our while to upgrade our QUnit. I don't see any particularly compelling features in later QUnits - they don't supply features that benefit us, and they don't fix bugs we are interested in.\n\nI notice that the following highly problematic algorithm is still present in their current trunk (with a slightly improved comment): \\\n<https://github.com/jquery/qunit/blob/master/src/core.js#L230>\n\nGiven the time and effort it took to get our previous extremely minor patch in, I think the economics favour continuing with our own patched version.\n\n<https://github.com/jquery/qunit/blob/1.23.1/History.md>\n\nA new testing library might be fun, but it would be a huge amount of effort to evaluate and implement, and doesn't seem a high priority compared to other tasks such as getting a 2.0 release out.\n"
    }
  ]
}
---
Quite often, especially when run as part of an all-tests run, the Enactors test will fail. This has mainly been observed on Chrome on Windows but sometimes on other platforms - @@Colin Clark can confirm, but I think he has seen it on MacOS also. Here is a sample failing transcript - it appears that 13 tests have somehow run twice - my guess from the look of the transcript is that it is the fault of the "Prefs editor with composite panel" tests which simply shouldn't be part of this run at all - this SHOULD BE part of the "Builder Tests" which has just run, but it seems has part of its material executing too late. Indeed, the test count for the Builder Tests shows 149/149 rather than the expected number of 162, which is in excess by 13, exactly the number for which the Enactor tests over-reports.

Prefs editor with composite panel: Rendering: The single panel's checkbox should be in the correct state - at sequence position 1 of 5\
Prefs editor with composite panel: Rendering: The composite panel should be rendered correctly - at sequence position 1 of 5\
Prefs editor with composite panel: Rendering: The composite panel's always on subpanel's checkbox should be in the correct state - at sequence position 1 of 5\
Prefs editor with composite panel: Rendering: The composite panel's conditional subpanel container should not be visible - at sequence position 1 of 5\
Prefs editor with composite panel: Rendering: The composite panel's conditional subpanel should not be initialized - at sequence position 1 of 5\
Prefs editor with composite panel: Rendering: The conditional panel was created - at sequence position 3 of 5\
Prefs editor with composite panel: Rendering: The container for the conditional panel is visible - at sequence position 3 of 5\
Prefs editor with composite panel: Rendering: The conditional panel was created - at sequence position 3 of 5\
Prefs editor with composite panel: Rendering: The container for the conditional panel is visible - at sequence position 3 of 5\
Prefs editor with composite panel: Rendering: The conditional panel is not created - at sequence position 5 of 5\
Prefs editor with composite panel: Rendering: The container for the conditional panel is not visible - at sequence position 5 of 5\
Prefs editor with composite panel: Rendering: The conditional panel is not created - at sequence position 5 of 5\
Prefs editor with composite panel: Rendering: The container for the conditional panel is not visible - at sequence position 5 of 5\
Test style element component: Apply and reset the style: Default value: false\
Test style element component: Apply and reset the style: Css class to be applied or removed: fl-style-test\
Test style element component: Apply and reset the style: Default - css class is not applied\
Test style element component: Apply and reset the style: True value - Css class has been applied\
Test style element component: Apply and reset the style: False value - Css class has been removed\
Test emphasize links enactor: Apply and reset emphasized links: Default value: false\
Test emphasize links enactor: Apply and reset emphasized links: Css class to be applied or removed: fl-emphasizeLinks-test\
Test emphasize links enactor: Apply and reset emphasized links: Default - css class is not applied\
Test emphasize links enactor: Apply and reset emphasized links: True value - Css class has been applied\
Test emphasize links enactor: Apply and reset emphasized links: False value - Css class has been removed\
Test inputs larger enactor: Apply and reset larger inputs: Default value: false\
Test inputs larger enactor: Apply and reset larger inputs: Css class to be applied or removed: fl-text-larger\
Test inputs larger enactor: Apply and reset larger inputs: Default - css class is not applied\
Test inputs larger enactor: Apply and reset larger inputs: True value - Css class has been applied\
Test inputs larger enactor: Apply and reset larger inputs: False value - Css class has been removed\
Test class swapper enactor: Swap css class: The style class is not applied by default\
Test class swapper enactor: Swap css class: The style class has been applied\
Test class swapper enactor: Swap css class: The style class has been removed\
Test text size enactor: Apply text size in times: Check that the size is pulled from the container correctly\
Test text size enactor: Apply text size in times: The size should be doubled\
Test text size enactor: Apply text size in times: The font size specified in rem units should be doubled\
Test getLineHeight: Get line height: getLineHeight in px\
Test getLineHeightMultiplier: Get line height multiplier: line-height value 'undefined' has been converted correctly\
Test getLineHeightMultiplier: Get line height multiplier: line-height value 'normal' has been converted correctly\
Test getLineHeightMultiplier: Get line height multiplier: line-height value '6px' has been converted correctly\
Test getLineHeightMultiplier: Get line height multiplier: line-height value '1.5' has been converted correctly\
Test line space enactor: Apply line space in times: Check that the size is pulled from the container correctly\
Test line space enactor: Apply line space in times: Check the line spacing size in pixels\
Test line space enactor: Apply line space in times: The size should be doubled\
Test table of contents enactor: Test in order: default, toc is on, toc is off: Table of contents has 0 levels - at sequence position 1 of 5\
Test table of contents enactor: Test in order: default, toc is on, toc is off: Table of contents has 1 levels - at sequence position 3 of 5\
Test table of contents enactor: Test in order: default, toc is on, toc is off: The visibility of the table of contents is true - at sequence position 3 of 5\
Test table of contents enactor: Test in order: default, toc is on, toc is off: Table of contents has 1 levels - at sequence position 5 of 5\
Test table of contents enactor: Test in order: default, toc is on, toc is off: The visibility of the table of contents is false - at sequence position 5 of 5\
Expected 34 assertions, but 47 were run\
Source: 	\
at F.QUnit.asyncTest (<http://localhost/source/gits/infusion-master/tests/lib/qunit/js/qunit.js:401:9>)

        
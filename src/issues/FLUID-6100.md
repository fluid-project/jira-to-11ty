---json
{
  "title": "FLUID-6100",
  "summary": "It's inconvenient to not be able to use IoC expressions in a \"modules\" block of a testCaseHolder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2016-12-18T12:29:24.564-0500",
  "updated": "2016-12-18T21:46:14.296-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-12-18T19:00:13.107-0500",
      "body": "Hi - thanks for this report which highlights an annoying usability failure. This looks like a great use case for the new \"sequenceGrade\" option which is currently in trunk, but whose documentation is in review: <https://github.com/amb26/infusion-docs/blob/FLUID-5903/src/documents/IoCTestingFramework.md#using-sequencegrade-to-build-up-complex-reusable-test-sequences> - in keeping with our modern tendency towards creating \"gigantic up-front JSON dialects\" (like renderer component trees, model transformation documents and IoC Testing fixtures), this allows the work of building up a test sequence to be factored out as a set of reusable grades, which each feature a less hostile mergePolicy.\\\nThere was also extensive notes taken in the piratePad in the GPII meeting on this topic last Monday but sadly I can't easily find the URL at present.\n\nIn terms of fixing the existing \"modules\" feature I fear there is little we can do with the existing framework architecture since it would require a level of detailed control over mergePolicies which isn't currently possible - and which I suspect might create a confusing landscape if it was possible.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-12-18T21:46:14.296-0500",
      "body": "I've wikified the notes from the relevant section of the meeting at <https://wiki.fluidproject.org/display/fluid/Motivation+and+Explanation+for+New+IoC+Testing+Framework+Feature+sequenceGrade>\n"
    }
  ]
}
---
At the moment, fluid.test.testCaseHolder declares a mergePolicy of "noexpand" for its "modules" option. Presumably this is because it operates its own custom (late) lifecycle for the contents of the "modules" structure, but it also means that seemingly-innocent IoC expressions fail to work. As a user from the outside, this seems confusingly inconsistent with most other components where IoC expressions can be used freely anywhere within an options structure. If nothing else, this might suggest a documentation opportunity where we could establish a convention for marking regions of a components options that have special mergePolicies.

Here are a couple of examples of things I tried while learning the IoC Testing framework, which didn't work:

```javascript
fluid.defaults("flock.test.lessPointyTester", {
    gradeNames: "fluid.test.testCaseHolder,

    testSequence: [
        {
            func: "QUnit.ok",
            args: [true]
        }
    ],

    modules: [
        {
            name: "A module",
            tests: [
                {
                     name: "Some test",
                     expect: 1,
                     // This fails because the testing framework tries to iterate over the raw string
                     // as if it were an array of sequence specifications.
                     sequence: "{that}.options.testSequence" 
                }
            ]
        }
    ]
});
```

```javascript
fluid.defaults("flock.test.bus.tester", {
        gradeNames: "fluid.test.testCaseHolder",

        modules: [
            {
                // Here, obviously, when I use this a base grade all my modules end up
                // with the name of the literal string "{that}.options.moduleName"
                name: "{that}.options.moduleName",
                tests: [
                    {
                        name: "Acquire too many buses",
                        expect: 3,
                        sequence: [
                            {
                                funcName: "flock.test.bus.runTests",
                                args: [
                                    "{environment}",
                                    "{that}.options.busType",
                                    "{that}.options.numBusesToAcquire",
                                    "{that}.expectedBusIndex"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],

        invokers: {
            expectedBusIndex: {
                funcName: "fluid.notImplemented"
            }
        }
    });
```

        
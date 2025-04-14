---json
{
  "title": "FLUID-6570",
  "summary": "Usability improvements for modelRelay system",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-10-30T07:54:12.035-0400",
  "updated": "2021-06-21T11:30:04.755-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5894/",
      "key": "FLUID-5894",
      "summary": "Implement \"reduced expression parser\" allowing compact expression of model relay rules and transforms"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-10-30T07:59:27.803-0400",
      "body": "Note that there is substantial, and understandable, opposition to implementing such facilities within JSON5 itself - \\\n<https://github.com/json5/json5/issues/132> - \"Parse functions as object properties\"\\\n<https://github.com/json5/json5/issues/106> - \"Discussion on supporting mathematical operations in values\"\n\nUntil the REP is ready and able to verify that such functions are \"good\" it's clear that extending the interchange format is non-viable.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-11-02T08:09:20.947-0500",
      "body": "@@Antranig Basman what about functions that reference external variables, that may be out of scope when the JSON is parsed and the function executed?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-11-02T08:11:49.437-0500",
      "body": "@@Justin Obara - References to external variables will be forbidden, since \"good functions\" must be pure - <https://wiki.fluidproject.org/display/fluid/A+Good+Function>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-11-02T08:24:57.778-0500",
      "body": "@@Antranig Basman I'm a bit worried about the effects of the call to `that.getFace()` in your example above, as it could be overridden before evaluation and thus become impure. Although I suppose we already need guards against this for free transforms, so perhaps something is already in place. Also, wondering if it would make sense to elevate free transforms or perhaps this actually replaces them.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-11-02T09:44:28.833-0500",
      "body": "Yes, calls like that.getFace() present a big problem - one possibility is to provide a separate syntax such as \"impureFunc\" or so for the user to signal that they have introduced a dependence on an operation with side effects, but I guess a lot hinges on how we expect the relationship between people who write code and people who don't to actually work - we're a long way from having even a sketch of how the UI might work. There are a few things in play - i) how easy is it to design a visual interface that allows a substantial part of the design to be edited by people without coding skills (made somewhat easier by the \"pure function\" dialect but not crushingly so), ii) how easy is it to produce a system which can \"time-travel\" its state into the future or the past on behalf of designers (in this case the actual appearance of side-effects is indeed crucial).\n\nNote that there was what looks like it might have been a fault in the implementation of the original \"getFace\" method in that it appeared like it might be trying to have a side-effect, but actually wasn't - <https://github.com/fluid-project/infusion/blob/main/demos/switch/js/SwitchDemo.js#L88> - one could also argue that any invocation of Math.random() also represents some form of environmental side-effect (or possibly co-effect, who knows!)\n\nIn any case the \"little good function dialect\" looks like it could be a good place where people who write code a lot, and people who don't write code much, could meet, and also help out in producing a system with more manageable syntax that was easier to shift state from time to time.\n\nYes, we'll indeed need to overhaul the model transformations repertoire substantially after this and most likely throw out a good deal of them - in addition to \"free\", all the binops and other very little transforms (stringToNumber, count, condition, linearScale, indexOf) can all go. Many of the others are sufficiently esoteric that they might end up being hived off to some optional micromodule or so. This leaves things like the valueMapper and the range transforms as being sufficiently general-purpose and not matched by anything sufficiently idiomatic in standard arithmetic expressions, that would end up staying in the core.\n"
    }
  ]
}
---
Our modelRelay system is a bit long in the tooth and now it is about to see a significant increase in usage as a result of the "integral binding system" in the new renderer, it is time for a spring cleaning, cut a few corners, and make some usability improvements.

In advance of implementing the "reduced expression parser" for FLUID-5894, we can significantly ease the use of simple arithmetic transforms by allowing literal functions to appear in modelRelay records.

The appearance of literal code in configuration had long appeared an unacceptable risk - but together with some of the thinking in FLUID-5894, we can mitigate this. Taking advantage of the fact that JavaScript has an enlightened design where `f.toString()` for a function f yields the literal text of the function body, we can adopt an architecture where functions are packaged as .... functions. This implies getting the benefit of "surface linting" as we do for our configuration which verifies it is at least "some kind of JSON", we can also verify that our functions are at least some kind of functions. Deeper linting can verify more detailed properties of the functions, which the FLUID-5894 parser can do, once we write it - this can then be packaged as an eslint plugin, as well as, when we allow transit of arbitrary grades as "configuration", we can develop our extended profile of JSON5 that allows "suitably good functions" to appear in their serialised definitions.

Context of idea - examining the code for the "switch demo" at <https://github.com/fluid-project/infusion/blob/main/demos/switch/js/SwitchDemo.js#L96> we struggled with how to transform these three actions into a declarative dialect:

```java
demo.faces.toggleLight = function (that, state) {
        that.locate("text").text(that.options.strings[state ? "on" : "off"]);
        that.locate("face").text(state ? that.getFace() : "");
        that.locate("panel").toggleClass(that.options.styles.light, state);
    };
```

As FLUID-5894 notes, the verbosity of the "parser-averse" definitions of modelRelay are a huge barrier to usability by code-oriented members of the Infusion ecology, whom as we now know are still going to be the only ones for many, many years. \
Taking a leaf out of the "React-heads"' book we can consider packaging this by the use of tiny, real "state-accepting" functions which at least operate a dialect which is widely recognisable. We would then express the previous as

```java
modelRelay: {
    text: {
        source: "{that}.model.lightOn",
        target: "{that}.model.dom.text.text",
        func: (strings, value) => strings[state ? "on" : "off"],
        args: ["{that}.options.strings", "{change}.value"]
    },
    face: {
        source: "{that}.model.lightOn",
        target: "{that}.model.dom.face.text",
        func: (value) => value ? that.getFace() : ""
    },
    panel: {
        source: "{that}.model.lightOn",
        target: {
            segs: ["dom", "panel", "classes", "{that}.options.styles.light"]
        } // Default is to relay using identity
    }
```

Still fairly verbose but now less offensively so and now conceivably authorable by some kind of visual tool.

Note that a small enhancement is that when the relay definition includes no other directive, the system assumes "fluid.transforms.identity".

Finally, once FLUID-5894 is ready, we would signal to the system that we expected a function to be invertible (through being part of the "linear" dialect of functions) by specifying it as "lens" rather than "func", e.g.

```java
modelRelay: {
        flipper: {
            source: "{that}.model.value",
            target: "{that}.model.negatedValue",
            lens: (value) => !value
        }
    }
```

        
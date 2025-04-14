---json
{
  "title": "FLUID-6428",
  "summary": "Failed resolution of IoC reference leaves mouse droppings in options structure",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-11-19T11:49:10.592-0500",
  "updated": "2019-11-20T07:15:07.062-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-11-20T07:14:47.865-0500",
      "body": "The first variety of this caused a failure during PanelsTests.js \"FLUID-5203: support multiple text field sliders in one composite panel\". The attempt to invoke\n\n```java\nupdateSliderAttributes: {\r\n                \"this\": \"{that}.container\",\r\n                method: \"attr\",\r\n                args: [{\r\n                    \"min\": \"{that}.model.range.min\",\r\n                    \"max\": \"{that}.model.range.max\",\r\n                    \"step\": \"{that}.model.step\",\r\n                    \"type\": \"range\",\r\n                    \"value\": \"{that}.model.value\",\r\n                    \"aria-labelledby\": \"{that}.options.attrs.aria-labelledby\",\r\n                    \"aria-label\": \"{that}.options.attrs.aria-label\"\r\n                }]\r\n            }\n```\n\nvia\n\n```java\n\"onCreate.initSliderAttributes\": \"{that}.updateSliderAttributes\",\n```\n\ncaused a read of \"{that}.options.attrs.aria-labelledby\" which was undefined. The failure was in fluid.makeExpandStrategy's \"deliverer\" which attempted to set the undefined value explicitly in the target. We need a system **both** which freezes values after full observation, but also does not leave mouse dropping tracking in the target, even during observation.\n"
    }
  ]
}
---
It looks like this is an issue that only appears in the in-progress branch implementing immutable options for FLUID-6426. The Syllabification enactor tests at <https://github.com/fluid-project/infusion/blob/master/tests/framework-tests/preferences/js/SyllabificationEnactorTests.js#L293> contain some blocks which actually fail to resolve at all as a result of escaping issues:

```java
combined: {
                    ".flc-syllabification-injectWhenDisabled": "{that}.options.testOpts.injected.disabled.\.flc-syllabification-injectWhenDisabled",
                    ".flc-syllabification-injectWhenEnabled": "{that}.options.testOpts.injected.disabled.\.flc-syllabification-injectWhenEnabled"
                }
```

However, whilst they fail to resolve they now leave "mouse droppings" at the site where they are directed during initial observation, and {that}.options.testOptions.injected.disabled ends up with an mouse dropping of&#x20;

```java
"": undefined
```

It seems our modifications to the options evaluation workflow have hoisted the widespread ability to leave mouse droppings of "undefined" across the source of blocks into their target.

        
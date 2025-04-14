---json
{
  "title": "FLUID-6303",
  "summary": "Implement a panel, adjuster and enactor for locale",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-07-17T16:51:33.501-0400",
  "updated": "2019-01-23T16:19:21.825-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6364/",
      "key": "FLUID-6364",
      "summary": "Examine the user experience of setting languages through the localization panel"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6198/",
      "key": "FLUID-6198",
      "summary": "Migrate multilingual UIO code from SJRK Storytelling to Infusion"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6299/",
      "key": "FLUID-6299",
      "summary": "Add translated message bundles to UIO"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6300/",
      "key": "FLUID-6300",
      "summary": "Implement client-side rerender of UIO based on locale changes"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6301/",
      "key": "FLUID-6301",
      "summary": "Implement persistence of UIO locale as a stored preference"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6363/",
      "key": "FLUID-6363",
      "summary": "Re-visit the removal of the localization preference from the prefsFramework demo"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6364/",
      "key": "FLUID-6364"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6312/",
      "key": "FLUID-6312"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6363/",
      "key": "FLUID-6363"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-12-17T07:50:44.673-0500",
      "body": "I spoke with @@Antranig Basman in the fluid-work channel today ( <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2018-12-17.log> ) about the issue of configuring the language panel with the schema version of the prefs framework. Typically when using the schemas, a primary schema is created that contains the potential values of a preference. For language this is problematic because each integration would have their own set of supported languages. It seems the best we can do now is to have the integrator configure the panel settings against the built prefs editor, that is after the schemas have been compiled and a  prefs editor grade is generated. Antranig, suggested that we could add a helpful utility for it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-12-18T08:44:38.515-0500",
      "body": "Also from my discussion with @@Antranig Basman in the fluid-work channel yesterday ( <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2018-12-17.log> ), we will setup the enactor to use contextAwareness to switch between the various methods for applying the language change.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-12-20T12:28:19.963-0500",
      "body": "Was going to add code to modify the query parameters to change the locale. However, it seems that the \"fluid.prefs.enactor.localization.queryParamLocale.search\" method held much of the logic and would need to be mocked out in a test. Because we don't actually have a use case for this type of locale change, and the difficulty in testing, I've decided to leave it out, but the code is provided below if we'd like to implement it later.\n\n```java\n/*******************************************************************************\r\n     * Query Parameter\r\n     *\r\n     * Changes a query parameter to specify which language should be displayed.\r\n     * E.g. www.example.com?lang=en\r\n     *******************************************************************************/\r\n    fluid.defaults(\"fluid.prefs.enactor.localization.queryParamLocale\", {\r\n        langMap: {}, // must be supplied by integrator\r\n        langParam: \"lang\",\r\n        model: {\r\n            langParam: {\r\n                expander: {\r\n                    func: \"{that}.search\"\r\n                }\r\n            }\r\n        },\r\n        modelRelay: {\r\n            \"setLangParam\": {\r\n                source: \"lang\",\r\n                target: \"langParam\",\r\n                singleTransform: {\r\n                    type: \"fluid.transforms.valueMapper\",\r\n                    match: \"{that}.options.langMap\"\r\n                }\r\n            }\r\n        },\r\n        modelListeners: {\r\n            langParam: {\r\n                funcName: \"{that}.search\",\r\n                args: [\"{change}.value\"],\r\n                namespace: \"setLangParam\"\r\n            }\r\n        },\r\n        listeners: {\r\n            \"onCreate.setURLPath\": {\r\n                changePath: \"urlPathname\",\r\n                value: {\r\n                    expander: {\r\n                        func: \"{that}.pathname\"\r\n                    }\r\n                },\r\n                source: \"initialURLPathname\"\r\n            }\r\n        },\r\n        invokers: {\r\n            search: {\r\n                funcName: \"fluid.prefs.enactor.localization.queryParamLocale.search\",\r\n                args: [\"{that}.options.langParam\", \"{arguments}.0\"]\r\n            }\r\n        }\r\n    });    /**\r\n     * A simple wrapper around the location.search setter/getter property. However, it does not simply set and return\r\n     * the entire search/query string, but rather takes in a specific property to act upon.\r\n     *\r\n     * @param {String} searchString - (Optional) searchString to set. If not supplied the current searchString will be returned\r\n     * @return {String} - If the `searchString` argument is not provided, the current searchString is returned\r\n     */\r\n    fluid.prefs.enactor.localization.queryParamLocale.search = function (property, value) {\r\n        var params = new URLSearchParams(location.search);\r\n        var currentValue = params.get(property);        if (!value) {\r\n            return params.get(property);\r\n        } else if (currentValue !== value) {\r\n            params.set(property, value);\r\n            location.search = params.toString();\r\n        }\r\n    };\n```\n"
    },
    {
      "author": "Cindy Li",
      "date": "2019-01-23T16:18:20.259-0500",
      "body": "@@Justin Obara issued [the initial pull request](https://github.com/fluid-project/infusion/pull/949) that was based off for [the 2nd pull request](https://github.com/fluid-project/infusion/pull/951), which was to address the last minor code review comment on the initial pull request when @@Justin Obara is on vacation. [The 2nd pull request](https://github.com/fluid-project/infusion/pull/951) has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/35e8a5a9c958cca65ca403108f784668ff42148d).\n\n[FLUID-6363](https://issues.fluidproject.org/browse/FLUID-6363) is recreated for @@Justin Obara to re-visit the change made in [the 2nd pull request.](https://github.com/fluid-project/infusion/pull/951)\n\n<https://fluidproject.atlassian.net/browse/FLUID-6364#icft=FLUID-6364> is created for the re-examination of the user experience of setting languages thru the localization panel.\n"
    }
  ]
}
---
Implement a panel, adjuster and enactor for locale selection

The enactor need not be fully implemented. It could simply offer a point of integration that is left to the developer's discretion.

Some prior art in <https://github.com/GPII/first-discovery> (note that the page reloads every time the locale is changed in this project)

        
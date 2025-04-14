---json
{
  "title": "FLUID-5105",
  "summary": "Contributed grade options are not resolved within the expander inside the defaults.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2013-07-29T09:29:42.250-0400",
  "updated": "2019-10-19T03:38:36.996-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5615/",
      "key": "FLUID-5615",
      "summary": "Grade closure algorithm for dynamic grades is faulty in the case of repeated arrival through distribution source before resolving a function source"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-07-30T10:29:01.974-0400",
      "body": "Hi yzen and cindyli - Thanks for this report and test case. I am pasting in its current form here, in case it gets updated:\n\n```java\nfluid.defaults(\"fluid.tests.auxSchema\", {\r\n        gradeNames: [\"fluid.littleComponent\", \"autoInit\"],\r\n        auxiliarySchema: {}\r\n    });\r\n\r\n    fluid.defaults(\"fluid.tests.auxSchema.starter\", {\r\n        gradeNames: [\"fluid.tests.auxSchema\", \"autoInit\"],\r\n        auxiliarySchema: {\r\n            \"exists\": true\r\n        }\r\n    });\r\n\r\n    fluid.defaults(\"fluid.tests.primaryBuilder\", {\r\n        gradeNames: [\"fluid.littleComponent\", \"autoInit\", \"{that}.buildPrimary\"],\r\n        primarySchema: {},\r\n        auxiliarySchema: {},\r\n        auxSchema: {\r\n            expander: {\r\n                func: \"fluid.tests.primaryBuilder.parseAuxSchema\",\r\n                args: \"{that}.options.auxiliarySchema\"\r\n            }\r\n        },\r\n        invokers: {\r\n            buildPrimary: {\r\n                funcName: \"fluid.tests.primaryBuilder.buildPrimary\",\r\n                args: \"{that}.options.auxSchema\"\r\n            }\r\n        },\r\n    });\r\n\r\n    fluid.tests.primaryBuilder.buildPrimary = function (auxSchema) {\r\n        return [];\r\n    };\r\n\r\n    fluid.tests.primaryBuilder.parseAuxSchema = function (auxSchema) {\r\n        return {exists: auxSchema.exists};\r\n    };\r\n\r\n    fluid.defaults(\"fluid.tests.auxBuilder\", {\r\n        gradeNames: [\"autoInit\", \"fluid.tests.auxSchema\", \"fluid.tests.primaryBuilder\"]\r\n    });\r\n\r\n    jqUnit.test(\"FLUID-5105: Contributed grade options merging.\", function () {\r\n        var builder = fluid.tests.auxBuilder({\r\n            gradeNames: [\"fluid.tests.auxSchema.starter\"]\r\n        });\r\n        jqUnit.assertValue(\"Options from the contributed grade must be merged in\", builder.options.auxiliarySchema.exists);\r\n        jqUnit.assertValue(\"Options from the contributed grade must be merged in\", builder.options.auxSchema.exists);\r\n    });\n```\n\nThe issue is that the dynamic grade structure of a component is evaluated at just one time. Tracing the activity of \"{that}.buildPrimary\", the dynamic grade of the component, this triggers the evaluation of {that}.options.auxSchema - this in turn triggers the evaluation of {that}.options.auxiliarySchema. Given this is partway through the process of resolving dynamic grades, the additional material supplied as direct options has not yet been seen. We can try to fix this, but in general you should avoid the use of invokers in grade resolution which depend on material which is itself dependent on dynamic grade information, since this runs the risk of encountering a circularity in evaluation.\n\nIt may be possible to resolve this issue by moving towards a 3-phase approach for resolving dynamic grade information, where the use of invokers is deferred to the third phase.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-22T17:41:42.591-0400",
      "body": "Keeping this issue open for now, but have closed the corresponding pull request with this comment:\n\nHi yzen - thanks for this test case which is useful - I think I will close this pull request but keep the accompanying JIRA open since this is a bit of a \"grey area\" in the implementation policy, and it would be good to be able to search for this issue in future should it arise again. As I explain in the JIRA, I'd prefer not to \"fix\" this issue without another confirming instance of the problem, since allowing people to cut the ginger world timing so finely runs the risk of creating code which is very difficult to follow. In practice, the original issue was resolved by the old-fashioned means of creating an extra component - although in this case I feel the effect was to improve the system design.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-11-20T14:35:12.176-0500",
      "body": "I had a further look at this test case after the <https://fluidproject.atlassian.net/browse/FLUID-5155#icft=FLUID-5155> implementation, but it is still not practical to resolve it. As the early comment mentions, the activity of \"{that}.buildPrimary\" causes the full evaluation of the option \"{that}.options.auxiliarySchema\" which given the grade structure at the time evaluates to {}. This value having once been evaluated, we cannot then go on to reevaluate it when the further grade material arrives from \"fluid.tests.auxSchema.starter\" which is counted as a dynamic grade and is so applied later.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T22:00:01.301-0400",
      "body": "This will probably be resolved fully with <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-10-19T03:38:36.996-0400",
      "body": "This should have been resolved, re-check - for some time it should have been that directly supplied grades do not count as dynamic.\n"
    }
  ]
}
---
This problem can be seen in the current state of the UIOptions builder.

The auxiliary builder is currently assigned a "fluid.uiOptions.auxSchema.starter" grade that contains all the specification for the starter panels, enactors, etc: <https://github.com/jobara/infusion/blob/FLUID-4907/src/components/uiOptions/js/Builder.js#L25>

This is incorrect and in fact should be changed to just "fluid.uiOptions.auxSchema" grade that is by default empty.

Whenever the user configures uioptions builder and by extension uioptions themselves, they have an option of passing an auxSchema gradeName that contains the required configuration. For example, this is demonstrated by the current uioptions demo: <https://github.com/jobara/infusion/blob/FLUID-4907/src/demos/uiOptions/js/uiOptionsDemo.js#L23-L25>.

However this does not work at the moment because the framework does not resolve the "fluid.uiOptions.auxSchema.starter" defaults when passed as options to the builder.

More specific test case to follow.

        
---json
{
  "title": "FLUID-5733",
  "summary": "Supply new \"fluid.notImplemented\" function which allows early diagnosis of failure to override invoker or listener from abstract grade",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-08-06T09:35:01.633-0400",
  "updated": "2024-07-22T09:31:41.997-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:12:36.084-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
It's become quite common for implementers of infrastructure grades to supply them with "abstract" invokers or event listeners, with the expectation that these must be overridden by an implementor of a concrete grade derived from them (similar to the "pure virtual function" of C++ or "abstract method" of Java). This is currently done in an ad hoc manner by implementing a placeholder function which throws with a diagnostic method if used - for example:

gpii.templates.templateAware.noRenderFunctionDefined = function () {\
fluid.fail("You are expected to define a renderInitialMarkup invoker when implementing a templateAware component.");\
};

with\
invokers: {\
renderInitialMarkup: {\
funcName: "gpii.templates.templateAware.noRenderFunctionDefined"\
},

it would be helpful if this were standardised into a framework facility, which in addition could report the error earlier - at the point of instantiating a grade in which such a member had not been overridden. In discussion in #fluid-work on Aug 4th 2015, the consensus was in favour of giving this function the name "fluid.notIimplemented":

<https://botbot.me/freenode/fluid-work/2015-08-04/?msg=46379945&page=1>

        
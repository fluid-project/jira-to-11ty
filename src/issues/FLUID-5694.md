---json
{
  "title": "FLUID-5694",
  "summary": "Produce framework diagnostic when trying to inject component to its own location",
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
  "date": "2015-06-20T10:15:09.615-0400",
  "updated": "2017-02-27T15:49:14.393-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:17:26.173-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
Continuing to plug all cases of possible stack overflow in the framework, such as <https://fluidproject.atlassian.net/browse/FLUID-5305#icft=FLUID-5305>, <https://fluidproject.atlassian.net/browse/FLUID-5088#icft=FLUID-5088>, <https://fluidproject.atlassian.net/browse/FLUID-4978#icft=FLUID-4978> etc., we ran into a very obvious case this week. The issue originally arose when reorganising the grade structure of gpii-handlebars to support the "multiTemplateAware" feature. The provoking configuration is at <https://github.com/the-t-in-rtf/gpii-handlebars/blob/9e333caa80c0c86418c3c67575a580293bce8256/src/js/client/multiTemplateAware.js> . This involves a complex set of mutually referring grades, but ultimately the issue is represented in a straightforward way - an attempt to write

fluid.defaults("myGrade", {\
components: {\
myComponent: "{myGrade}.myComponent"\
}\
});

causes the framework to overflow as it continually tries to inject the (nonexistent) subcomponent into its own position. This should be reported with a clear diagnostic rather than a stack overflow.

        
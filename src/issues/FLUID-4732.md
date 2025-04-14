---json
{
  "title": "FLUID-4732",
  "summary": "InlineEdit component does not use the properly namespaced component name for its defaults",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2012-07-20T17:16:58.179-0400",
  "updated": "2014-03-03T12:50:53.519-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-10-30T02:28:57.099-0400",
      "body": "Thanks for the fix and test case, Alexey\n"
    },
    {
      "author": "Alexey Novak",
      "date": "2012-10-30T10:29:56.990-0400",
      "body": "Merged into master 8a9635b98a31b4b521e68115fcedf886582c72a3\n"
    }
  ]
}
---
The InlineEdit component, being our very oldest component, has not used the proper namespace to hold its options. Its defaults are issued against "inlineEdit" and "inlineEdits" rather than "fluid.inlineEdit" and "fluid.inlineEdits". This will cause problems where users attempt to make use of our version management strategy to make multiple versions of Fluid coexist, as well as just being a reading hazard - I became convinced that fixes for FLUID-4725 contained a bug as a result of "reading over" the incorrect versions of the defaults statements.

In theory, only the component's implementation should read its defaults, and so correcting this issue need not represent a breaking API change. It may also lead to removal of bugs in other situations - currently if a use is made of InlineEdit in an IoC situation, the context name "fluid.inlineEdit" which every user will expect to be present will not be seen.

The following lines of code in the FLUID-4725 fix issue a read to the component's own defaults using the faulty name, which compounds the problem:

if ((that.options.defaultViewText !== undefined) &&\
(that.options.strings.defaultViewText === fluid.defaults("inlineEdit").strings.defaultViewText)) {\
that.options.strings.defaultViewText = that.options.defaultViewText;\
}

        
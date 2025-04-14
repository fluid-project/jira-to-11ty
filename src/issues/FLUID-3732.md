---json
{
  "title": "FLUID-3732",
  "summary": "fluid.initSubcomponent() doesn't properly array-ify args if args is a jQuery object",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2010-09-10T16:33:50.986-0400",
  "updated": "2019-07-12T09:13:33.675-0400",
  "versions": [
    "1.1",
    "1.2",
    "1.3",
    "1.4"
  ],
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
      "author": "Anastasia Cheetham",
      "date": "2010-09-10T16:35:38.760-0400",
      "body": "The only place I've noticed this so far is InlineEdit: that's the only code I've found that actually doesn't pass an array to initSubcomponents(). The only reason this doesn't cause a problem is because the subcomponents in question happen to work fine if passed a DOM node instead of the intended jQuery object. However, if the IoC system is used to create the subcomponents, mayhem ensues.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-14T10:31:56.685-0400",
      "body": "@@Antranig Basman can you verify if this is still an issue?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T21:45:36.300-0400",
      "body": "initSubcomponent is no longer a supported API following this release, so the issue is null\n"
    }
  ]
}
---
fluid.initSubcomponent() calls jQuery.makeArray() on the args parameter, just in case it's not actually an array.

If the args parameter happens to be a single jQuery object, however, all the call to jQuery.makeArray() does is strip off the non-arrayness of the object resulting in a pure Array of DOM nodes.

        
---json
{
  "title": "FLUID-5065",
  "summary": "writing demands for versioned fluid instances is confusing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2013-06-25T12:11:54.921-0400",
  "updated": "2015-06-26T10:01:54.549-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-06-25T12:26:18.401-0400",
      "body": "Unfortunately I don't see that this issue is avoidable. It's astonishing enough that this feature works at all, since I don't think any other environment offers anything comparable. Could you explain the context that this problem arises in? In general you should not be making access to the concrete versioned versions of fluid namespaces in any case, but using the standard pattern of binding them to the variable named \"fluid\" within a suitable closure - e.g. the code above could have been enclosed in the block\n\n(function ($, fluid) {\n\n...\n\n})(jQuery, fluid\\_1\\_5);\n\nwhich is the standard boilerplate for our files, and the references would have seemed less problematic. \"fluid\\_1\\_5.videoPlayer\" is not really a valid expression, as you find, since from its own point of view its standard global name is fluid.videoPlayer.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-06-26T08:40:24.641-0400",
      "body": "A GSoC student is working on a project to add the videoPlayer to ATutor. ATutor uses a released version of Infusion, while the videoPlayer requires a 1.5-SNAPSHOT version. The student required using the fluild\\_1\\_5 version to make calls to the video player. The student also needed to specify a demands block for the controllers template due to VP-314. Colin also suggested the closure method in the channel yesterday and a task to properly document our versioning scheme has been added to the list <http://wiki.fluidproject.org/display/fluid/Pre-1.5+Docs+Tasks>.\n\nThis last point you make, '\"fluid\\_1\\_5.videoPlayer\" is not really a valid expression, as you find, since from its own point of view its standard global name is fluid.videoPlayer', is what made working with it confusing; as the videoPlayer actually lives off of the fluid\\_1\\_5 object.&#x20;\n\nPerhaps documentation will be enough to satisfy this issue though.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-03-31T13:03:21.473-0400",
      "body": "Demands blocks will shortly be removed from the framework, in favour of plain grades whose interaction with global names should be more clear.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:57.847-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
When you write a demands block for a component that uses the versions fluid namesspace, you still have to refer to the unversioned fluid namespace for contexts and function names.

e.g.

fluid\_1\_5.videoPlayer(...);\
fluid\_1\_5.demands("fluid.videoPlayer.controllers", "fluid.videoPlayer", {...});

Notice how in the demands the "fluid" namespace is used for both the function to be modified and the context, even though the demands and the component were both executed from the "fluid\_1\_5" namespace.

        
---json
{
  "title": "FLUID-1078",
  "summary": "Provide a means for linking against multiple versions of the Infusion framework and components.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-07-31T17:02:29.000-0400",
  "updated": "2011-02-22T16:27:51.154-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:02:40.000-0400",
      "body": "infusion-05-wishlist\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-08-22T15:33:12.000-0400",
      "body": "One issue with this strategy is the fact that we depend on jQuery and there is no way to have multiple versions of jQuery at a single time. So once this issue is addressed we would support multiple versions of fluid as long as all the versions depend on the same version of jQuery.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-08-22T15:35:02.000-0400",
      "body": "It seems that YUI has a way of knowing whether there are multiple versions of the library loaded but doesn't actually support the different versions working.\\\n<http://developer.yahoo.com/yui/docs/YAHOO.env.html#getVersion>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-08-22T15:42:11.000-0400",
      "body": "Dojo does allow for multiple versions at the same time.\\\n<http://dojotoolkit.org/book/book-dojo/part-3-javascript-programming-dojo-and-dijit/multiple-versions-dojo-page>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-08-25T11:07:52.000-0400",
      "body": "As a convenience to users, I am going to assign 'fluid' to the versioned fluid namespace in Fluid.js. So for example, a user could do either \"fluid.reorderList\" or \"fluid\\_0\\_5.reorderList\".&#x20;\n\nThe result is that the **last** version of Fluid.js to load will set the 'fluid' namespace to its version. All the other files will defer to the already set version of fluid. &#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-09-18T15:25:17.000-0400",
      "body": "The biggest challenge we have with this versioning scheme is our use of invokeGlobalFunction(), which allows us to leak out of the current scope where fluid is defined. We'll have to modify invokeGlobalFunction so that it takes the current fluid instance as an argument.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-09-20T11:20:56.000-0400",
      "body": "This feature is now implemented for Infusion 0.5. For backwards compatibility with the unversioned \"fluid\" namespace, we've implemented a polite \"last wins\" policy. As a result, versions of Infusion prior to 0.5 must be included in the document first.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:51.153-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, you can only link against a single version of Fluid. Given that we work in a highly portalized world, we should add some means for handling more than one version at a time. Here's a sketch of the idea so far:

<http://wiki.fluidproject.org/display/fluid/Versioning+the+Fluid+Framework>

        
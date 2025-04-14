---json
{
  "title": "FLUID-224",
  "summary": "Provide the ability to create custom packages for each component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Jonathan Hung",
  "date": "2008-02-08T11:29:59.000-0500",
  "updated": "2011-02-22T16:27:59.547-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2245/",
      "key": "FLUID-2245"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2547/",
      "key": "FLUID-2547"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-224/build.js",
      "filename": "build.js"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-224/svn-diff-Fluid-224-issue.txt",
      "filename": "svn-diff-Fluid-224-issue.txt"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T16:28:31.000-0400",
      "body": "infusion-06-wishlist\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-09-16T12:54:20.000-0400",
      "body": "Simon, are you interested in taking this task on?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-09-16T12:54:37.000-0400",
      "body": "dev-iteration43\n"
    },
    {
      "author": "Simon Simon",
      "date": "2008-09-16T13:23:42.000-0400",
      "body": "Colin, yes I will start working on this.\n"
    },
    {
      "author": "Simon Simon",
      "date": "2008-12-11T17:26:20.000-0500",
      "body": "To make the build configuration more flexible, a few recommendations to the Fluid files and directories:\\\n1\\. The basic Fluid files reside under the respective js/fluid, css, html, and images directories.\\\n2\\. Each Fluid component has its own directories, under the respective js/fluid, css, html, and images directories, and all the files associated with one component reside in these directories.\\\n3\\. Any JavaScript not depended on by all Fluid components is in a separate file.\\\n4\\. A Fluid component has all its component dependent files in its own directories. In case of one file is shared by two component, then each of the two components need to have this file in their own directory.\\\n5\\. CSS files are organized in basic and component way.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-03-19T21:18:31.000-0400",
      "body": "After a great delay, this issue is coming back alive again. I'll help to get this code into the Infusion 1.0 release.\n\nSimon, thanks so much for your patch. I've taken a look at it, and it looks good. A couple of comments:\n\n* I like your directory structure suggestions above. I don't think we'll be able to go with a solution where copies of files are located throughout the repository. Unfortunately SVN doesn't give us any good way of linking to the same file in different locations, and I fear a real maintenance headache if we have multiple copies of the same code scattered through the repo. I think we'll have to go with a fairly fine-grained set of modules with hard-baked dependency declarations\n\n- I'm trying to think through some strategies for removing the big if block, checking for each component. I'm wondering if we can perhaps create a lookup table or set of named properties, allowing us to concatenate a block of dependencies automatically, without having to add each new component to the switch statement in the Ant script. If you have any ideas, let me know. I'll play around with it tomorrow and see where I get with it.\n\nThanks again for this patch; it's a really good seed for this much-needed functionality for Infusion 1.0. Apologies for the delay in getting to this, but we'll definitely get it into the repository.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T11:34:29.000-0400",
      "body": "Clean Up Parade 1.0\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-03-30T22:00:31.000-0400",
      "body": "Here's the latest draft version of the JavaScript-based dependency resolution code for the Infusion build. A couple of issues still to resolve:\n\n1\\. We're pushing the specified module name on the list of dependencies first, when in fact it should be added at the end. So for example, here's the list of module dependencies for UI options after resolution:\n\nuiOptions,jQuery,jQueryUICore,framework,renderer,jQueryUIWidgets,tableOfContents,json\n\nClearly uiOptions should come at the end.\n\n2\\. getAllRequiredFiles() is failing because concat() doesn't seem to be working in Rhino. What's going on here?\n\nThere's definitely more renaming and refactoring to do, but this is a good start.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-03-31T09:08:21.000-0400",
      "body": "Here's another version of Build.js that has been modified in two ways:\n\n1\\. We now add the current module to the list of dependencies after recursing through all its own dependencies, not before.\\\n2\\. To temporarily work around this issue of array types in Rhino, I wrote concatArray()\n\nThis now appears to be working correctly. Next up: create a FileSet from this list of files.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-03-31T10:01:16.000-0400",
      "body": "Third version of Build.js, this time with support for generating full paths for files. Getting closer.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-08T09:55:32.000-0400",
      "body": "The build scripts can now build custom builds. The remaining tasks can be handled for 1.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-23T16:42:29.000-0500",
      "body": "This issue was resolved back at Infusion 1.0\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.544-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The Ant build system we've got now should be updated to allow for more modular builds:

1\. The ability to choose if jQuery and jQuery UI get rolled into Fluid-all.js or not.\
2\. The ability to build a \<Component>-all.js, which includes all of the component's dependencies\
3\. The ability to build a MyFluid.js which allows the user to choose which components are included.

        
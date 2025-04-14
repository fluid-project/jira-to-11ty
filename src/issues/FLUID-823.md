---json
{
  "title": "FLUID-823",
  "summary": "Provide a means for centrally storing component defaults instead of using .prototype",
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
  "date": "2008-06-25T19:41:10.000-0400",
  "updated": "2011-02-22T16:27:54.069-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-823/FLUID-823_Fluid.js.patch",
      "filename": "FLUID-823_Fluid.js.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-823/FLUID-823_FluidJSTests.js.patch",
      "filename": "FLUID-823_FluidJSTests.js.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-06-25T19:49:25.000-0400",
      "body": "This patch adds a simple new method to Fluid.js that provides a way of storing and accessing defaults. Here's how it might be used:\n\nfluid.defaults(\"tabs\", {\\\nselectors: {\\\ntabContainer: \"#tabs\",\\\ntabs: \"#tabs > li\", \\\npanels: \"#panels > div\"\\\n},\n\nstyles: {\\\nselected: \"selected\",\\\nhighlighted: \"highlighted\"\\\n}\\\n});\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-06-25T19:49:52.000-0400",
      "body": "These are the unit tests for fluid.defaults().\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-27T16:12:05.000-0400",
      "body": "Colin, this looks good to me. Do we want to add some global definition of component names for the components we're working on? To prevent, say, inlineedit vs. inline-edit vs. inline\\_edit...\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T21:18:23.000-0400",
      "body": "I suggest that the component name simply be the name of the global function which is used to create it. This will start to harmonise with our \"mini-IoC\" structure emerging from things like fluid.invokeGlobalFunction etc.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-09-02T12:37:29.000-0400",
      "body": "Agreed, and this is how our components currently use the defaults store.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:54.067-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Typical components currently attach their default values (such as style names and element selectors) to their constructor function's prototype. As we move into an architectural approach where prototypes and this are not regularly used, we need a central place to put default values for components.

        
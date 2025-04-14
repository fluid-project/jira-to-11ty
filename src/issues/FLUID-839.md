---json
{
  "title": "FLUID-839",
  "summary": "Provide the ability to instantiate a whole set of inline edit components on a page with one function call.",
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
  "date": "2008-06-27T17:31:20.000-0400",
  "updated": "2011-02-22T16:27:45.314-0500",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-839/FLUID-839.patch",
      "filename": "FLUID-839.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-06-27T17:41:48.000-0400",
      "body": "This patch includes the new inlineEdits() function along with fluid.container() and some general refactoring to InlineEdit. Review is much appreciated.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-27T19:32:10.000-0400",
      "body": "Colin, some questions about your patch:\\\nActually, I guess they're questions about the intention for the centrally stored component defaults, now that I see them applied in a real context:\n\nYou use fluid.defaults() to define defaults for \"inlineEdits\"\\\nThe InlineEdit component still has separate defaults defined on the prototype, a practice we're moving away from.\\\nIs it the intention that we eventually move the current prototype defaults in with the ones you assigned to \"inlineEdits\"?\\\nOr are the defaults for \"inlineEdits\" different than the defaults for \"InlineEdit\"?\n\nI guess the real question has to do with the intended use of fluid.defaults() (and forgive me if this was already discussed - if so, I missed the discussion (I couldn't find anything on the list or on IRC)):\n\nIs the intended general practice going to be that we create a single set of defaults for each component?\\\nOr that we use the centrally stored defaults to store as many small chunks of defaults as we feel is appropriate (e.g. a set for the main constructor, another set for the inlineEdits() function, maybe another set for other yet-to-be-defined convenience functions, etc)?\n\nOther than my questions about defaults, the patch looks good - a very nice improvement.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-06-28T08:36:35.000-0400",
      "body": "Here's a quick transcript of my response to these questions on fluid-work:\n\nWe'll be moving away from the use of prototypes in order to simplify our component structure. In the meantime, we'll maintain both styles to keep the tests passing.&#x20;\n\nThe defaults for inlineEdits are different than those for a single Inline Edit component. These defaults store selectors specific to the creation of a **set** of inline edits.\n\nI'm open to suggestions for how to handle this. In my mind, the fluid.defaults() is a central registry for the default settings for components. The decision on how defaults should be organized is based on ensuring a separation of concerns. In this particular example, InlineEdit represents a single instance of the component, while inlineEdits() is a set of them. Hence separate defaults.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-16T15:30:01.000-0400",
      "body": "Fixed and merged into trunk.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:45.312-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Currently, you have to instantiate each inline edit field on a page individually. It would be very helpful to have a single function that will create a whole set of them in one call. For example:

fluid.inlineEdits(containerId, options); // Returns an \[] of inline edit instances.

        
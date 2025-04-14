---json
{
  "title": "FLUID-844",
  "summary": "Inline Edit assumes there will always be a container element wrapping the edit field. For simple scenarios, this is an unnecessary burden for the developer.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-07-01T13:47:40.000-0400",
  "updated": "2011-02-22T16:27:43.153-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-945/",
      "key": "FLUID-945"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:27:53.000-0500",
      "body": "Fixed at revision 6031 with  branch merge.\\\nThe \"isSameAsContainer\" logic has been tweaked a bit. I don't think this use case is general enough to warrant hacking the DOM binder. At least, not until we have another example of it 🙂\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:43.126-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, InlineEdit requires the edit field to be wrapped in a container element. This is sensible for cases where you've got a composite edit mode: for example, a text field with save and cancel buttons.

However, for simple cases where you only need a single edit field, there's no reason to require a container element.

Here's a workaround for this:

Change to InlineEdit.bindToDom():\
var isEditSameAsContainer = instance.editContainer.is(instance.selectors.edit);\
var containerConstraint =  isEditSameAsContainer ? instance.container : instance.editContainer;\
instance.editField =  $(instance.selectors.edit, containerConstraint);

The user would have to override the default selectors for edit and editContainer and set them to the same value.

We should probably come up with a more general approach to handling this. Maybe in the DOM Binder?

        
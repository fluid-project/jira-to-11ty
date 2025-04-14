---json
{
  "title": "FLUID-3345",
  "summary": "The jQuery selectbox plugin used by dropdown Inline Edit doesn't support the ability to type in a selection instead of using the arrows or mouse.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Colin Clark",
  "date": "2009-11-01T17:20:58.000-0500",
  "updated": "2017-03-10T09:04:11.598-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3245/",
      "key": "FLUID-3245"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-03-23T15:50:46.588-0400",
      "body": "re-opening to fix the resolution status, which currently says unresolved\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-23T15:53:02.652-0400",
      "body": "after some investigation, I'm not sure this should have ever been closed. Leaving as reopened\n"
    }
  ]
}
---
Native and plain old HTML drop down widgets allow the user to type in a portion of a word, and have a matching item automatically selected. Unfortunately, the jQuery selectbox plugin we use for dropdown Inline Edit doesn't support this feature.

Here's what Jen Bourey says about it:

"The other thing I'd noticed is that while the arrow keys successfully move through the select list, typing a letter doesn't seem to have an effect.  In a long list like an enumeration of state or countries or something, I frequently find the default HTML select element's behavior useful, and I think I'd miss that in a select component.  (Yes, I sometimes think of myself as living in CCC).  Is that something that might be added in the future?  I also found the fact that the "selected" value sort of visually looks selected but the arrow keys scroll down from the first item to be confusing."

The web site for the selectbox plugin is available here:

<http://www.brainfault.com/jquery-plugins/jquery-selectbox-replacement/>

We should either replace this code with something a bit more robust, or fix the issue ourselves and submit it back as a patch to the author.

        
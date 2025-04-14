---json
{
  "title": "SJRK-371",
  "summary": "Improve updateBlockOrder implementation",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-06-30T15:13:39.416-0400",
  "updated": "2020-06-30T15:13:39.416-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The function sjrk.storyTelling.ui.storyEditor.updateBlockOrder (introduced in <https://fluidproject.atlassian.net/browse/SJRK-288#icft=SJRK-288>) is designed to update the order-related model values of a block component based on the order of elements in the DOM. The blocks are accessed via the blockManager's managedViewComponentRegistry using a unique CSS class assigned to each blockUi component.

The method currently being used to iterate over the registry and find the unique class name is overly complex and should be rewritten or potentially refactored and replaced.

From discussion on the [SJRK-288 pull request](https://github.com/fluid-project/sjrk-story-telling/pull/84#pullrequestreview-431020780):

@@Justin Obara wrote:

> @BlueSlug if I'm following the logic of the function, what you want to do is to take the DOM position of an element, find what Infusion component corresponds to that element, and then update the model values of that component with the position index. So maybe the first question is to @amb26 about whether there is an easy way to find a component from its container.
>
> Another question is about the approach as a whole. That is you seem to only need this to update the disabled/enabled state of the up/down arrows for reordering. Here are some thoughts to get your started, none of them may be good though:
>
> You could continue with the DOM based approach and on reorder have the components inspect where they are in the parents list of children or maybe if they have a previous or next sibling. In general modelizing state is better.\
> Should a reorderable element care about it's position? Should a single block UI really have to know that it is reorderable and where it is in the list? Perhaps this reordering behaviour could be the responsibility of a parent component that sort of decorates its children with the ability to be reordered. And there by managing the state of the individual reorderable elements.

@@Antranig Basman wrote:

> Code to maintain an index of viewComponent containers to their components can be adapted from the "viewMapper" in fluidViewDebugging.js here - <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidViewDebugging.js#L576>\
> You can simplify this code considerably since there is extra material here to account for the possibility that the view component lies in an iframe.\
> However, I agree with @jobara 's comment that responsibility for all list-based functionality should be centralised in a parent component.

        
---json
{
  "title": "FLUID-4730",
  "summary": "Allow keyboard-a11y plugin to support newly-added elements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2012-07-18T13:48:05.563-0400",
  "updated": "2015-06-12T10:25:56.749-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-07-20T18:41:19.194-0400",
      "body": "This is a tricky issue which we have talked over a few times in the past. Right now, our officially supported recommendation is for the use of the \"refresh\" method on the selectables context when the DOM contents have changed. Assuming the set of selectable elements has been initialised using the \"selectableSelector\" option, this will correctly reconfigure the component to take account of the DOM modifications.&#x20;\n\nThe use of delegate events is promising, but suffers from two risks:\n\ni) The use of large number of event delegates on a page, which are scoped to different DOM sections, runs a performance risk given these events must all be dispatched via the page's root event handler. It may well be that through improvements in our component design as well as improvements in the delegate implementation, we might now be able to head off this risk, but it would require a significant investment in research\\\nii) Not all of the component's instance-specific behaviour can be explained in terms of the effects of event handlers. For example, it may be that the DOM has changed in such a way that new elements have been inserted before the currently focused selectable, thus invalidating its index. This would interfere with all kinds of calculations, for example the wrapping calculations you just updated in <https://fluidproject.atlassian.net/browse/FLUID-4725#icft=FLUID-4725>. In order to be reliable, the component would need to be rewritten entirely, in order to avoid using the \"activeItemIndex\" as its live state, but instead simply to store a reference to the currently active DOM element, and re-acquire the index by scanning the DOM when dispatching every event that required to read it. As well as being a very significant change in the implementation, this would, like i) represent a significant performance risk.\n\nFor these reasons I think it would be best for the time being to continue to recommend the use of the \"refresh\" API, and perform the research into the exact details of jQuery's delegate API to at least understand the costs behind issue i) when time permits.\n"
    }
  ]
}
---
The keyboard-a11y plugin can currently be applied to elements that are on the page at the time of invocation. It would be nice if the activatable and selectable functionality could also be applied to new elements that are subsequently added to the page. jQuery has this concept of delegated events. As of jQuery 1.7, the on() function supports delegated events (this function supercedes the delegate() function), so we could look into using that.

        
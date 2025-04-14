---json
{
  "title": "FLUID-6583",
  "summary": "Syllabification doesn't appear to detect content that's in the DOM but initially hidden",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Ned Zimmerman",
  "date": "2020-12-09T15:33:58.697-0500",
  "updated": "2020-12-14T11:09:45.548-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-12-10T08:15:18.550-0500",
      "body": "The syllabification explicitly does not attempt to syllabify hidden text. However it would definitely make sense to syllabify the text once it becomes visible, and it seems like the mutation observer is not picking this up. Unfortunately there are many different ways that an element may be hidden, and not all of those could be [observed](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe). An inline style or aria-hidden for example could probably be observed via attribute changes. However, if it's done purely by a change of a CSS class that may be on any ancestor, that would difficult.\n\nIf you want to experiment with syllabifying hidden text you should start by overriding the [hasTextToRead invoker](https://github.com/fluid-project/infusion/blob/39773eb69938b6fa0bb9e3ae8f083775d2754f2f/src/framework/preferences/js/SyllabificationEnactor.js#L84-L88). (See: [fluid.textNodeParser.hasTextToRead](https://github.com/fluid-project/infusion/blob/main/src/framework/core/js/TextNodeParser.js#L53-L79) for current implementation). In that case you might be able to just change the use of `innerText` to `textContent`. If that's the case we could probably just parameterize the method for retrieving text from the node in that function.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-12-14T11:09:45.548-0500",
      "body": "Started investigating this in my [FLUID-6583 branch](https://github.com/jobara/infusion/tree/FLUID-6583). There are a bunch of failing tests at the moment. It's likely that some cases aren't adequately being captured. \n"
    }
  ]
}
---
While integrating UIO for the community-led co-design kit, I noticed that the Syllabification adjuster doesn't apply to content which is present in the DOM on page load but initially hidden. This can be observed on the We Count site:

<https://wecount.inclusivedesign.ca/views/>

When the "Search Filters" section is toggled via the downwards chevron button on the right, none of the available filters are broken up into syllables.

Based on my reading of <https://issues.fluidproject.org/browse/FLUID-6554> it sounds like the syllabifier looks for new nodes added via a mutation observer. It doesn't seem to find and syllabify existing nodes which are hidden (via CSS `display: none` or the HTML `hidden` attribute).

        
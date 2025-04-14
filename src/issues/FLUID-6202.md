---json
{
  "title": "FLUID-6202",
  "summary": "Aggregate event doesn't always fire",
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
  "reporter": "Gregor Moss",
  "date": "2017-09-27T17:35:00.438-0400",
  "updated": "2017-10-18T11:15:24.113-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "Windows 10 & Mac OS, Chrome 61 & Firefox 55\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6202/2017-09-27 composite event bug 01 - console.jpg",
      "filename": "2017-09-27 composite event bug 01 - console.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6202/FLUID-6202.png",
      "filename": "FLUID-6202.png"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-10-06T19:31:06.603-0400",
      "body": "Thanks for this report, which is very interesting. My first impression of looking at your non-working commit is that this is an options merging bug rather than a fault in the event aggregator itself. I suspect if you look at the fully merged options of your templatedComponentWithLocalization (by just dumping `that.options` once the component has loaded) you will find that the base part of the onAllResourcesLoaded boiled event has gone missing.\n\nThat said, the use you've made of grade inheritance together with incremental event boiling is exactly how the system was meant to be used (this pattern sometimes referred to as \"enlatening\" - <https://botbot.me/freenode/fluid-work/2017-04-19/?msg=84228828&page=1> ) - the structure of the \"events\" block was designed just with this use case in mind (that is, to align naturally with respect to a naive merging algorithm) and it's pretty interesting that it has taken nearly 6 years for someone to actually try doing it and find out that it doesn't work. Clearly our merging algorithm isn't naive enough 🙂&#x20;\n\nThat said, your observation about the lifecycleStatus casts the suspicion that something more complex is going on, but hopefully it isn't. Note that with the current framework, a component should not attempt to fire any events before its own \"onCreate\" has fired.\n\nI'll take a look and try to come up with a fix \"forthwith\" as they say.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-10-09T20:27:49.121-0400",
      "body": "Well, looks like this idea for the cause of the issue was indeed too simplistic. Here's a test case confirming that the configuration in this case does indeed merge correctly - <https://github.com/fluid-project/infusion/pull/854/files>\n\nThe real cause of the issue is rather more awkward and subtle. The issue is, as you write\n\n```javascript\nevents: {\r\n                    \"onTemplatesLoaded\": \"{that}.templateLoader.events.onResourcesLoaded\"\r\n                }\r\n}\n```\n\nthe following sequence of things happens, as the framework tries to resolve the IoC reference on the right - \\\ni) The \"templateLoader\" component, which at this point does not yet exist, is forced to construct in order to resolve the reference\\\nii) Its \"onCreate\" fires, which triggers loading of resources via the deprecated and cursed fluid.fetchResources implementation\\\niii) At this point something interesting happens - you will note that the failure only occurs on the SECOND test in your suite. As it turns out there is some \"cleverness\" inside fluid.fetchResources in that it maintains a framework-global cache of all I/O it has done on your behalf. Given you are now loading testLocalizationTemplate.html for the second time, and this is the only resource that this component has requested, it satisfies it synchronously from the cache, and \"onResourcesLoaded\" fires immediately and synchronously as a listener to \"onCreate\" of the templateLoader - see attached screenshot&#x20;\n\n<!-- media: file 79139f6f-9dd4-412a-81ee-078b2d7376c9 -->\n\n&#x20;\\\niv) By the time control returns to the resolution site in your code, the action has long since finished. The event whose firing you are trying to listen to has already fired before the composite event machinery can attach to it.\n\nThere is a lot going on here, both conceptually and practically - obviously this kind of problem \"can never happen\" (<http://www.lynchnet.com/ontheair/otascript.html> - search for \"can never happen\") but clearly it just did. Whose problem is it to make sure it can never happen? Here are some possibilities:\n\ni) There is a \"prominent religion\" that every operation which **could** complete asynchronously, should **always** complete asynchronously. See <https://medium.com/@bluepnume/intentionally-unleashing-zalgo-with-promises-ab3f63ead2fd> - by this religion, it is the fault of fluid.fetchResources, and it should always notify asynchronously even if all the data is available synchronously. Note that there is indeed a very crufty branch in the implementation which achieves exactly this result, but, insufferably, just on Mozilla due to some debugging problems we last revisited around 2010: <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidRequests.js#L361>\n\nii) By the author of the blog post referenced above, there is nothing inherently problematic about the so-called \"release of Zalgo\" assuming one had a sensible promise calculus for values in the first place. This is indeed part of a long-tabled improvement to Infusion written up at <https://issues.fluidproject.org/browse/FLUID-4883> - if \"onResourcesLoaded\" weren't a standard event but instead this kind of \"latch\", it would be impossible to \"miss\" its firing as you did, since you would always catch up with it later, by that same semantic that a subscriber to promise.then() does\n\niii) Clearly all the subtlety of points i) and ii) is nonsensical and nothing that an everyday developer should have to grapple with. It should be the framework's business to \"naturally do things at the proper time\", including making sure to bind all event listeners before any component gets into an event firing stage. This may seem like impossible Jedi mind tricks but in fact is perfectly practical (probably) and is the main purpose of the framework rewrite which is underway at <https://issues.fluidproject.org/browse/FLUID-6148> and <https://github.com/fluid-project/infusion/pull/824> . Once one considers it legitimate to adopt a global rather than a local view with respect to timing and race issues, all kinds of problems which seemed structurally intractable should just \"go away\".\n\nHowever, given that ii) has been JIRAed over 4 years ago, and work on iii) has stalled since March as I try to deal with \"transitional vomit\", one is left with the unpalatable religion of i) which at least unlike most religions has in its favour that it is impossibly cheap. Given we plan to axe all of FluidRequests.js anyway, it seems the shortest way out of having people run into these problems in the nearterm to regularise the crufty special-casing in the code linked above and just make sure it notifies asynchronously in all cases on all platforms.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-10-18T11:15:20.137-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/854) has been merged into the project repo master branch at 4612ab559ec9610b5fe22eb43c9af041ced82ab0\n"
    }
  ]
}
---
The storyViewer and storyEditor grades are "extensions" of the templatedComponentWithLocalization grade, which has a templateLoader and messageLoader (each extensions of the fluid.resourceLoader grade). We had set up an aggregate event ("onAllResourcesLoaded") on the templatedComponent grade which listened for events on the loader grades via IoC references to the "onResourcesLoaded" event of each. In the storyAuthoring grade, onResourcesLoaded would fire for the storyViewer's templateLoader and messageLoader components, but the onAllResourcesLoaded did not fire. No error or failure message is shown.

See this commit to view the project in its non-working state:\
<https://github.com/BlueSlug/sjrk-storyTelling/commit/8c867e61b647c3c3a2dfb4a5c9a1e40ff598f112>

We solved the issue by adding listeners to onResourcesLoaded on each loader component, which then fire an event on the parent templatedComponent to which the aggregate event is subscribed. I.e. we added two new events on the templatedComponent, the aggregate event listens for those, and they are fired from the child components.

See this commit for the solution:\
<https://github.com/BlueSlug/sjrk-storyTelling/commit/9536b80b6bc1d0aabe5bf7d4463acc602d7ea9bc>

One thing we noticed with the bug present was that when the storyViewer's messageLoader fires onResourcesLoaded, the storyViewer's lifecycleStatus is "constructing". With the bug fixed, the lifecycleStatus is "treeConstructed". Please see the screenshot for console illustrating this.

        
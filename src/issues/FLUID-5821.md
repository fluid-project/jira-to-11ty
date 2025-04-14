---json
{
  "title": "FLUID-5821",
  "summary": "that.locate should return an empty element if the selector cannot be found...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2015-11-25T11:08:37.716-0500",
  "updated": "2016-07-08T09:05:44.391-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5702/",
      "key": "FLUID-5702"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-02-04T15:06:21.388-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/657> ) into the project repo at 63ec072e54b75db0dbaae33fcac61264ebb8d63d\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-02-05T07:58:36.288-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion-docs/pull/83> ) into the infusion-docs repo at 94207308ed8604cce0e9d40b56aa2d411457ba5d\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-02-10T15:52:27.852-0500",
      "body": "Reopened as this is causing the reorder to throw errors on hover for dom.fastLocate and to be broken for mouse interactions.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-02-12T11:18:48.812-0500",
      "body": "The failure sequence here is slightly subtle - the initial cacher to fluid.locate passes a raw DOM element to the \"localContainer\" argument, which is recognised correctly for the purposes of representing the cache key, but is then returned as the same raw element from \"locate\" and subsequent calls to \"fastLocate\" even if they supply a proper jQuery instead, as it ends up polluting the cache.\n"
    }
  ]
}
---
If you run `that.locate(selector)` from a view component that does not have a matching selector, currently the entire container is returned.  This means that a single typo in a selector can result in mistakenly operating on the entire container.  In talking with Antranig about working around this problem, he proposed simply fixing it in FluidView.js.

```java
@bosmon, I hope you recall our "binder" that binds selectors to model values. the-t-in-rtf1 @ 2:57
I am looking at it again, it fails completely if the selector isn't valid. 2:57
if you recall, that.locate() with a bad selector returns the container. 2:58
rather than null. 2:58
I am wrapping the result in fluid.unwrap, which is undefined for selectors that don't exist and defined for selectors that are. 2:58
Is using fluid.unwrap a reasonable way to detect this? 2:59
in other words var element = that.locate(selector) 2:59
and then if (fluid.unwrap(element)) 2:59
as a test for validity. 2:59
@Bosmon ^^^^ 3:01
 Bosmon
the-t-in-rtf1 - you may instead just want to patch the DOM binder Bosmon @ 3:35	
Bosmon
The correct behaviour for it should be to return a 0-element jQuery in the case the selector matches nothing Bosmon @ 3:35
We can patch this in a shortly upcoming infusion, this behaviour has annoyed us for far too long 3:36
 the-t-in-rtf1
I would be very gratified to have that be my first pull request against infusion. the-t-in-rtf1 @ 3:39	
the-t-in-rtf1
I would start with the tests, but just to confirm that I'm on the right track, I would need to change behavior round about here:  https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidView.js#L170 the-t-in-rtf1 @ 3:47
@Bosmon ^^^
```

        
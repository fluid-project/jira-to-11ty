---json
{
  "title": "FLUID-4978",
  "summary": "Implement circularity detection for the ginger algorithm used in options evaluation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-04-13T03:41:49.050-0400",
  "updated": "2014-03-03T11:57:25.489-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4982/",
      "key": "FLUID-4982"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-06T17:20:46.274-0400",
      "body": "Committed to trunk at revision d0f009b\n"
    }
  ]
}
---
A circular set of IoC references is a condition that should be detected as early as possible by the framework and diagnosed helpfully. In the old crude "ginger" system we had limited support for circularity detection but in general what we did have was very rarely triggered since the only possible kind of circularity was direct circularity between a set of instantiating components at top level. After a time, the only case where this might be observed was the perverse case of mutual circular injection of overall components, which was not observed in practice.

In the new system, we can do much better at diagnosing circularity at the finest level (a circle of references between individual JSON elements) as well as having strong criteria for rejecting these sets of references - unfortunately the initial implementation of the ginger algorithm does nothing, and circular references bomb out the browser with a stack overflow. In Firefox in particular this is particular undesirable since it usually crashes the browser.

This was first encountered when testing out the old "image-gallery" code for demonstrating the live version of the Uploader component with the newer, FLUID-4330-level framework. This bombs out as a result of the following directive in image-gallery.js:

events: {\
...\
onUploadStart: {\
event: "onUploadStart"\
}\
this somewhat perverse boiling of an event to itself is probably a typo, but succeeded in the old framework since it lacked any ginger expansion process for events, but the effect was most likely for the RHS to evaluate to "undefined" resulting in a standard event. The new framework should reject this as an illegal construction with a reasonably helpful diagnostic - as well as all other cases of direct circular reference.

This should be done using the first of a special set of marker values which will appear temporarily in the expanding structure, the "fluid.inCreationMarker" which is currently unused in trunk. Other special values in the future will include "promise markers" indicating values whose evaluation is blocked on an asynchronous process (in general I/O).

Note that the appearance of these special markers in partially evaluated component material only further increases the premium on preventing participants in the process from "observing" more of the component tree than they should (or need), and tightening up our semantics on partial/full evaluation as per FLUID-4930. In general we should be clear that any material supplied to an invoker should be fully evaluated before the point of dispatch - and any material not supplied to an invoker may be in any arbitrary state of partial evaluation. As per FLUID-4930, we expect that some invokers can annotate themselves as prepared to accept incomplete arguments, in contrast to the default.

        
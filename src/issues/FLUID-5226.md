---json
{
  "title": "FLUID-5226",
  "summary": "fluid.isPlainObject() is not powerful to detect objects which are only exotic by virtue of constructor",
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
  "reporter": "Antranig Basman",
  "date": "2013-12-03T00:23:30.041-0500",
  "updated": "2017-02-27T15:49:14.547-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:06:21.511-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
The implementation of <https://fluidproject.atlassian.net/browse/FLUID-5089#icft=FLUID-5089> greatly improved the framework's handling of "exotic objects" aka "nonplain objects" but the structure of JavaScript implementations prevents us easily going all the way in order to detect all kinds of objects which must be protected from corruption by the framework.

Right now this most obviously surfaces in "member" directives which produce component members which are only exotic by virtue of having a prototype or constructor property. These are produced by many common frameworks, e.g. express on node - and unlike the situation with "common options" they may not be protected by a mergePolicy since none can interpose directly in the framework's evaluation pathway. (check this: it may be possible to operate a workaround by applying a mergePolicy to members.xxxx).&#x20;

Ultimately this can only be remedied by improving our implementation of fluid.isPlainObject - however, detecting nonstandard constructors is hard if not impossible to do in a way which is a) portable, b) performant, c) robust. In particular, varieties of IE < 9 will throw an exception on accessing the constructor property of certain "host objects". Even if we can ditch this portability hazard, there is still a performance hazard - in that it is difficult to imagine a system which could performantly distinguish between a "plain object from another context" (e.g. an iframe or an npm context) and a "exotic object from this context" without a potentially expensive toString() operation. We need to spend a lot of time at some point sifting through all the alternatives and their performance characteristics and portability profiles.&#x20;

        
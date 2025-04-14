---json
{
  "title": "FLUID-5089",
  "summary": "Framework expansion and merging pathway is not geared up for new \"exotic types\"",
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
  "reporter": "Antranig Basman",
  "date": "2013-07-13T02:05:02.825-0400",
  "updated": "2014-03-03T11:43:14.669-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-07-13T02:05:33.520-0400",
      "body": "Failing test case from colinbdclark looked as follows:\n\ntest(\"Typed Array Merge Preservation\", function () {\\\nvar ta = new Float32Array(\\[1.1, 2.2, 3.3]);\\\nok(ta instanceof Float32Array, \"Sanity check: a Float32Array should be an instance of a Float32Array\");\n\nfluid.defaults(\"flock.test.typedArrayComponent\", {\\\ngradeNames: \\[\"fluid.littleComponent\", \"autoInit\"],\\\nmergePolicy: {\\\n\"synthDef.cat\": \"nomerge\"   \\\n},\\\nsynthDef: {\\\ncat: ta\\\n}\\\n});\n\nvar comp = flock.test.typedArrayComponent();\\\nok(comp.options.synthDef.cat instanceof Float32Array, \\\n\"A typed array stored as a component default should not be corrupted.\");\\\n});\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-09-12T06:23:02.621-0400",
      "body": "A much simpler strategy seems to be able to handle all the cases that currently trouble us. The \"acid test\" scheme operated by \"Object.prototype.toString\" (which we were previously using to recognise arrayable objects) is also good enough to detect all the \"exotic objects\" that we currently find passing through our hands provided by the browser impl - including typed arrays, canvas contexts and others. This test could be MORE powerful in that it doesn't actually detect all objects with a custom constructor - but it would not be possible to extend this to a performant test which operated on older browsers (IE6 through IE8) since these do not support the constructor.name property which is the only performant route for this detection. The \"Object.prototype.toString\" approach has the virtue of \"doing no harm\" on older browsers as well as being performant, and powerful enough to detect the browser exotics that we can't avoid handling.\n\nUsers who need other custom types (produced via \"new\") preserved will still need to fall back on merge policies as before.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2013-10-03T22:17:17.950-0400",
      "body": "I reviewed and tested this fix, both in terms of Infusion itself and in Flocking, where the issue was originally reported.&#x20;\n\nPreviously in Flocking, I had maintained monkey patches for both fluid.isPrimitive and fluid.mergeOneImpl in order to keep ArrayBuffer Views (i.e. \"typed arrays\") from being mangled. This fix allowed for the removal of  these monkey patches while all of Flocking's relevant tests continue to pass.\n\n<https://github.com/colinbdclark/Flocking/blob/master/tests/flocking/js/core-tests.js#L1417-L1444>\n\nPushed to master at 912baf3e094045103bd280cd8a39b35a9b05ff75.\n"
    }
  ]
}
---
Since the early days of JavaScript, new exotic "primitive types" have emerged which subtly confound  expectations based on the original type system. Some of these are the "native array types" such as Float32Array etc, which are to some extent recognisable as arrays, and like them, have typeof:cross\_mark: === "object". The framework is only geared up to deal with mostly plain JSON material accepted as configuration, and in particular is only prepared to recognise two basic "trunk types", objects and arrays, as embodied in the core utility fluid.freshContainer() which constructs a fresh trunk of one of the two types.

This typically ends up destroying the fine type information held in exotically typed configuration material. This requires an extension of the fluid.isPrimitive algorithm so that such objects can be left alone and treated as if they were atomic primitives - the framework is never likely to do anything sensible based on attempting to clone them or inspect their internal structure. However, a naive attempt to monkey-patch the fluid.isPrimitive utility runs into (at least) two problems:

Firstly, there is a subtle assumption buried in the fluid.merge algorithm, which amounts to the fact that nothing for which the type is "object" can be considered as a primitive value, and the merge algorithm will in general attempt to clone such values irrespective of the return to fluid.isPrimitive. Fluid.js lines 1476-1479 (fluid.mergeOneImpl) currently read as follows:

if (!newPolicy.func && thisSource !== null && typeof (thisSource) === "object" &&\
!fluid.isDOMish(thisSource) && thisSource !== fluid.VALUE &&\
!newPolicy.preserve && !newPolicy.nomerge) {\
if (primitiveTarget) {

as can be seen, this line relies on the "negation of being 'object'" rather than the "positive being primitive" of thisSource in order to defeat the trunk cloning branch that follows. Therefore in order to defeat cloning in defaults, it's necessary to apply the "nomerge" policy as well as hacking fluid.isPrimitive.

The 2nd issue is that hacking of "fluid.isPrimitive" is clearly not a scalable policy, either from the point of view of execution efficiency or of community values. What we need is a solution that allows an "opt-in" system whereby the author of a component can supply material explicitly into their grade hierarchy that adapts the execution of fluid.isPrimitive just for material held within their own component's options. This implies that everyone can collaborate by supplying custom fluid.isPrimitive implementations without impacting the performance of framework-wide code or risking "monkey-patching wars" centred on the core framework primitives.

A proper solution to this issue needs to provide the new framework facility as well as resolving the oddity with the complex test in fluid.merge - this needs to be done with great care since this is amongst the oldest and most fundamental code in the framework and any changes risk having a widespread impact.

It seems that in theory we can get away with sticking any custom isPrimitive into "options" within fluid.makeMergeStrategy and then passing down to fluid.mergeOneImpl, and then using this both for the target test as well as replacing the source test with a !isPrimitive(thisSource) but no doubt any number of things will come out of the woodwork with such a straightforward-seeming scheme.

        
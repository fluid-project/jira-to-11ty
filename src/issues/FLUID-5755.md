---json
{
  "title": "FLUID-5755",
  "summary": "Merging options containing typed arrays has regressed in Infusion 2.x",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2015-08-27T12:24:10.565-0400",
  "updated": "2017-02-27T15:49:16.315-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In previous versions of Infusion, it was possible to use typed arrays as options in a component, and to have the merging infrastructure handle them correctly. This test passed in Infusion 1.9.x, but now fails:

\<code>\
fluid.defaults("flock.test.componentWithTypedArrayOption", {\
gradeNames: "fluid.component",\
buffer: new Float32Array(\[1, 1, 1, 1])\
});

test("Typed Array Component Merging", function () {\
var c = flock.test.componentWithTypedArrayOption();\
deepEqual(c.options.buffer, new Float32Array(\[1, 1, 1, 1]),\
"The component's typed array should be set to the default value.");

c = flock.test.componentWithTypedArrayOption({\
buffer: new Float32Array(\[2, 2, 2, 2])\
});\
deepEqual(c.options.buffer, new Float32Array(\[2, 2, 2, 2]),\
"The component's typed array should have been overriden.");\
});\
\</code>

Here's a link to the Flocking unit tests where the test was implemented:

Flocking master, which uses the 1.9.x branch, where this test passes: <https://github.com/colinbdclark/Flocking/blob/master/tests/flocking/js/core-tests.js#L1962-L1977>

The new, massively broken infusion-2.x branch, where this test fails:\
<https://github.com/colinbdclark/Flocking/blob/infusion-2.x/tests/flocking/js/core-tests.js#L1962-L1977>

        
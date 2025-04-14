---json
{
  "title": "FLUID-5495",
  "summary": "Improve ability of IoCSS expressions by allowing them match upwards in the first component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-08-17T13:38:17.539-0400",
  "updated": "2017-02-27T15:49:15.882-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5249/",
      "key": "FLUID-5249",
      "summary": "Rationalise handling of \"instantiators\" to produce by default only one per Fluid context"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4873/",
      "key": "FLUID-4873",
      "summary": "Introduce downward-matching CSS-like context selectors for options forwarding and other IoC use cases"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5212/",
      "key": "FLUID-5212",
      "summary": "Implement \"new demands blocks\" using simplified approach looking up grade names to grade names"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:02:35.655-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
IoCSS expressions and the "distributeOptions" feature was introduced in <https://fluidproject.atlassian.net/browse/FLUID-4873#icft=FLUID-4873> and has proved a powerful feature for allowing flexible participation and mutual advice amongst components. However, we introduced a limitation in this implementation that the first context name appearing in the selector was constrained to be "that" - e.g. we support expressions of the kind

{that kettle.test.request}

but not expressions of the kind

{testCaseHolder kettle.test.request}

which, for example, would be very helpful in reducing duplication amongst the test case material in GPII's fixtures. Also the lack of this facility annoyingly constrains the range of possible component layouts in, for example, Kettle's extension to the IoC testing framework - we must have all the implementation components as well as the test fixtures descended from the came component root ("testCaseHolder") otherwise distributeOptions blocks are unable to find components down the sibling path.

Going further, this facility is crucial to the final elimination of all features of "demands blocks" from the system. The "grade linkage system" we implemented for <https://fluidproject.atlassian.net/browse/FLUID-5212#icft=FLUID-5212> was an interesting attempt to deal with the "multiple dispatch" problem but shows poor intellectual economy - adding an "ad hoc" features for this use case only increases the burden on users of the framework to learn and remember how new framework features operate. In fact we can handle this case by allowing a special marker in the front IoCSS field to indicate "the global component tree root" and hence advise all components everywhere. Possibly, for example, we could then write:

distributeOptions: {\
record: "my.newGradeName",\
target: "{/ oldGradeName}.options.gradeNames}"\
}\
in order to achieve the effect of both "grade Linkage" and "old demands blocks".

We previously shied away from this feature since it seemed hazardous to allow components to "advise" others outside their subtree - but of course this kind of advice was implicit in the operation of demands blocks in any case, since they advised the action of grade names throughout the entire system.

Naturally, this implementation depends on <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> being implemented first - until we have a single global component tree we can't expect to have a syntax referring to it.

To be performant, this feature will have to come along with a new model for the data structures holding options distribution records - probably involving some kind of prototypal chain. Ideally we would like to be able to go through each grade accumulated into a freshly instantiating component's grade list, and, in constant time, determine whether or not there is an options distribution targetted at it.

Much like the use of "unbounded grades", this feature is coming to seem not only not hazardous, but absolutely essential to implement our framework in a consistent, economical, and powerful way

        
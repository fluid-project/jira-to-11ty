---json
{
  "title": "FLUID-4739",
  "summary": "Change applier guards do not respect paths that contain array positioning if the entire array is replaced.",
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
  "reporter": "Justin Obara",
  "date": "2012-08-07T12:33:51.933-0400",
  "updated": "2017-02-27T15:49:19.380-0500",
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
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4739/FLUID-4739.patch",
      "filename": "FLUID-4739.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-08-07T12:35:38.034-0400",
      "body": "I had been using an old build of infusion from rev: f2a883efe711374f5340083314a6207a6ff7d4d2, and this issue did not occur there. There seams to have been some regression since then.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-08-07T13:41:55.623-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4739#icft=FLUID-4739>.patch contains a unit test to show the issue. The code can also be found in my github repo\\\n<https://github.com/jobara/infusion/tree/FLUID-4739>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-08-08T04:39:46.215-0400",
      "body": "This behaviour is possibly unhelpful, but is \"working as designed\" - the ChangeApplier has never performed \"DAR rebasing\" for values sent to guards, and it has been the responsibility of the implementing code to deal with dereferencing appropriately. If this was ever \"apparently working\" it would have been due to the separate action of <https://fluidproject.atlassian.net/browse/FLUID-4625#icft=FLUID-4625> preventing the guard from ever being called at all in this case... please check up if you can. I have pushed a branch including a new utility which makes it easier to perform this dereference in guard code. NB the test case contained an error on this line:\n\njqUnit.assertDeepEq(\"The model should have updated\", newArray, model.arrayInnerProperty\\[0]);\n\nwhich checked the wrong part of the model for update. It should read model.arrayInnerProperty as the tested value.\n\n<https://github.com/amb26/infusion/tree/FLUID-4739>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-03-11T16:49:21.011-0400",
      "body": "This should be implemented correctly in the new ChangeApplier. We should remember to review and tidy up when the old implementation is removed.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T21:56:30.793-0400",
      "body": "DAR rebasing is now standard in the new ChangeApplier, and \"guards\" have been eliminated entirely. We do now support invalidation of arrays en bloc - one day we will support array element insertion/deletion events: Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
if you have a model like {a: \[{b: "b", c: "c"}, {b: "B", c: "C"]} and try to add a guard to the change applier like "a.0.b", the path won't be respected if the entire array is replaced. It will trigger the guard to test not only the portion of the array that the path is for, but for the entire array itself.

        
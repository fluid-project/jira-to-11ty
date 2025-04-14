---json
{
  "title": "FLUID-5895",
  "summary": "The keyboard accessibility demo throws error at page loading",
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
  "reporter": "Cindy Li",
  "date": "2016-05-02T12:53:58.726-0400",
  "updated": "2016-05-02T13:14:23.362-0400",
  "versions": [
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
      "author": "Cindy Li",
      "date": "2016-05-02T13:14:19.319-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/707> has been merged at 15dee9cf875a399b489fa3d564ce5ee04e59124f\n"
    }
  ]
}
---
Steps to re-produce:

1\. Open <http://build.fluidproject.org/infusion/demos/keyboard-a11y/> in a browser. Make sure the debugger or the developer tool is open in the browser;\
2\. The debugger console shows this error is thrown:

ASSERTION FAILED: Error in model relay definition: If a relay transform has a model dependency, you can not specify a "source" entry - please instead enter this as "input" in the transform specification. Definition was Object { source="{imageViewer}.model.selected",  target="rank",  singleTransform={...}}  for component Object { typeName="demo.fiveStar",  id="2l4bt6k7-52",  lifecycleStatus="constructing",  more...}

After tracing back in the infusion project repository, the master branch, this bug was introduced by this fix: <https://github.com/fluid-project/infusion/commit/83820984c86984f6fdaf6647d5511afca7005d33>

        
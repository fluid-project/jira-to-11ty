---json
{
  "title": "FLUID-6719",
  "summary": "Migration guide should mention that the previous .min.js files have been deprecated",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2022-02-15T08:33:10.068-0500",
  "updated": "2024-07-17T08:05:38.055-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-02-20T08:44:24.399-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion-docs/pull/207> ) into the project repo at 93beaea8550af40dc49b4ed72622eb5a4adad863\n"
    }
  ]
}
---
In 2.0 era releases, the build scripts produced both minified and uncompressed bundles. The minified bundles were called things like dist/infusion-all.min.js, and the uncompressed bundles were called things like dist/infusion-all.js.

In replacing the build scripts in the run up to 3.0, we moved to only producing minified bundles, but gave them the uncompressed file used previously. We should mention this in the migration notes document.

        
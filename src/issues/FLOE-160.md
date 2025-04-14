---json
{
  "title": "FLOE-160",
  "summary": "Change the namespace to gpii.metadata and directory restructure",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-01-15T10:39:45.491-0500",
  "updated": "2014-08-14T14:19:47.836-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-08-08T12:11:30.365-0400",
      "body": "Submitted a pull request: <https://github.com/fluid-project/metadata/pull/32>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-08-14T10:15:22.080-0400",
      "body": "Submitted a pull request against build.fluidproject.org to update the link to the metadata authoring demo and add a link to the metadata feedback demo: <https://github.com/fluid-project/build.fluidproject.org/pull/12>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-08-14T12:30:13.689-0400",
      "body": "merged pull request ( <https://github.com/fluid-project/metadata/pull/32> ) into the project repo at c747311198a803faa7d16a561bb7df412612b6ce\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-08-14T13:13:00.779-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/metadata/pull/34> to remove pouchDBDataSource.js from the metadata component js folder.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-08-14T13:44:06.868-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/metadata/pull/34> ) into the project repo at 1fc47c6cae11b79ed7f454a1552653213158ac70\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-08-14T14:19:39.922-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/build.fluidproject.org/pull/12> ) into the build.fluidproject.org repo at 49e132b4090b0352869e554a00b835229271e506\n"
    }
  ]
}
---
Currently the metadata component uses the fluid.metadata namespace. Since this is happening in a different repo and isn't directly part of Infusion it seems to make more sense to use a different namespace. Since the work will be part of gpii, we should use that names space.

fluid.metadata -> gpii.metadata

Moreover, the repo currently contains both metadata and feedback demos. To encapsulate the files for these demos, rec-construct directory structures to use different component sub-folders.

        
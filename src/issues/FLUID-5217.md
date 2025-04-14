---json
{
  "title": "FLUID-5217",
  "summary": "Move 'demos' and 'tests' folders (etc?) to be sibling of 'src' instead of child",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-11-20T11:15:51.068-0500",
  "updated": "2015-06-26T10:06:14.174-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5215/",
      "key": "FLUID-5215",
      "summary": "Create instructional demos for Infusion framework functionality, rendering, prefs framework and components"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2446/",
      "key": "FLUID-2446"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-11-20T11:19:05.101-0500",
      "body": "Justin pointed out that this restructuring could be a factor for the build scripts, too.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-11-20T16:30:20.292-0500",
      "body": "See the comment on <https://fluidproject.atlassian.net/browse/FLUID-5215#icft=FLUID-5215> for how we decided to restructure things\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-11-21T13:22:07.459-0500",
      "body": "Also, this change will affect the build site(s) that link to the demos folder, i.e. the link on build.fluidproject.org currently links to <http://build.fluidproject.org/infusion/demos/> – that will have to change to <http://build.fluidproject.org/infusion/demos/showcase/>\n\nLikewise, <http://fluidproject.org/products/infusion/> has a link to <http://fluidproject.org/products/infusion/infusion-demos> which redirects to <http://fluidproject.org/releases/1.4/demos/> – that will have to redirect to <http://fluidproject.org/releases/1.5/demos/showcase> after the release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-11-27T17:01:31.643-0500",
      "body": "In progress, at <https://github.com/acheetham/infusion/tree/FLUID-5217>\\\nSo far, showcase and standalone demos moved, and tests moved.\n\nBuild scripts seem broken (wrt demos and tests) even in master, so not yet addressed in this branch.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-12-03T16:26:24.775-0500",
      "body": "Pull request issued: <https://github.com/fluid-project/infusion/pull/444>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-03-26T15:33:39.364-0400",
      "body": "This will need to be redone, and we'll want to do it as the very last thing, after all other changes have been merged in.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-28T15:47:01.794-0400",
      "body": "In talking at the community meeting today the recommendation was to move all the demos directories, lib and tests to be siblings of source. The built version should remain the same. However, we could not decide how to best reorganize the various demos.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-29T08:55:27.543-0400",
      "body": "Discussion on the fluid-work mailing list\\\n<http://fluid.2324889.n4.nabble.com/Directory-restructuring-on-hold-td9046.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-19T09:25:13.481-0400",
      "body": "We talked in detail about this at the community meeting yesterday. Anastasia forwarded the notes to the mailing list.\\\n<http://fluid.2324889.n4.nabble.com/Documentation-decisions-td9105.html>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-06-19T10:22:17.990-0400",
      "body": "Here's my understanding of the new folder hierarchy resulting from yesterday's discussions:\n\nsrc/\\\nframework/\\\ncomponents/\\\nlib/\\\nmodule/\\\ndemos/\\\nexamples/\\\ntests/\n\nFor the demos and tests folder, their hierarchies will remain pretty much what they are now, except for: Within the tests folder, the manual-tests content will be renamed or otherwise organized to make it more clear which components are being tested. This might involve the creation of folders.\n\nFor the examples folder, the hierarchy should mirror, as much as reasonable, the hierarchy of the source folder. In general:\n\nexamples/\\\nframework/\\\ncore/\\\nprefs/\\\nrenderer/\\\ncomponents/\\\ncomponentX/\\\nshared/\\\ncss/\\\nshared.css\\\nhtml/\\\nshared.html\\\njs/\\\nshared.js\\\ndemoX/\\\ncss/\\\nfile.css\\\nhtml/\\\nfile.html\\\njs/\\\nfile.js\\\ndemoY/\\\ncss/\\\nfile.css\\\nhtml/\\\nfile.html\\\njs/\\\nfile.js\\\ncomponentY/\\\netc..\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-26T11:08:47.106-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/539>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-07-10T10:01:43.488-0400",
      "body": "Merged into the project repo @ 78593a2af5d62fe724404d9f5585a85c5c90ca9f\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-10T15:34:56.971-0400",
      "body": "the path to the tests directory in the devIncludes.json file in the module directory needs to be updated to point at the tests dir which has moved up a level.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-10T15:36:10.968-0400",
      "body": "Filed another pull request to fix the devIncludes.json file\\\n<https://github.com/fluid-project/infusion/pull/543>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T08:48:47.997-0400",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/543> ) was merged at 63d7180d3825fe572c0c08e6d89d61f6b3e2b7e7\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T10:51:10.492-0400",
      "body": "Pull request ( <https://github.com/fluid-project/build.fluidproject.org/pull/11> ) has been merged to update the build site links at 920ce6e90808d70ce021db761610e8610d1c56f3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:10.938-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Currently, the 'demos' folder is contained inside the 'src' folder. I notice in the GPII prefsEditor repository (<https://github.com/GPII/prefsEditors>) that the 'demos' folder is a sibling of 'src,' and this seems to make a lot of sense to me. I suggest that we do the same for infusion demos.

We should also consider this in light of FLUID-5215 – the creation of instructional demos – and consider what the demos structure might be: demos and instructionalDemos as siblings to src, or showcaseDemos and instructionalDemos, or demos/showcase and demos/instructional, etc.

Note: There's a chance that this change might reveal bugs in our components where path assumptions are being made and we're simply unaware of it because the assumptions happen to be consistent with the existing relative paths between the demos and the source.

        
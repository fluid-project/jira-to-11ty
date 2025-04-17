---json
{
  "title": "FLUID-6465",
  "summary": "Relocate Nexus repositories to fluid-project",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-03-06T11:25:35.198-0500",
  "updated": "2024-07-22T10:35:04.745-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2020-03-06T11:29:35.103-0500",
      "body": "The following repositories were also moved:\n\n* `GPII/nexus` to <https://github.com/fluid-project/infusion-nexus>\n* `GPII/nexus-dist` to <https://github.com/fluid-project/nexus-dist>\n"
    },
    {
      "author": "Philip Tchernavskij",
      "date": "2020-03-06T11:32:14.297-0500",
      "body": "I suppose the latter of those should be `infusion-nexus-dist` for consistency.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-07T15:03:53.266-0500",
      "body": "There were a few license links that needed to be updated in `infusion-nexus`:\n\n - <https://github.com/fluid-project/infusion-nexus/pull/16>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-09T14:13:12.461-0400",
      "body": "The License used for the Nexus repositories contains a reference to GPII:\\\n \\\n\"No external contributions are allowed under licenses which are fundamentally incompatible with the BSD or Apache licenses that the GPII is distributed under.\"\n\nFor example: <https://github.com/fluid-project/infusion-nexus/blob/c297ae91c66d852d85429238b2252755d6c99b4c/LICENSE.txt#L5-L7>\n\nColin Clark Could you suggest alternative wording here? Thanks.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-09T14:35:26.746-0400",
      "body": "Pull Request for co-occurrence-engine: <https://github.com/fluid-project/co-occurrence-engine/pull/1>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2020-03-09T15:28:07.898-0400",
      "body": "What a funny statement, but it does seem to be historical to Infusion, which reads:\n\n\"No external contributions are allowed under licenses which are fundamentally incompatible with the ECL or BSD licenses that Infusion is distributed under.\"\n\nYou could just change this to \"this software\" or \"The Nexus\" and it should be fine.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-09T15:57:23.369-0400",
      "body": "Pull request for infusion-nexus-client: <https://github.com/fluid-project/infusion-nexus-client/pull/1>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-10T13:47:34.383-0400",
      "body": "[infusion-nexus-demos](https://github.com/fluid-project/infusion-nexus-demos) is using the following work which we may want to merge/move to `fluid-project`:\n\n* `waharnum/nexus-science-lab-synths`\n  * <https://github.com/waharnum/nexus-science-lab-synths>\n  * A fork of <https://github.com/colinbdclark/nexus-science-lab-synths>\n  * The `master` branch of `waharnum/nexus-science-lab-synths` has diverged from `colinbdclark/nexus-science-lab-synths` (1 commit each)\n* `waharnum/chartAuthoring#GPII-2358`\n  * <https://github.com/waharnum/chartAuthoring/tree/GPII-2358>\n  * A fork of <https://github.com/cindyli/chartAuthoring>\n    * Which is a fork of <https://github.com/fluid-project/chartAuthoring>\n  * The related JIRA issue is unresolved: <https://issues.gpii.net/browse/GPII-2358>\n\nAdditionally, we have a dependency on:\n\n* `simonbates/p4a-sensorAPI`\n  * <https://github.com/simonbates/p4a-sensorAPI>\n  * A Fork of <https://github.com/teco-kit/p4a-sensorAPI>\n  * All changes on `simonbates/p4a-sensorAPI` have been merged into the upstream `teco-kit/p4a-sensorAPI`\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-10T15:20:41.801-0400",
      "body": "The `music-demo` \"Bonang Synth\" does not work on Google Chrome:\n\n\"The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.\"\n\nBut it does work on Firefox.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-10T15:30:01.120-0400",
      "body": "I'm seeing an error in the `music-demo` piano controller:\n\n```javascript\njquery.js:1532 Uncaught Error: Syntax error, unrecognized expression: [id=A#6]\r\n    at Function.Sizzle.error (jquery.js:1532)\r\n    at Sizzle.tokenize (jquery.js:2184)\r\n    at Function.Sizzle [as find] (jquery.js:860)\r\n    at jQuery.fn.init.find (jquery.js:2859)\r\n    at pianoController.js:150\r\n    at Object.fluid.each (Fluid.js:513)\r\n    at fluid.nexusPianoController.highlightKeys (pianoController.js:149)\r\n    at togo (FluidIoC.js:1800)\r\n    at Object.fire (Fluid.js:1533)\r\n    at Object.fluid.initComponent (Fluid.js:2712)\n```\n\nI suspect that this error is not new and is due to the \"#\" in \"A#6\":\n\n<https://github.com/fluid-project/infusion-nexus-demos/blob/d939a4654b275ffbe3860ae19148bdd6f2a6fa56/music-demo/piano-controller/js/pianoController.js#L123>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-10T15:39:08.839-0400",
      "body": "Similar to the Bonang Synth above, the `science-lab` sonification is not working on Chrome:\n\n\"The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.\"\n\nBut it is working on Firefox.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2020-03-10T16:09:40.433-0400",
      "body": "Yikes! <https://github.com/fluid-project/infusion-nexus-demos/blob/d939a4654b275ffbe3860ae19148bdd6f2a6fa56/package.json#L12>\n\nWe'll need to make sure we're using an appropriate version of Flocking here, rather than just pointing to the repository's master. I can take a look.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-10T16:17:18.986-0400",
      "body": "Thanks Colin.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2020-03-10T16:18:00.624-0400",
      "body": "Pull request for infusion-nexus-demos: <https://github.com/fluid-project/infusion-nexus-demos/pull/6>\n"
    }
  ]
}
---
The utilities and demos written for the Nexus should be moved into the `fluid-project` Github organization.

The new names/locations should be

* `/fluid-project/infusion-nexus-client`
* `/fluid-project/infusion-nexus-demos`
* `/fluid-project/co-occurrence-engine`

Dependencies and other references should also be updated to reflect the move.

        
---json
{
  "title": "FLOE-437",
  "summary": "Chart sonification component work",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-10T15:12:14.822-0500",
  "updated": "2016-02-10T16:05:12.895-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2015-11-11T15:28:39.704-0500",
      "body": "Dana's sound designs use a Fender Rhodes-style electric piano synth. As a first sketch, I have implemented a very rudimentary model of an electric piano based on this article:\n\n<http://www.keithwhor.com/music/>\n\nThis approach isn't particularly realistic; a model that resonates a noise impulse (representing the hammer) with a comb filter (to create the string/tine resonance) will probably sound a lot better:\n\n<http://composerprogrammer.com/teaching/supercollider/sctutorial/11.1%20Physical%20Modelling.html>\n\nMy sketch is currently in this Gist:\n\n<https://gist.github.com/colinbdclark/b9a50fdabd04ba0f888e>\n\nIt can be heard by pasting it into the Flocking Playground here:\n\n<http://flockingjs.org/staging/demos/playground/>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2015-11-13T00:07:27.566-0500",
      "body": "Alan Harnum, I've fixed up the issues with the sonification synths and Flocking that caused it not to work correctly with a model relay in place. You'll need to use the latest version of the Flocking core-refactoring branch, commit 55e7778ea4944644d48690bc1969cba8078a018c or later:\n\n<https://github.com/colinbdclark/Flocking/tree/core-refactoring>\n\nAnd here is the latest version of the synths:\n\n<https://gist.github.com/colinbdclark/b9a50fdabd04ba0f888e>\n\nYou'll notice that the durations of the sequences have changed, as have the MIDI note values. I made several mistakes there, so went back to Dana's sketch and was able to determine the correct timing and pitches. You'll need to, I'm sorry to say, update your model transformation accordingly.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-11-13T06:50:22.777-0500",
      "body": "Thanks Colin Clark - updating the model transformations shouldn't be any problem - I just refactored out the messy initial implementation of the model relays from chartAuthoring into a standalone data sonification component, so it's a good opportunity to further refactor the durations and values to be configurable as part of the component.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-11-13T07:41:33.914-0500",
      "body": "Not great code at the moment, but <http://rawgit.com/waharnum/chartAuthoring/FLOE-437/tests/html/sonifier-Tests.html> plays the sonification of the first piece of data passed to the sonifier on the back end. 🙂\n\nNot updated to Colin Clark's new synth definitions yet but will do that shortly.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-11-23T11:16:11.576-0500",
      "body": "<https://github.com/waharnum/chartAuthoring/tree/FLOE-437> has basic sonification, as most of us have seen.\n\nRemaining work before I'd like to PR this for merge to master:\n\n* better test coverage\n* better voice label scheduling\n* some refactoring\n* stop functionality\n\nFurther enhancements will be made as separate JIRA tasks.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-01-26T12:16:39.404-0500",
      "body": "Subject of this PR: <https://github.com/fluid-project/chartAuthoring/pull/11>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-02-10T16:05:12.893-0500",
      "body": "PR merged.\n"
    }
  ]
}
---
Colin Clark is working on a prototype basic data sonification component.

Once that is complete, we should be able to wire it into the larger chartAuthoring component in the usual IoC style.

        
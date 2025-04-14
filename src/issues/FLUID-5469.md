---json
{
  "title": "FLUID-5469",
  "summary": "Remove FSS from Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-07-11T12:48:07.554-0400",
  "updated": "2015-06-26T10:08:44.368-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5482/",
      "key": "FLUID-5482",
      "summary": "Generate contrast themes, needed by the preferences framework, using Stylus"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5457/",
      "key": "FLUID-5457"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-11T12:49:35.251-0400",
      "body": "Talked about this in the channel today: <https://botbot.me/freenode/fluid-work/2014-07-11/?tz=America/Toronto>\n\nMostly about using normalize.css in the components and not just the demos.\\\nAlso discussing where to put Foundation in the repository.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-25T09:25:19.870-0400",
      "body": "More discussion and proposals were made on the fluid-work mailing list:\\\n<http://fluid.2324889.n4.nabble.com/Removing-FSS-from-Infusion-td9140.html>\n\nThe results are:\n\n1\\) Remove FSS\\\n2\\) Add Foundation to be used by demos, examples, and etc, but not by the components\\\n3\\) Add Normalize to be used by components, demos, and etc.\\\n4\\) See <https://fluidproject.atlassian.net/browse/FLUID-5482#icft=FLUID-5482> for using Stylus to generate contrast themes.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-10-10T13:37:16.538-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/565>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-10-21T15:00:11.283-0400",
      "body": "The pull request has been merged into the project repo @ e90b1a875d9abbd586ff4b0cb6dbe2a0f9a2149d\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-04-22T10:54:29.583-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion-docs/pull/61> ) into the infusion-docs repo at 27c70e78f161ff43adcec8b25c22cd317c351883\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:08.619-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
FSS was deprecated in Infusion 1.5 and slated for removal in 2.0. It should be removed from the repository completely.&#x20;

<http://wiki.fluidproject.org/display/fluid/Fluid+Project+Recommendation+for+Use+of+CSS+Frameworks>

        
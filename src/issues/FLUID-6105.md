---json
{
  "title": "FLUID-6105",
  "summary": "Determine best approach for versioning in development work in Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-01-11T11:02:42.487-0500",
  "updated": "2024-07-22T10:35:10.538-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-01-17T16:46:04.159-0500",
      "body": "Accepted proposal from the work list.\n\n1\\. Always keep the version of master set to the next major release number. So, since we've released 2.0.0, master should be set up to publish development releases for 3.0.0. When we eventually cut 3.0.0, it will be incremented to 4.0.0, and so on. The reality is that we know we're going be moving fast and making lots of big changes over the next while as new framework features emerge (such as the new Renderer), so we might as well assume that our next release will be a major one.\n\n2\\. If we do find the need to cut a smaller 2.0.y or a 2.x.y maintenance release due to major bugs or features, we simply do what we've done in the past and use a release branch, apply or back port any fixes we need into this branch when the demand builds up, and then cut a release as needed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-17T16:46:31.044-0500",
      "body": "We'll also need to clean up the erroneous releases by marking them as deprecated and sending out a communication to the mailing list about it.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-01-18T11:29:12.519-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/800> has been merged into the project repo master branch at 16a963d63dce313ab3f2e3a81c725c2cbef0af79.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-01-18T12:08:17.158-0500",
      "body": "@@Justin Obara, I didn't close this JIRA in case you wanna use it to cover the work on deprecating the erroneous releases.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-01-18T14:25:41.674-0500",
      "body": "The other pull request <https://github.com/fluid-project/infusion/pull/803> to clean up ReleaseNotes has been merged into the project repo master branch at 368093ea995de1d5ea6865b2936ad19a4c217584\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-19T15:43:41.421-0500",
      "body": "I attempted to [deprecate](https://docs.npmjs.com/cli/deprecate) the erroneous dev releases (  2.0.0-dev.20161219T154515Z.0f2ccc8 and 2.0.0-dev.20161219T170555Z.5778f7e ). However, I'm getting a 403 error when I attempt to run the deprecation command. I've submitted a support request to NPM. Although there is already an issue filed that sounds very similar ( <https://github.com/npm/npm/issues/15330> )\n"
    }
  ]
}
---
At the moment it is hard to determine what our "next" version of infusion will be. We just tagged Infusion 2.0. Will the next version be 2.0.1, 2.1, or 3.0. In the past we've updated the version number in the repo to reflect the next version. This also has implications for how our dev releases are versioned, via the fluid-publish module; which currently takes the version from the package.json file and appends -dev.xxxxxxxxxxxxx  ( where xxxxxxxxxx refers to the date and commit hash that it was built from ).&#x20;

See thread for discussion and proposals: <http://fluid.2324889.n4.nabble.com/Infusion-dev-numbering-proposal-tt9838.html>

        
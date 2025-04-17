---json
{
  "title": "FLUID-6524",
  "summary": "Migrate commonly used helper libraries to fluidproject organisation.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2020-07-02T10:08:07.209-0400",
  "updated": "2024-07-22T10:35:32.587-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2020-07-03T04:17:50.865-0400",
      "body": "I looked at the downloads and dependencies for each package and talked with people on IRC.  I can tell that PhET uses gpii-launcher, and the Storytelling Tool uses gpii-handlebars.  It's tougher to see the usage of test dependencies on npmjs.org, but from the downloads and people's comments on IRC, it sounds like all of the packages are worth migrating.\n\nI have thought about what needs to happen and here is my current idea about the rough process to follow:\n\n1. Remove the legacy repositories from Jenkins CI.\n2. Transfer the repositories to the fluidproject organisation.\n3. Submit a pull request to change each package name and component namespace.\n4. As part of each pull request, set up CI using GitHub Actions.\n5. Once the pull is merged, cut a release.\n6. Flag the released versions under the old name as deprecated with a note about the new package name.&#x20;\n\nAs many of these packages depend on each other, the updates need to flow through the various chains of interdependency.  The simplest chain to convert is the linting infrastructure, in order, I'd need to convert:\n\n1. gpii-grunt-mdjson-lint\n2. gpii-grunt-lint-all\n\nThis might be a good time to merge those into a single combined package as I believe Antranig Basman and I have previously discussed.  One reason to do these first is that the CI setup is likely to be fairly simple and a good warmup for the rest of the \"stack\".\n\nThe main \"stack\" has a few key dependencies that are used heavily.  Most importantly, gpii-express needs to be migrated first among those.  This has only node tests, and should not be particular challenging to set up CI for.\n\nThe next tier are the common test dependencies, gpii-testem and gpii-webdriver, which are used in most packages that have browser tests.  These are the first that require browsers, so the CI setup will presumably take longer.  Hopefully the notes that Giovanni Tirloni left regarding migrating Infusion to Github Actions will save us time here.\n\nAfter that, we have enough to migrate gpii-binder, which is a key dependency of many remaining packages.  Once gpii-binder is migrated, we can migrate gpii-handlebars and gpii-location-bar-relay.\n\nThe last major project in the main stack is gpii-json-schema, which can only be migrated after gpii-binder, gpii-express, gpii-handlebars and gpii-webdriver are migrated.  We should probably rename GSS to FSS or something while we're there.\n\nThe gpii-launcher package is completely self contained and can be migrated separately as a one off.  However, we should revisit the still open PR for the intiial effort and discuss what if anything we can fold in as part of the migration, such as using schemas to describe the inputs.  If we want to update it to use schemas, it's be better to work on it near the end of the migration process so that I can put in one migration pull and then turn around and work on schematising things using the migrated gpii-json-schema.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-07-03T13:24:02.974-0400",
      "body": "I hope it all goes smoothly!\n\nHere's what's currently used by the Storytelling Tool, for reference:\n\n* Directly\n  * gpii-binder\n  * gpii-grunt-lint-all\n  * gpii-handlebars\n  * gpii-location-bar-relay\n  * **gpii-pouchdb** (used to mock CouchDB in browser tests)\n* Via other deps\n  * gpii-express\n  * gpii-glob\n  * gpii-grunt-mdjson-lint\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2020-07-03T14:07:27.551-0400",
      "body": "To be honest, I did not have real plans to support gpii-pouchdb moving forwards, as it requires supporting a fork of several very old versions of the underlying libraries.  The forks are required for non-browser (i.e. node) usage, but maybe we can remove the non-browser parts as part of the migration, and then it would at least be a good starting point for people who use it more often (and much easier to maintain in general).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-08T17:15:15.037-0400",
      "body": "Tony Atkins \\[RtF] what was the alternative you adopted for test in GPII? Did you just run a full instance of couchdb for it?\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2020-07-09T03:54:11.019-0400",
      "body": "Hi, Justin.  The replacement used within the GPII is being migrated to fluid-couchdb-test-harness.  The Fluid IoC test fixtures provided by that package can use a docker container, a Vagrant VM, or a standalone instance of CouchDB for local testing.  I will likely set it up to use a docker container (which GitHub Actions supports) in CI.\n\nHowever, I have been trying to think of less disruptive ways to move forward.  I will look at the current state of affairs when attempting to migrate fluid-pouchdb.  It may be that we have a third option, i.e. abandoning our fork of the pouchdb stack in favour of a newer version that already works with node\\@12.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-09T07:21:15.651-0400",
      "body": "Tony Atkins \\[RtF] thanks for the info/update.\n"
    }
  ]
}
---
Over the course of various grants, a few key helper libraries have been created that make it possible to do and/or test key things with Infusion.  Now that the related grants are drawing to a close, it would be helpful to put these commonly-used libraries somewhere where a more active community can help maintain them.

Here is a list of packages that could potentially be migrated:

[gpii-webdriver](https://github.com/GPII/gpii-webdriver) :check\_mark:\
[gpii-express](https://github.com/GPII/gpii-express) :check\_mark:\
[gpii-glob](https://github.com/GPII/gpii-glob) :check\_mark:\
[gpii-grunt-lint-all](https://github.com/GPII/gpii-grunt-lint-all) :check\_mark:\
[gpii-grunt-mdjson-lint](https://github.com/GPII/gpii-grunt-mdjson-lint) :check\_mark: (collapsed into fluid-grunt-lint-all)\
[gpii-binder](https://github.com/GPII/gpii-binder) :check\_mark:\
[gpii-diff](https://github.com/GPII/gpii-diff) :check\_mark:\
[gpii-handlebars](https://github.com/GPII/gpii-handlebars) :check\_mark:\
[gpii-json-schema](https://github.com/GPII/gpii-json-schema) :check\_mark:\
[gpii-launcher](https://github.com/GPII/gpii-launcher) :check\_mark:\
[gpii-location-bar-relay](https://github.com/GPII/gpii-location-bar-relay) :check\_mark:\
[gpii-testem](https://github.com/GPII/gpii-testem) :check\_mark:\
[gpii-pouchdb](https://github.com/GPII/gpii-pouchdb) :check\_mark:\
[gpii-mail-test](https://github.com/GPII/gpii-mail-test) (Required for gpii-express-user). :check\_mark:\
[gpii-couchdb-test-harness](https://github.com/GPII/gpii-couchdb-test-harness) :check\_mark:

[gpii-express-user](https://github.com/GPII/gpii-express-user) :cross\_mark: Still having trouble getting CI working.

Of those, I have heard from people using gpii-binder frequently, and I know the linting infrastructure is heavily used. gpii-glob is required by gpii-grunt-lint-all, so that one probably also has to come.

I suspect gpii-handlebars might be used, and I have heard from individuals in the community using gpii-webdriver and gpii-launcher.

:check\_mark: = done\
:info = pull request in progress\
:cross\_mark: = blocked

        
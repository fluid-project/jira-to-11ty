---json
{
  "title": "FLUID-6274",
  "summary": "npm deprecation warning about \"prepublish\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-18T10:11:28.784-0400",
  "updated": "2024-07-24T12:56:32.578-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-18T10:11:51.711-0400",
      "body": "It seems enough to rename \"prepublish\" to \"prepare\" in package.json\n"
    }
  ]
}
---
Running \`npm install\` with npm@5 generates the following warning:

```
npm WARN prepublish-on-install As of npm@5, `prepublish` scripts are deprecated.
npm WARN prepublish-on-install Use `prepare` for build steps and `prepublishOnly` for upload-only.
npm WARN prepublish-on-install See the deprecation note in `npm help scripts` for more information.
```

This is explained in \`npm help scripts\`:

```
PREPUBLISH AND PREPARE

   DEPRECATION NOTE

       Since , the npm CLI has run the prepublish script for both npm publish and npm install, because it's  a  convenient way  to  prepare  a  package  for use (some common use cases are described in the section below).  It has also turned out to be, in practice, [very confusing](https://github.com/npm/npm/issues/10074).  As of, a new  event has been introduced, prepare, that preserves this existing behavior. A _new_ event, prepublishOnlyhas been added as a transitional strategy to allow users to avoid the confusing behavior of existing npm versions and only run on npm publish` (for instance, running the tests one last time to ensure they're in good shape).

       See https://github.com/npm/npm/issues/10074 for a much lengthier justification, with further reading, for this change.
```

        
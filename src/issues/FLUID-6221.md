---json
{
  "title": "FLUID-6221",
  "summary": "Archive builds of infusion to allow for stable links to demos",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-11-07T12:51:21.351-0500",
  "updated": "2017-11-08T09:21:08.020-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-11-07T12:53:22.906-0500",
      "body": "@@Giovanni Tirloni do you have any thoughts on the feasibility and implementation of this. I was talking to @@Avtar Gill about it today and we were thinking that the build site would point at the latest deployed instance. We'd also have a separate link to point at a directory listing of all of the archived versions. \n"
    },
    {
      "author": "Avtar Gill",
      "date": "2017-11-07T17:53:54.872-0500",
      "body": "One possible way of tackling it could be to contain each build in a directory named using the commit hash, with a symlink named `latest` pointing to the most recent commit hash. nginx is configured to serve the most recent directory by default using the `latest` symlink. Does that seem reasonable?\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-11-08T06:00:07.217-0500",
      "body": "I think that's reasonable. If the build scripts can output to a directory (say, \"output/$commithash\"), that should make things easier, I guess.\n\nUpdating the \"latest\" symlink might be tricky but, since SFTP supports symlinks, I'm guessing we can find a way around that.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-11-08T09:03:59.949-0500",
      "body": "@@Giovanni Tirloni, currently the build scripts create a \"build\" directory containing the build files and a \"product\" director containing the a zip of the build files. Would you be able to use those?\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-11-08T09:21:08.020-0500",
      "body": "It's doable. We have to extract the zip and push it to a directory with the commit hash. It shouldn't be hard. Is there any benefit in create a directory with the commit hash locally for developers?\n"
    }
  ]
}
---
We should keep archives of all of the builds of infusion, probably named after the commit hash. This will allow us to provide stable links to demos that will not break, allow for users to view and compare different instances of infusion ( particularly useful for seeing what's in a dev release of infusion ).

 

It would also be good to build and archive tagged versions of infusion.

        
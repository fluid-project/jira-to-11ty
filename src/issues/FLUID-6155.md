---json
{
  "title": "FLUID-6155",
  "summary": "fluid.module.resolvePath adds an extra slash when used from the root of a drive....",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-05-01T09:55:33.366-0400",
  "updated": "2017-05-01T09:55:33.366-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "node module"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In recent work with [gpii-webdriver](https://github.com/GPII/gpii-webdriver/pull/2), I discovered another problem with part of infusion when used in a repository stored in the root of a filesystem.

Let's say I have the same repo checked out twice, once in c:/users/vagrant/gpii-webdriver, and once in the root of v:/

Let's say I want to resolve "%gpii-webdriver/path/to/file".  If I resolve the path from c:/users/vagrant/gpii-webdriver, I get output like "c:/users/vagrant/gpii-webdriver/path/to/file".

If I resolve the same path from v:/, I get output like "v://path/to/file".  Note the extra slash following the drive letter.

Either variation is directly useful as part of a [file URI scheme](https://en.wikipedia.org/wiki/File_URI_scheme), but IMO unless there is a concrete reason for it to differ, the output should be consistent in using (or not using) a second slash following the drive letter.

cc: Antranig Basman

        
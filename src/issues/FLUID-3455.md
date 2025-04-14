---json
{
  "title": "FLUID-3455",
  "summary": "temp file cleanup could be moved into the php code (postProcessor.php) and removed from scripted cron job",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-12-18T15:44:22.000-0500",
  "updated": "2014-03-03T11:20:11.950-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3455/FLUID-3455-1.patch.txt",
      "filename": "FLUID-3455-1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2010-01-21T14:52:22.000-0500",
      "body": "I've added a patch FLUID-3455-1.patch.txt which includes code to remove the temp directories. This needs to be tested on unix for two reasons.\\\n1\\) I hard coded \"/\" as the directory separator, as it didn't work to use DIRECTORY\\_SEPARATOR on windows, but \"/\" did work.\\\n2\\) I ran across a windows maximum file length limitation of 260 characters and could not delete directories which had files in it with that length or more in the total path name. So the function deleteDirectories does not fully work for a windows machine if the path names are extremely long. Infusion is pretty deep, so this can happen. But mostly we want this function to work on unix, so this may not matter.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:11.949-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Currently, a shell script is used to clean up files in the tmp directory. This must be installed as a cron job. This task could be moved into the php code.

        
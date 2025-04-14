---json
{
  "title": "FLUID-2925",
  "summary": "Refactor php code - return appropriate response",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-06-08T09:52:07.000-0400",
  "updated": "2009-08-21T16:48:24.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2925/config_generalized.php",
      "filename": "config_generalized.php"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2925/config_generalized.php",
      "filename": "config_generalized.php"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2925/postProcessor.php",
      "filename": "postProcessor.php"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-06-09T15:16:54.000-0400",
      "body": "postProcessor.php is a very modified version of \"index.php\" which was the non-javascript version of the custom build. The code in this file is intended only to \"process\" the post from the user requesting the custom build file, so a lot of things in index.php were removed. Rather than trying to modify index.php, I changed the name (required) and removed anything that rendered html. I also modified the code to be more modular and put in several TODO notes for things we still need to do.\n\nThis file requires 'config.php'. I have not uploaded config.php because we should generalize the paths listed in config.php - they are not for public consumption. I will email config.php separately so we can discuss what to put in for general consumption.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-09T15:31:53.000-0400",
      "body": "This is the config.php required by postProcessor.php. Must be edited to put in paths specific to server.&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-10T12:33:22.000-0400",
      "body": "This is an updated version that works with the jsonProcessor.php code and also moved the php tag to the start of the file (before the comments - oops)\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-13T11:52:09.000-0400",
      "body": "postProcessor now returns the appropriate response.\n"
    }
  ]
}
---

        
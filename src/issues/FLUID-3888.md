---json
{
  "title": "FLUID-3888",
  "summary": "Update all version numbers for the 1.3 release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-12-09T15:36:37.921-0500",
  "updated": "2011-01-14T10:37:18.998-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3888/FLUID-3888-patch.txt",
      "filename": "FLUID-3888-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-09T15:37:08.785-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-12-09T15:48:52.814-0500",
      "body": "change fluid\\_1\\_2 => fluid\\_1\\_3 for \\*.js \\\nchange 'infusion 1.3-SNAPSHOT' => 'infusion 1.3' for \\*.js \\\nchange any 1.2 to 1.3 for fluid related, for \\*.xml and \\*.txt\\\nchange any 1\\_2 to 1\\_3 for fluid related, for \\*.xml and \\*.txt\\\n1.3 SNAPSHOT => 1.3 change (pom.xml, project.xml and build-scripts/build.properties)\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-09T16:11:13.786-0500",
      "body": "Harris' patch looks good. I've committed it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-10T10:38:55.349-0500",
      "body": "Anastasia reviewed and committed\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:22.745-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
All version numbers should be updated for the 1.3 release.

This is includes all references:

fluid\_1\_2 => fluid\_1\_3\
the fluid version number in fluid.js\
the pom, xml, properties, and Readme.txt files.

        
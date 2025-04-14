---json
{
  "title": "FLUID-3820",
  "summary": "Move hardcoded database name out of ant build and php scripts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2010-10-29T13:35:19.393-0400",
  "updated": "2010-11-08T13:18:23.845-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "Unix/Windows servers where fluid builder is deployed.\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3820/FLUID-3820-1.patch.txt",
      "filename": "FLUID-3820-1.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3820/FLUID-3820-2.patch.txt",
      "filename": "FLUID-3820-2.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-29T14:20:17.834-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-03T09:47:35.836-0400",
      "body": "\"FLUID-3820-1.patch.txt\" does:\n\n1\\. Ant build script accepts mysql database name as a parameter named as \"mysql\\_db\\_name\". The new parameter is optional with the default value \"build\\_cache\", the db name infusion builder previously uses.\n\n2\\. Pointed .externals to infusion library 1.2.1, instead of 1.1.2, for the infusion builds.&#x20;\n\n3\\. The structure and scripts of test suite (JqUnit) in infusion library 1.2.1 is different from that in 1.1.2. Adjusted infusion builder unit tests to cater for the new JqUnit\n"
    },
    {
      "author": "Jamon Jamon",
      "date": "2010-11-03T16:10:26.728-0400",
      "body": "Including an external (non version controlled) infusion-builder.properties file in ${home}/infusion-builder.properties allows storing database credentials semi-securely while also using them in an ant build.xml file per the following patch:\n\nIndex: build.xml\\\n\\===================================================================\\\n— build.xml   (revision 10175)\\\n+++ build.xml   (working copy)\\\n@@ -4,6 +4,7 @@\n\n\\<property environment=\"env\" />\\\n\\<property file=\"build.properties\" />\\\n\\+       \\<property file=\"${home}/infusion-builder.properties\" />\n\n\\<target name=\"setup\\_server\\_props\" description=\"Loads server properties\">\\\n\\<property file=\"server\\_build.properties\" />\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-05T12:20:29.055-0400",
      "body": "\"FLUID-3820-2.patch.txt\" improves at:\n\n1\\. Applied Jamon's suggestion to have an external non-svn ant property file for database credentials;\\\n2\\. Corrected test suite title from \"inline editor\" to \"infusion builder\";\\\n3\\. Removed 'new' when calling a creator function in the test javascript file.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-08T13:16:38.981-0500",
      "body": "I've reviewed committed your second patch Cindy - please close the JIRA if you are happy with what was committed.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-08T13:18:23.843-0500",
      "body": "Issue closed.\n"
    }
  ]
}
---
The name of infusion builder mysql database is hardcoded as "build\_cache" in, (1) sql scripts used by ant build, (2) php scripts. This produces issue when multiple instances of infusion builder need to be deployed on the same server.

The suggested improvement is,\
1\. pass the db name as a parameter into ant build file, if not passed-in, use default value "build\_cache"\
2\. define the db name as a constant in php config file

        
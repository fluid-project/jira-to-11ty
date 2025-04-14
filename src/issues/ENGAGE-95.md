---json
{
  "title": "ENGAGE-95",
  "summary": "Create Engage build scripts",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-09-24T12:10:52.000-0400",
  "updated": "2009-11-10T11:10:38.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-88/",
      "key": "ENGAGE-88",
      "summary": "Create the directory structure for the Engage 0.1 release and move the relevant pieces from the incubator "
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-24T12:12:50.000-0400",
      "body": "The details of the structure are being discussed on list. Currently the structure is planned to be:\n\nsrc/\\\nwebapp/\\\ninfusion/  --> copied/exploded from the product of the Infusion Ant build\\\ncomponents/\\\nframework/\\\nlib/\\\nengage-client/  --> minified and copied into place\\\ncomponents\\\nengage-server/\\\nkettle/\\\njs/\\\nartifact/\\\njs/\\\nbrowse/\\\njs/\\\njava/\\\norg/\\\nfluidproject/\\\nkettle/\\\nKettleServlet.java\\\n.. etc ...\\\njetty/\\\nJettyLauncher.java\\\n... etc ...\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-24T12:21:21.000-0400",
      "body": "Bug Parade Engage 0.1&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-24T13:22:13.000-0400",
      "body": "From Colin's e-mail to the list:\n\nAssumptions:\n\n* Maven is not awesome for build scripts, but it is awesome for dependency resolution\n* Our Infusion WAR file is somewhat broken, in that it has all our main directories at top level, instead of being nested inside an infusion/ directory. This was a regression when we restructured SVN for the Infusion 1.0 release.\n\nOur approach for building Engage:\n\n* Don't mess with being able to easily run and rapidly develop inside Eclipse with Jetty\n* Create separate kettleIncludes.json files, one for in Eclipse, one for standalone deployment\n* Don't worry about separating Kettle from the Engage server code at the moment\n* Build a good, self-contained, production-ready WAR for Engage containing the following:\\\n  &#x20;  1\\. Infusion\\\n  &#x20;  2\\. Engage client\\\n  &#x20;  3\\. Engage Server and Kettle\n* Write an Engage Ant build script that takes care of minification and preparing the correct WAR directory structure\n* Use the Ant script to swap the Eclipse includes for the stand-alone includes\n* Use Maven to build the final WAR and resolve any Java dependencies\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-24T14:18:41.000-0400",
      "body": "We should also include, within the scope of this issue, any tweaks to Kettle's Eclipse/Jetty build to ensure it can be built and run correctly.\n\nTwo issues I've discovered:\n\n1\\. JettyServlet.java has a hard-baked IP address in it, causing Kettle to fail at startup\\\n2\\. The version of Xerces declared in the engage-sketches .classpath is incorrect, and should be 2.9.1 instead of 2.81\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T18:09:32.000-0400",
      "body": "Tasks remaining for this issue:\n\n* Adjust the build scripts to accommodate the directory restructuring\n* Copy license files to the distributions\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T18:10:12.000-0400",
      "body": "The build scripts will need to change a little bit after the directory restructuring.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T11:10:38.000-0500",
      "body": "Build scripts are in place and the child jira is closed\n"
    }
  ]
}
---
The build should create a war file containing infusion, engage-client and engage-server.\
The war file should be able to be dropped into Jetty or Tomcat as is and the engage demos should work.&#x20;

        
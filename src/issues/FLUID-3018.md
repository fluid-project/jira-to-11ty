---json
{
  "title": "FLUID-3018",
  "summary": "Upgrade Build Server",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-07-13T13:22:18.000-0400",
  "updated": "2014-06-25T16:28:13.419-0400",
  "versions": [
    "1.4"
  ],
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
      "date": "2013-09-06T13:47:45.635-0400",
      "body": "Should probably go with jenkins\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:28:13.418-0400",
      "body": "Infusion is now on Jenkins\n"
    }
  ]
}
---
Upgrade Build Server

Goals for the build server\
\====================

•	Community can help administer\
•	Less proliferation of similar scripts\
•	Fully documented and easy to understand\
•	Easy to add new stuff\
•	informative\
⁃	errors to list, etc.\
⁃	no false errors

Inventory of Needs\
\===============

•	Infusion\
⁃	webserver\
•	uPortal\
⁃	tomcat\
•	uploader\
⁃	tomcat\
•	kettle\
⁃	tomcat\
•	kettle apps\
⁃	tomcat\
•	custom builder\
⁃	webserver\
•	couchDB\
•	Solr\
⁃	tomcat\
•	Run unit tests (maybe able to do with kettle)

Other Requirements\
\================

•	Ant support\
•	Maven support\
•	SVN support\
•	Git support (nice to have)\
•	Mercurial support (nice to have)\
•	Jira integration (nice to have)\
•	e-mail notification\
•	command line builders\
•	Free\
•	runs in linux/unix

        
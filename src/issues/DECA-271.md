---json
{
  "title": "DECA-271",
  "summary": "Update Decapod to use Ubuntu 12.04 64bit",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-06-08T15:18:06.902-0400",
  "updated": "2012-06-26T13:39:09.990-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export",
    "genpdf",
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-15T15:33:45.280-0400",
      "body": "I have updated the install scripts to hot patch the iulib and ocropus clones during installation, to work with Ubuntu 12.04. The install will still work for 10.04 as well, as it will only apply the patch to Ubuntu 12.04.\\\n<https://bitbucket.org/jobara/decapod-0.6-install-iteration1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-06-18T12:41:56.965-0400",
      "body": "I tested the above in Ubuntu 10.04 and Ubuntu 12.04 and they both seemed to be working.&#x20;\n\nTests:\\\nRan server unit tests, all passed.\\\nGenerated a pdf of each type, all seemed okay.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-06-26T13:39:06.746-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Update Decapod to run on Ubuntu 12.04. Tasks include:

* ensuring the install script works
* all unit tests run and pass
* all test plans run and pass (or fail where expected)

        
---json
{
  "title": "DECA-239",
  "summary": "The licenses in the code are incorrect, they should all be marked as apache 2",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2012-03-15T14:02:53.972-0400",
  "updated": "2012-05-18T14:27:10.252-0400",
  "versions": [
    "0.5a"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-03-19T16:04:47.860-0400",
      "body": "License snippet to add to files:\n\nCopyright 2011-2012 OCAD University\n\nLicensed under the Apache License, Version 2.0 (the \"License\");\\\nyou may not use this file except in compliance with the License.\\\nYou may obtain a copy of the License at\n\n<http://www.apache.org/licenses/LICENSE-2.0>\n\nUnless required by applicable law or agreed to in writing, software\\\ndistributed under the License is distributed on an \"AS IS\" BASIS,\\\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\\nSee the License for the specific language governing permissions and\\\nlimitations under the License.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-04-12T13:02:55.904-0400",
      "body": "Updated the js files and the license file.\n\nCurrently in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-ui-iteration3>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-04-12T14:17:39.571-0400",
      "body": "Updated the license file in the server code\n\nCurrently in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-server-iteration3>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-04-16T13:02:06.619-0400",
      "body": "Should remove mention of DFKI from the licence files in the UI and Server repos. The python files should add a copyright comment to the top too.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-04-16T15:35:28.408-0400",
      "body": "I removed DFKI from the license files. I also dropped U of T from the UI one, as none of the old code remains. As for the python files, I didn't add the copyright comment to them as I haven't found a convention for doing so in any python code.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:27:06.388-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Fix the licences in the code to be Apache2

        
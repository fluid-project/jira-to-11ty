---json
{
  "title": "ENGAGE-290",
  "summary": "Import a good, fresh snapshot of all the McCord data for the pilot",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-25T13:03:14.000-0500",
  "updated": "2014-03-03T14:14:25.141-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-290/importer.txt",
      "filename": "importer.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-290/importWorking.txt",
      "filename": "importWorking.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-02-01T13:29:43.000-0500",
      "body": "This is a working import tool for the mccord data, however major refactoring and cleanup needed.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-01T15:21:40.000-0500",
      "body": "Updated Import Utility, ready for cleanup.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-01T15:24:55.000-0500",
      "body": "Too much functionality in 'main'. This code should be factored differently. At minimum it should be put into a method in the utilities file but may actually be better factored in a different class.\n\nline 25\\\na hardcoded config file directory\n\n* change to using a relative path to the current directory\n\nline 40\n\nempty response is hardcoded - a change to what an empty response returned would cause this to break\n\nconfig file contains el paths to data block that are in HTML\n\n* we should document this or change the structure of the config file to be more intuitive\n\nprepareImport should use a 'converter' to externalize the actual conversion so that CouchDbUtility can be used for CSV, XML etc. This means adding to the XMLConverter an API which uses an URL\n\nline 67 and 71\\\nhardcoded URLs to the McCord data sources\n\nline 79 and 80\\\nhardcoded URLs to the database\n\nline 84\\\nhardcoded ids to exhibitions\n\nline 90 and 98\\\nhardcoded config file name\n\nline 92\\\nchange the strategy of getting to the accessnumber to use an EL path\n\nline 107\\\nchange the error handling to use logging\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:17:05.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "y z",
      "date": "2010-02-03T16:11:46.000-0500",
      "body": "Imported the data from McCord exhibition and artifact feeds. Still need to fix the encoding problem.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-04T13:10:21.000-0500",
      "body": "Final working importer with correct encoding.\n"
    }
  ]
}
---
For the McCord pilot we require a complete set of data in both English and French. We need to get this data from McCord, import it into Couch, and test that it has imported correctly.&#x20;

        
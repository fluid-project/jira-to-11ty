---json
{
  "title": "ENGAGE-320",
  "summary": "Refactor the import code for McCord data",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2010-02-03T16:33:14.000-0500",
  "updated": "2017-12-22T09:44:29.975-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Data Import"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-03T16:34:07.000-0500",
      "body": "The current code is in a patch on <https://fluidproject.atlassian.net/browse/ENGAGE-290#icft=ENGAGE-290> but we will commit it to the scratchpad now so that other people can run imports more easily.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-04T14:40:50.000-0500",
      "body": "Yura and I have done some superficial refactoring of the import code to make it easier to read and somewhat better factored. This included:\n\n* Making hard coded values (URLs, database names, config file paths) constants so it is clear that they are hard coded\n* Breaking the main import loop into several methods that are more clearly named\n\nThere's still more work to be done here, in particular the ability to swap out strategies for different import formats, better exception handling, and the like.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:29.974-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
The import code that has been used to import the McCord data requires heavy refactoring. The overall structure of the code may need to be rearchitected. Here are some code review notes for the current code:

There is too much functionality in 'main'.  At minimum it should be put into a method in the utilities file but may actually be better factored in a different class.

line 25\
a hardcoded config file directory

* change to using a relative path to the current directory

line 40

empty response is hardcoded - a change to what an empty response returned would cause this to break

config file contains el paths to data block that are in HTML

* we should document this or change the structure of the config file to be more intuitive

prepareImport should use a 'converter' to externalize the actual conversion so that CouchDbUtility can be used for CSV, XML etc. This means adding to the XMLConverter an API which uses an URL

line 67 and 71\
hardcoded URLs to the McCord data sources

line 79 and 80\
hardcoded URLs to the database

line 84\
hardcoded ids to exhibitions

line 90 and 98\
hardcoded config file name

line 92\
change the strategy of getting to the accessnumber to use an EL path

line 107\
change the error handling to use logging&#x20;

        
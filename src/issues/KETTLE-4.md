---json
{
  "title": "KETTLE-4",
  "summary": "Location of message bundles has hard coded assumptions about their path relative to a source",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-02-02T17:09:17.000-0500",
  "updated": "2014-03-03T14:13:15.035-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-03T12:10:21.000-0500",
      "body": "removed the empty html directories from the repository, as kettle now properly canonicalises the urls\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-13T14:03:12.881-0400",
      "body": "This facility is currently not present in \"new new Kettle\", but since the codebase affected by this issue has changed, this issue is being closed.\n"
    }
  ]
}
---
Location of message bundles has hard coded assumptions about their path relative to a source

Currently the code in fluid.kettle.getBundle appends this to the source&#x20;

"../messages/messages\_"params.lang".json"

Which forces it to go up one level from what the source was defined as. This has lead us to have to work around this by creating structures like this. (assuming the source is something like browseCatalogue/html/

browseCatalogue/\
html/ <---- empty directory\
messages/\
messages\_en.json\
messages\_fr.json

        
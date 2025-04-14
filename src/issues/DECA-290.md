---json
{
  "title": "DECA-290",
  "summary": "Remove deprecated has_key calls in favour of the new \"key in d\" style",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-07-05T13:07:44.693-0400",
  "updated": "2012-07-10T13:48:51.114-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-05T13:15:01.285-0400",
      "body": "Changed has\\_key to \"key in d\".\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-server-iteration4>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-10T13:48:48.288-0400",
      "body": "Merged into the googlecode repo\n"
    }
  ]
}
---
the python dictionary has\_key method is deprecated and it's uses should be switched to "key in d".\
<http://docs.python.org/library/stdtypes.html#dict.has_key>

        
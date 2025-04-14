---json
{
  "title": "ENGAGE-192",
  "summary": "Implement a method for paging through the data",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-11-11T13:27:03.000-0500",
  "updated": "2010-01-11T11:20:20.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-01-11T11:20:20.000-0500",
      "body": "Rudimentary paging for engage has been implemented.\n\nThere is more work to be done and will be filed as specific jiras as needed\n"
    }
  ]
}
---
CouchDB does support paging\
\-------------------------------------------
\
Here is the info on couch.\
<http://wiki.apache.org/couchdb/How_to_page_through_results>

Here are some notes from a discussion with Colin.\
\--------------------------------------------------------------------
\
New URLs

<http://server/engage/artifacts/browse.html?db=mmi&q=merchandising&from=1&to=25>

<http://server/engage/artifacts/artifact.html?db=mmi&id=12345.6&q=merchandising&from=1&to=25>

The browse component and view component need a friend. Some object or function that knows about paging

Need a way to keep page from reloading when URL changed for the change of the artifact (possibly with the use of a #).&#x20;

PagedDataSource

{\
total: 12000,\
current: 12,\
start: 1\
end: 25\
list: \[possibly the data or some subset such as the ids]\
}

on the next set it will be start: 26, end: 50

Resource based URL would look like this:\
<http://server/engage/mmi/artifacts/12345.6.html>\
<http://server/engage/mmi/artifacts/12345.6.json>\
<http://server/engage/mmi/artifacts.html?q=>"merchandising"\&from=12\&to=28

        
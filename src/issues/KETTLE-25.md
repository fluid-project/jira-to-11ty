---json
{
  "title": "KETTLE-25",
  "summary": "CORS is not supported for PUT requests",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2014-12-12T10:42:36.663-0500",
  "updated": "2015-01-29T08:03:23.352-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2015-01-29T08:03:23.331-0500",
      "body": "Resolved with <https://github.com/fluid-project/kettle/commit/039df65e13edd23d7f7f3fb89dec504c032b0939>\n"
    }
  ]
}
---
When updating the GPII PrefsEditors code to run with the latest fireball branch versions of the preferences server, it was found that CORS is not supported for PUT requests.

CORS is enabled on the preferences server (using the "kettle.use.CORS" gradename), and GET and POST requests are successful, but when attempting to PUT a new preferences set to the server, the following error message is thrown in the browser:

Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at <http://localhost:8081/preferences/60cb88f8-1c5e-4e67-a69f-41a8a0f217b2>. This can be fixed by moving the resource to the same domain or enabling CORS.

After a bit of digging, it turns out that PUT was missing from the header in the response to the preflight OPTIONS request. Snipping from the firebug consoles display of the response header:

Access-Control-Allow-Head...	X-Requested-With,Content-Type\
Access-Control-Allow-Meth...	GET,OPTIONS\
Access-Control-Allow-Orig...	[http://localhost:8888](http://localhost:8888/)

(where [http://localhost:8888](http://localhost:8888/) is the host of the prefsEditor doing the PUT). PUT needs to be added to the list of allowed methods for CORS to work properly with PUT

        
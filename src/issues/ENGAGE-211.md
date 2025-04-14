---json
{
  "title": "ENGAGE-211",
  "summary": "Couchdb unreachable on live site",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jamon Jamon",
  "date": "2009-12-03T18:27:29.000-0500",
  "updated": "2010-02-24T14:54:43.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "Debian Lenny, 2.6.29.6-xen (custom x86\\_64), Apache 2.2.9, Java 1.6.0\\_12 64bit, CouchDB 0.9.0, Tomcat 6.0.20.0, Erlang 1:13.b.2.1\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-12-04T14:25:51.000-0500",
      "body": "We might be able to do some comparison with the updated version of couchdb that Jamon and Yura got running.\n"
    },
    {
      "author": "Jamon Jamon",
      "date": "2009-12-14T14:18:09.000-0500",
      "body": "CouchDB Crashed again at some point in the last few days. Tomcat wasn't throwing an error this time, but couchdb itself wasn't listening on any port, despite being up and running. Edited /etc/couchdb/default.ini to add verbose logging so that when it happens again there'll be a record.\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-24T14:54:43.000-0500",
      "body": "no longer relevant for the issue\n"
    }
  ]
}
---
When attempting to browse any collection or artifact on the live demo today (<http://fluidengage.org/engage/demo/index.html>), Tomcat threw an error after a few weeks of uptime:

15:56:54 GMT-0500 (EST):  XMLHttpRequest: \[object Object]\
15:56:54 GMT-0500 (EST):  Status: null\
15:56:54 GMT-0500 (EST):  Error: JavaException: java.net.ConnectException: Connection refused

As Colin noted on IRC, the only place an XMLHttpRequest is made to CouchDB is via the browse collection page. At no time do any services actually fail, e.g. Apache, Tomcat, Erlang, and CouchDB all remain stable and running.

I expect it will take a few days for the issue to crop up again (if it does). At that point, connecting directly to CouchDB to examine its state seems to be the most likely way to collect more information for further troubleshooting.

The operating system can likely be ruled out as the cause since no other running web application on the server has experienced any problems. This is only an educated guess. However, from what I've seen it is unlikely to be the case that Linux itself has run into a ulimit ceiling or tcp socket exhaustion.

        
---json
{
  "title": "ENGAGE-284",
  "summary": "Create Language Selection",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Andrea Leutgoeb",
  "date": "2010-01-25T09:47:10.000-0500",
  "updated": "2010-02-26T10:55:27.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Mobile"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/ENGAGE-285/",
      "key": "ENGAGE-285"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-284/language.100125.0.1.patch",
      "filename": "language.100125.0.1.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-284/language.core.100201.0.2.patch",
      "filename": "language.core.100201.0.2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-284/language.kettle.100201.0.2.patch",
      "filename": "language.kettle.100201.0.2.patch"
    }
  ],
  "comments": [
    {
      "author": "Andrea Leutgoeb",
      "date": "2010-01-25T09:53:57.000-0500",
      "body": "First version of Language Selection screen.\n\n**To-Do**\n\n* Specs cookie: \"language\"\n* Specs languages: \"en\", \"fr\"\n* Css\n"
    },
    {
      "author": "Andrea Leutgoeb",
      "date": "2010-02-01T04:33:34.000-0500",
      "body": "Language selection 0.2\n\n* Integration of user component (core & kettle).\n\nCouchDB: User record created in table \"users\":\n\n<http://unistud.asteasolutions.net:11929/users/>\n\nTO-DO:   Store language preference of user in CouchDB\n\n* List of languages generated dynamically based on the museum document.\\\n  &#x20; Museum document for McCord:\\\n  {\\\n  &#x20;  \"\\_id\": \"mccord\",\\\n  &#x20;  \"\\_rev\": \"1-b7cf5fa17688439515f77a9c14b2275f\",\\\n  &#x20;  \"type\": \"fluid.engage.docs.museum\",\\\n  &#x20;  \"name\": \"McCord Museum\",\\\n  &#x20;  \"languages\": \\[\\\n  &#x20;      \"en\",\\\n  &#x20;      \"fr\"\\\n  &#x20;  ],\\\n  &#x20;  \"lat\": 43.662424,\\\n  &#x20;  \"long\": -79.441134\\\n  }\n\n&#x20; \\\nCurrently the museum document for McCored is stored locally.\\\nTO-DO: Info needs to be stored in CouchDB & for all museums.\n\n* Minor html/js changes\n"
    },
    {
      "author": "Andrea Leutgoeb",
      "date": "2010-02-01T05:25:05.000-0500",
      "body": "engageConfig.json\\\nengageStandaloneConfig.json\n\n\\>> additional entry for initServices: \\\n\"fluid.userService.initAcceptor\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:17:57.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-26T10:55:27.000-0500",
      "body": "This was implemented as part of the home page.\n"
    }
  ]
}
---
Language Selection is the first screen of the application (i.e., after a user taps the application icon, the first thing they see is this screen) and allows language selection for application.

        
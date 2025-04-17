---json
{
  "title": "FLUID-6595",
  "summary": "Better support in DataSources for interpolating search parameters",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-02-04T08:06:27.477-0500",
  "updated": "2024-07-17T08:11:35.725-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-443/",
      "key": "SJRK-443",
      "summary": "Improve CouchDB view datasource to make the reusable with different filtering options"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-02-04T08:30:29.550-0500",
      "body": "Other precedent for work like this is in Tony Atkins \\[RtF]'s fluid-express: <https://github.com/fluid-project/fluid-express/blob/main/src/js/lib/querystring-coding.js#L116>\n"
    }
  ]
}
---
DataSource's URL interpolation is currently rather stodgy and only properly supports interpolation at the textual level of the entire URL. Dealing with everyday web services e.g. <https://api.inaturalist.org/v1/docs/#!/Observations/get_observations_id> requires somewhat more intelligent substitution, including removing unused parameters and optionally encoding arrays as CSV etc.

Draft improvements to resolveUrl could be integrated from <https://github.com/amb26/bagatelle/blob/master/src/iNaturalist/obsAPI.js#L30-L49> but the whole resolveUrl pathway needs to be spring-cleaned since it is crusty and applies interpolation twice to the pathname.

See also CouchDB view requirements at SJRK-433

        
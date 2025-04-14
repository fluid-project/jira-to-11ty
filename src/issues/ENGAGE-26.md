---json
{
  "title": "ENGAGE-26",
  "summary": "Build an artifact view component",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2009-06-02T11:50:30.000-0400",
  "updated": "2009-11-03T11:50:04.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/ENGAGE-31/",
      "key": "ENGAGE-31"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-26/addingArtifactToDemo.patch",
      "filename": "addingArtifactToDemo.patch"
    }
  ],
  "comments": [
    {
      "author": "Armin Krauss",
      "date": "2009-06-18T15:28:59.000-0400",
      "body": "My first version of an artifact page that does some rendering and is very static sofar.\n\nNext steps are to pull in CouchDB data and use the mobile FSS style sheets\n"
    },
    {
      "author": "Armin Krauss",
      "date": "2009-06-30T17:40:10.000-0400",
      "body": "At the moment Armin is trying to get a rudiment example into SVN\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-21T16:42:04.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T16:30:06.000-0400",
      "body": "Yura and Justin have done excellent work on this umbrella issue, and the work is complete for Engage 0.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:50:04.000-0500",
      "body": "Closed  as per previous comment\n"
    }
  ]
}
---
The goal is to build a artifact component in the svn incubator tree. This is not meant to be a sketch. As a result\
there should be component(s) that implement the wireframes "Artifact, collapsed" and "Artifact, expanded" which\
can be found on <http://wiki.fluidproject.org/display/fluid/Mobile+wireframes>

It is important to develop something that can be moved to the main tree soon. This implies that there has to be a\
standard Fluid structure, Unit tests, DOM-agnosticism, and other Fluid things. So there should be rather less developed\
that is able to move up than a lot that has to be reworked.

Source can be found here in the SVN: <https://source.fluidproject.org/svn/incubator/mobile-fss/trunk/>

JSON test data from McCord can be found here: <http://issues.fluidproject.org/browse/FLUID-2816>\
Some of this data will appear in the SVN.

To reach the goal we will have a two step process as outlined below:

1st step we will build the example in the wireframes.

* display 6 pieces of data:\
  &#x9;	\- Artifact name\
  &#x9;	\- time periode\
  &#x9;	\- technique\
  &#x9;	\- size\
  &#x9;	\- donor\
  &#x9;	\- description text\
  &#x9;\- assume the json from the database looks like the McCord json

next steps

* generalize to be able to display different data and different amounts of data
* generalize to be able to use other json then McCord

        
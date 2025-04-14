---json
{
  "title": "KETTLE-2",
  "summary": "Infusion directory is not mounted entirely correctly. ",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "y z",
  "date": "2009-12-10T16:43:56.000-0500",
  "updated": "2014-03-03T14:17:44.870-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/KETTLE/KETTLE-2/ENGAGE-214.patch",
      "filename": "ENGAGE-214.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-12-15T03:48:58.000-0500",
      "body": "This isn't the right approach since it undoes the effect of a patch Michelle made before the release to cause the standalone configuration to work. The \"src/webapp\" portion cannot appear in the URLs as listed in the includes section. However, we have bigger problems in this area.... see <https://fluidproject.atlassian.net/browse/ENGAGE-193#icft=ENGAGE-193> and <https://fluidproject.atlassian.net/browse/ENGAGE-216#icft=ENGAGE-216> 😛\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-08-19T18:49:56.233-0400",
      "body": "In the flurry of URL rewriting fixes during the 0.3 cycle of releases, did this one get fixed?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-13T14:04:38.774-0400",
      "body": "Mounting in \"new new Kettle\" is achieved by the mechanisms present in Express and is so not affected by this issue.\n"
    }
  ]
}
---
When loading infusion kettle doesn't find infusion resources right away. Instead it looks at fluid-infusion/src/webapp/src/webapp and then trim directories until it hits the right path.&#x20;

        
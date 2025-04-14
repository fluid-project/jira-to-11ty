---json
{
  "title": "KETTLE-62",
  "summary": "Ability to specify default value for environment variable lookup",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Giovanni Tirloni",
  "date": "2017-07-03T15:42:21.569-0400",
  "updated": "2017-07-05T09:58:15.951-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-07-03T16:21:19.962-0400",
      "body": "I've submitted a PR to show what I mean by this. Please let me know if this approach is acceptable.\n\n<https://github.com/fluid-project/kettle/pull/34>\n\nDiscussion with @@Cindy Li @@Justin Obara @@Michelle D'Souza: <https://botbot.me/freenode/fluid-work/2017-06-29/?msg=87941169&page=1>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-07-05T09:24:14.470-0400",
      "body": "Hi - the pull request in itself is of high quality, since it targets limited functionality and has a good test case and JIRA writeup. However, the approach isn't the best one - to start with, it seems peculiar to just fix one resolver without fixing them all - this creates an inconsistency in their contracts. But going on, I think it seems clear that using up the 2nd argument slot for every resolver for this generally unrelated concern is quite an intrusion on the whole space of resolvers (of which we have 3, but expect users to contribute many more).\n\n \n\nIn fact this kind of \"value resolution creep\" is exactly what Infusion is designed to avoid. If there is a detailed arbitration required between different values with different priorities, these should each be written in options distributions with an explicit \"priority\" field indicating which values takes priority over which.\n\n \n\nThe row of this table <http://docs.fluidproject.org/infusion/development/Priorities.html#table-of-supported-sites-for-priorities-and-namespaces> for \"distributeOptions\" is the relevant one. It explains that priorities that are listed as \"after\" the namespace of another distribution will merge on top of it. In general in the absence of distributions, options in derived configs (grades) will take priority over those in base grades (configs). This is explained in the docs here: <http://docs.fluidproject.org/infusion/development/ComponentGrades.html#combining-grades>\n\n \n\nIn the comment <https://github.com/GPII/universal/pull/522/files#r125638565> on the universal pull request, I showed an example of how you can achieve the defaulting effect you want without needing to change the definitions of the resolvers:\n\n \n\n```java\n\"distributeOptions\": {\r\n            \"preferencesDataSource.productionDataSource\": {\r\n                \"record\": {\r\n                    \"type\": \"kettle.dataSource.URL\",\r\n                    \"options\": {\r\n                        \"url\": \"https://preferences.gpii.net/preferences/%userToken\"\r\n                    }\r\n                 },\r\n                 \"target\": \"{that flowManager preferencesDataSource}\"\r\n             },\r\n             \"preferencesDataSource.productionEnvUrl\": {\r\n                 \"record\": \"@expand:kettle.resolvers.env(GPII_FLOWMANAGER_PREFERENCES_URL)\",\r\n                 \"target\": \"{that flowManager.preferencesDataSource}.options.url\",\r\n                 \"priority\": \"after:preferencesDataSource.productionDataSource\"\r\n             }\r\n        }\n```\n\nIt's a good opportunity to start removing cruft from our configs, in any case, and thinking a bit more clearly about how they are meant to relate to each other.\n\nNote that namespace names are \"free\" but we tend to adopt a convention of having two-part names where the first part refers to the configuration which is being modified, and the 2nd refers to the reason. \n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2017-07-05T09:57:32.295-0400",
      "body": "Thanks for the explanation, it makes perfect sense. I was ignorant about priorities and how they could help in this situation. In my tests using distributeOptions, the values I was trying to override were ignored.\n\nI will close this JIRA and the associated PR as it's clear this situation is already addressed by Infusion.\n"
    }
  ]
}
---
While working with configuration files that depend on environment variables, it would be useful to have default values that are used in case the environment variable is missing.

        
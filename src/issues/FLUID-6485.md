---json
{
  "title": "FLUID-6485",
  "summary": "Hide file extension(.html) on every url",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Bate martins",
  "date": "2020-04-03T19:32:29.842-0400",
  "updated": "2024-07-22T09:47:46.113-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation",
    "Website"
  ],
  "environment": "OS: Ubuntu 18.04.4 LTS\\\nNode: 12.13.1\\\nChrome: 80.0.3987.122 (Official Build) (64-bit)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-04-08T07:08:44.497-0400",
      "body": "@@Bate martins, which site(s) is this for?\n"
    },
    {
      "author": "Bate martins",
      "date": "2020-04-08T07:26:26.040-0400",
      "body": "Justin Obara its  for the infusion's documentation site   <https://docs.fluidproject.org/infusion/development/>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-04-13T16:11:45.465-0400",
      "body": "Thanks for filing this, Batey. I've taken a quick look at your PR as well.\n\nGoogle says that having file extensions at the end of URLs doesn't actually affect their search results. Stability in a site's URLs and the accuracy of them is more important. For some more info on this, here's a Q\\&A video from one of Google's employees that addresses this question: <https://youtu.be/xMIW3i37YeY>\n\nWith that in mind, I feel we should defer discussion of this work until we start the transition to another static site generator.\n\nMore generally, trying to do SEO work is a little bit like an arms race against Google; it's better to make sure your site is easily navigable by any crawlers. Good accessibility and using semantic HTML goes a long way towards that goal.\n"
    },
    {
      "author": "Bate martins",
      "date": "2020-04-14T15:08:31.411-0400",
      "body": "Thanks Gregor for pointing it out.Added to your statement, from <https://www.searchenginejournal.com/googles-john-mueller-says-parameters-urls-not-matter/246675/> it also says \"In fact, removing file extensions from URLs may even harm the site.\". Though  90% of web searches happen on Google,does this hold true for other engines like  Bing and Yahoo ?.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-18T07:44:47.247-0400",
      "body": "This appears to have been completed. Probably with our move to 11ty.\n"
    }
  ]
}
---
For  SEO, there is a need for pretty URLS.Stripping off html extensions from deployed files move towards achieving it.\
I wish to be assigned this issue

        
---json
{
  "title": "FLUID-5722",
  "summary": "Add search functionality to the documentation platform",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Jonathan Hung",
  "date": "2015-07-28T14:29:27.987-0400",
  "updated": "2019-07-08T13:29:04.620-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2017-03-15T10:40:27.883-0400",
      "body": "Another possible alternative is Tipue, a jQuery based search engine that can work on static sites.\n\nwebsite: <http://www.tipue.com/>\\\ngithub: <https://github.com/Tipue/Tipue-Search>\n\nOpen Source, MIT License.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-03-15T11:08:33.613-0400",
      "body": "Very interesting.  I'd be happier if they had indexing tools, but my reading of their docs and code suggests that it's not much work to create a static index on our own.  Here's an example:\n\n<https://github.com/Tipue/Tipue-Search/blob/master/demo/static/tipuesearch/tipuesearch_content.js>\n\nA single entry looks like:\n\n```java\n{\"title\": \"Tipue\", \"text\": \"Tipue is a small web development studio based in North London.\", \"tags\": \"jQuery HTML5 CSS\", \"url\": \"http://www.tipue.com\"},\n```\n\nLooking at [an example from our docs](https://raw.githubusercontent.com/fluid-project/infusion-docs/master/src/documents/Builder.md), it looks like we already have structured data for the title and tags (category).  We should be able to guess at the URL based on the FS structure.  This leaves the text, which is basically the markdown minus any inline markup.  I'd assume we can get something reasonable using something like [pandoc](http://pandoc.org/).\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-03-15T11:12:11.275-0400",
      "body": "Just to comment a bit further, the other things I'd want to read up on regarding this (or really any solution) would be:\n\n1. Support for stemming.\n2. Support for improving search quality using stopwords.\n3. Support for multiple languages.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-03-16T04:51:43.902-0400",
      "body": "I read through [the Tipue docs](http://www.tipue.com/search/docs/?d=3), they have support for stopwords, stemming, and field weighting.  However, as they do not include useful data for stopwords and stemming, we'd have to roll our own or adapt someone else's body of data.\n\nAs far as I can see, there is absolutely no option to switch between languages, but if you're dealing with a static site that has different subdirectories by language, it's possible to have a different search index and stopwords per language.\n\nAnyway, my overall impression of Tipue is that it seems like it would work, but it doesn't do all that much to help us bridge the gaps.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-04-17T07:46:03.669-0400",
      "body": "I recently revisited the options for search in a technology evaluation on the WIKI:\n\n<https://wiki.gpii.net/w/Technology_Evaluation_-_Static_Site_Search#Recommendation>\n\nAfter getting some small feedback from the group, my plan is to proceed to \"spike\" a proof-of-concept approach with Fuse.js.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-04-30T04:58:24.937-0400",
      "body": "<https://github.com/fluid-project/infusion-docs/pull/147>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2019-07-08T13:29:04.613-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion-docs/pull/147) has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion-docs/commit/7ac573b5818d8989e20f151a2fe2800793106d53).\n"
    }
  ]
}
---
Add search functionality to the documentation platform.

Searching will need to be a client-side solution since there is no database or a server.

Docpad has a search plugin called lunr:\
<https://github.com/brockfanning/docpad-plugin-lunr>

        
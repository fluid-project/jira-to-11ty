---json
{
  "title": "FLUID-6378",
  "summary": "Add ability to search infusion docs using phrases.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2019-04-30T07:13:27.131-0400",
  "updated": "2024-07-22T10:35:19.047-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6378/Screen Shot 2019-07-09 at 21.00.34.png",
      "filename": "Screen Shot 2019-07-09 at 21.00.34.png"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-06-30T18:03:49.769-0400",
      "body": "If Fuse does any kind of fuzzy matching, it should at least be on the basis of some kind of recognisable stemming. Right now, a search for \"reference\" also hits \"preference\" which is nonsensical. Unfortunately each time nerds reinvent the wheel they throw out the last 30 years of its turns.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-07-01T04:29:14.816-0400",
      "body": "Looking at their [demo as docs](https://fusejs.io), it seems like the \"tokenize\" option might address this.  We'd want to test both for performance and relevance to confirm, but with luck this part might simply be a change in configuration options.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-07-01T04:53:31.661-0400",
      "body": "It seems like we really need the tokenise option, further testing today highlights the problems with the threshold, distance, and location approach.   Take for example something as simple as searching for promise rejection material.\n\n* [searching for ](https://docs.fluidproject.org/infusion/development/search.html?qs=\"promise%20reject\")`promise.reject` returns the expected result.\n* [searching for ](https://docs.fluidproject.org/infusion/development/search.html?qs=\"promise%20reject\")`promise reject` returns the same result.\n* [searching for ](https://docs.fluidproject.org/infusion/development/search.html?qs=\"reject%20promise\")`reject promise` returns zero results.\n\nI've also noticed that the problem is a bit more severe than simply not supporting plus signs as quotes.  For example:\n\n* [searching for ](https://docs.fluidproject.org/infusion/development/search.html?qs=\"promise%20-resolve\")`promise -resolve` only returns a single tangentially related result that includes `resolve`.\n* [searching for ](https://docs.fluidproject.org/infusion/development/search.html?qs=\"promise%20%2Breject\")`promise +reject` returns zero results.\n* [searching for ](https://docs.fluidproject.org/infusion/development/search.html?qs=\"%5C\"promise%20rejects%5C\"\")`\"promise rejects\"` returns zero results, but if you [remove the quotes](https://docs.fluidproject.org/infusion/development/search.html?qs=\"promise%20rejects\"), the desired result is returned.\n\nSo it seems like plus signs, minus signs, and quotes  at best result in confusing search hits, and are often harmful.  I am thinking through the query string parsing strategy and other issues at the moment and may spike this improvement between other things.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-07-01T05:36:22.937-0400",
      "body": "There is no stemming support at all, it seems like our options within Fuse.js are:\n\n1. **current behaviour**: return words matching each word as a substring, i.e. spaces and other word boundaries are not meaningful.   Order by threshold, location, and distance.\n2. **tokenize**: Only return matches containing one or more of the search terms, but only matching \"whole words\".\n3. **tokenize and matchAllTokens**: Only return matches containing all of the whole words (in any order) with matches in the correct order ranked higher.\n\nFirst, let's assume that:\n\n1. All words and phrases with plusses are \"must have\"\n2. All words and phrases with minuses are \"must not have\"\n3. All words and phrases with neither are \"may have\" (used to boost weighting).\n\nWe could achieve something more reasonable than we have now with multiple passes, as follows:\n\n1. Each \"must have\" phrase is used in a  \"tokenize and match all tokens\" pass, filtered to exact matches.\n2. Each \"must not have\" phrase is used in a \"tokenize and match all tokens\" pass, filtered to exact matches.\n3. All \"must have\" individual words are used in a \"tokenize and match all tokens\" pass.\n4. All \"must not have\" individuals words are used in a \"tokenize and match all tokens\" pass.\n5. Each \"may have\" phrase is used in a \"tokenize and match all tokens\" pass, filtered to exact matches.\n6. All \"may have\" individual words are used in a \"tokenize\" pass.\n7. \"may have\" and \"must have\" results are combined into a single set of results in which \"must haves\" that also match \"may haves\" are upweighted.\n8. the combined results are updated to filter out all \"must not have\" results.\n\nMy assumption in the above design is that only including \"may not have\" words and phrases is not supported.  Filtering, upweighting, etc. are all handled using the section identifier, i.e. a page may contain excluded material in one or more sections but still have search hits from other sections returned.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-07-08T10:48:23.070-0400",
      "body": "In later work with fuse.js, I was having difficulty performing a search in which one or more search terms are required in a given search.  This is a deal breaker for any meaningful improvement, and is a reason to convert to using lunr.js as Antranig and I have been discussing.  In addition, although its indexing time is lower, fuse.js requires so much time per search that we are better off moving to lunr.js purely for performance reasons, as advanced searches might take four or five search passes and end up taking multiple seconds with fuse.js.\n\nI completed the search string parsing that is required for either approach earlier today and will move onto the fuse.js refactor shortly.  With fuse.js I think it's possible to even achieve phrase matching as a post-search filtering step without bloating the load time too much.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-07-09T14:56:52.504-0400",
      "body": "I completed the initial work with lunr.js, it definitely distinguishes \"preference\" (which stems down to \"prefer\") from \"reference\" (which stems down to \"refer\").  I need to update the highlighting and make a go at quick phrase searching, and then I'll put in the pull.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-07-09T15:01:17.639-0400",
      "body": "My work to address this will also remove the docpad metadata from the index and digest, so that we don't end up with results like this:\n\n<!-- media: file 74084aa5-6eff-4817-8d1b-dc7a738c9a11 -->\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-5722#icft=FLUID-5722> added basic searching of the documentation.  Antranig Basman and I have discussed improvements to this, namely:

1. Support for quoted phrases or quoted words as exact matches.
2. Support for plus and minuses.

As Fuse.js [does not support phrase matching](https://github.com/krisk/Fuse/issues/206), but does support "whole query" matching, one approach would be to create two Fuse instances, one "exact", one "fuzzy".  We would then remove quoted phrases from the overall query string, and search for those individually using the "exact" search.  The non-phrase data remaining would be run through the "fuzzy" search.  The results would be interpolated such that:

1. The "relevance" score for each "hit" (page and section) would be the sum of its relevance in the individual searches, such that a hit that matches multiple phrases would score higher than a hit that matches only one phrase.
2. Any phrase with a plus would be used to filter "fuzzy" results to ensure that only pages that contain the exact phrase are allowed.
3. Any phrase with a minus would be used to exclude matches from "fuzzy" results (and other phrase matching.

This approach to phrase matching would multiply the search time, i.e. you'd need 50-75 ms extra per phrase, so we might need to add a loading animation depending.

        
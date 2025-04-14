---json
{
  "title": "FLUID-6626",
  "summary": "Raw github URLs cannot be refreshed more than once every 5 minutes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Story",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-06-03T08:39:45.299-0400",
  "updated": "2024-07-25T12:49:58.434-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Pluralistic Data Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-25T12:49:58.246-0400",
      "body": "Migrated to <https://github.com/inclusive-design/covid-data-monitor/issues/39>&#x20;\n"
    }
  ]
}
---
As part of the Inverted Wordles project, positioned as an early taster of our pluralistic data infrastructure based on github and other public massive-scale platforms, there was an idea that URLs hosted under raw.githubusercontent.com could be used to circumvent the same origin policy, and be polled regularly in order to update the user visualisation.

There was early resistance to implementing dedicated Netlify proxies for these polls due to the concern that they might eat into our 125,000 per month allowance of requests under their free or OSS tiers. Since the client should realistically poll every 5 to 10 seconds to gives some responsiveness, a number of clients polling these endpoints simultaneously might chew into the request allowance quite fast.

Whilst we found that the CDN hosting raw.githubusercontent.com does indeed set the proper CORS headers, in practice it is incompletely configured in that it does not respond to cache control headers nor preflight CORS requests, and is hardwired behind an HTTP varnish cache that does not allow updates more frequently than every 300 seconds.

Nonetheless, this technique could be useful in other contexts where responsiveness is not so important, so some of the code is reproduced here for reference.

The implementation was contributed in <https://github.com/inclusive-design/inverted-wordles/pull/6> and had a polling endpoint reading

```java
// Old implementation, disused since
// i) raw.githubusercontent does not permit CORS preflight requests configuring cache control
// ii) its cache is hardwired to only update every 300 seconds
/*
inverted_wordles.fetchAnswers = function (instance) {
    var url = inverted_wordles.stringTemplate(
        "https://raw.githubusercontent.com/${repo_owner}/${repo_name}/${branch}/src/_data/answers.json", wordle_globals);
    fetch(url, {
        cache: "no-store"
    }
    //, {
    //    headers: {
    //        "Cache-Control": "no-store, max-age=0"
    //    }
    //}).then(function (response) {
        inverted_wordles.handleResponse(instance, response);
    }, function (error) {
        console.log("Error fetching url " + url + ": ", error);
    });
};
*/
```

as well as an attempt to set headers as so

```java
// Unfortunately "Etag" is a censored CORS header so we will have to do change detection by brute force
    // https://stackoverflow.com/questions/21345814/etag-header-not-returned-from-jquery-ajax-cross-origin-xhr/21346319
    /* for (var pair of response.headers.entries()) {
        console.log(pair[0]+ ": " + pair[1]);
    }*/
```

        
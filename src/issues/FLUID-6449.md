---json
{
  "title": "FLUID-6449",
  "summary": "fluid.dataSource.URL doesn't work with termMap",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-01-16T15:12:10.500-0500",
  "updated": "2020-01-21T08:18:23.963-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-01-17T07:26:06.297-0500",
      "body": "While not the specific cause of the issue, something that also caused confusion when trying to track things down is the fact that fluid.stringTemplate will return back whatever is passed in as the template if there are no values provided. However, if the template isn't a string and keys are provided, it will throw an error. \n\n<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/Fluid.js#L2979-L2993>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-01-21T08:18:23.963-0500",
      "body": "Well spotted on finding this flaw, but the supplied fix isn't right - the reason for this drift is the discrepancy between the \"old URL API\" on node, which parsed the URL into a field \"path\" ~~ ~~~~<https://nodejs.org/api/url.html#url_urlobject_path>~~~~ ~~ and the new whatwg API (available both in modern browsers and node) which looks like it now uses a field \"pathname\" - <https://url.spec.whatwg.org/#url-class> . We can't mix up \"url\" which is a field representing the overall url and the parsed-out fields such as \"path\". Note that it looks like there is an additional confusion, however, in that the file-backed DataSource looks like it exploits the coincidence of its top-level field \"path\" with the old-fashioned parsed URL field \"path\" in order to get term expansion done.\n\nIn general this hoisting of DataSource into the browser is pretty incomplete work and its good that issues like this are highlighting it. In practice this isn't ready to go in until we can similarly port the test cases from Kettle into Infusion such as <https://github.com/fluid-project/kettle/blob/master/tests/DataSourceURLTests.js> . This will need some thought since we can't easily support these without some ability to run an HTTP server within the test cases, which implies significantly increasing their dependency footprint. I imagine this will require one of the gpii-testem configurations developed by @@Tony Atkins \\[RtF]. \n\nNote that in Kettle there are some pretty comprehensive tests for many aspects of the DataSource API including term expansion but they are currently only targetted at the file-backed DataSource ~~ ~~~~<https://github.com/fluid-project/kettle/blob/master/tests/DataSourceFileTests.js>~~~~ ~~ we need to generalise these so that they run against the URLDataSource too.\n"
    }
  ]
}
---
# The issue

The current version of fluid.dataSource.URL, which at time of filing is "freshly" extracted from kettle.dataSource.URL and exists only dev branches, does not seem to work properly when the termMap option is specified on the grade.

The reason for this seems to be down to this line in code: <https://github.com/amb26/infusion/blob/2e487c617e8f57a067a37b9d6aed82fb7a26d87a/src/framework/core/js/DataSource.js#L295>

```javascript
requestOptions.path = (resolveUrl || fluid.dataSource.URL.resolveUrl)(requestOptions.path, requestOptions.termMap, directModel);
```

 

The issue is that it seems that it is not possible for the "path" value on requestOptions to be anything other than "undefined" at this point in execution, and if termMap is specified then the call to fluid.dataSource.URL.resolveUrl will result in a call to fluid.stringTemplate that will generate an error and bring execution to a halt.

I have found that adjusting the argument passed into resolveUrl to be "requestOptions.url" seems to produce the expected behaviour, but it would be good to get @@Antranig Basman's confirmation that this is semantically valid.

Detailed tests should also be added to validate the expected behaviour, whatever it ends up being.

***

# Further detail and context

I have created a branch that includes the fix I propose above:\
<https://github.com/BlueSlug/infusion/tree/NOJIRA-broken-dataSource-URL>

Additionally, it seems that the work was filed under FLUID-4982:\
<https://github.com/amb26/infusion/commit/f42dd15e00aacaaab821fe853204a66d7609a59d>

There is also an existing Jira that seems to cover the work expressed in the commit above. I'm not sure if it's the same but I'm linking it here just in case:\
<https://issues.fluidproject.org/browse/KETTLE-61>

        
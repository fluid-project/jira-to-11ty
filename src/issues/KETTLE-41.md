---json
{
  "title": "KETTLE-41",
  "summary": "kettle.dataSource.URL should be able to better handle optional or complex content...",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-03-11T05:19:46.361-0500",
  "updated": "2018-05-24T03:58:32.436-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-03-14T04:49:15.003-0400",
      "body": "I was thinking about this over the weekend.  Currently, the file that defines the existing base dataSource grades is only designed for use within node or possibly browserify (witness [the use of require and node packages](https://github.com/amb26/kettle/blob/KETTLE-32/lib/dataSource.js#L15)).  In order to create a browser version of kettle.dataSource as described in [GPII-1587](https://issues.gpii.net/browse/GPII-1587), we would either need to use browserify, make a work-alike implementation that fulfills the same contract, or (my preference) to break up the existing code into:\n\n1. \"common\" grades with the code that will work in either environment.\n2. \"server side\" grades that have the same namespaces as the current grades, but which extend \"common\" grades and add the parts unique to the server-side, like `http.request`.\n3. \"client side\" grades that extend the common grades and add the parts unique to the client-side, like `$.ajax`.\n\nSince both `http.request` and `$.ajax` can be configured using JSON-able objects, I was thinking of using model transformation rules to make a convenience mapping between the conventions used with `http.request` and the conventions used with `$.ajax`.  In essence the documentation for the common grade would describe a declarative structure that is used to pass data, and the transformation rules would make sure that the structure is updated for the conventions of the code ultimately handling the request.\n\nGiven that everything we have is already based on working with `http.request`, my assumption is that `http.request` would be the defacto standard and that the client-side `kettle.dataSource.URL.client` grade would take care of the transformation.  My idea is that the transformation would make it possible to use a common encoding for simple things like the port, scheme, hostname, and data payloads, but would make it possible for grades that need to use deep options in either `http.request` or `$.ajax` to safely do so.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-05-11T12:51:33.246-0400",
      "body": "I will experiment on my own, but after further review, it seems like the \"user options\" passed to the `get` invoker can be passed a `qs` object, which will satisfy the more advanced use cases mentioned here.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-05-12T09:12:47.221-0400",
      "body": "I just realized that we are not using the \"mikeal\" request, but rather node's request.  As far as I can see, I'll need to wire in a query builder to add the object data to the path before the request is launched.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-05-13T12:27:20.625-0400",
      "body": "See docs for now supported \"resolveUrl\" invoker at <https://github.com/amb26/kettle/blob/KETTLE-32/docs/DataSources.md#configuration-options-accepted-by-kettledatasourceurl> and a simple test at <https://github.com/amb26/kettle/blob/KETTLE-32/tests/DataSourcePouchDBTests.js#L83>\n"
    }
  ]
}
---
In working on `gpii-couch-cushion`, I have been reviewing the existing `kettle.dataSource.URL` grade in some depth.  This grade supports combining a `termMap` with a URL that contains string template variables.  This is fine if the variables:

1. will always be set (failing to set a variable results in replacing the key with `undefined`)
2. Are strings.  `Array` values will be replaced with `%5Bobject%20Object%5D`. This is particularly relevant when working with CouchDB, where lists and other endpoints commonly use an array to pass the list of keys to be retrieved.

In addition, the URL template must take care of adding any necessary quotes, ampersands, etc. &#x20;

This  mechanism is OK for simple use cases, but we can and should support a more robust mechanism.  Both the `request` module commonly used in Node and jQuery's `ajax` method support passing body and/or query data as an object, including array data.

The existing `ajaxCapable` grade in `gpii-handlebars` builds the AJAX options (including data payload) by combining default request options and model data using transformation rules.  This gives the ability to pull variable data in cleanly, and does not suffer from the above problems.

Before [GPII-1587](https://issues.gpii.net/browse/GPII-1587) can be attempted, we need to at least outline an approach for this, as there are quite a number of existing use cases for the `ajaxCapable` grade that cannot be satisfied without this kind of mechanism.

I am just coming to terms with the existing grades, if this is something that can already be accomplished, point me at whatever examples and documentation would help explain how to represent arrays and optional variables.

        
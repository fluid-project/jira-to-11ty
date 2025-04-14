---json
{
  "title": "FLUID-5695",
  "summary": "Design of configuration for modelListeners is faulty: Need to support namespaces as well as multiple paths and segmented paths",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-06-20T16:28:21.365-0400",
  "updated": "2016-05-02T10:44:44.337-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5361/",
      "key": "FLUID-5361",
      "summary": "Model listeners notified by model relay applier do not respect listener priorities"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-02-04T22:13:45.862-0500",
      "body": "Namespaces and priorities for model listeners were delivered in the fix for <https://fluidproject.atlassian.net/browse/FLUID-5361#icft=FLUID-5361>. The remainder of the work will receive a dedicated fix.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-02-04T22:32:40.741-0500",
      "body": "Alternatives above are ambiguous - if we find that \"pathSpec\" (which we will just name \"path\", I think) is an array, how will we determine whether it is an array of path segments of an array of paths?\\\nPerhaps it would be best to just support \"paths\" and \"path\" as separate members.\n\nThe \"if you use path/paths, the key is a namespace\" idiom is a bit worrying. Imagine that if we have USER TOOLS, the old form will never be generated.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-05-02T10:44:44.305-0400",
      "body": "The infusion pull request <https://github.com/fluid-project/infusion/pull/671> was merged at 94fdce728416f1b38f0181c4fa32bcae347acdbd\n\nThe infusion-docs pull request <https://github.com/fluid-project/infusion-docs/pull/84> was merged at 9fed41658edc8bd560dce4f39a1611de75608d01&#x20;\n"
    }
  ]
}
---
The declarative ChangeApplier API supplies no scheme for listening to multiple paths with a single listener, nor for specifying these paths as an array of segments as is possible in many of the procedural APIs. There is also no facility for supplying namespaces for these listeners so that they can easily be overridden and removed.

Proposal:

Support a new entry in the RHS of a modelListener declaration named pathSpec. If this is present, we reinterpret the key as a namespace rather than as a path, if no namespace is supplied in the record.&#x20;

pathSpec can hold: i) an individual string matching the syntax that we used to support as modelListener keys, \
OR ii) an entry {context: \<string>, segs: Array} holding a fully parsed-out IoC reference (with "\*" supported as a path segment), OR iii) an array of entries such as i) or ii)

We will try to deprecate the old convention where LHS holds the path spec as soon as possible, and return modelListeners to a model like that for distributeOptions where the LHS key is expected to be a namespace only.

An explicit "namespace" entry in the RHS will supplant any namespace held as the key.

        
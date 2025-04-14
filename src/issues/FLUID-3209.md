---json
{
  "title": "FLUID-3209",
  "summary": "Create a new demo for the Renderer on the demo portal",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-09-24T16:33:44.000-0400",
  "updated": "2011-01-15T15:15:54.506-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-10-01T16:30:21.000-0400",
      "body": "A functional demo now exists, and is reasonably presentable.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-01T16:44:46.000-0400",
      "body": "I reviewed it, and have 2 thoughts \\\n1\\) I could spend time on the appearance\\\n2\\) the data file needs to be called renderer.js (not data.js) for the content of the data folder\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-01T17:19:18.000-0400",
      "body": "Reviewed, looks good.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-05T14:16:44.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-05T14:17:15.000-0400",
      "body": "Link to demo was never made on the portal page\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-06T11:21:55.000-0400",
      "body": "Added to the index file\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-06T11:57:09.000-0400",
      "body": "I've reviewed  the commits starting with 8191 and they are all fine. Colin had reviewed the previous commits to this issue.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-06T14:24:58.000-0400",
      "body": "Reviewed by Michelle\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T12:28:40.306-0500",
      "body": "Reopening these issues in order to add the democomponent.&#x20;\n"
    }
  ]
}
---
We need to create a simple, clear demonstration of the Renderer in action. Here's a thread from the mailing list about it:

Awesome! So here's what I'm thinking...

These current examples show all the possible ways one can use the Renderer--with rsf:ids, with cutpoints, data bound, and so on. But it doesn't give a user a clear picture of how they should start, and which techniques are recommended.

So, here are the general techniques that our demo should illustrate:

* Using cutpoints, not IDs in the markup
* Programmatic tree generation using fluid.transform
* A blend of data-bound and literal values

I think it should probably showcase a handful of Renderer components, including:

* UIBound for plain text
* UIContainer for repetitions
* UISelect for a drop down, checkboxes, or radio buttons

We should probably also make it simple enough that the user can see how the tree is composed, and the relationship between data, markup, and tree clearly without having to study the example in great depth.

I think your current demos probably provide a good structure for us to create a new demo with.

        
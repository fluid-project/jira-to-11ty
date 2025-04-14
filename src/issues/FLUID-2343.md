---json
{
  "title": "FLUID-2343",
  "summary": "that.locate(); appears to return the container if you pass it a key with a null value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Antranig Basman",
  "reporter": "Eli Cochran",
  "date": "2009-03-12T20:36:00.000-0400",
  "updated": "2011-02-22T16:27:50.109-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-03-17T17:39:18.000-0400",
      "body": "I added a test case at revision 6769 to verify the current DOM binder functionality in this case, but it appears to be correct - the correct way to express dependence on a possibly missing markup element, is to configure either the selector, or the markup which is attached to a particular key, not to erase the name of the key itself - a component developer should not become aware of whether a piece of markup is configured or not except through the return from the DOM binder. Calling the DOM binder with a null value as a key is not part of its API.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:50.107-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
In the Uploader, I attempted to attach an event to an *optional* element (in this case the Done button) using that.locate("doneButton") with the key doneButton assigned to null.&#x20;

I expected to get an error or an empty jQuery but instead got the container handed back to me.&#x20;

        
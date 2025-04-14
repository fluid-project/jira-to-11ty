---json
{
  "title": "FLUID-5157",
  "summary": "Message resolver lookup() doesn't accept single keys",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2013-09-27T13:48:00.805-0400",
  "updated": "2015-06-15T10:46:23.455-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The messageResolver component has two methods: lookup() and resolve(), both of which accept an array of keys. The resolve() function will also accept a single string key (calling fluid.makeArray() on it), but lookup() does not. Given that in many cases, lookup() will likely be used to retrieve a single key, it would be convenient if the function also accepted a single string key and array-ified it internally.

        
---json
{
  "title": "SJRK-118",
  "summary": "Consider combining arrayToString and combineTerms transforms",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T18:29:18.723-0400",
  "updated": "2018-06-12T15:58:54.254-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-117/",
      "key": "SJRK-117"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-12T15:09:42.194-0400",
      "body": "These two transform functions do very similar but distinct tasks.\n\narrayToString simply calls array.join() (docs here <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)>\n\nwhich will first attempt to convert the object to a string value, and then concats it to the end of the resulting string. This includes falsy values like \"\", and false.\n\ncombineTerms, on the other hand, takes into account a couple of extra parameters. a \"path\" can be specified so that inner elements of the top-level array items can be accessed and combined. Perhaps that's something more appropriately done by the map function... Anyway, it also checks each value before adding it and will only add it if it's truthy.\n\nIf we want to combine these two funcitons, then we need to add an extra parameter for specifying whether to omit values based on their truthiness.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-12T15:58:54.245-0400",
      "body": "The arrayToString transform function now has the body of the former combineTerms function, and the latter has been removed. All references to combineTerms have been updated to call arrayToString transform instead, and tests were updated. This is actually quite an improvement and test coverage automagically increased!\n"
    }
  ]
}
---
The two custom transforms "sjrk.storyTelling.transforms.arrayToString" and "sjrk.storyTelling.transforms.combineTerms" are very similar in function and purpose. Consider a way to combine them to make code DRYer.

        
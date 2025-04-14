---json
{
  "title": "SJRK-149",
  "summary": "combineDynamicValues in templateManager mishandles strings",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Gregor Moss",
  "date": "2018-06-07T14:53:10.511-0400",
  "updated": "2018-06-07T15:12:29.820-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-07T15:11:54.999-0400",
      "body": "Upon further reflection, this only occurs when a string is passed in directly as an argument. In this case, the value has no key by which to address it in a template, and so is not a recommended approach.\n\nI have adjusted the test to refer to two values in separate collections in order to test the combining, but it will no longer handle strings passed directly into it.\n"
    }
  ]
}
---
When the function sjrk.storyTelling.templateManager.combineDynamicValues is called by the templateManager's renderTemplates invoker, if a string is passed in as one of the arguments to the invoker then every character of the string will be added to the resulting collection individually.

I.e. if the arguments to the invoker include two strings with contents "test" and "string", the resulting collection will be:

```java
["t", "e", "s", "t", "s", "t", "r", "i", "n", "g"]
```

instead of the expected:

```java
["test", "string"]
```

 

        
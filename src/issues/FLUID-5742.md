---json
{
  "title": "FLUID-5742",
  "summary": "Dynamic components do not respond to typeName or gradeNames which are resolved from dynamic arguments",
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
  "date": "2015-08-13T07:36:44.896-0400",
  "updated": "2017-05-29T10:47:00.110-0400",
  "versions": [
    "1.9"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T10:15:47.051-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
"New Kettle" included the following definition for dynamic components:

```java
dynamicComponents: {
        request: {
            createOnEvent: "createRequest",
            type: "{arguments}.0.type",
            options: {
                gradeNames: "{arguments}.0.options.gradeNames"
            }
        }
    }
```

This failed since the framework was not prepared to consult the "local record" holding the special "arguments" context name during grade resolution. This issue also independently arose during work on gpii-express

        
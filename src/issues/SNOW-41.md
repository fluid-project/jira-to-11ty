---json
{
  "title": "SNOW-41",
  "summary": "Add the Hewlett and Floe logo to the footer",
  "tags": "SNOW",
  "project": {
    "key": "SNOW",
    "title": "Snow"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2019-03-08T10:54:12.319-0500",
  "updated": "2020-04-17T16:45:52.904-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Caren Watkins",
      "date": "2020-04-17T16:45:52.904-0400",
      "body": "Added Floe logo to the request April 17, 2020\n"
    }
  ]
}
---
Add the Hewlett logo to the footer.

This will require:

* getting the SVG logo
* adding the logo to the CSS
* updating the footer markup to use it.

Currently the footer markup looks like this (also the IDRC logo is gone, probably because the class is missing from the div?)

```java
<footer class="row snow-footer-logo">
 <div class="">
 <a href="http://idrc.ocadu.ca/" class="idrc-logo" title="Inclusive Design Research Centre"></a>
 </div>
 <div class=" ">
 <a class=" " title=" "></a>
 </div>
 <div class="footer-copy">
 SNOW is a project of the Inclusive Design Research Centre, funded by the Hewlett Foundation
 </div>
 </footer>
```

        
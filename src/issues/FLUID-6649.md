---json
{
  "title": "FLUID-6649",
  "summary": "CLONE - Renderer can corrupt tag nesting structure in some cases with branch containers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Helen",
  "date": "2021-07-04T21:01:14.904-0400",
  "updated": "2021-07-05T07:34:27.132-0400",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4322/",
      "key": "FLUID-4322",
      "summary": "Renderer can corrupt tag nesting structure in some cases with branch containers"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The following pastie: <http://pastie.org/2005216>&#x20;

```java
<div class="fl-progEnhance-enhanced fl-container-flex30">
<div class="d-uploader-queue" tabindex="0">
<div id="files:" class="d-uploader-file fl-col-flex2" tabindex="-1">
<div class="d-uploader-file-icon-container fl-col">
<div id="files:1" class="d-uploader-file fl-col-flex2" tabindex="-1">
<div class="d-uploader-file-icon-container fl-col">
<div id="files:2" class="d-uploader-file fl-col-flex2" tabindex="-1">
<div class="d-uploader-file-icon-container fl-col"> </div>
</div>
</div>
</div>
</div>
</div>
</div>
```

shows some markup which was obtained from the renderer during work on the Uploader. It should be impossible for such nesting-corrupted markup ever to be generated, we should look into the particular situation and characterise it, hopefully leading to a bug fix.

        
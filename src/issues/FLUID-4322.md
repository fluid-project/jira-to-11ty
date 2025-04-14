---json
{
  "title": "FLUID-4322",
  "summary": "Renderer can corrupt tag nesting structure in some cases with branch containers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-07-04T19:27:23.302-0400",
  "updated": "2021-08-08T13:48:59.812-0400",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6649/",
      "key": "FLUID-6649"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-08-08T13:48:59.805-0400",
      "body": "The old renderer will be retired in the Infusion 5.0 release and no further improvements will be made to it. The new renderer is incapable of this kind of corruption since its template representation always nests properly.\n"
    }
  ]
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

        
---json
{
  "title": "FLUID-6591",
  "summary": "Funny warning about circular dependency when Infusion starts up under node 14.x",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-01-18T09:23:01.493-0500",
  "updated": "2024-07-22T09:44:55.513-0400",
  "versions": [],
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
Reported in Fluid Technology on 15/1/21:

<https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$F2LoS0IY21w0PmNrfcMKe6IWxvUAWv5Z_BH985v1rDY?via=matrix.org>

```java
the-t-in-rtf: Any ideas about these, which I think are emitted by fluid-glob under node 14.x?
17:16:10.052: Registering module fluid-glob from path E:\Source\gits\covid-data-monitor\node_modules\fluid-glob (node:16516) Warning: Accessing non-existent property 'module' of module exports inside circular dependency
the-t-in-rtf
you beat me to it, I was going to ask a friend about your height.
they are not just in fluid-glob I think.
bosmon
They seem to get emitted some time between loading fluid-glob and starting a linting run
the-t-in-rtf
got two from fluid-express test runs
or three
bosmon
ok
Oh yes
I can get them from anything
the-t-in-rtf
yes, including the tests in infusion main
bosmon
Looks like it's emitted from the sniffing check in fluid.js
OK, looks like a 1-line fix
the-t-in-rtf
great.
It's nice that you can check it from the tests in Infusion itself.
bosmon
Replace infusionModule.module with ("module" in infusionModule)
the-t-in-rtf
just verified that both the browser and node tests throw it.
bosmon
Well, I didn't think of that : P
Instead I patched an Infusion loaded by some other random thing
Of course, there remains the issue of whether this leaves the self-deduping functional or not
But it's hard to imagine that it doesn't
```

        
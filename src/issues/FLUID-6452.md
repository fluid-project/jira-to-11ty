---json
{
  "title": "FLUID-6452",
  "summary": "Improve Infusion instance checking when logging fail for duplicate load",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Steven Githens",
  "date": "2020-01-31T14:03:05.443-0500",
  "updated": "2024-07-19T07:40:22.157-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6452/image-2020-01-31-10-53-48-022.png",
      "filename": "image-2020-01-31-10-53-48-022.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6452/image-2020-01-31-10-56-41-787.png",
      "filename": "image-2020-01-31-10-56-41-787.png"
    }
  ],
  "comments": []
}
---
I've ran in to a situation where infusion is possibly being included 2 times, yet it cannot report as such because \`global.fluid.module.modules\` does not exist.

fluid.js:

<!-- media: file ccd6bf00-53af-45f8-a770-e4fce962e870 -->

This is occurring when the gpii-handlebars renderer is trying to include it:

<https://github.com/GPII/gpii-handlebars/blob/master/src/js/common/renderer.js#L14>

<!-- media: file 27fd7531-0aae-4f56-ad94-73378cf31914 -->

This is occurring in an electron renderer browser process.  In these processes there is both a \`require\` that is made available for use, but you can also include javascript via the usual \<script/> tag to an external file (such as infusion).

\<script type="text/javascript" src="../../../node\_modules/infusion/dist/infusion-all.js">\</script>

I think it might be the availability of both these methods that is creating this situation, where the \`global.fluid\` check is assuming there is a modules property when there isn't.

Interestingly, I can work around this by monkeypatching out the \`require\` for the gpii-handlebars renderer such that it no longer tries to load infusion, as if it were in a web environment (which it sort of it).\
\<script>\
     var Handlebars = require("Handlebars");\
     var requireBackup = require;\
     require = undefined;\
\</script>\
\<script type="text/javascript" src="../../../node\_modules/gpii-handlebars/src/js/common/renderer.js">\</script>\
\<script>\
     require = requireBackup;\
\</script>\
 

 

 

 

 

 

        
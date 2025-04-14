---json
{
  "title": "FLUID-5624",
  "summary": "Error causes docpad to not build docs site on Windows",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2015-04-16T10:41:31.728-0400",
  "updated": "2020-09-14T13:14:05.793-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2020-09-14T13:14:05.782-0400",
      "body": "Can no longer reproduce. No longer an issue.\n"
    }
  ]
}
---
Seems like a path error is causing Docpad to not build and run on Windows.

Using Windows posh shell.

info: undefined 'undefined \\'6.69.2\\' \\'F:\\\\\\\Dropbox\\\\\\\IDRC\_Work\\\\\\\infusion-docs\\\\\\\node\_modules\\\\\\\docpad\\''\
notice: null\
info: null\
info: undefined 'ghpages, handlebars, highlightjs, marked'\
info: undefined 'static'\
info: undefined 'http://:::9778/' 'F:\\\Dropbox\\\IDRC\_Work\\\infusion-docs\
out'\
info: null\
error: null\
error: null\
Error: EPERM, operation not permitted 'F:\Dropbox\IDRC\_Work\infusion-docs\tmp-out'\
at Error (native)\
at Object.fs.renameSync (evalmachine.\<anonymous>:638:18)\
at Object.module.exports.events.writeAfter (F:\Dropbox\IDRC\_Work\infusion-docs\docpad.js:97:16)\
at ambi (F:\Dropbox\IDRC\_Work\infusion-docs\node\_modules\docpad\node\_modules\ambi\out\lib\ambi.js:57:27)\
at DocPad.\<anonymous> (F:\Dropbox\IDRC\_Work\infusion-docs\node\_modules\docpad\out\lib\docpad.js:975:25)\
at ambi (F:\Dropbox\IDRC\_Work\infusion-docs\node\_modules\docpad\node\_modules\ambi\out\lib\ambi.js:55:18)\
at Task.\<anonymous> (F:\Dropbox\IDRC\_Work\infusion-docs\node\_modules\docpad\node\_modules\event-emitter-grouped\out\lib\
\event-emitter-grouped.js:45:23)\
at ambi (F:\Dropbox\IDRC\_Work\infusion-docs\node\_modules\docpad\node\_modules\ambi\out\lib\ambi.js:55:18)\
at Domain.fire (F:\Dropbox\IDRC\_Work\infusion-docs\node\_modules\docpad\node\_modules\taskgroup\out\lib\taskgroup.js:384\
:27)\
at Domain.run (domain.js:197:16)\
at Task.fire (F:\Dropbox\IDRC\_Work\infusion-docs\node\_modules\docpad\node\_modules\taskgroup\out\lib\taskgroup.js:398:2\
5\)\
at Immediate.\_onImmediate (F:\Dropbox\IDRC\_Work\infusion-docs\node\_modules\docpad\node\_modules\taskgroup\out\lib\taskg\
roup.js:414:26)\
at processImmediate \[as \_immediateCallback] (timers.js:358:17)\
error: null\
info: null

        
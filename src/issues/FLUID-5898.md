---json
{
  "title": "FLUID-5898",
  "summary": "Fast expansion path has inconsistent semantics for pathed references mismatching context",
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
  "date": "2016-05-02T22:42:33.529-0400",
  "updated": "2016-05-03T13:43:06.327-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-05-03T13:43:01.123-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/708> has been merged into the project repo master branch at 5c40a9c5bbc80080b97378e32a72e3ba03b1e2e7\n"
    }
  ]
}
---
"Since the beginning of time", the IoC reference resolution system has triggered a hard failure when resolving a reference with a nonempty path whose context doesn't match. Unfortunately the new "fast path" implemented for FLUID-5249, <https://fluidproject.atlassian.net/browse/FLUID-5796#icft=FLUID-5796> uses inconsistent semantics and simply returns "undefined" for some resolution cases. For example, the following listener

```javascript
{
                    // TODO: Replace this with some progressive enhancement action.
                    priority: "last",
                    funcName: "flock.webAudio.outputManager.iOSStart",
                    args: [
                        "{that}",
                        "{audioSystem}.context",
                        "{scriptProcessor}.node", // Resolves to undefined, doesn't error.
                    ]
                }
```

is capable of delivering `undefined` as the 3rd argument where {scriptProcessor} fails to match as a context.

        
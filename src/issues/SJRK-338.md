---json
{
  "title": "SJRK-338",
  "summary": "Load Normalize.css from local files instead of Cloudflare",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-04-14T16:59:31.596-0400",
  "updated": "2020-04-14T17:00:24.512-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-152/",
      "key": "SJRK-152"
    }
  ],
  "attachments": [],
  "comments": []
}
---
In Chrome, loading the site will generate the following warning in the console:

```
A cookie associated with a cross-site resource at http://cloudflare.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.
```

This is because we're linking externally to load in Normalize.css:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css">
```

Since this is linking a pinned version anyway, consider storing this file with the code (assuming Normalize's licence allows this) instead of loading it in remotely. This may also dovetail nicely with the work described in SJRK-152.

        
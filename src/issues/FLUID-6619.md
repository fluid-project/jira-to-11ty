---json
{
  "title": "FLUID-6619",
  "summary": "Use of aria-label on label element prevents VoiceOver from properly announcing selected contrast theme in Edge",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Ned Zimmerman",
  "date": "2021-05-12T09:14:32.972-0400",
  "updated": "2021-05-12T16:00:36.100-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-05-12T16:00:31.792-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1048> )into the project repo at 75c3c7e12a96f0ed168e8e2c9691ce5b061309c3\n"
    }
  ]
}
---
In UI Options, the contrast theme buttons have labels marked up as follows:

```html
<label for="themeRow::themeInput" class="flc-prefsEditor-theme-label fl-prefsEditor-themePicker-defaultThemeLabel fl-theme-prefsEditor-default" id="themeRow::themeLabel" aria-label="Default">
  <span class="fl-preview-A" aria-hidden="true"></span>
  <span class="fl-hidden-accessible">Default</span>
  <div class="fl-crossout" aria-hidden="true"></div>
</label>
```

In Edge (macOS 11), the use of the `aria-label` attribute on a `<label>` element prevents VoiceOver from announcing the label text (both the inner text of the `<label>` and the `aria-label` are ignored).

This means that when navigating through the list of contrast themes, a VoiceOver user will only hear *selected, radio button, 1 of 9* and will not have any information about which theme is selected.

        
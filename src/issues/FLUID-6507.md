---json
{
  "title": "FLUID-6507",
  "summary": "Pressing \"Enter\" breaks UIO when there's only one text input field presented in UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2020-05-28T20:29:31.576-0400",
  "updated": "2020-06-03T09:35:47.431-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-06-03T09:35:47.431-0400",
      "body": "A couple things to keep in mind when addressing this issue:\n\n* A form submission may be required for saving the preferences depending on how the integrator chooses to store the preferences\n* The preference editor may not be contained inside of a form element.\n"
    }
  ]
}
---
These steps use [the new refactored UIO branch](https://github.com/amb26/infusion/blob/FLUID-6145) as the example:

1\. Open [demos/prefsFramework/index.html](https://github.com/amb26/infusion/blob/FLUID-6145/demos/prefsFramework/index.html) in an editor;\
2\. In the code where fluid.uiOptions is instantiated, comment out line 105, 110, 111 to remove these panels: line spacing, letter spacing, word spacing. This leaves only one text input field from "text size" panel in UIO;\
3\. Start the demo at "demos/prefsFramework" in a browser;\
4\. Open UIO;\
5\. click into "text size" input box;\
6\. doesn't matter to change or not change the value;\
7\. hit "enter" key.

All panels in UIO disappear and leave a grey blank page.

Then,

1\. Click "hide preferences", UIO closes;\
2\. Click "show preferences", UIO doesn't open and is broken. In firefox or safari, this error is thrown in the dev tool console:

```java
Ignoring call to invoker updateModel of component  
Object { typeName: "fluid.uiEnhancer", id: "1xjwwss1-439", lifecycleStatus: "destroyed", destroy: fabricateDestroyMethod()
, options: {…}, events: {…}, fluid_prefs_enactor_tableOfContents: {…}, fluid_prefs_enactor_enhanceInputs: {…}, fluid_prefs_enactor_contrast: {…}, fluid_prefs_enactor_textFont: {…}, … }
  which has been destroyed
```

Expected behavior: The changed line space value applies to the website and UIO stays intact.

After some investigation, it appears that the problem is that an [Implicit Submission](https://www.w3.org/TR/html53/sec-forms.html#implicit-submission) is occurring. In this case, it is happening because there is only 1 text input in the form.

This bug was initially found with the WeCount website development. See [WeCount issue ticket](https://github.com/inclusive-design/wecount.inclusivedesign.ca/issues/248)

        
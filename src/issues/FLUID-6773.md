---json
{
  "title": "FLUID-6773",
  "summary": "User has option to style links differently",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Mark",
  "date": "2023-07-26T17:39:45.382-0400",
  "updated": "2024-07-17T07:50:19.526-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2023-07-31T06:38:10.583-0400",
      "body": "@@Mark thanks for your suggestion. Some of this can be accomplished with the “Enhanced Inputs” options. It will also affect things like buttons though. This will make the links larger, bold, and underlined.\n\nAlso, if you are on a recent version of UI Options you can use the base style sheets along with the CSS custom properties to define your own behaviour when preferences are enabled.&#x20;\n\n(See: <https://github.com/fluid-project/infusion/blob/b9a1432e8f28c80b2eb7800b05a1177247046039/src/framework/preferences/css/sass/README.md> )\n\n@@Uttara Ghodke when you have chance, you may want to look into this suggestion in regards to the redesign of UIO.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2023-07-31T08:23:42.078-0400",
      "body": "We should also keep an eye on the work being done for [WCAG 2.1: (1.3.6) Identify Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html).\n"
    }
  ]
}
---
Can users have the option to style links differently?

* bold
* underline
* underline with line spacing large

This aligns with advice around avoiding underlines for dyslexic users.



This issue is raised and supported by myself, an academic librarianm and colleague CJ Nyssen.&#x20;

        
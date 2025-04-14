---json
{
  "title": "FLUID-6254",
  "summary": "Mobile (small screen) UIO doesn't shift focus to opened panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2018-03-01T11:58:44.066-0500",
  "updated": "2019-01-31T13:33:22.304-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The mobile (small screen) view of uio/prefs framework doesn't shift focus if the panels are traversed via the arrow navigation buttons or is opened to a panel other than the first one on initial load.

 

Steps to reproduce:

1. Open the UIO Demo
2. On a desktop adjust the page width to show the mobile (small screen) view.
3. Open the prefs editor, and navigate the panels with the arrows at the top
4. Using the keyboard hit the tab key to place focus on an adjuster
5. Notice that the focus is put back on the first panel.
6. Move to another panel 
7. Reload the page and open the prefs editor again
8. Using the keyboard hit the tab key to place focus on an adjuster
9. Notice that the focus is put back on the first panel

        
---json
{
  "title": "FLUID-368",
  "summary": "Finalize technical implementation of OSDPL navigation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-03-17T20:34:24.000-0400",
  "updated": "2013-04-11T17:45:51.416-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-05-13T12:54:42.000-0400",
      "body": "iteration10\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-09T13:16:35.000-0400",
      "body": "A problem is that free-tagged Taxonomy terms are not being displayed in the site navigation. (i.e. a user adds a new DP category, but it doesn't appear in the category menu on the left sidebar).\n\nI've tried different modules and did some research and it appears that taxonomy terms added this way are not handled by Taxonomy Menu. The admin has to manually add vocabulary to the Taxonomy and then update Taxonomy Menu.\n\nNot ideal.\n\nIs there another way?\n\nPerhaps we should examine alternative methods like tagging, categorization, and searching?\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-09T20:42:46.000-0400",
      "body": "I actually don't think we want free-tagged terms to display in the site navigation--we'd have too many category links that way. The left nav is intended to be a navigation scheme created by us (sort of an 'expert' taxonomy), which hopefully will be a good entry point into the library. Tags will be another entry point, and they **might** someday replace the left nav, but I'm not sure how likely that is.\n\nWhat I was really looking for was to have links to the **patterns** automatically added to the left nav as they were entered (under whatever category was chosen). I thought that might be possible with taxonomy menu, as it automatically creates a menu based on a taxonomy/category. However, it unfortunately it doesn't automatically add the child nodes (e.g. patterns) as menu items as I'd hoped.&#x20;\n\nHowever, today Jonathan and I decided to, for the moment, remove this as a requirement because we don't necessarily know yet what the workflow for entering patterns will be. Perhaps it will make sense for them to be added as a menu item by an administrator (with ostensibly more experience with the system) later when the pattern is \"approved.\" (One idea we had was to implement 'workflow' by not allowing regular users to check the \"Published\" checkbox when entering a pattern. Then the administrator could both \"publish\" the pattern and add a menu item for it at the same time.)\n\nToday I added menu items for all the patterns in the system so we have the proper links to all the patterns. Doing this is definitely is tricky, as first you have to **find** the place to enter a menu item at the bottom, hidden in \"Menu settings.\" Then if you forget to enter a title and just choose a parent item, Drupal saves without doing anything--it doesn't generate an error to tell you you've made a mistake! I wondered several times why my menu items weren't being created...\n\nAdditionally, I looked at DHTML Menu a bit. I believe this is for the most part an unusable module, as you must double-click on the top element in a menu (e.g. Administer) to open it; otherwise, clicking on it just opens the menu's children (and the page doesn't change--you don't get to \"Administer\"). No user will be able to discover this without training (when DTHML menu was on, I thought I'd lost access to the Administer menu and made some other mis-judgements as well) and will likely find the interaction confusing, so unless we don't want users to access the top-level item in a menu item for some reason (which is possible), I strongly suggest we don't use it.\n\nWe are resolving this bug because we think we've found an adequate work-around (e.g. entering the menu item for each pattern manually) for now, but things may change if we want patterns to be dynamically added to the navigation as they are entered.\n"
    }
  ]
}
---
Though the navigational elements may change, we need to select a technical implementation for the navigation. We are currently using taxonomy-menu, but we should make sure this is the best solution and creates the type of menu we want. This doesn't allow for auto-generation of subnavigation for pattern pages (e.g. you have to enter a menu item for each pattern as you enter or edit the pattern), and we need to decide if that is what we want. There may be other modules which serve our needs better. DHTML Menus was another menu system Jonathan investigated.

        
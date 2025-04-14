---json
{
  "title": "ENGAGE-286",
  "summary": "Localization: ensure all components load strings in the correct language ",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-25T10:43:34.000-0500",
  "updated": "2010-02-08T17:41:12.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-286/ENGAGE-286(exhibitionBrowse service update).patch.txt",
      "filename": "ENGAGE-286(exhibitionBrowse service update).patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-01-25T17:17:37.000-0500",
      "body": "\\=============================\\\nHere is a what needs to be localized. \\\n\\==============================\n\nExhibition Browse\\\n\\------------------------\n\\*\\*\\* Problem running in standalone, see <https://fluidproject.atlassian.net/browse/ENGAGE-324#icft=ENGAGE-324> & <https://fluidproject.atlassian.net/browse/ENGAGE-319#icft=ENGAGE-319> \\*\\*\\*\n\n* Title\n* Exhibition Descriptions ?\n* Upcoming Exhibitions Header\n\nArtifact View\n\n\\-----------------\n\n\n* Media cabinet header\n* Comments cabinet header\n* related artifacts ?\n  * for all cabinet headers there is a variant using show and hide\n\nMy Collection\n\n\\-------------------\n\\\n???\n\n\\====================================\\\nHere is the list of finished Pages/Components\\\n\\====================================\n\nHome Page\\\n\\----------------\n\n\n* Title\n* image captions\n\nExhibition About / Upcoming\n\n\\--------------------------------------\n\n\n* Exhibition Display Date ?&#x20;\n\nExhibition Main\n\n\\---------------------\n\n\n* Read More link\n* View the full catalogue link\n* Read all comments\n* catalogue header\n* guessbook header\n* exhibition display date ?\n\nCatalogue View\n\n\\---------------------\n\n\n* View all Objects\n* View all in ...&#x20;\n\nCatalogue Browse\n\n\\-------------------------\n\n\n* Title&#x20;\n* Viewing \"...\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:15:53.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-02T16:46:38.000-0500",
      "body": "The <https://fluidproject.atlassian.net/browse/ENGAGE-286#icft=ENGAGE-286>(exhibitionBrowse service update).patch.txt are the updates needed for the exhibitionBrowse.js file to comply with the updates to the Browse component and to look for the message bundle in a different location. Just waiting on Antranig to make some changes to the exhibitionBrowse.js file before committing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:51:32.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-08T17:41:12.000-0500",
      "body": "For the most part this is completed. Specific jiras have been filed for the remaining tasks&#x20;\n\n<https://fluidproject.atlassian.net/browse/ENGAGE-348#icft=ENGAGE-348>, <https://fluidproject.atlassian.net/browse/ENGAGE-352#icft=ENGAGE-352>, <https://fluidproject.atlassian.net/browse/ENGAGE-354#icft=ENGAGE-354>, <https://fluidproject.atlassian.net/browse/ENGAGE-355#icft=ENGAGE-355>, <https://fluidproject.atlassian.net/browse/ENGAGE-356#icft=ENGAGE-356>\n"
    }
  ]
}
---
At the moment, a number of component hard-bake English string directly in the component's markup. We should use the facilities of the Renderer, along with the ability to send data to components from the server upon instantiation. This will ensure that all components can be localized in any language.

        
---json
{
  "title": "FLUID-2977",
  "summary": "Refactor postProcessor.php to operate on new posted data",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-07-02T12:45:15.000-0400",
  "updated": "2009-08-24T11:19:27.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-07-02T12:45:57.000-0400",
      "body": "The new data is of the format: \\\n{\"groupNames\":\\[\"Infusion Framework Modules\",\"Infusion Component Modules\",\"Third Party Modules\"],\"groupDescriptions\":\\[\"Framework Description\",\"Infusion Component Modules Description\",\"Third Party Modules Descriptoin\"],\"groupModules\":\\[\\[\"framework\",\"fss\",\"fssReset\",\"fssLayout\",\"fssText\",\"fssThemes\",\"renderer\"],\\[\"inlineEdit\",\"pager\",\"progress\",\"reorderer\",\"tableOfContents\",\"uiOptions\",\"undo\",\"uploader\"],\\[\"fastXmlPull\",\"json\",\"jQuery\",\"jQueryUICore\",\"jQueryUIWidgets\",\"jQueryDelegatePlugin\",\"jQueryTooltipPlugin\",\"jQuerybgiframePlugin\",\"swfupload\",\"swfobject\"]],\"moduleValues\":\\[\"framework\",\"fss\",\"fssReset\",\"fssLayout\",\"fssText\",\"fssThemes\",\"renderer\",\"inlineEdit\",\"pager\",\"progress\",\"reorderer\",\"tableOfContents\",\"uiOptions\",\"undo\",\"uploader\",\"fastXmlPull\",\"json\",\"jQuery\",\"jQueryUICore\",\"jQueryUIWidgets\",\"jQueryDelegatePlugin\",\"jQueryTooltipPlugin\",\"jQuerybgiframePlugin\",\"swfupload\",\"swfobject\"],\"moduleNames\":\\[\"Fluid Infusion Framework\",\"Fluid Skinning System\",\"Reset\",\"Layout\",\"Text\",\"Themes\",\"Renderer\",\"Inline Edit\",\"Pager\",\"Progress\",\"Reorderer\",\"Table of Contents\",\"User Interface Options\",\"Undo\",\"Uploader\",\"fastXmlPull\",\"JSON\",\"jQuery\",\"jQuery UI Core\",\"jQuery UI Widgets\",\"jQuery Delegate Plugin\",\"jQuery Tooltip Plugin\",\"jQuery bgiframe Plugin\",\"SWFUpload\",\"swfobject\"],\"moduleDescriptions\":\\[\"The core of the Fluid Infusion framework. Required for all Fluid components\",\"A modular CSS framework, which allows you to add, remove, and mix classes to get the desired effect.\",\"A css reset file based on the YUI reset.\",\"Provides css classes for layout and convenience classes for widgets.\",\"Classes for text, headers, spacing and sizes.\",\"Colour schemes for basic markup and widgets.\",\"Allows users to create user interface templates in pure HTML, and render the pages entirely on the client side.\",\"Allows a user to do quick edits to simple text directly on a web page. \",\"Allows users to break up long lists of items into separate pages.\",\"A linear progress display.\",\"enables users to directly re-arrange content on the page.\",\"Constructs and displays a formatted list of links to all headers in a document.\",\"Transforms the presentation of the user interface and content resources so that they are personalized to an individual user's needs.\",\"Provides undo support for any component that bears a model.\",\"Allows users to upload files.\",\"A fast xml pull parser.\",\"Javascript lightweight data-interchange format.\",\"jQuery javascript library core.\",\"The core of jQuery UI, required for all jQuery UI interactions and widgets.\",\"Full-featured jQuery UI Controls - each has a range of options and is fully themeable.\",\"Used to simulate portable bubbling focus event\",\"Allows tooltip customization.\",\"Used to handle zindex issues in IE6.\",\"SWFUpload is a small JavaScript/Flash library featuring the great upload capabilities of Flash and the accessibility and ease of HTML/CSS.\",\"Embed Flash content into html.\"],\"moduleDependencies\":\\[\\[\"jQuery\",\"jQueryUICore\",\"jQueryDelegatePlugin\"],\\[\"fssReset\",\"fssLayout\",\"fssText\",\"fssThemes\"],\\[],\\[],\\[],\\[],\\[\"jQuery\",\"framework\",\"fastXmlPull\"],\\[\"jQuery\",\"jQueryTooltipPlugin\",\"framework\",\"undo\"],\\[\"jQuery\",\"jQueryTooltipPlugin\",\"jQuerybgiframePlugin\",\"framework\",\"renderer\"],\\[\"jQuery\",\"jQueryUICore\",\"framework\"],\\[\"jQuery\",\"jQueryUICore\",\"jQueryUIWidgets\",\"framework\"],\\[\"jQuery\",\"framework\",\"renderer\"],\\[\"fss\",\"jQuery\",\"jQueryUICore\",\"framework\",\"renderer\",\"jQueryUIWidgets\",\"tableOfContents\",\"json\"],\\[\"jQuery\",\"framework\"],\\[\"jQuery\",\"jQueryUICore\",\"framework\",\"swfobject\",\"swfupload\",\"progress\"],\\[],\\[],\\[],\\[\"jQuery\"],\\[\"jQuery\",\"jQueryUICore\"],\\[\"jQuery\"],\\[\"jQuery\",\"jQueryUICore\"],\\[\"jQuery\",\"jQueryUICore\"],\\[],\\[]],\"moduleSelections\":\\[\"fss\",\"fssReset\",\"fssLayout\",\"fssText\",\"fssThemes\"],\"selectionValues\":\\[\"minified\",\"source\"],\"selectionNames\":\\[\"Minified\",\"Source\"],\"selectionChoice\":\\[\"minified\"]}\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-02T12:48:24.000-0400",
      "body": "The relevant fields to be posted are moduleSelections and selectionChoice.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-08T11:45:38.000-0400",
      "body": "Again, a revision to the format:\\\n$\\_POST\\[\"model\"] = '{\"typeSelections\":\"minified\",\"moduleSelections\":\\[\"framework\",\"inlineEdit\",\"pager\",\"undo\",\"jQuery\",\"jQueryUICore\",\"jQueryDelegatePlugin\",\"jQueryTooltipPlugin\",\"jQuerybgiframePlugin\",\"renderer\",\"fastXmlPull\"]}';\\\nwith relevant fields typeSelections and moduleSelections.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-17T09:45:09.000-0400",
      "body": "This has been completed and reviewed\n"
    }
  ]
}
---

        
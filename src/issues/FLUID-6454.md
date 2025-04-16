---json
{
  "title": "FLUID-6454",
  "summary": "Remove title attribute usage from pager",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Reopened",
  "reporter": "Ned Zimmerman",
  "date": "2020-02-06T16:00:14.638-0500",
  "updated": "2022-02-03T04:43:04.306-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-02-10T07:58:40.209-0500",
      "body": "Ned Zimmerman could you please provide some more information about the issue reported here. For example some context of why the title attribute shouldn't be used, and potential alternatives. Or maybe what issue the title attribute is causing. \n\nAlso I did a quick look at this demo ( <https://build.fluidproject.org/infusion/demos/pager/> ) and only noticed title attributes on the sortable headers. Are those the ones that you are referring to, or are there other examples? \n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-02-10T10:37:59.207-0500",
      "body": "Jonathan showed me the pager last week. There's a title attribute on the \"Previous\" link and the \"Next\" link. The issue here is that the link has accessible text that will result in screen readers announcing previous twice (e.g. \"link, Previous, Previous page\" in VoiceOver). My understanding is that it's not recommended that the title attribute be used on links because of inconsistent browser support and the potential for duplicate content being announced by screen readers; my instinct would be that if the goal is to ensure that \"Previous page\" is read by screen readers, then page could be added as part of the link text but wrapped in a visually-hidden span.\n\nReference from MDN: <https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title#Accessibility_concerns>\n"
    },
    {
      "author": "Sachin Chopra",
      "date": "2020-03-19T03:19:04.171-0400",
      "body": "It's interesting to note that only the top page navbar on <https://build.fluidproject.org/infusion/demos/pager/> has the title attribute. The lower page navigation bar has no title attribute assigned.\n\nShould the title attribute be removed just like it is in the lower page navbar. ?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-05-15T11:09:30.807-0400",
      "body": "I can confirm that the issue occurs using NVDA on Windows 10 Pro (1909). Removing the \"title\" attribute does remove the duplication, but now the screen reader announces these links as \"Less previous link\" and \"Next greater link\".\n\nMy recommendation is to use the \"aria-label\" attribute to customize how these are read out, rather than \"title\". The W3C seems to recommend this approach, as well, though it draws a distinction between using \"aria-label\" and \"aria-labelledby\". More info here: <https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8.html>\n\nThis may be for a separate Jira (it may already be one), but I also noticed that NVDA announces the unordered list as \"List with three items\", though there are clearly more than three items on the \"list\", as one of those items is itself a list.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-05-19T13:47:12.475-0400",
      "body": "In looking into this, it doesn't appear that the component actually sets the text for the previous and next buttons. It is just expecting to bind events to them for navigating the pages. ( <https://github.com/fluid-project/infusion/blob/master/src/components/pager/js/Pager.js#L274-L302> ). The particular case mentioned here is actually an issue with the demo ( <https://github.com/fluid-project/infusion/blob/master/demos/pager/index.html#L65> ). \n\nThere are a few things to consider here:\n\n1. Should the component actually handle the rendering and/or text of the markup\n2. What solution to use\n\nIn the long term, I think we should consider moving some logic into the component, to ensure it's accessibility. However, this won't necessarily affect the markup requirements too much. I think in the short term we should address the problem in the demo, and then for the future decide if we want to add more functionality to the component.\n\nTo address the issues in the demo I think there are various valid approaches. Here are a few examples:\n\n1. replace the `title` attribute with `aria-label` as Gregor Moss mentioned.\n2. use the visually hidden span approach that Ned Zimmerman mentioned. You can use the `.fl-hidden-accessible` class for this ( see: <https://github.com/fluid-project/infusion/blob/d33f91961f246c638e333be6b7cddce8fc35e687/src/framework/core/css/fluid.css#L43-L53> )\n3. Not worry about calling it \"previous page\" or \"next page\". I think previous and next are probably enough. In that case you'd probably want to use {{::before and }}`::after` pseudo elements to add the \"<\" and \">\" respectively, so that they aren't read by the screen reader. And removing the `title` attribute as well.\n\nI'd say my preference, at least for the time being, is option 3. Mostly due to its simplicity, but am open to other suggestions. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-05-20T09:06:01.348-0400",
      "body": "On testing with Option 3 from above, I've found that, at least, Safari and VoiceOver are announcing the pseudo elements now, or at lest in this case where the element is contained within the link. One option is to use `aria-hidden=\"true\"` on the span containing the pseudo element, assuming the actual text is in a different element. See: <https://www.w3.org/TR/wai-aria-1.1/#aria-hidden>\n\nThe spec does note that presenting different text visually and to an AT may cause some problems for Voice Controlled ATs or for spoken directions from one person to another. I think the latter is less of an issue in this case. The former, I'm not sure about and may depend on the voice control system's flexibility for interpreting similar names. That leads me to think that we should not include \"page\" in the name.\n\nSo to revise my above suggestions:\n\n1. same, but just call it \"previous\" and \"next\"\n2. same, but just call it \"previous\" and \"next\"\n3. same but use {{aria-hidden=\"true\"}}on a separate span for the \"<\" and \">\", and it doesn't have to be a pseudo element any more, it can just be plain text in the span.\n4. use an icon for the \"<\" and \">\" symbols. The exact approach may depend on the how the icon is implemented. It seems a bit complex for this particular demo, but may be the approach that one would actually want to take if implementing it on an actual site.\n\n \n\nWe should test whichever approach is chosen with multiple ATs.\n"
    }
  ]
}
---
The pager component currently makes heavy use of the 'title' attribute on links. This should probably be removed.

        
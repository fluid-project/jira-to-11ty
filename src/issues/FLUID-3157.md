---json
{
  "title": "FLUID-3157",
  "summary": "add complex accessiblity features to Builder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-08T09:59:24.000-0400",
  "updated": "2009-10-05T17:21:21.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3157/FLUID-3157_object_not_array.txt",
      "filename": "FLUID-3157_object_not_array.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-21T09:55:41.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-24T13:50:39.000-0400",
      "body": "Added a live region to manage the checkbox announcing.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-30T14:29:54.000-0400",
      "body": "This one is great, but not quite ready for release. Let's move the ARIA roles and properties out of the HTML file and put into JavaScript.\n\nExample of Aria using js.\\\n<http://www.slideshare.net/ajaxexperience2009/colin-clark-accessible-u-is-with-j-query-and-infusion1>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-30T14:32:23.000-0400",
      "body": "We should also move the ARIA-related logic out of builder.js into CustomBuilder.js, and ensure that it's integrated fully into the component, not outside it.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-30T14:34:35.000-0400",
      "body": "Also remove spaces in title = \"Check all Modules\" (around equals).\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-30T14:34:58.000-0400",
      "body": "Reopening to address issues which came up in review\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-30T15:25:51.000-0400",
      "body": "I wonder if it might make sense for your getNameString() code to change slightly\\\n\\[13:52:41 EDT(-0400)] \\<colinclark> I notice that you return \"\" if there are no modules selected\\\n\\[13:52:53 EDT(-0400)] \\<colinclark> but then in another method you check if it's \"\" and then reset it to \"none\"\\\n\\[13:53:15 EDT(-0400)] \\<colinclark> Why not actually start getNameString() by explicitly checking for no selections and returning the string \"none\"\\\n\\[13:53:35 EDT(-0400)] \\<colinclark> And then you just need to blast the string directly into the DOM\\\n\\[13:53:59 EDT(-0400)] \\<colinclark> Also, this line here: jQuery(\"#modulesSelected\").html(\"\\<p>Modules Selected: \" + modulesSelected + \"\\</p>\");\\\n\\[13:54:09 EDT(-0400)] \\<colinclark> line 90 of builder.js\\\n\\[13:54:24 EDT(-0400)] \\<laurel> yup\\\n\\[13:54:30 EDT(-0400)] \\<colinclark> I wonder if there's a way to do this without outputting the HTML directly\\\n\\[13:54:57 EDT(-0400)] \\<colinclark> laurel: the last issue about outputting HTML directly is a post-1.1.2 fix\\\n\\[13:55:13 EDT(-0400)] \\<laurel> ok\\\n\\[13:55:18 EDT(-0400)] \\<colinclark> but i wanted to mention it while I'm looking at the code\\\n\\[13:55:37 EDT(-0400)] \\<colinclark> you should feel free to just grab this IRC transcript and dump it into the comments of the relevant JIRA issues (that's what I usually do)\\\n\\[13:55:42 EDT(-0400)] \\<laurel> still getting the hang of a new programming paradigm\\\n\\[13:56:11 EDT(-0400)] \\<colinclark> Oh!\\\n\\[13:56:19 EDT(-0400)] \\<colinclark> And I just found a funny little bug\\\n\\[13:56:24 EDT(-0400)] \\<colinclark> Sorry to lay all these on you at once\\\n\\[13:56:39 EDT(-0400)] \\<colinclark> you have a function in CustomBuilder.js that is very well-named\\\n\\[13:56:41 EDT(-0400)] \\<colinclark> createModuleNamesArray\\\n\\[13:56:55 EDT(-0400)] \\<laurel> one by one wouldn't really be useful\\\n\\[13:57:00 EDT(-0400)] \\<colinclark> And in it, there's a really funny statement\\\n\\[13:57:03 EDT(-0400)] \\<colinclark> var array = {};\\\n\\[13:57:44 EDT(-0400)] \\<colinclark> So maybe it should be an object, maybe an array\\\n\\[13:58:07 EDT(-0400)] \\<colinclark> I guess it depends on what moduleValue actually is.\\\n\\[13:58:39 EDT(-0400)] \\<colinclark> And I think that's it for <https://fluidproject.atlassian.net/browse/FLUID-3157#icft=FLUID-3157>\\\n\\[13:58:48 EDT(-0400)] \\<colinclark> I'll make a quick note on the JIRA that it needs a bit more baking\\\n\\[14:01:23 EDT(-0400)] \\<colinclark> laurel: One more issue... let's move the ARIA-related code from builder.js into CustomBuild.js\\\n\\[14:01:32 EDT(-0400)] \\<colinclark> It should be integrated into the component, not living outside of it\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-02T14:20:06.000-0400",
      "body": "I'm in the middle of reviewing this, but I think there might be a problem with rev. 8182 for the JS file. Why use an array as a hash when you were using an object (which seems more appropriate)?\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-02T16:55:00.000-0400",
      "body": "I reviewed up to revision 8195. It seems good, with the assumption that more work is being done re: revision 8182 and ensuring the loops over objects are done properly.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-02T16:59:31.000-0400",
      "body": "I created a patch for this rather than checking it in. If we have time for someone to review this properly then it can be checked in if Jess and Justin say yes.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-05T16:33:27.000-0400",
      "body": "I reviewed this patch and it looks fine\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-05T17:21:21.000-0400",
      "body": "as per comment above\n"
    }
  ]
}
---
When a check box is checked, there should be a way to know aurally that dependencies are highlighted

For checkall and uncheckall  - give more meaningful title to reset button; \
upon reset-select, need aural confirmation ("no modules selected")

        
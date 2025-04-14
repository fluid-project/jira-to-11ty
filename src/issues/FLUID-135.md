---json
{
  "title": "FLUID-135",
  "summary": "Lightbox and Gallery CSS load at the top of the HEAD and in the wrong order",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Former user",
  "reporter": "Eli Cochran",
  "date": "2007-11-30T17:23:26.000-0500",
  "updated": "2009-05-05T08:59:06.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2007-11-30T17:24:55.000-0500",
      "body": "I'll add this bug to JIRA as well for the Image Gallery since it's not clear where it should be fixed.&#x20;\n\nAnd there is a philosophical question here since which ever CSS that gets loaded last will have the power to make changes to the other. Should components take precedence or should the tool using the component?\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-03-05T15:14:46.000-0500",
      "body": "Ray expressed some interest in working on this. Or at least filing it as bug with RSF.&#x20;\n"
    },
    {
      "author": "Former user",
      "date": "2008-05-27T12:01:18.000-0400",
      "body": "Just as a small update, I haven't done anything on this yet because I haven't yet seen the problem in our Gallery 2 deployments. Could be that it's been fixed in RSF or that we're just not triggering it – I have to make a little time to look into the question.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-05T08:59:06.000-0400",
      "body": "We no longer use the image gallery as an example. Also, from the comments it appears that the issue may have been fixed.\n"
    }
  ]
}
---
The CSS files for Gallery (images.css) and Lightbox (Lightbox.css) load at the very top of the \<HEAD> tag for the iFrame before everything else. \
Issues:

* They both load before the tool.css and toolbase.css which means that they cannot override the style declarations in those files
* images.css loads before Lightbox.css which means that images.css cannot override the styles in Lightbox.css

\[Additionally the first thing that should load in a HEAD tag is a char-set declaration but that's not really pertinent to this bug.]

        
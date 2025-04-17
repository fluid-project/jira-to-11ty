---json
{
  "title": "FLUID-6739",
  "summary": "Provide information about what the UIO preference panel and adjusters do",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2022-06-13T09:03:55.535-0400",
  "updated": "2024-12-09T13:37:04.085-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6739/Screenshot 2024-10-07 at 9.49.37 AM.png",
      "filename": "Screenshot 2024-10-07 at 9.49.37 AM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6739/Screenshot 2024-10-08 at 9.45.04 AM.png",
      "filename": "Screenshot 2024-10-08 at 9.45.04 AM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6739/Screenshot 2024-10-09 at 10.53.33 AM.png",
      "filename": "Screenshot 2024-10-09 at 10.53.33 AM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6739/Screenshot 2024-12-09 at 11.39.53 AM.png",
      "filename": "Screenshot 2024-12-09 at 11.39.53 AM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6739/uio_description.png",
      "filename": "uio_description.png"
    }
  ],
  "comments": [
    {
      "author": "Mark",
      "date": "2022-09-04T07:54:04.883-0400",
      "body": "Any response to this?   I think it's important.\n\nConsider these user stories:\n\n## User story 3\n\nI am able-bodied and don't know much about reading disabilities or low vision.  I look at the preference tab and am confused by it.  With no supporting documentation, I react quickly that the \"Show preference\" feature should be removed.\n\n## User story 4\n\nI am a supporter of accessibility and have heard about overlays and how extremely controversial they are in the blind community. I see the \"show preferences\" feature and react strongly against it.\n\n## User story 5\n\nI have a reading disability and rely on features provided by the Show Preferences.  If it gets removed because of the reactions of user 1, user 2, user 3 or user 4, then I face more struggles.  I want to make sure people in the community know that it's not frivolous, but that it helps people with reading difficulties. And maybe if more people know what it is for, then more would adopt it on their own websites.\n\n \n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-09-06T07:52:21.801-0400",
      "body": "@mark Thanks for the continued feedback. Those points make sense. We're working on a redesign of UIO and can consider this suggestion for that. \n\nAntranig Basman, Cindy Li, please see comments above.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-09-21T16:43:07.460-0400",
      "body": "Useful reference that makes it clear that UIOptions is about personalisation rather than \"fixing\" accessibility issues - <https://github.com/karlgroves/overlayfactsheet/issues/36#issuecomment-801052155> - will be helpful when writing our text which explains \"what this is\"\n"
    },
    {
      "author": "Mark",
      "date": "2023-02-04T08:37:20.855-0500",
      "body": "Any response to this thread?  Without UIOptions including some mechanism for users to learn more about it, I suspect it's going to be get caught up in the waves of fierce objections to overlays.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2023-02-06T07:00:19.653-0500",
      "body": "Mark thanks for keeping this in your mind. We've talked about it at some of our design/development meetings, and it is making its way into our [updated design](https://www.figma.com/file/ADa4A8lMGuUmhNM1Kro2S7/UIO_2.0?node-id=1102%3A513\\&t=S073uEUavvgAa85k-0). Hopefully you can see that. The design and also specifically the copy are still a work in progress so things may change. Unfortunately, I don't have an ETA for when this will be done. \n\nIn case you aren't able to see the above Figma link. Here's the text and a screenshot (uio\\_description.png) has been attached:\n\nUser Interface Options (UI Options) provides a way to enhance or improve website usability, flexibility, and accessibility by providing a way to customize and control aspects of a website without the need for additional software or tools. For those who design, build, or maintain websites, UI Options can also help reveal areas where the web content and structure can be changed to improve flexibility and robustness.\n\n \n"
    },
    {
      "author": "Mark",
      "date": "2023-02-08T18:01:37.605-0500",
      "body": "Thanks Justin. I can see the figma images.\n\nGiven the heat on overlays, could the feature include a mention of who made it (\"UI Options is made by...\") and be customizable.  The ability to link to a page that explains the feature could be very helpful.\n\nThe reason is, a bit of public education is needed with new features.\\\n \\\nFor example, at the Laurier Library, we hired a Library Web Accessibility Advisor (Ashley Shaw). She's a grad student and JAWS expert and helped us co-design a feature in our library menu that addresses an obstacle she described but that exists beyond the scope of WCAG.  It's called an: Open Menu, <https://library.wlu.ca/open-menu>\n\nWe decided the page needed to include a description of what it is so that the wider community of users would know why it's there. \n\nIt's also to send a message to blind users that \"You belong here\" which is not a common message experienced, according to this 3 minute presentation by Dr Laura Bulk of UBC: <https://www.youtube.com/watch?v=k3KVk1DPoI0>\n\nSo, a link to a page that explains the feature could go a long way.\n\n \n"
    },
    {
      "author": "Mark",
      "date": "2023-07-26T17:35:04.208-0400",
      "body": "Any status on this?&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2023-07-31T06:29:19.879-0400",
      "body": "Mark sorry there aren’t any new updates on this at the moment.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-09-25T13:30:28.865-0400",
      "body": "I spoke with Sepideh Shahi and Cheryl today and the suggestion for implementing this in the current design is to add a “card” to the end of the list of preferences that contains the description and a link to more information. While this may be a “card” or card like, it shouldn’t actually look like the other cards so that it isn’t confused with a preference. It could even be text against the background with maybe a thin border.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-10-08T09:18:12.993-0400",
      "body": "<!-- media: file 148cb2f3-e6d6-46a6-a46a-c9f53c5ce34e -->\n\nThe screenshot above is my first attempt at adding an about panel to UIO. Based on the design suggestions mentioned in the previous comment.&#x20;\n\nCheryl, Sepideh Shahi, and Caren Watkins made some suggestions in the [fluid-design channel](https://matrix.to/#/!CiNvDHGGdtIVCpYoGy:matrix.org/$bXuo1OKCc8MPpgHon4KYROAth1ohKhRqpDUYLeN4lnU?via=matrix.org).&#x20;\n\n* Is there enough contrast between text and background?\n  * Add a light background\n* Add a line about how UIO is unique/different from accessibility overlays\n* The “learn more” link should be a different colour from the text\n* The “learn more” link should be more specific,  maybe the H1 from the page it links to\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-10-09T09:53:29.499-0400",
      "body": "<!-- media: file ff012cea-7249-4620-bab5-1fe939c07837 -->\n\nThe above example incorporates the prior suggestions such as: lighter background, updated text, updated colour and text for the link.\n\nFurther suggestions from Caren Watkins are:\n\n* Change content to start with what UIO is\n* Is there a term used for compliance tools?\n* legibility of typeface for the number one “1”, the capital letter “I” and the lowercase “l”\n  * suggestion from Lisa Liskovoi is to use Fira Sans\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-10-09T12:14:47.491-0400",
      "body": "<!-- media: file 4744d504-38d9-4ad9-9e3e-4b3c40751d06 -->\n\nThis is the latest iteration with the updated content an switched to using Fira Sans.\n\nCaren Watkins suggested that we tweak the linespacing to about 150% and if that’s too much to go down by 10% increments.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-12-09T13:37:04.085-0500",
      "body": "<!-- media: file 694040d2-0cf7-4d8a-9d70-761728ddcf59 -->\n\nThe screenshot shows the latest mockup of the information panel on the right.\n\n* Heading\n  * EN: “about”\n  * ES: “Información“\n* Content\n  * EN: “User Interface Options (UI Options) allows you to personalize the web content of this site to meet your own personal needs and preferences.“\n  * ES: “Las Opciones de interfaz de usuario (Opciones de IU) le permiten personalizar el contenido web de este sitio para adaptarlo a sus necesidades y preferencias personales.“\n* Link text\n  * EN: “What is UI Options?”\n  * ES: “¿Qué son las opciones de interfaz de usuario?“\n"
    }
  ]
}
---
Originally filed against the floeproject.org site as [issue #271](https://github.com/fluid-project/floeproject.org/issues/271)

# Add "What is this?" Panel

## Fictitious User stories to illustrate the need.

Issue: The preference panel does not include a "what is" section. As a result, users are required to make inferences about what it does and why. This increases cognitive load on users and takes more time to understand. A solution is to add a "What is this?"

User story 1

I am sighted and don't have any learning disabilities. I believe web sites should be accessible and have an affinity towards initiatives that improve equity. When I go to a web page I see "Show preferences". I open it and am trying to make sense of what these options are about. I'm a little confused.

User story 2

I am blind and navigating the website. I get to "Show preferences". I have to spend considerable time learning what these preferences are about.

## Solution:

When I open the "Show Preferences" content the first content I see or hear is a link "What is this?" panel. The link goes to a page that describes the features and why it is being done. The page is either a generic FLOE page or a page on the website. I read the page and understand. I think "That's cool" and I have stronger affinity for the website and/or I think "Oh, this doesn't apply to me, but cool" and I continue on the website without spending more cognitive energy/time on the Show Preferences panel.

        
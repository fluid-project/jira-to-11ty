---json
{
  "title": "FLUID-838",
  "summary": "Add ARIA support to Inline Edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-27T17:00:49.000-0400",
  "updated": "2009-06-03T13:43:46.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-838/FLUID-838_button.patch",
      "filename": "FLUID-838_button.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-838/FLUID-838.patch",
      "filename": "FLUID-838.patch"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-27T22:29:22.000-0400",
      "body": "According to the ARIA spec, the correct role seems to be \"textbox\" but the prominent ATs (e.g. JAWS) do not seem to respond to this.\n\nI have attached a patch file that would be appriopriate if the role is to be set to \"textbox\" - it also sets the \"readonly\" state to \"false\", to inform users that the value can be edited.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-06-28T08:48:21.000-0400",
      "body": "Here's an alternative patch that sets the role of the text view to \"button.\" I'll defer to Jonathan and Anastasia in terms of which one is best.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-06-28T08:50:23.000-0400",
      "body": "Anastasia sent me a really insightful email about the various ARIA issues in regards to inline editing. She'll post to the list, but in the meantime, here's a summary:\n\nOn 27-Jun-08, at 6:18 PM, a.cheetham\\@utoronto.ca wrote:\n\nI concur with Joseph and Jonathan that based on the descriptions in  \\\nthe ARIA specs, \"textbox\" is most appropriate (\"Inputs that allow  \\\nfree-form text as their value\"). You'll note that the pattern does  \\\nstate that you don't need to put this on actual form fields, and we'd  \\\nonly add it to the display element, not the \\<input>. I disagree with  \\\nthe suggestion to set \"readonly\" to true when the edit box is not  \\\nactive - in fact, I think it would need to be set to false, otherwise  \\\nthere is no affordance that the text is editable!\n\nJonathan is also right that actually using \"textbox\" is ineffective -  \\\nat least as far as JAWS is concerned. In both IE and FF, a role of  \\\n\"textbox\" affects no change whatsoever in JAWS' behaviour. To me,  \\\nthat's a flaw in JAWS. I believe that Joseph will be communicating  \\\nwith various relevant people about this issue.\n\nAs to a role of \"button,\" the specs describe it as \"Allows for  \\\nuser-triggered actions,\" which is not entirely off base here, if you  \\\ntwist your head to the side a bit and squint...\n\nIn FF in general (i.e. no ARIA), JAWS **does** speak the display text  \\\nwhen the cursor is **on**, and **doesn't** speak anything when the cursor  \\\nis **off**.\n\nWith ARIA:\\\nIn FF, a role of \"button\" **does** cause JAWS to speak the diplay text  \\\nwhen the cursor is off (whereas with \"textbox\" or nothing, JAWS is  \\\nsilent). But it also says the word \"button\" after the text, which is  \\\nweird for the user.\n\nSo basically, if you want code that looks correct, and does what the  \\\nspec says, use the patch I attached to 838, and demo with IE. If you  \\\nwant something that says \"button\", use your patch, and demo with FF  \\\nwith the cursor off.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-17T20:51:38.000-0400",
      "body": "I'll implement the 'button' version. It has no effect in IE, but then, nothing does. At least in FF, it causes the word 'button' to be spoken.\n"
    }
  ]
}
---
dev-iteration37\
dev-iteration39

        
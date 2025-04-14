---json
{
  "title": "FLOE-87",
  "summary": "Folder widget in OER Commons is missing keyboard interaction and throwing an error",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Alexey Novak",
  "date": "2012-08-27T17:09:23.078-0400",
  "updated": "2012-10-18T12:00:09.621-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alexey Novak",
      "date": "2012-10-18T12:00:09.619-0400",
      "body": "Released.\n"
    }
  ]
}
---
This issue is related to <https://www.assembla.com/spaces/iskme/tickets/745>

Also it appears to be that the folder list widget in the top right corner of a summary page for any OER resource shares some of its functionality with the folder list on My OER page on the left. This widget on My OER page loses keyboard focus once user attempts to Delete a folder or Cancels Folder deletion.\
Also it appears that the folder widget on the top right on a summary page for any OER resource does not have a proper keyboard interactions if user:\
1\) Focuses Create New Folder\
2\) Clicks Enter\
3\) Does not enter any information\
4\) Clicks Enter again\
5\) The selectable list is broken and it is easy to lose a focus

Current work about the problem could be found here:\
<https://github.com/anvk/OER-Commons/tree/OER-745>

Also attaching IM conversation about the issue\
\[2:31] \<Alexey Novak> Michelle can you take a look into this one and let me know what you think <https://github.com/anvk/OER-Commons/compare/ISKME:staging...anvk:OER-745>\
\[2:36] \<Alexey Novak> and let me know if I need to explain on what is going on and why this code is in this branch\
\[2:36] \<Michelle> did you test it?\
\[2:36] \<Alexey Novak> yup. but I still need to test on IE\
\[2:36] \<Michelle> you have a typo - there's no way it's actually running the fadeInCallback\
\[2:38] \<Alexey Novak> oh wait I found more things\
\[2:38] \<Alexey Novak> but I still did not find a typo\
\[2:39] \<Michelle> well, line 423 will never get run.\
\[2:39] \<Michelle> but I think you'd better figure out when it's supposed to run so you can test once you fix the code\
\[2:40] \<Michelle> are you sure we want to call refresh on the selectables list both on refresh and on fadein?\
\[2:41] \<Alexey Novak> well so far as I remember fadeIn is when we create a menu and Create is when we actually create a new folder and we want to refresh the list of folders\
\[2:42] \<Michelle> why wouldn't we use the same callback then?\
\[2:42] \<Alexey Novak> ha - great point !\
\[2:42] \<Alexey Novak> well I thought that maybe we would want to change execution one day\
\[2:43] \<Alexey Novak> but you are right maybe by that point the developer will make a logic separation\
\[2:43] \<Alexey Novak> but right now we could reuse the same callback\
\[2:54] \<Alexey Novak> ok I remembered why we do a refresh on click - because an input appears and we want to update list of things we can keyboard focus. The problem that this input appears and disappears so we have to update our list of selectables\
\[2:54] \<Alexey Novak> I also got one callback instead of 2\
\[2:55] \<Alexey Novak> but kill me I do not see a typo\
\[2:55] \<Alexey Novak> and the code works in FF no problem \
\[2:56] \<Michelle> if you've switched to one callback you might have got rid of the issue (fadeInCallback was spelled faidInCallback)\
\[2:56] \<Michelle> but I'm worried that you haven't tested properly\
\[2:56] \<Michelle> testing that code path should have made the problem clear\
\[2:57] \<Alexey Novak> I see. Then no worries - I will spend 10 −15 minutes trying to break thing\
\[2:57] \<Alexey Novak>  \
\[2:57] \<Alexey Novak> I also will ask Yura to spend 1-2 minutes trying to break it\
\[2:57] \<Alexey Novak> btw - I think I found an OER issue related to this widget\
\[2:57] \<Alexey Novak> it seems that when you create folders through My OER page the increment for total folders does not change\
\[2:58] \<Alexey Novak> should I file it to Andrey and the gang\
\[2:58] \<Michelle> well, file it\
\[2:58] \<Michelle> I don't think it's our business to assign it\
\[2:59] \<Alexey Novak> ok then I just create it without assigning\
\[2:59] \<Alexey Novak> and I will spend extra time testing the widget to ensure that it works properly\
\[2:59] \<Michelle> ok\
\[2:59] \<Michelle> have you pushed your updated code?\
\[3:00] \<Alexey Novak> in few seconds it will be there \
\[3:01] \<Alexey Novak> <https://github.com/anvk/OER-Commons/compare/ISKME:staging...anvk:OER-745>\
\[3:01] \<Alexey Novak> I see why I could not recreate a problem - because I killed faidIn callback\
\[3:01] \<Alexey Novak> anyhow test time\
\[3:03] \<Michelle> why do you access refreshCallback through the callbacks object on line 67?\
\[3:04] \<Alexey Novak> \*no explanation\
\[3:05] \<Michelle> I guess I would either pull it out the way you have done on line 41 and use the variable that you've created, or I would not create the variable and always access it through the callbacks object\
\[3:06] \<Alexey Novak> actually if you call callbacks.refreshCallback() it would fail\
\[3:07] \<Alexey Novak> since it is undefined in some cases\
\[3:07] \<Alexey Novak> so it is a pretty bad on my part\
\[3:08] \<Alexey Novak> I guess it could be just done through variable. But I do not know what is better to call an empty dummy function or make an if statement to see if variable exists\
\[3:08] \<Michelle> since it doesn't happen a lot, the performance difference is going to be negligible\
\[3:09] \<Michelle> but the code clarity is probably better if we use the variable\
\[3:09] \<Alexey Novak> sorry and by variable you mean something like refreshCallback = callbacks.refreshCallback || function () {}; ?\
\[3:10] \<Michelle> yeah, the refershCallback variable that you create on line 41\
3:38 : Away Message: Away\
3:41 : Michelle came back\
\[4:19] \<Alexey Novak> ok here we go  <https://github.com/anvk/OER-Commons/compare/ISKME:staging...anvk:OER-745>\
\[4:20] \<Alexey Novak> I found few keyboard interaction issues while testing, so this pull request have fixes for those\
\[4:28] \<Michelle> what is the focus element and why does it change?\
\[4:30] \<Alexey Novak> for lines 64-78. Basically there are 2 things which can happen when you click Create and an input appears. 1 if you entered something and clicked Enter a new folder name appears and it will get a focus. If you did not enter anything and click Enter then input disappears and Create New link has a focus. Right now if you do not enter and click Enter on an input, it disappears and focus is lost in limbo\
\[4:30] \<Alexey Novak>  \
\[4:31] \<Alexey Novak> for line 129 to 151\
\[4:31] \<Alexey Novak> basically it is the menu on My OER page it does not have proper keyboard interactions when you want to remove a folder\
\[4:32] \<Alexey Novak> but with the code in pullrequest if you click Cancel then the item you wanted to delete will gain focus. And if you click Delete then next item in the list will gain focus\
\[4:32] \<Alexey Novak> if there was only 1 item in the list and you deleted it then link Create New Folder will get a focus since it is always the last link in the list\
\[4:33] \<Alexey Novak> there is still 1 known issue left which I'm aware of\
\[4:34] \<Michelle> I feel uncomfortable with the strategy for finding the thing to focus on. if the markup changes, this will break\
\[4:34] \<Michelle> and it's scattered around, so it will require fixes in many places\
\[4:35] \<Michelle> is there a concept in this code of a current folder?\
\[4:36] \<Alexey Novak> let me double check. So far as I know there are none. I mean there is a concept that you are viewing all resources which belong to a folder but it does not give you any reasonable date to control the widget\
\[4:36] \<Alexey Novak> \*reasonable data\
\[4:40] \<Alexey Novak> Basically, me and Anastasia worked on the My Folder widget for the single OER page. Which worked fine and looked great (except of the case when you enter empty input and click enter). The bug Andrey found is related to the fact that the same widget (for some reason) is been used in My OER page as well. So I had to fix up the code for it using his conventions. But when I started testing I decided to test that widget on My OER page and noticed that keyboard focus is lost when you start removing folders (and I found few more bugs not related to our work we did)\
\[4:40] \<Alexey Novak> so I started putting those keyboard focus fixes depending on different actions you have, it is what you see and additional code in my pull request\
\[4:40] \<Alexey Novak>  \
\[4:40] \<Alexey Novak> I hope it makes sense\
\[4:42] \<Michelle> yeah, I could tell what you were doing and I'm glad you found and tried to address the keyboard issues\
\[4:42] \<Michelle> but, it feels to me that with the hardcoding of the element a\
\[4:42] \<Alexey Novak> I have no idea how we missed those when all of us did testing, but oh well...\
\[4:42] \<Alexey Novak> yes harcoding element a is not a pretty one\
\[4:42] \<Michelle> and the repeated bits of code, that this will be a brittle fix\
\[4:42] \<Alexey Novak> it is. but there is no nothing of components in this code. Just jquery manipulation\
\[4:43] \<Alexey Novak> so I'm not sure what to do about this "a" issue \
\[4:44] \<Alexey Novak> so far as I understand server generates the markup using templating. I wish we could create some kinda objects when it is done\
\[4:44] \<Michelle> also, around line 77, we used to just do the refresh when we had success but now it's happening on fail too - is that intentional?\
\[4:44] \<Alexey Novak> it is\
\[4:45] \<Alexey Novak> basically - we missed the case when input is empty and user presses Enter with Anastasia\
\[4:45] \<Alexey Novak> if we do not refresh then input disappears but still part of the selectable\
\[4:45] \<Alexey Novak> which means that keyboard focus can be lost once this input gains a focus\
\[4:45] \<Alexey Novak> it is related to this input which appears and disappears all the time\
\[4:45] \<Alexey Novak> like a mosquito when you want to sleep\
\[4:50] \<Alexey Novak> ha! Those guys learn fast I just saw this line of code var $this = $(this);\
\[4:51] \<Alexey Novak> almost like that but $this. Before they would just do this.functionBlah... now they have a variable for this\
\[4:56] \<Michelle> how about abstracting out the behaviour for finding the element to focus on and calling focus on it. at least that we all the code will be contained in one place\
\[4:57] \<Alexey Novak> we could do this, one thing that it will be very specific to the folder div. Since we want to access a specific a in a specific div\
\[4:58] \<Michelle> it could take in the folder as a parameter\
\[4:58] \<Michelle> and if it doesn't get a parameter could default to the button\
\[4:59] \<Alexey Novak> interesting...\
\[4:59] \<Alexey Novak> let me try this\
\[4:59] \<Michelle> also, I think we have to stop talking privately like this\
\[4:59] \<Michelle> now if AC has to pick this up she'll have no knowledge of our conversation \
\[5:00] \<Alexey Novak> well the fix is almost done... not sure what should be picked up here or you think there will be a need to change something more\
\[5:00] \<Michelle> a regression for esxample\
\[5:00] \<Michelle> in the future

        
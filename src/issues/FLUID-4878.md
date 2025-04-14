---json
{
  "title": "FLUID-4878",
  "summary": "Cannot use jquery functions directly as IoC Functions or listeners to events",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-01-07T11:12:48.734-0500",
  "updated": "2014-03-03T12:29:09.015-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-01-07T11:13:29.083-0500",
      "body": "Perhaps we could create a new property to pass in jQuery functions similar to the refactored jqunit.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-04-13T03:31:34.477-0400",
      "body": "Transcript of private chat with jobara:\n\n(14:16:42) Justin Obara: when do you think we might see the jQuery thing i mentioned in the channel resolved?\\\n(14:17:01) Justin Obara: i'm working on something now, but will resort to just writing a wrapper function around it\\\n(14:17:02) AntranigBasman: I am just thinking about it now : P\\\n(14:17:15) AntranigBasman: It's actually quite a tricky problem\\\n(14:17:24) Justin Obara: because it isn't thatist?\\\n(14:17:48) AntranigBasman: Yes, well.... the idiom of the entire framework is based around \"functions as first-class values\"\\\n(14:18:06) AntranigBasman: And the problem is, typically, once you have resolved an EL expression, that's that\\\n(14:18:34) AntranigBasman: All we have at the end of the process of resolving \"{that}.dom.reset.click\" is the raw function\\\n(14:19:00) AntranigBasman: And there's just too much machinery to get through to somehow instruct the system that IN ADDITION to that value, you also want the value of \"{that}.dom.reset\"\\\n(14:19:20) AntranigBasman: But I think I have the beginnings of an idea how to fix it\\\n(14:19:58) Justin Obara: yes.. i can see how that would be an issue.. awesome that you have something started thoug… \\\n(14:20:23) Justin Obara: in the meantime i guess i'll just make the small wrapper around the jquery call… \\\n(14:20:34) AntranigBasman: Yes\\\n(14:20:38) AntranigBasman: It might take a little while\\\n(14:20:53) Justin Obara: any best practices around that.. write now the code looks like this\\\n(14:20:54) Justin Obara:     fluid.uiOptions.fatPanel.bindReset = function (elm, resetFn) {\\\n$(elm).click(resetFn);\\\n};\\\n(14:21:02) Justin Obara: which is small, but feels somewhat offputting to me\\\n(14:21:13) Justin Obara: so many typos 😞\\\n(14:21:39) AntranigBasman: Yes, its undesirable\\\n(14:21:47) AntranigBasman: You could make a \"general binder\"\\\n(14:21:55) AntranigBasman: Which accepts the name of the jQuery event as the 1st property\\\n(14:22:06) AntranigBasman: SOmething which  basically has the syntax of \"jQuery.bind\"\\\n(14:22:42) Justin Obara: i was thinking of that.. but should i support the eventData option\\\n(14:22:42) Justin Obara: <http://api.jquery.com/bind/>\\\n(14:22:55) AntranigBasman: Doesn't seem necessary for now\\\n(14:22:56) Justin Obara: and if so, i'm not sure how to make that take any number of arguments\\\n(14:22:58) Justin Obara: okay.. cool\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-04-13T03:33:16.081-0400",
      "body": "And today's discussion:\n\n\\[13:44] \\<Justin\\_o> Bosmon: <https://github.com/jobara/infusion/commit/1303f387a78dbdf6ff146103e71d2229337ed63d>\\\n\\[13:44] \\<Bosmon> Thanks\\\n\\[13:45] \\<Bosmon> Justin\\_o: That seems like a very reasonable implementation, other than the name : P\\\n\\[13:46] \\<Justin\\_o> Bosmon: i was thinking there might be some issues with the name..do you have a recommendation for something better?\\\n\\[]\\\n\\[13:48] \\<Bosmon> Justin\\_o - that's a good question.... there's an interesting issue about whether it either does do, or should do, the same as jQuery.bind  ....\\\n\\[13:49] \\<Bosmon> As it stands, you could say that it is both more general and more comprehensible than jQuery.bind itself since it \"does exactly what it says on the tin\" \\\n\\[]\\\n\\[13:52] \\<Bosmon> Justin\\_o - what do you think about naming the function as \"fluid.bind\", putting it in Fluid.js, and removing the first line of its code\\\n\\[13:53] \\<Bosmon> The IoC references system already manages the responsibility of ensuring that the first argument would be a jQuery\\\n\\[13:53] \\<Bosmon> And the behaviour of this code is really more general - it will bind on to \"any this-ist function\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-04-23T02:49:56.185-0400",
      "body": "More discussion from last week:\n\n\\[13:07] \\<Bosmon> I was thinking of starting to implement our dedicated framework functionality for <https://fluidproject.atlassian.net/browse/FLUID-4878#icft=FLUID-4878>\\\n\\[13:07] \\<Bosmon> What do you think of the following syntax: <http://pastie.org/7665641>\\\n\\[pastie holds this:\\\ninvokers: {\\\nbindReset: {\\\n\"this\": \"{fatPanel}.dom.reset\",\\\n\"method\": \"click\"\\\n\"args\": \"{arguments}.0\"\\\n}\\\n},\\\n]\\\n\\[13:07] \\<Bosmon> Also cindyli\\\n\\[13:09] \\<Justin\\_o> Bosmon: looking at it now\\\n\\[13:09] \\<cindyli> Bosmon: what is \"this\"? always a dom object, could it be other stuff?\\\n\\[13:10] \\<Bosmon> It can be any \"this\"\\\n\\[13:11] \\<Justin\\_o> Bosmon: would it be possible and would it make sense, to have \"method\" be \"funcName\" so that it looked more like regular invokers?\\\n\\[13:12] \\<Bosmon> Justin\\_o - I think it would undesirable\\\n\\[13:12] \\<Bosmon> Since the expected values are completely different\\\n\\[13:12] \\<Bosmon> \"method\" must always be a single string representing a direct method on the object\\\n\\[13:12] \\<Justin\\_o> Bosmon: ah i see now\\\n\\[13:12] \\<Bosmon> Whereas \"funcName\" can be a general EL path representing a method's global name\\\n\\[13:13] \\<Bosmon> So for example I have this in my current Uploader branch, which doesn't work:\\\n\\[13:13] \\<Bosmon>             enableBrowseButton: {\\\n\\[13:13] \\<Bosmon>                 func: \"{that}.swfUpload.setButtonDisabled\",\\\n\\[13:13] \\<Bosmon>                 args: false\\\n\\[13:13] \\<Bosmon>             },\\\n\\[13:13] \\<Bosmon> As it turns out, swfUpload also expects to be a \"this\"\\\n\\[13:13] \\<Bosmon> And we would rewrite this as follows:\\\n\\[13:14] \\<Bosmon> Anyway, I meant to write this:\\\n\\[13:14] \\<Bosmon>             enableBrowseButton: {\\\n\\[13:14] \\<Bosmon>                 \"this\": \"{that}.swfUpload\"\\\n\\[13:14] \\<Bosmon>                 method: \"setButtonDisabled\",\\\n\\[13:14] \\<Bosmon>                 args: false\\\n\\[13:14] \\<Bosmon>             },\\\n\\[13:15] \\<Justin\\_o> Bosmon: just to double check, does \"this\" always refer to the parent of the method?\\\n\\[13:15] \\<Bosmon> Justin\\_o - yes\\\n\\[13:16] \\<Bosmon> It's no different to the arguments for your \"fluid.bind\", only differently packaged\\\n\\[13:19] \\<Justin\\_o> Bosmon: cool 🙂\\\n\\[13:19] \\<Justin\\_o> Bosmon: could we do something like this <http://pastie.org/7665848>\\\n\\[13:20] \\<Bosmon> Justin\\_o - isn't that just the first example in my pastie?\\\n\\[13:22] \\<Justin\\_o> Bosmon: hmm maybe i'm missing something .. i was suggesting to remove the \"this\" property and source it instead from the elpath to the method that you'd want to call\\\n\\[13:22] \\<Bosmon> Oh, right\\\n\\[13:22] \\<Bosmon> yes, that would be more difficult to implement\\\n\\[13:23] \\<Bosmon> Don't you think it might also be more unclear?\\\n\\[13:23] \\<Justin\\_o> Bosmon: maybe 🙂 just exploring ideas… i guess it is nice that the \"this\" is explicity\\\n\\[13:23] \\<Justin\\_o> \"explicit\"\\\n...\\\n\\[13:27] \\<Justin\\_o> Bosmon: i think that's probably all i'd have to really comment… your first suggestion is pretty clear and explicit and i think the syntax would be usable. And of course, I'd love to have this type of declarative way of calling things in the framework 🙂\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-05-02T17:24:11.960-0400",
      "body": "Merged in to trunk at revision d0f009b\n"
    }
  ]
}
---
Because of jQuery's use of "this" the framework is not able to handle jQuery functions that are passed into the func property of an IoC call or the listerner property for an event.

Example:

listeners: {\
onCreate: {\
listener: "{that}.dom.reset.click",\
args: \["{that}.reset"] // a function\
}\
}

        
---json
{
  "title": "FLUID-5161",
  "summary": "Move the prefs framework code into the framework folder and re-namespace it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-01T14:16:10.514-0400",
  "updated": "2013-10-11T12:57:20.929-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "Sliding Panel",
    "Textfield Slider",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5111/",
      "key": "FLUID-5111",
      "summary": "Remove tabs from UIOptions dependencies"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-08T13:38:58.675-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/414> ) into the project repo at b4422d732612a84ba429f3866b97786e627d8fb1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-08T15:30:20.858-0400",
      "body": "Need to revive the uiOptions component. This will simple be done with a call to the builder that uses the fluid.uiOptions namespace. Will also need to reorganize the demos and add back in the dependency file.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-09T10:12:31.876-0400",
      "body": "Submitted another pull request which adds the UI Options component back in. <https://github.com/fluid-project/infusion/pull/415>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-11T12:57:20.911-0400",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/415> ) merged into the project repo at 0dfb9c8f3c1c3f5d713b8c1dea78dfa747643d65&#x20;\n"
    }
  ]
}
---
We decided that we will move all of the preferences framework specific code into a subfolder of the framework folder called "preferences" i.e. src/framework/preferences/ and change the namespace from "fluid.uiOptions" to "fluid.prefs"

The prefs framework specific code includes:

Builder\
Auxilary builder\
Primary Builder\
resource loader\
model relay (if not moved to framework)\
store\
cookie store  (we should probably consider swapping cookies for local data storage as  our default persistence mechanism)\
temp store\
uiEnhancer (empty) fluid.prefs.uiEnhancer\
uiOptions (empty) (renamed to fluid.prefs.prefsEditor)\
panel (base grade)\
enactor (base grade)\
url utilities\
fatPanel grade (renamed to separatedPanel)\
starter grades/schemas\
starter panels (e.g. contrast, textSize...)\
starter enactors

Two components will be moved to top-level components:

* textfieldSlider
* slidingPanel

The only thing remaining in src/components/uiOptions will be the few lines of code needed to create "our" instance of a prefs editor.

See meeting notes from the Community Workshop where this was discussed at \
<http://lists.idrc.ocad.ca/pipermail/fluid-work/2013-September/009211.html>

        
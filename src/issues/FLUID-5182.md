---json
{
  "title": "FLUID-5182",
  "summary": "UI Options component should support top-level options for an onReady listener",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-17T16:20:50.661-0400",
  "updated": "2013-10-28T10:33:23.433-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-18T06:50:41.843-0400",
      "body": "Rather than using distribute options, what about boiling the event up?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-24T14:46:16.527-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/423> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-28T10:33:20.993-0400",
      "body": "Merged Pull Request at 5b631da3519a797684a89a8fb494ca5a14ba2f22\n"
    }
  ]
}
---
It is not unlikely that a UI Options integrator would be interested in some kind of onReady event to tell them when the UI Options component is ready. A discussion with Cindy determined that the best options would be the onReady event of the prefsEditorLoader subcomponent (which is has the separatedPanel grade).

distributeOptions can be used to specify this listener, as shown below:

fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {\
listeners: {\
onReady: function () {\
console.log("onReady listener");\
}\
},\
distributeOptions: {\
source: "{that}.options.listeners",\
target: "{that prefsEditorLoader}.options.listeners",\
removeSource: true\
}\
});

but this requires a bit too much knowledge on the part of the integrator. The integrator should be able to simply specify the listener:

fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {\
listeners: {\
onReady: function () {\
console.log("onReady listener");\
}\
}\
});

and the UI Options component (or someone else) should be responsible for distributing the listener to the right place.

        
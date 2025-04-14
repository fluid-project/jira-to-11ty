---json
{
  "title": "FLUID-2420",
  "summary": "Allow integrators to specify which options they want to make available for UIOptions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2009-03-31T09:44:55.000-0400",
  "updated": "2013-10-04T10:26:35.389-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-04T10:26:35.377-0400",
      "body": "This is now handled through the auxiliary schema or by choosing the desired preferences and enactors to support manually through grades.&#x20;\n"
    }
  ]
}
---
From the design documents:

The contract is an agreement between the system and the UI Options component. The contract is wholly trust-based, with the system integrator specifying agreement of the system to provide the necessary access and control to UI Options to affect necessary change. If the system does not live up to the contract, UI Options cannot really do anything about it. The contract would have 3 levels:

1\. Basic - the system guarantees nothing\
2\. Standard - the system guarantees some things\
3\. Full - the system guarantees everything

Based on the level of contract specified, UI Options will filter the preferences and controls available through the interface. For example, a Basic contract means that UI Options will only present controls for preferences it knows it can successfully effect when it knows nothing about the system. This is likely to reduce UI Options down to just a few controls that a user can set, but UI Options is reasonably certain to have a 100% resultant effect. The Standard contract would expect the system to provide UI Options a defined set of access/control, which would allow UI Options to present more options and controls to the user. The additional information provided by the system via the contract ensures that UI Options has a 100% resultant effect (that it would otherwise be unable or unlikely to achieve without that information being provided). A Full contract would indicate that the system agrees to all of the requirement UI Options has to present all options and controls and be assured a 100% resultant effect. Thus UI Options will need to be able to flex to the system it integrates with, but the resultant effect must always be 100%. Verifying and/or enforcing the 100% effect is up to the integrator.

For the full document see:\
<http://wiki.fluidproject.org/display/fluid/User+Interface+Options+Design+Considerations>

        
---json
{
  "title": "FLUID-6161",
  "summary": "Implement scheme to allow component options to be validated, documented and authored",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-06-02T12:16:20.825-0400",
  "updated": "2017-06-02T12:16:20.825-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Infusion is about to graduate to a new level of maturity once we build full supports for authoring components and Infusion applications graphically, for example via tools like the Fluid Sandbox <https://github.com/the-t-in-rtf/fluid-sandbox>  and via other means. It's an essential affordance for these schemes that the full space of valid options for a component can be determined "somewhat statically" as well as being able to supply descriptions and hints for options in a "literate programming" style.

JSON schema <http://json-schema.org/documentation.html> is a good starting point for the most basic kinds of validation. However, the schema itself and its tooling are still somewhat unstable, as well as embodying a complex reuse and reference idiom that isn't quite aligned with that of Infusion's. We need to study how we can harmoniously embed and apply JSON schema elements within Infusion options - as well as work towards a more generalised scheme for validation - for example, spotting common examples of misnamed or misnested options, and leading the way to the "partial evaluation scheme" possible after FLUID-6148, that will be able to make more stringent checks of component options by attempting to partway instantiate the resulting component tree.

        
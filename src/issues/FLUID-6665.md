---json
{
  "title": "FLUID-6665",
  "summary": "Layout reorderer applies aria-selected to articles.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-13T07:49:16.714-0400",
  "updated": "2021-07-13T07:49:16.714-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The layout reorderer set's the aria-selected state on elements with "role=article" however this is not a supported state for the [article](https://www.w3.org/TR/wai-aria-1.2/#article).

There likely needs to be a better way of generally describing a selection interaction on any generic element. Something like aria-grabbed might make sense, although it has been deprecated.

see: [discussion](https://matrix.to/#/!mDigWuPWilYGiEcOCA:matrix.org/$MQt_ZHOnJtEXNljuCc2op31DqBdgpvBqh9Jczljn4Ro?via=matrix.org) in fluid-work matrix channel

        
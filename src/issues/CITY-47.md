---json
{
  "title": "CITY-47",
  "summary": "Error building with recent Hugo version",
  "tags": "CITY",
  "project": {
    "key": "CITY",
    "title": "Inclusive Cities"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "To Do",
  "assignee": "Simon Bates",
  "reporter": "Giovanni Tirloni",
  "date": "2020-08-18T09:05:19.517-0400",
  "updated": "2020-08-18T09:05:19.517-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
hugo version 0.74.3 fails with the following errors (works with 0.47.1):

```
$ hugo 
Building sites … ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/accessible-city-hackathon-app.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/accessible-city-hackathon-app.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-draft-proposal.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-draft-proposal.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-1.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-1.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-2-synthesis/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-2-synthesis/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-1-synthesis/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-1-synthesis/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-2/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-2/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-3-synthesis/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-3-synthesis/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-3/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/co-design-session-3/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/community-living-ontario-co-design-session/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/community-living-ontario-co-design-session/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/deaf-culture-centre-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/deaf-culture-centre-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/deep2018-summary-and-results/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/deep2018-summary-and-results/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/dream-team-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/dream-team-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/for-an-inclusive-quayside.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/for-an-inclusive-quayside.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/hackathon-project-descriptions.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/hackathon-project-descriptions.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/hackathon/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/hackathon/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/helen-keller-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/helen-keller-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/houselink-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/houselink-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/invitation-to-collaborative-design.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/invitation-to-collaborative-design.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/parc-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/parc-co-design-session.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/plant-a-home-co-design-session/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/plant-a-home-co-design-session/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/students-co-design-activity.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/students-co-design-activity.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/students-results.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "ideas/students-results.html": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/access-guide/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/access-guide/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/accessibility-of-the-space/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/accessibility-of-the-space/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/activities-in-practice/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/activities-in-practice/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/activity-planning-considerations/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/activity-planning-considerations/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/build-lasting-relationships/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/build-lasting-relationships/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/building-trust/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/building-trust/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/challenges-of-diverse-participation/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/challenges-of-diverse-participation/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/challenges-of-facilitating-diverse-groups/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/challenges-of-facilitating-diverse-groups/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-cost-considerations/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-cost-considerations/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-facilitation-techniques/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-facilitation-techniques/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-invitation-considerations/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-invitation-considerations/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-the-project-s-focus/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-the-project-s-focus/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-to-do-list/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/co-design-to-do-list/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/contributor-license-agreement/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/contributor-license-agreement/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/define-objectives/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/define-objectives/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/enable-continuous-improvement/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/enable-continuous-improvement/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/ensuring-opportunities-for-all-ideas/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/ensuring-opportunities-for-all-ideas/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/feedback-form/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/feedback-form/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/functional-mismatch-warm-up/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/functional-mismatch-warm-up/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/group-attribution-form/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/group-attribution-form/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/idrc-co-design-worksheets/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/idrc-co-design-worksheets/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/inclusive-city-imaginary/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/inclusive-city-imaginary/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/individual-group-all/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/individual-group-all/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/intangible-measures-of-success/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/intangible-measures-of-success/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/ladder-of-citizen-participation/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/ladder-of-citizen-participation/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/missing-perspectives/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/missing-perspectives/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/multiple-engagement-channels/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/multiple-engagement-channels/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/our-outreach-process/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/our-outreach-process/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/our-search-for-the-right-topic/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/our-search-for-the-right-topic/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/plan-for-inclusion/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/plan-for-inclusion/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/protect-collective-contributions/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/protect-collective-contributions/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/sharing-our-findings/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/sharing-our-findings/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/story-puzzle-warm-up/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/story-puzzle-warm-up/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/the-essential-role-of-openness/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/the-essential-role-of-openness/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/things-that-can-t-be-controlled/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/things-that-can-t-be-controlled/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/urban-hot-spots/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/urban-hot-spots/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/work-with-diverse-creators/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/work-with-diverse-creators/index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "blog/_index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "blog/_index.md": page not found
WARN 2020/08/18 10:01:10 found no layout file for "HTML" for kind "section": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.
WARN 2020/08/18 10:01:10 found no layout file for "HTML" for kind "section": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.
WARN 2020/08/18 10:01:10 found no layout file for "HTML" for kind "section": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/_index.md": page not found
ERROR 2020/08/18 10:01:10 [en] REF_NOT_FOUND: Ref "/_index.html" from page "resources/_index.md": page not found
WARN 2020/08/18 10:01:10 Page.UniqueID is deprecated and will be removed in a future release. Use .File.UniqueID
Total in 1756 ms
Error: Error building site: logged 123 error(s)
```

        
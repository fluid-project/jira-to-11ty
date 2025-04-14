---json
{
  "title": "FLUID-6199",
  "summary": "Build site requires extra server-side configuration",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Giovanni Tirloni",
  "date": "2017-09-26T09:45:51.564-0400",
  "updated": "2024-07-25T06:40:02.102-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-25T06:39:50.786-0400",
      "body": "Builds are now being served via Cloudflare&#x20;\n"
    }
  ]
}
---
Although the static website makes it easier to do deployment, it currently requires extensive custom configuration on the server side.      &#x20;

It would be interesting to have the files where they should be and not depend on the server rewriting URLs. Also, the URLs in the HTML code should be fixed to poin to the correct places too.

```
- |
            if ( $arg_title = Introduction ) {
                rewrite ^ /? permanent;
            }
            if ( $arg_title = Methods ) {
                rewrite ^ /InclusiveLearning.html? permanent;
            }
            if ( $arg_title = Semantic_markup_-_HTML_5_semantics_and_epub_type ) {
                rewrite ^ /SemanticMarkupInEPUB3.html? permanent;
            }
            if ( $arg_title = WAI-ARIA_-_Beyond_semantic_tags ) {
                rewrite ^ /WAI-ARIA.html? permanent;
            }
            if ( $arg_title = Media_overlays_(narrations)_and_text-to-speech ) {
                rewrite ^ /NarrationsAndTextToSpeech.html? permanent;
            }
            if ( $arg_title = Scripts ) {
                rewrite ^ /ScriptingInEPUB3.html? permanent;
            }
            if ( $arg_title = Why_is_this_important? ) {
                rewrite ^ /WhyIsThisImportant.html? permanent;
            }
            if ( $arg_title = What_is_the_approach? ) {
                rewrite ^ /WhatIsTheApproach.html? permanent;
            }
            if ( $arg_title = Inclusive_learning ) {
                rewrite ^ /InclusiveLearning.html? permanent;
            }
            if ( $arg_title = Accessibility_principles ) {
                rewrite ^ /AccessibilityPrinciples.html? permanent;
            }
            if ( $arg_title = Techniques ) {
                rewrite ^ /Techniques.html? permanent;
            }
            if ( $arg_title = Metadata ) {
                rewrite ^ /Metadata.html? permanent;
            }
            if ( $arg_title = Learner_needs_and_preferences ) {
                rewrite ^ /LearnerNeedsAndPreferences.html? permanent;
            }
            if ( $arg_title = Video_content_and_learning ) {
                rewrite ^ /VideoContentAndLearning.html? permanent;
            }
            if ( $arg_title = Audio_content_and_learning ) {
                rewrite ^ /AudioContentAndLearning.html? permanent;
            }
            if ( $arg_title = Authoring_of_content ) {
                rewrite ^ /AuthoringOfContent.html? permanent;
            }
            if ( $arg_title = Cognitive_considerations ) {
                rewrite ^ /CognitiveConsiderations.html? permanent;
            }
            if ( $arg_title = Accessible_standardized_testing ) {
                rewrite ^ /AccessibleStandardizedTesting.html? permanent;
            }
            if ( $arg_title = General_guidelines ) {
                rewrite ^ /GeneralGuidelines.html? permanent;
            }
            if ( $arg_title = Functional_considerations ) {
                rewrite ^ /FunctionalConsiderations.html? permanent;
            }
            if ( $arg_title = Standardized_test_types ) {
                rewrite ^ /StandardizedTestTypes.html? permanent;
            }
            if ( $arg_title = Standardized_test_tools ) {
                rewrite ^ /StandardizedTestTools.html? permanent;
            }
            if ( $arg_title = Inclusive_EPUB_3 ) {
                rewrite ^ /InclusiveEPUB3.html? permanent;
            }
            if ( $arg_title = Visual_styles ) {
                rewrite ^ /VisualStyles.html? permanent;
            }
            if ( $arg_title = Graphics,_video,_and_audio_media ) {
                rewrite ^ /GraphicsAndMultimedia.html? permanent;
            }
            if ( $arg_title = Mathematics ) {
                rewrite ^ /Mathematics.html? permanent;
            }
            if ( $arg_title = Accessibility_metadata ) {
                rewrite ^ /AccessibilityMetadata.html? permanent;
            }
            if ( $arg_title = Testing_and_validation ) {
                rewrite ^ /TestingAndValidation.html? permanent;
            }
            if ( $arg_title = Case_study:_Exemplar ) {
                rewrite ^ /CaseStudyExemplar.html? permanent;
            }
            if ( $arg_title = EPUB_3_resources ) {
                rewrite ^ /EPUB3Resources.html? permanent;
            }
```

        
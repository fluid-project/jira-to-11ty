---json
{
  "title": "FLUID-5894",
  "summary": "Implement \"reduced expression parser\" allowing compact expression of model relay rules and transforms",
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
  "date": "2016-04-25T09:06:35.355-0400",
  "updated": "2021-02-15T13:21:34.435-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder",
    "Framework",
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6570/",
      "key": "FLUID-6570"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-02-15T13:21:34.435-0500",
      "body": "This needs to be embedded in an expanded profile of JSON5, e.g. JSON-R. Note that this notion was considered out of scope for JSON5 itself: \n\n<https://github.com/json5/json5/issues/106>\n\nSome related work is at <https://github.com/EricSmekens/jsep/blob/master/src/jsep.js> which whilst substantially more minimal than esprima is probably **still** a bit too bulky for our purposes (c. 700 lines unminified although claims minified is pretty fine at \\~4K)\n"
    }
  ]
}
---
Our "avoidance of syntax" in the framework makes it amenable to tools but hard to author and read by humans in many scenarios. Currently all of the basic mathematical operators, as they arise in transforms and relay rules, are expressed by full JSON blocks and so transform rules such as the following are very bulky:

```javascript
"speech\\.espeak\\.rate": {
                        "transform": {
                            "type": "fluid.transforms.round",
                            "input": {
                                "transform": {
                                    "type": "fluid.transforms.binaryOp",
                                    "right": 3.10,
                                    "operator": "/",
                                    "left": {
                                        "transform": {
                                            "type": "fluid.transforms.binaryOp",
                                            "right": 80,
                                            "operator": "-",
                                            "left": {
                                                "transform": {
                                                    "type": "fluid.transforms.condition",
                                                    "truePath": "http://registry\\.gpii\\.net/common/speechRate",
                                                    "false": {
                                                        "transform": {
                                                            "type": "fluid.transforms.binaryOp",
                                                            "leftPath": "http://registry\\.gpii\\.net/common/speechRate",
                                                            "operator": "/",
                                                            "right": 3
                                                        }
                                                    },
                                                    "condition": {
                                                        "transform": {
                                                            "type": "fluid.transforms.binaryOp",
                                                            "leftPath": "http://registry\\.gpii\\.net/common/speechRate",
                                                            "operator": "<=",
                                                            "right": 390
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
```

This should be expressed as&#x20;

```javascript
Math.round(3.1 / (80 - (speechRate <= 390 ? speechRate : speechRate / 3)))
```

using standard mathematical syntax as operated in JavaScript together with some ability to make a local definition for speechRate.

We have avoided such syntax so far since we really have a need to **control** it rather than adopt some sleazy solution (of the sort commonly operated by those incapable or unwilling to write parsers) of simply slinging some perhaps partially sanitised expression into JavaScript's "eval" function.

The time has come to write a little parser of our own. Some early discussion of this is available in the wiki page <https://wiki.fluidproject.org/display/fluid/Notes+on+Expressionism+in+Model+Relay> . This speculates that we might use the "esprima" parser but really this is an incredibly bulky thing that we cannot afford to deliver wherever we deliver the framework. Instead, we should hand-roll a simple parser based on the straightforward and widely-attested [Shunting Yard Algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm).

The parser should recognise two, nested syntaxes. The first, for "full expressions" should recognise any expression using the standard mathematical unary, binary and ternary operators in JavaScript (where these do not have any side-effects) as well as any publically addressible functions such as `Math.round`, `Math.pow` etc. These will become packaged as a standard full model transform rule named "fluid.transforms.expression".

The framework will for the foreseeable future make no attempt to compute inverses of these expressions - they can be contributed by explicitly writing the inverse transform (if it exists) on a reverse leg.

The second syntax, for "reduced expressions" or "linear expressions" will recognise any expression which is **linear** - that is, can be recognised to be of the form `a * x + b` where `a` and `b` are constants. There are some extensions that we desire here with respect to the strict syntax written there. Firstly, we would like to treat the unary minus `-` and logical negation operators ! as incorporated into the possibility for the multiplier `a` - e.g. `!x` is a linear expression, as well as allowing for the multiplication by `a` to instead take the syntactic form of division. Secondly, we wish to support "compound constants" which are composed of primitive constants by means of arbitrary mathematical expressions as seen in the full parser. For example, `x / (60 * 60 * 24) - 7 * 4` should also be recognised as a linear expression (in practice "compiled" as `0.00001157407 * x - 28` - this form should make it clear why we want to recognise compound constants!).

The system will support linear expressions **anywhere** where an IoC-mediated expression is accepted - for example in a model relay rule or a model listener rule. That is, it should be possible to write:

```javascript
model: {
    negatedValue: "!{otherComponent}.model.value"
}
```

The framework will automatically compute inverses of any linear expressions and apply them on any reverse linkage. It will reject any linear expression for which the coefficient of `x` evaluates to zero.

        
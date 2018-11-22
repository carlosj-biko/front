module.exports = {
  "plugins": [
    // nuevas reglas: https://github.com/kristerkari/stylelint-scss#list-of-rules
    "stylelint-scss",
  ],
  "ignoreFiles": [
    "src/assets/fonts/dp-icons/*.scss",
  ],
  "rules": {
    // at-rule
    // "at-rule-blacklist": ["debug"], // https://stylelint.io/user-guide/rules/at-rule-blacklist/
    "at-rule-no-vendor-prefix": true,  // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
    // "at-rule-empty-line-before": [ // https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
    //   "always", {
    //     "except": [
    //       "after-same-name",
    //       "blockless-after-same-name-blockless",
    //       "first-nested",
    //     ],
    //     ignore: ["after-comment"],
    // } ],
    "at-rule-name-case": "lower", // https://stylelint.io/user-guide/rules/at-rule-name-case/
    "at-rule-name-space-after": "always", // https://stylelint.io/user-guide/rules/at-rule-name-space-after/
    "at-rule-semicolon-newline-after": "always", // https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/

    // block
    "block-no-empty": true, // https://stylelint.io/user-guide/rules/block-no-empty/
    "block-opening-brace-newline-after": "always-multi-line", // https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
    "block-opening-brace-space-before": "always", // https://stylelint.io/user-guide/rules/block-opening-brace-space-before/
    "block-opening-brace-space-after": "always-single-line", // https://stylelint.io/user-guide/rules/block-opening-brace-space-after/
    // "block-closing-brace-newline-after": "always", // https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/
    "block-closing-brace-newline-before": "always-multi-line", // https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
    "block-closing-brace-empty-line-before": "never", // https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/
    "block-closing-brace-space-before": "always-single-line", // https://stylelint.io/user-guide/rules/block-closing-brace-space-before/

    // color
    "color-hex-case": "lower", // https://stylelint.io/user-guide/rules/color-hex-case/
    "color-hex-length": "short",  // https://stylelint.io/user-guide/rules/color-hex-length/
    "color-named": "never", // https://stylelint.io/user-guide/rules/color-named/
    "color-no-invalid-hex": true,  // https://stylelint.io/user-guide/rules/color-no-invalid-hex/

    // comment
    // "comment-empty-line-before": [ "always", { // https://stylelint.io/user-guide/rules/comment-empty-line-before/
    //   except: ["first-nested"],
    //   ignore: ["stylelint-commands"],
    // } ],
    "comment-no-empty": true, // https://stylelint.io/user-guide/rules/comment-no-empty/
    "comment-whitespace-inside": "always", // https://stylelint.io/user-guide/rules/comment-whitespace-inside/

    "custom-property-empty-line-before": [ "always", { // https://stylelint.io/user-guide/rules/custom-property-empty-line-before/
      except: [
        "after-custom-property",
        "first-nested",
      ],
      ignore: [
        "after-comment",
        "inside-single-line-block",
      ],
    } ],

    // declaration
    "declaration-bang-space-after": "never",  // https://stylelint.io/user-guide/rules/declaration-bang-space-after/
    "declaration-bang-space-before": "always", // https://stylelint.io/user-guide/rules/declaration-bang-space-before/
    "declaration-colon-space-after": "always-single-line", // https://stylelint.io/user-guide/rules/declaration-colon-space-after/
//     "declaration-colon-space-before": "never", // https://stylelint.io/user-guide/rules/declaration-colon-space-before/
    "declaration-colon-newline-after": "always-multi-line", // https://stylelint.io/user-guide/rules/declaration-colon-newline-after/

    // declaration-block
    "declaration-block-no-duplicate-properties": [ true, {
      ignore: ["consecutive-duplicates-with-different-values"],
    } ],
    "declaration-block-no-redundant-longhand-properties": true, // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
    "declaration-block-no-shorthand-property-overrides": true, // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
    "declaration-block-semicolon-newline-after": "always", // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
    "declaration-block-semicolon-space-after": "always-single-line", // https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/
    "declaration-block-semicolon-space-before": "never",  // https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/
    "declaration-block-single-line-max-declarations": 1, // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
    "declaration-block-trailing-semicolon": "always", // https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
    // "declaration-empty-line-before": [ "always", { // https://stylelint.io/user-guide/rules/declaration-empty-line-before/
    //   except: [
    //     "after-declaration",
    //     "first-nested",
    //   ],
    //   ignore: [
    //     "after-comment",
    //     "inside-single-line-block",
    //   ],
    // } ],

    // declaration-property
    "declaration-property-value-blacklist": { // https://stylelint.io/user-guide/rules/declaration-property-value-blacklist/
      "/^border/": [
        "none"
      ]
    },

    "font-family-no-duplicate-names": true, // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/
    "font-family-name-quotes": "always-where-recommended", // https://stylelint.io/user-guide/rules/font-family-name-quotes/
    "font-weight-notation": "named-where-possible", // https://stylelint.io/user-guide/rules/font-weight-notation/

    // function
    "function-calc-no-unspaced-operator": true, // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
    "function-comma-newline-after": "always-multi-line", // https://stylelint.io/user-guide/rules/function-comma-newline-after/
    "function-comma-newline-before": "never-multi-line", // https://stylelint.io/user-guide/rules/function-comma-newline-before/
    "function-comma-space-after": "always", // https://stylelint.io/user-guide/rules/function-comma-space-after/
    "function-comma-space-before": "never", // https://stylelint.io/user-guide/rules/function-comma-space-before/
    "function-parentheses-space-inside": "never", // https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
    "function-parentheses-newline-inside": "always-multi-line", // https://stylelint.io/user-guide/rules/function-parentheses-newline-inside/
    "function-url-quotes": "always", // https://stylelint.io/user-guide/rules/function-url-quotes/
    "function-linear-gradient-no-nonstandard-direction": true, // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
    "function-max-empty-lines": 0, // https://stylelint.io/user-guide/rules/function-max-empty-lines/
    "function-name-case": "lower", // https://stylelint.io/user-guide/rules/function-name-case/
    "function-whitespace-after": "always", // https://stylelint.io/user-guide/rules/function-whitespace-after/

    // general
    // "indentation": 2, // https://stylelint.io/user-guide/rules/indentation/
    "keyframe-declaration-no-important": true, // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
    "length-zero-no-unit": true, // https://stylelint.io/user-guide/rules/length-zero-no-unit/
    "max-nesting-depth": 3, // https://stylelint.io/user-guide/rules/max-nesting-depth/
    "max-empty-lines": 1, // https://stylelint.io/user-guide/rules/max-empty-lines/
    "no-missing-end-of-source-newline": true, // https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/

    // media feature
    "media-feature-name-no-vendor-prefix": true, // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
    "media-feature-parentheses-space-inside": "never", // https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/
    "media-feature-colon-space-after": "always", // https://stylelint.io/user-guide/rules/media-feature-colon-space-after/
    "media-feature-colon-space-before": "never", // https://stylelint.io/user-guide/rules/media-feature-colon-space-before/
    "media-feature-name-case": "lower", // https://stylelint.io/user-guide/rules/media-feature-name-case/
    "media-feature-name-no-unknown": true, // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/
    "media-feature-range-operator-space-after": "always", // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/
    "media-feature-range-operator-space-before": "always", // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/

    "media-query-list-comma-newline-after": "always-multi-line", // https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/
    "media-query-list-comma-space-after": "always-single-line", // https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/
    "media-query-list-comma-space-before": "never", // https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/

    // "no-empty-source": true, // https://stylelint.io/user-guide/rules/no-empty-source/
    "no-eol-whitespace": [true, // https://stylelint.io/user-guide/rules/no-eol-whitespace/
      { "ignore": [ "empty-lines"] }
    ],
    "no-extra-semicolons": true, // https://stylelint.io/user-guide/rules/no-extra-semicolons/
    "no-invalid-double-slash-comments": true, // https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/

    // number
    "number-leading-zero": "always", // https://stylelint.io/user-guide/rules/number-leading-zero/
    "number-no-trailing-zeros": true, // https://stylelint.io/user-guide/rules/number-no-trailing-zeros/

//     "order/properties-alphabetical-order": true,

    // property
    "property-case": "lower", // https://stylelint.io/user-guide/rules/property-case/
    "property-no-vendor-prefix": true, // https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
    "property-no-unknown": true, // https://stylelint.io/user-guide/rules/property-no-unknown/

    // rule
    "rule-empty-line-before": [ // https://stylelint.io/user-guide/rules/rule-empty-line-before/
      "always-multi-line",
      {
        "except": [ "first-nested" ],
        "ignore": [ "after-comment" ]
      }
    ],

    // SCSS
    "scss/at-extend-no-missing-placeholder": true, // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
    "scss/at-function-pattern": "^-?[a-z]+([a-z0-9-]+[a-z0-9]+)?$", // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md
    "scss/at-import-no-partial-leading-underscore": true, // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md
    "scss/at-import-partial-extension-blacklist": ["scss"], // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md
    "scss/at-mixin-pattern": "^_?[a-z]+([a-z0-9-]+[a-z0-9]+)?$", // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md
    "scss/dollar-variable-colon-space-after": "always", // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md
    "scss/dollar-variable-colon-space-before": "never", // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md
    "scss/dollar-variable-pattern": "^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$", // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$", // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md
    "scss/selector-no-redundant-nesting-selector": true, // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md

    // selector
    "selector-class-pattern": [ // https://stylelint.io/user-guide/rules/selector-class-pattern/
      "^([\.\%]?[a-z]*[-]?[a-z0-9\-]*)(\.[a-z0-9\-]*)?(__[a-z0-9]*[-]?[a-z0-9\-]*)?(--[a-z0-9]*[-]?[a-z0-9\-]*)?(\\@[a-z0-9\-]+)?(\:[a-z]*)*$",
      {
        "message": "Selector should be written in lowercase with hyphens (selector-class-pattern)"
      }
    ],
    "selector-list-comma-newline-after": "always", // https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
    "selector-list-comma-space-before": "never", // https://stylelint.io/user-guide/rules/selector-list-comma-space-before/
    "selector-list-comma-space-after": "always-single-line", // https://stylelint.io/user-guide/rules/selector-list-comma-space-after/
    "selector-max-compound-selectors": 3, // https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
    // "selector-no-id": true, // https://stylelint.io/user-guide/rules/selector-no-id/
    "selector-no-qualifying-type": true, // https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
    "selector-no-vendor-prefix": true, // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
    "selector-pseudo-element-colon-notation": "double", // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
    "selector-pseudo-element-no-unknown": true, // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/

    "selector-attribute-brackets-space-inside": "never", // https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
    "selector-attribute-operator-space-after": "never", // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/
    "selector-attribute-operator-space-before": "never", // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/
    "selector-combinator-space-after": "always", // https://stylelint.io/user-guide/rules/selector-combinator-space-after/
    "selector-combinator-space-before": "always", // https://stylelint.io/user-guide/rules/selector-combinator-space-before/
    "selector-descendant-combinator-no-non-space": true, // https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/
    "selector-max-empty-lines": 0, // https://stylelint.io/user-guide/rules/selector-max-empty-lines/
    "selector-pseudo-class-case": "lower", // https://stylelint.io/user-guide/rules/selector-pseudo-class-case/
    "selector-pseudo-class-no-unknown": true, // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
    "selector-pseudo-class-parentheses-space-inside": "never", // https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/
    "selector-pseudo-element-case": "lower", // https://stylelint.io/user-guide/rules/selector-pseudo-element-case/
    "selector-type-case": "lower", // https://stylelint.io/user-guide/rules/selector-type-case/
    "selector-type-no-unknown": true, // https://stylelint.io/user-guide/rules/selector-type-no-unknown/

    "shorthand-property-no-redundant-values": true, // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/

    "string-quotes": "single", // https://stylelint.io/user-guide/rules/string-quotes/
    "string-no-newline": true, // https://stylelint.io/user-guide/rules/string-no-newline/

    "unit-case": "lower", // https://stylelint.io/user-guide/rules/unit-case/
    "unit-no-unknown": true, // https://stylelint.io/user-guide/rules/unit-no-unknown/

    "value-no-vendor-prefix": true, // https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
    "value-list-comma-newline-after": "always-multi-line", // https://stylelint.io/user-guide/rules/value-list-comma-newline-after/
    "value-list-comma-space-after": "always-single-line", // https://stylelint.io/user-guide/rules/value-list-comma-space-after/
    "value-list-comma-space-before": "never", // https://stylelint.io/user-guide/rules/value-list-comma-space-before/
    "value-list-max-empty-lines": 0, // https://stylelint.io/user-guide/rules/value-list-max-empty-lines/
  }
}
